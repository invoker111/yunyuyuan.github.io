import axios from 'axios';
import {parseAjaxError} from "@/utils/utils";

const siteConfig = require('@/site-config');
export const tokenKey = 'comment-token';

let owner = siteConfig.owner,
    repo = siteConfig.repo,
    repoId = '',
    // this token just can read public information
    publicHeaders = {
        Authorization: 'token ' + (['5', '66b4e73893d07b79dbcc3e36f86acc309e78b2d'].join(''))
    },
    headers = {
        Authorization: ''
    },
    http = function (data, usePublic) {
        return new Promise(resolve => {
            axios({
                url: 'https://api.github.com/graphql',
                method: 'post',
                data,
                headers: usePublic?publicHeaders:headers
            }).then(res => {
                resolve([true, res])
            }).catch(err => {
                resolve([false, err])
            })
        })
    };

export const logError = function (res, suc, err) {
    if (res[0]) {
        if (res[1].data.errors) {
            this.$message.error(`${err} ${res[1].data.errors[0].message}`)
            return false
        } else {
            this.$message.success(suc);
            return true
        }
    } else {
        this.$message.error(`${err} ${parseAjaxError(res[1])}`)
        return false
    }
}

export const getReactions = (item)=>{
    const reactions = {};
    item.forEach(i=>{
        if (i.content === 'THUMBS_UP'){
            reactions['+1'] = {
                has: i.viewerHasReacted,
                count: i.users.totalCount,
            }
        }else if (i.content === 'THUMBS_DOWN'){
            reactions['-1'] = {
                has: i.viewerHasReacted,
                count: i.users.totalCount,
            }
        }
    });
    return reactions
}

// ======================== methods ============================

export async function getRepoId() {
    let res = await http({
            query:
                `query {
  repository(name: "${repo}", owner: "${owner}") {
    id
  }
}
`
    }, true);
    if (res[0]) {
        repoId = res[1].data.data.repository.id;
    }
}

export async function getLoginInfo(token) {
    headers.Authorization = `token ${token}`;
    let res = await http({
            query:
                `query {
    viewer {
        login,
        avatarUrl,
        url
    }
}`
    }, false)
    if (!res[0]) {
        headers.Authorization = '';
    }
    return res;
}

export function removeToken() {
    headers.Authorization = '';
}

export async function getPageComment({title, count, cursor}) {
    return await http({
            query:
                `{
  search(query: "${title}+in:title repo:${owner}/${repo} is:open", type: ISSUE, ${(cursor && cursor.indexOf(',after') === 0) || !cursor ? 'first' : 'last'}: ${count}${cursor || ''}) {
    issueCount
    nodes {
      ... on Issue {
        author {
          avatarUrl
          login
          url
        }
        body
        createdAt
        number
        id
        authorAssociation
        reactionGroups {
          viewerHasReacted
          users {
            totalCount
          }
          content
        }
        comments(first: ${count}) {
          totalCount
          nodes {
            author {
              avatarUrl
              login
              url
            }
            authorAssociation
            body
            createdAt
            id
            reactionGroups {
              viewerHasReacted
              content
              users {
                totalCount
              }
            }
          }
          pageInfo {
            hasNextPage
            endCursor
            hasPreviousPage
            startCursor
          }
        }
      }
    }
  }
}`
    }, true)
}

export async function getCommentChildren({id, count, cursor}) {
    return await http({
            query:
                `query {
  node(id: "${id}") {
    ... on Issue {
        comments(${(cursor && cursor.indexOf(',after') === 0) || !cursor ? 'first' : 'last'}: ${count}${cursor || ''}) {
          totalCount
          nodes {
            author {
              avatarUrl
              login
              url
            }
            authorAssociation
            body
            createdAt
            id
            reactionGroups {
              viewerHasReacted
              content
              users {
                totalCount
              }
            }
          }
          pageInfo {
            hasNextPage
            endCursor
            hasPreviousPage
            startCursor
          }
        }
    }
  }
}
`
    }, true)
}

export async function createComment({title, body}) {
    return await http({
            query:
                `mutation {
  createIssue(input: {repositoryId: "${repoId}", title: "${title}", body: "${body}"}) {
    issue {
      id
    }
  }
}`
    }, false)
}

export async function closeOrDeleteComment(type, id) {
    return await http({
            query:
                `mutation {
  ${type}Issue(input: {issueId: "${id}"}) {
    clientMutationId
  }
}
`
    }, false)
}

export async function createReply({body, id}) {
    return await http({
            query:
                `mutation {
  addComment(input: {body: "${body}", subjectId: "${id}"}) {
    clientMutationId
  }
}
`
    }, false)
}

export async function deleteReply(id) {
    return await http({
            query:
                `mutation {
  deleteIssueComment(input: {id: "${id}"}) {
    clientMutationId
  }
}
`
    }, false)
}

export async function doReaction({content, id, has}) {
    return await http({
            query:
                `mutation {
  ${has?'remove':'add'}Reaction(input: {content: ${content}, subjectId: "${id}="}) {
    subject {
      id
    }
  }
}
`
    }, false)
}
<template>
  <div class="config" flex>
    <div class="head" flex>
      <svg-icon :name="'config'"/>
      <b>修改配置信息</b>
    </div>
    <div class="list" flex>
      <float-input v-for="k in keys" :name="k" :value="info[k]||''" :id="k" :size="1" :isArea="k==='describe'" @input="input"/>
      <label flex>
        <span :class="{active: info.backgroundImg==='img'}" @click="changeBg('img')">图片背景</span>
        <span :class="{active: info.backgroundImg==='color'}" @click="changeBg('color')">彩色背景</span>
        <span :class="{active: info.backgroundImg==='random'}" @click="changeBg('random')">随机</span>
      </label>
      <div class="friends" flex>
        <div v-for="item in info.friends" :key="item" class="item" flex>
          <float-input :name="'简介'" :value="item.summary" :id="item.github" :size="0.85" @input="friendsSummary"/>
          <float-input :name="'github名字'" :value="item.github" :id="item.github" :size="0.85" @input="friendsGithub"/>
          <float-input :name="'网站'" :value="item.site" :id="item.github" :size="0.85" @input="friendsSite"/>
          <single-button class="del-btn" :text="'删除'" @click.native="friendsDel(item)"/>
        </div>
        <loading-button :loading="false" :icon="'add'" :text="'添加'" :size="1.1" @click.native="friendsNew"/>
      </div>
    </div>
    <loading-button :loading="updating" :text="'上传'" :icon="'save'" @click.native="commitConfig"/>
  </div>
</template>

<script>
import FloatInput from "@/components/FloatInput";
import {parseAjaxError} from "@/utils/utils";
import LoadingButton from "@/components/LoadingButton";
import SingleButton from "@/components/Button";

export default {
  name: "Config",
  components: {SingleButton, LoadingButton, FloatInput},
  data() {
    return {
      updating: false,
      info: {},
      keys: ["name", "describe", "copyright", "github", "bilibili", "email"],
    }
  },
  computed: {
    config (){
      return this._config()
    },
    gitUtil (){
      return this._gitUtil()
    }
  },
  watch: {
    config: {
      immediate: true,
      deep: true,
      handler (){
        this.info = JSON.parse(JSON.stringify(this.config));
      }
    }
  },
  inject: ['_config', '_gitUtil'],
  methods: {
    input(payload) {
      this.info[payload[0]] = payload[1];
    },
    changeBg (v){
      this.info.backgroundImg = v;
    },
    friendsSummary ([id, text]){
      this.info.friends.find(v=>v.github===id).summary = text;
    },
    friendsGithub ([id, text]){
      this.info.friends.find(v => v.github === id).github = text;
    },
    friendsSite ([id, text]){
      this.info.friends.find(v=>v.github===id).site = text;
    },
    friendsDel (item){
      this.info.friends.splice(this.info.friends.indexOf(item), 1)
    },
    friendsNew (){
      this.info.friends.push({
        summary: '',
        github: '',
        site: '',
      })
    },
    async commitConfig() {
      if (this.gitUtil) {
        this.updating = true;
        // 更新config.json
        for (let k of this.keys) {
          this.config[k] = this.info[k]
        }
        this.config.backgroundImg = this.info.backgroundImg;
        this.config.friends = this.info.friends.slice();
        let res = await this.gitUtil.updateJsonFile(`config.json`, this.config);
        this.updating = false;
        if (res[0]) {
          this.$message.success('更新成功!')
        } else {
          this.$message.error(parseAjaxError(res[1]))
        }
      } else {
        this.$message.warning('请先登录!');
        this.$emit('login')
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/style/public";

.config{
  flex-direction: column;
  margin: 2rem auto 1rem auto !important;
  width: 40rem !important;
  > .head{
    padding: 0.6rem 0;
    width: 100%;
    border-radius: 0.6rem 0.6rem 0 0;
    background: linear-gradient(to bottom, #686868, #3b3b3b);
    border-bottom: 1px solid #cecece;
    justify-content: center;
    > svg{
      width: 2.2rem;
      height: 2.2rem;
    }

    > b {
      margin-left: 1rem;
      font-size: 1.1rem;
      color: white;
    }
  }

  > .list {
    width: 100%;
    flex-direction: column;
    margin-top: 1rem;

    > .float-input {
      width: 60%;
      margin: 1rem 0;
    }
    > label{
        margin: 0.5rem 0;
        width: 60%;
        > span{
          cursor: pointer;
          font-size: 0.85rem;
          background: #b9b9b9;
          border-radius: 0.2rem;
          padding: 0.3rem 0.8rem;
          margin: 0 0.5rem;
          color: black;
          transition: all .15s linear;
          border: 1px solid rgba(0, 0, 0, 0.1);
          box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);
          &:hover{
            border-color: rgba(0, 0, 0, 0.4);
          }
          &.active{
            background: #1b00ff;
            color: white;
          }
        }
      }
    >.friends{
      width: 95%;
      flex-direction: column;
      margin: 1rem 0;
      padding: 1rem 0;
      border-top: 1px solid #ff0000;
      position: relative;
      &:before{
        content: '友情链接';
        position: absolute;
        font-size: 0.95rem;
        line-height: 1rem;
        top: -0.5rem;
        left: 0.5rem;
        background: white;
      }
      >.item{
        margin: 0.8rem 0;
        ::v-deep .float-input{
          margin: 0 0.5rem;
          flex-shrink: 1;
          &:nth-child(1){
            width: 35%;
          }
          &:nth-child(2){
            width: 20%;
          }
          &:nth-child(3){
            width: 30%;
          }
        }
      }
      ::v-deep > .loading-button{
        background: #ff8100;
        svg{
          fill: white;
        }
      }
    }
  }
  ::v-deep > .loading-button{
    margin: 1rem 0;
    padding: 0.3rem 0.8rem;
    background: #54b361;
    box-shadow: 0 0 0.4rem rgba(0, 0, 0, 0.3);
    &:not(.loading):hover{
      background: #61d671;
    }
    &.loading{
      background: gray;
      color: white;
    }
  }
  @include media{
    width: 99% !important;
    >.list{
      .float-input {
        width: 95% !important;
      }
      >label{
        width: 90%;
      }
    }
  }
}
</style>
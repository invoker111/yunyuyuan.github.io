(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-53525c66"],{3398:function(t,e,n){},4194:function(t,e,n){"use strict";var a=n("1c8b"),i=n("5dfd").find,r=n("258f"),s=n("ff9c"),c="find",o=!0,u=s(c);c in[]&&Array(1)[c]((function(){o=!1})),a({target:"Array",proto:!0,forced:o||!u},{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),r(c)},b0cc:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"md-detail",attrs:{flex:""}},[n("div",{staticClass:"operate",attrs:{flex:""}},[n("div",{staticClass:"back",attrs:{flex:""},on:{click:function(e){return t.$router.push("/article")}}},[n("svg-icon",{attrs:{name:"back"}}),n("span",[t._v("返回")])],1),n("a",{attrs:{flex:""},on:{click:function(e){t.showGuide=!0}}},[n("svg-icon",{attrs:{name:"info"}}),t._v(" markdown语法指南 ")],1),n("loading-button",{attrs:{loading:t.saving.b,text:"上传",icon:"save"},nativeOn:{click:function(e){return t.save(e)}}}),n("span",{staticClass:"state"},[t._v(t._s(t.saving.state))])],1),n("div",{staticClass:"head",attrs:{flex:""}},[n("float-input",{attrs:{name:"标题",size:1.3,value:t.info.name},on:{input:t.inputTitle}}),n("float-input",{staticClass:"summary",attrs:{name:"简介",size:1,value:t.info.summary},on:{input:t.inputSummary}})],1),n("div",{staticClass:"info",attrs:{flex:""}},[n("div",{staticClass:"cover"},[n("loading-img",{attrs:{src:t.info.cover,size:[20,15]}}),n("label",{attrs:{flex:""}},[n("span",[t._v("封面链接:")]),n("input",{domProps:{value:t.info.cover},on:{focusout:t.changeCover}})])],1),n("div",{staticClass:"tags-time",attrs:{flex:""}},[n("div",{staticClass:"tags",attrs:{flex:""}},[n("span",{staticClass:"tag-icon",attrs:{flex:""}},[n("svg-icon",{attrs:{name:"tag"}})],1),t._l(t.info.tags,(function(e,a){return n("div",{key:e,class:{editing:t.tagEditIndex===a}},[n("input",{attrs:{disabled:t.tagEditIndex!==a,"data-old":e,"data-idx":a},domProps:{value:e},on:{focusout:t.editTag}}),n("div",{attrs:{flex:""}},[n("span",{attrs:{title:"删除"},on:{click:function(e){return t.clickTrash(a)}}},[n("svg-icon",{attrs:{name:"trash"}})],1),n("span",{attrs:{"data-idx":a,title:"编辑"},on:{click:t.clickEdit}},[n("svg-icon",{attrs:{name:"edit"}})],1)])])})),n("span",{staticClass:"add",attrs:{title:"添加标签",flex:""},on:{click:t.addTag}},[n("svg-icon",{attrs:{name:"add"}})],1)],2),n("div",{staticClass:"time",attrs:{flex:""}},[n("span",[n("span",[t._v("创建:")]),t._v(t._s(t._f("time")(t.info?t.info.time:0,!1)))]),n("span",[n("span",[t._v("修改:")]),t._v(t._s(t._f("time")(t.info?t.info.modifyTime:0,!1)))])])])]),n("div",{ref:"text",staticClass:"text",attrs:{flex:""}},[n("div",{staticClass:"markdown",style:{width:t.mdWidth},attrs:{flex:""}},[n("div",{ref:"textarea",staticClass:"textarea"})]),n("resizer",{attrs:{orient:"h"},on:{start:t.startResize,resize:t.doResize}}),n("div",{staticClass:"html",attrs:{flex:""}},[n("span",{ref:"html",staticClass:"--markdown",domProps:{innerHTML:t._s(t.htmlText)}})])],1),n("markdown-help",{directives:[{name:"show",rawName:"v-show",value:t.showGuide,expression:"showGuide"}],nativeOn:{click:function(e){if(e.target!==e.currentTarget)return null;t.showGuide=!1}}})],1)},i=[],r=(n("b4fb"),n("4194"),n("fe59"),n("ea69"),n("053b"),n("e18c"),n("1c2e"),n("08ba"),n("af86"),n("52ef")),s=(n("6a61"),n("cf7f")),c=n("82b2"),o=n("fa7d"),u=n("44b8"),d=n("8e8da"),f=n("3347"),l=n.n(f),m=(n("98b4"),n("3096"),n("f79f"),n("e17d"),n("c588"),n("547e"),n("58a6"),n("3259")),g=n("b33a"),h=n("7081"),v=n("cf34"),p=n("365e"),x={name:"ArticleDetail",components:{LoadingImg:h["a"],MarkdownHelp:g["a"],Resizer:m["a"],LoadingButton:d["a"],FloatInput:u["a"]},props:{md:{type:Array,default:function(){return[]}}},data:function(){return{showGuide:!1,tagEditIndex:-1,mdText:"",codeMirror:null,mdWidth:"40%",resizeStart:{pos:!1,size:!1},saving:{b:!1,state:""},info:{},newInfo:{name:"编辑标题",file:"",cover:"",time:"",modifyTime:"",summary:"编辑简介",tags:[]}}},computed:{id:function(){return this.$route.params.id},htmlText:function(){var t=this,e=Object(v["a"])(this.mdText);return this.$nextTick((function(){t.$refs.html.querySelectorAll("pre>code").forEach((function(t){Object(p["a"])(t)})),t.$refs.html.querySelectorAll("img:not([alt=sticker])").forEach((function(t){t.setAttribute("data-viewer","")}))})),e},gitUtil:function(){return this._gitUtil()}},inject:["_gitUtil"],created:function(){Object(o["b"])()},mounted:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.init();case 2:case"end":return e.stop()}}),e)})))()},watch:{"$props.md":function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.init();case 2:case"end":return e.stop()}}),e)})))()}},methods:{init:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.info=JSON.parse(JSON.stringify("new"===t.id?t.newInfo:t.md.find((function(e){return e.file===t.id}))||t.newInfo)),t.mdText="",document.title="后台-文章-"+t.id,"new"===t.$route.params.id){e.next=6;break}return e.next=6,t.getMdText();case 6:t.codeMirror||(t.codeMirror=new l.a(t.$refs.textarea,{indentUnit:2,tabSize:2,theme:"dracula",lineNumbers:!0,line:!0,mode:"markdown",matchTags:{bothTags:!0},matchBrackets:!0}),t.codeMirror.on("change",(function(){t.mdText=t.codeMirror.getValue()}))),t.codeMirror.setValue(t.mdText);case 8:case"end":return e.stop()}}),e)})))()},getMdText:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["a"])("".concat(c["b"],"/md/").concat(t.id,"/index.md"));case 2:n=e.sent,n[0]?t.mdText=n[1]:t.$message.error(Object(o["d"])(n[1]));case 4:case"end":return e.stop()}}),e)})))()},inputTitle:function(t){this.info.name=t[1]},inputSummary:function(t){this.info.summary=t[1]},changeCover:function(t){this.info.cover=t.target.value},clickTrash:function(t){this.info.tags.splice(t,1)},clickEdit:function(t){var e=t.currentTarget;this.tagEditIndex=parseInt(e.getAttribute("data-idx")),this.$nextTick((function(){e.parentElement.previousElementSibling.focus()}))},editTag:function(t){var e=this.info,n=t.target;this.tagEditIndex=-1;var a,i=Object(r["a"])(e.tags);try{for(i.s();!(a=i.n()).done;){var s=a.value;if(s!==n.getAttribute("data-old")&&s===n.value)return this.$message.warning("标签不能重复!")}}catch(c){i.e(c)}finally{i.f()}e.tags.splice(parseInt(n.getAttribute("data-idx")),1,n.value)},addTag:function(){this.info.tags.push("输入标签"+this.info.tags.length)},startResize:function(t){this.resizeStart={pos:t,size:this.$refs.text.querySelector(".markdown").scrollWidth}},doResize:function(t){var e=this.$refs.text.scrollWidth,n=this.resizeStart.size+(t-this.resizeStart.pos);n>e/5&&n<4*e/5&&(this.mdWidth="".concat(n,"px"))},save:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n,a,i,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.saving.b){e.next=2;break}return e.abrupt("return");case 2:if(!t.gitUtil){e.next=40;break}if(n=t.info,n.name&&n.summary&&n.tags.length&&n.cover){e.next=6;break}return e.abrupt("return",t.$message.warning("标题,简介,标签和封面均不能为空!"));case 6:t.saving={b:!0,state:"保存中..."},a=(new Date).getTime(),n.modifyTime=a,"new"!==t.id?a=t.id:(n.file=a.toString(),n.time=a,t.md.push(JSON.parse(JSON.stringify(n)))),e.t0=regeneratorRuntime.keys(t.md);case 11:if((e.t1=e.t0()).done){e.next=18;break}if(i=e.t1.value,t.md[i].file!==t.id){e.next=16;break}return t.md[i]=n,e.abrupt("break",18);case 16:e.next=11;break;case 18:return t.saving.state="更新:md.json",Object(o["e"])(t.md),e.next=22,t.gitUtil.updateJsonFile("md.json",t.md);case 22:if(r=e.sent,!r[0]){e.next=36;break}return e.next=26,t.gitUtil.updateMd({folder:a,md:t.mdText,html:t.htmlText},t.saving);case 26:if(s=e.sent,!s[0]){e.next=33;break}return t.$message.success("上传成功!"),e.next=31,t.$router.push("/article");case 31:e.next=34;break;case 33:t.$message.error(Object(o["d"])(s[1]));case 34:e.next=37;break;case 36:t.$message.error(Object(o["d"])(r[1]));case 37:t.saving={b:!1,state:""},e.next=42;break;case 40:t.$message.warning("请先登录!"),t.$emit("login");case 42:case"end":return e.stop()}}),e)})))()}}},b=x,w=(n("c1ec"),n("9ca4")),k=Object(w["a"])(b,a,i,!1,null,"76645c74",null);e["default"]=k.exports},c1ec:function(t,e,n){"use strict";var a=n("3398"),i=n.n(a);i.a}}]);
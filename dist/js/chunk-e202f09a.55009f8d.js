(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e202f09a"],{"3c8c":function(t,e,a){"use strict";var n=a("9594"),i=a.n(n);i.a},4194:function(t,e,a){"use strict";var n=a("1c8b"),i=a("5dfd").find,r=a("258f"),s=a("ff9c"),c="find",o=!0,u=s(c);c in[]&&Array(1)[c]((function(){o=!1})),n({target:"Array",proto:!0,forced:o||!u},{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),r(c)},9594:function(t,e,a){},beb6:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"md-detail",attrs:{flex:""}},[a("div",{staticClass:"operate",attrs:{flex:""}},[a("div",{staticClass:"back",attrs:{flex:""},on:{click:function(e){return t.$router.push({name:"backend.md"})}}},[a("svg-icon",{attrs:{name:"back"}}),a("span",[t._v("返回")])],1),a("a",{attrs:{flex:""},on:{click:function(e){t.showGuide=!0}}},[a("svg-icon",{attrs:{name:"info"}}),t._v(" markdown语法指南 ")],1),a("loading-button",{attrs:{loading:t.saving.b,text:"上传",icon:"save"},nativeOn:{click:function(e){return t.save(e)}}}),a("span",{staticClass:"state"},[t._v(t._s(t.saving.state))])],1),a("div",{staticClass:"head",attrs:{flex:""}},[a("float-input",{attrs:{name:"标题",size:1.3,value:t.info.name},on:{input:t.inputTitle}}),a("float-input",{staticClass:"summary",attrs:{name:"简介",size:1,value:t.info.summary},on:{input:t.inputSummary}})],1),a("div",{staticClass:"info",attrs:{flex:""}},[a("div",{staticClass:"cover"},[a("loading-img",{attrs:{src:t.info.cover,size:[20,15]}}),a("label",{attrs:{flex:""}},[a("span",[t._v("封面链接:")]),a("input",{domProps:{value:t.info.cover},on:{focusout:t.changeCover}})])],1),a("div",{staticClass:"tags-time",attrs:{flex:""}},[a("div",{staticClass:"tags",attrs:{flex:""}},[a("span",{staticClass:"tag-icon",attrs:{flex:""}},[a("svg-icon",{attrs:{name:"tag"}})],1),t._l(t.info.tags,(function(e,n){return a("div",{key:e,class:{editing:t.tagEditIndex===n}},[a("input",{attrs:{disabled:t.tagEditIndex!==n,"data-old":e,"data-idx":n},domProps:{value:e},on:{focusout:t.editTag}}),a("div",{attrs:{flex:""}},[a("span",{attrs:{title:"删除"},on:{click:function(e){return t.clickTrash(n)}}},[a("svg-icon",{attrs:{name:"trash"}})],1),a("span",{attrs:{"data-idx":n,title:"编辑"},on:{click:t.clickEdit}},[a("svg-icon",{attrs:{name:"edit"}})],1)])])})),a("span",{staticClass:"add",attrs:{title:"添加标签",flex:""},on:{click:t.addTag}},[a("svg-icon",{attrs:{name:"add"}})],1)],2),a("div",{staticClass:"time",attrs:{flex:""}},[a("span",[a("span",[t._v("创建:")]),t._v(t._s(t._f("time")(t.info?t.info.time:0,!1)))]),a("span",[a("span",[t._v("修改:")]),t._v(t._s(t._f("time")(t.info?t.info.modifyTime:0,!1)))])])])]),a("div",{ref:"text",staticClass:"text",attrs:{flex:""}},[a("div",{staticClass:"markdown",style:{width:t.mdWidth},attrs:{flex:""}},[a("div",{ref:"textarea",staticClass:"textarea"})]),a("resizer",{attrs:{orient:"h"},on:{start:t.startResize,resize:t.doResize}}),a("div",{staticClass:"html",attrs:{flex:""}},[a("span",{staticClass:"--markdown",domProps:{innerHTML:t._s(t.htmlText)}})])],1),a("markdown-help",{directives:[{name:"show",rawName:"v-show",value:t.showGuide,expression:"showGuide"}],nativeOn:{click:function(e){if(e.target!==e.currentTarget)return null;t.showGuide=!1}}})],1)},i=[],r=(a("b4fb"),a("4194"),a("ea69"),a("053b"),a("e18c"),a("1c2e"),a("af86"),a("52ef")),s=(a("6a61"),a("cf7f")),c=a("e793"),o=a("56d7"),u=a("025e"),d=a("9f3a"),f=a("44b8"),l=a("8e8da"),m=a("9c46"),g=a.n(m),v=(a("65c0"),a("3fca"),a("c588"),a("547e"),a("58a6"),a("3259")),p=a("b33a"),h=a("7081"),x={name:"MdDetail",components:{LoadingImg:h["a"],MarkdownHelp:p["a"],Resizer:v["a"],LoadingButton:l["a"],FloatInput:f["a"]},data:function(){return{showGuide:!1,tagEditIndex:-1,mdText:"",codeMirror:null,mdWidth:"40%",resizeStart:{pos:!1,size:!1},saving:{b:!1,state:""},info:{},newInfo:{name:"编辑标题",file:"",cover:"",time:"",modifyTime:"",summary:"编辑简介",tags:[]}}},computed:Object(c["a"])(Object(c["a"])({},Object(d["b"])(["gitUtil","md"])),{},{id:function(){return this.$route.params.id},htmlText:function(){return Object(u["d"])(this.mdText)}}),mounted:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.init();case 2:case"end":return e.stop()}}),e)})))()},watch:{$route:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("backend.md.detail"!==t.$route.name){e.next=3;break}return e.next=3,t.init();case 3:case"end":return e.stop()}}),e)})))()}},methods:{init:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.info=JSON.parse(JSON.stringify("new"===t.id?t.newInfo:t.md.find((function(e){return e.file===t.id})))),t.mdText="",document.title="后台-文章-"+t.id,"new"===t.$route.params.id){e.next=6;break}return e.next=6,t.getMdText();case 6:t.codeMirror=new g.a(t.$refs.textarea,{indentUnit:2,tabSize:2,theme:"dracula",lineNumbers:!0,line:!0,mode:"markdown"}),t.codeMirror.on("change",(function(){t.mdText=t.codeMirror.getValue()})),t.codeMirror.setValue(t.mdText);case 9:case"end":return e.stop()}}),e)})))()},getMdText:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["b"])("".concat(o["originPrefix"],"/md/").concat(t.id,"/index.md"));case 2:a=e.sent,a[0]?t.mdText=a[1]:t.$message.error(Object(u["c"])(a[1]));case 4:case"end":return e.stop()}}),e)})))()},inputTitle:function(t){this.info.name=t[1]},inputSummary:function(t){this.info.summary=t[1]},changeCover:function(t){this.info.cover=t.target.value},clickTrash:function(t){this.info.tags.splice(t,1)},clickEdit:function(t){var e=t.currentTarget;this.tagEditIndex=parseInt(e.getAttribute("data-idx")),this.$nextTick((function(){e.parentElement.previousElementSibling.focus()}))},editTag:function(t){var e=this.info,a=t.target;this.tagEditIndex=-1;var n,i=Object(r["a"])(e.tags);try{for(i.s();!(n=i.n()).done;){var s=n.value;if(s!==a.getAttribute("data-old")&&s===a.value)return this.$message.warning("标签不能重复!")}}catch(c){i.e(c)}finally{i.f()}e.tags.splice(parseInt(a.getAttribute("data-idx")),1,a.value)},addTag:function(){this.info.tags.push("输入标签"+this.info.tags.length)},startResize:function(t){this.resizeStart={pos:t,size:this.$refs.text.querySelector(".markdown").scrollWidth}},doResize:function(t){var e=this.$refs.text.scrollWidth,a=this.resizeStart.size+(t-this.resizeStart.pos);a>e/5&&a<4*e/5&&(this.mdWidth="".concat(a,"px"))},save:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,n,i,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.saving.b){e.next=2;break}return e.abrupt("return");case 2:if(!t.gitUtil){e.next=40;break}if(a=t.info,a.name&&a.summary&&a.tags.length&&a.cover){e.next=6;break}return e.abrupt("return",t.$message.warning("标题,简介,标签和封面均不能为空!"));case 6:t.saving={b:!0,state:"保存中..."},n=(new Date).getTime(),a.modifyTime=n,"new"!==t.id?n=t.id:(a.file=n.toString(),a.time=n,t.md.push(JSON.parse(JSON.stringify(a)))),e.t0=regeneratorRuntime.keys(t.md);case 11:if((e.t1=e.t0()).done){e.next=18;break}if(i=e.t1.value,t.md[i].file!==t.id){e.next=16;break}return t.md[i]=a,e.abrupt("break",18);case 16:e.next=11;break;case 18:return t.saving.state="更新:md.json",Object(u["e"])(t.md),e.next=22,t.gitUtil.updateJsonFile("md.json",t.md);case 22:if(r=e.sent,!r[0]){e.next=36;break}return e.next=26,t.gitUtil.updateMd({folder:n,md:t.mdText,html:t.htmlText},t.saving);case 26:if(s=e.sent,!s[0]){e.next=33;break}return t.$message.success("上传成功!"),e.next=31,t.$router.push({name:"backend.md"});case 31:e.next=34;break;case 33:t.$message.error(Object(u["c"])(s[1]));case 34:e.next=37;break;case 36:t.$message.error(Object(u["c"])(r[1]));case 37:t.saving={b:!1,state:""},e.next=42;break;case 40:t.$message.warning("请先登录!"),t.$emit("login");case 42:case"end":return e.stop()}}),e)})))()}}},b=x,k=(a("3c8c"),a("9ca4")),w=Object(k["a"])(b,n,i,!1,null,"4c25aa70",null);e["default"]=w.exports}}]);
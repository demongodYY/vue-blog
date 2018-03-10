webpackJsonp([1],{100:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app",beforeCreate:function(){var t=this;this.$kinvey.User.getActiveUser()&&this.$store.state.activeUser||(console.log("no login"),this.$kinvey.User.login({username:"guest",password:"guest"}).then(function(e){console.log("login!"),t.$store.commit("getActiveUser",e),window.location.reload()}))}}},101:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(67),s=n.n(i),a=n(66),o=(n.n(a),n(161));n.n(o);e.default={data:function(){return{title:"",ctx:{},quill:{},type:"",ctxId:""}},methods:{},mounted:function(){var t=this,e=this.$kinvey.DataStore.collection("articles",this.$kinvey.DataStoreType.Network);this.ctxId=this.$route.query.id,this.quill=new s.a("#editor",{readOnly:!0,theme:"bubble"}),e.findById(this.ctxId).subscribe(function(e){e?(console.log(e),t.title=e.title,t.ctx=e.content,t.type=e.type,t.quill.setContents(t.ctx)):console.log("can not find article")},function(t){console.log(t)})}}},102:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(67),s=n.n(i),a=n(66),o=(n.n(a),n(162));n.n(o);e.default={data:function(){return{title:"",ctx:{},quill:{},types:[{value:"情感",label:"情感"},{value:"生活",label:"生活"},{value:"运动",label:"运动"}],type:""}},methods:{update:function(){this.ctx=this.quill.getContents()},handleCommitCtx:function(){var t=this,e=this.$kinvey.DataStore.collection("articles"),n={title:this.title,type:this.type,content:this.ctx};e.save(n).then(function(e){t.$router.push({path:"article",query:{id:e._id}})}).catch(function(t){console.log(t)})}},mounted:function(){var t=[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["clean"],["link","image"]];this.quill=new s.a("#editor",{modules:{toolbar:t},theme:"snow"}),this.quill.on("text-change",this.update)}}},103:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(174),s=n.n(i);e.default={name:"header",components:{avatar:s.a},methods:{handleLogout:function(){var t=this;this.$kinvey.User.logout().then(function(){t.$store.commit("getActiveUser",null),t.$router.replace("/")})}},data:function(){return{username:"书香墨剑"}},mounted:function(){}}},104:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Login",data:function(){return{signUp:{username:"",password:"",email:""},signIn:{username:"",password:""},dialogVisible:!1}},methods:{alertError:function(t){switch(t){case 409:this.$alert("该用户已经存在","错误"+t);break;case 401:this.$alert("用户名或密码出错啦!","错误"+t);break;default:this.$alert("未知错误","错误"+t)}},handleSignIn:function(){var t=this;this.$kinvey.User.login({username:this.signIn.username,password:this.signIn.password}).then(function(e){t.$store.commit("getActiveUser",e),t.$router.replace("/editor")}).catch(function(e){console.log(e),t.alertError(e.code)})},handleSignUp:function(){var t=this;(new this.$kinvey.User).signup({username:this.signUp.username,password:this.signUp.password,email:this.signUp.email,first_name:"public"}).then(function(e){t.$store.commit("getActiveUser",e),t.dialogVisible=!1,t.$alert("赶快登录写下你的文章吧","恭喜你,注册成功!",{callback:function(){t.$router.replace("/post")}})}).catch(function(e){console.log(e),t.alertError(e.code)})}},mounted:function(){var t=this.$kinvey.User.getActiveUser();null!==t&&(this.$store.commit("getActiveUser",t),this.$router.replace("/post"))}}},105:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(106),s=n.n(i);e.default={name:"Post",data:function(){return{userId:"",userList:[],subjectList:[],postList:[],subject:"all"}},methods:{listArticle:function(){var t=this;this.$kinvey.DataStore.collection("articles").find().subscribe(function(e){var n=[],i=!0,a=!1,o=void 0;try{for(var l,r=s()(e);!(i=(l=r.next()).done);i=!0){var c=l.value;c.type=""===c.type?c.type="未分类":c.type,-1===n.indexOf(c.type)&&n.push(c.type)}}catch(t){a=!0,o=t}finally{try{!i&&r.return&&r.return()}finally{if(a)throw o}}t.subjectList=n,t.postList=e,console.log(e)},function(t){console.log(t)})},handleCurrentChange:function(t){this.$router.push({path:"article",query:{id:t._id}})},handleSubjectChange:function(t){this.subject=t}},mounted:function(){this.listArticle()}}},161:function(t,e){},162:function(t,e){},163:function(t,e){},164:function(t,e){},165:function(t,e){},166:function(t,e){},167:function(t,e){},168:function(t,e){},175:function(t,e,n){function i(t){n(165)}var s=n(14)(n(101),n(181),i,null,null);t.exports=s.exports},176:function(t,e,n){function i(t){n(163)}var s=n(14)(n(102),n(179),i,null,null);t.exports=s.exports},177:function(t,e,n){function i(t){n(166)}var s=n(14)(n(104),n(182),i,"data-v-737ebe2c",null);t.exports=s.exports},178:function(t,e,n){function i(t){n(168)}var s=n(14)(n(105),n(184),i,"data-v-fdd6e2a2",null);t.exports=s.exports},179:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("blog-header"),t._v(" "),n("el-input",{staticClass:"title-input",attrs:{placeholder:"请输入标题"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}},[n("el-select",{attrs:{slot:"prepend",filterable:"","allow-create":"",placeholder:"分类"},slot:"prepend",model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},t._l(t.types,function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),t._v(" "),n("el-button",{attrs:{slot:"append",size:"large",icon:"upload"},on:{click:t.handleCommitCtx},slot:"append"})],1),t._v(" "),n("div",{attrs:{id:"editor"}})],1)},staticRenderFns:[]}},180:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("el-row",{staticClass:"continer",attrs:{type:"flex",align:"middle",gutter:70}},[n("el-col",{attrs:{xs:7,sm:5,md:4,lg:2}},[n("avatar",{staticClass:"imgAvatar",attrs:{username:t.username}})],1),t._v(" "),n("el-col",[n("h2",[t._v(t._s(t.username)+"'s Blog")])])],1)],1)},staticRenderFns:[]}},181:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",{staticClass:"title"},[t._v("\n                "+t._s(t.title)+"\n            ")])]),t._v(" "),n("div",{staticClass:"text item"},[n("div",{attrs:{id:"editor"}})])])],1)},staticRenderFns:[]}},182:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-row",{staticClass:"content"},[n("el-col",{attrs:{xs:24,sm:{span:6,offset:9}}},[n("span",{staticClass:"title"},[t._v("\n            欢迎登陆\n        ")]),t._v(" "),n("el-row",[n("el-input",{attrs:{placeholder:"用户名",type:"text"},model:{value:t.signIn.username,callback:function(e){t.$set(t.signIn,"username",e)},expression:"signIn.username"}}),t._v(" "),n("el-input",{attrs:{placeholder:"密码",type:"password"},model:{value:t.signIn.password,callback:function(e){t.$set(t.signIn,"password",e)},expression:"signIn.password"}}),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:t.handleSignIn}},[t._v("登陆")]),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogVisible=!0}}},[t._v("注册")]),t._v(" "),n("el-dialog",{attrs:{title:"注册",visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[n("el-form",{attrs:{model:t.signUp}},[n("el-form-item",{attrs:{label:"用户名"}},[n("el-input",{attrs:{type:"text"},model:{value:t.signUp.username,callback:function(e){t.$set(t.signUp,"username",e)},expression:"signUp.username"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"邮箱"}},[n("el-input",{attrs:{type:"text"},model:{value:t.signUp.email,callback:function(e){t.$set(t.signUp,"email",e)},expression:"signUp.email"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"密码"}},[n("el-input",{attrs:{type:"password"},model:{value:t.signUp.password,callback:function(e){t.$set(t.signUp,"password",e)},expression:"signUp.password"}})],1)],1),t._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:t.handleSignUp}},[t._v("确 定")])],1)],1)],1)],1)],1)},staticRenderFns:[]}},183:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]}},184:function(t,e){t.exports={render:function(){var t=this,e=this,n=e.$createElement,i=e._self._c||n;return i("el-row",{staticClass:"continer"},[i("blog-header"),e._v(" "),i("el-col",{staticClass:"menu-vertical",attrs:{xs:7,sm:4,md:4,lg:3}},[i("el-menu",{attrs:{"default-active":"-1"}},[i("el-menu-item",{attrs:{index:"-1"},on:{click:function(t){e.handleSubjectChange("all")}}},[e._v("全部")]),e._v(" "),e._l(e.subjectList,function(t,n){return i("el-menu-item",{key:n,attrs:{index:""+n},on:{click:function(n){e.handleSubjectChange(t)}}},[e._v(e._s(t))])})],2)],1),e._v(" "),i("el-col",{staticClass:"content",attrs:{xs:17,sm:20,md:20,lg:21}},[0===e.postList.length?i("h2",[e._v("哎啊,还没写文章呢!")]):i("el-tabs",[i("el-table",{staticStyle:{width:"100%"},attrs:{data:e.postList.filter(function(n){return"all"===t.subject||n.type===e.subject}),stripe:"","show-header":!1,"row-key":e.postList.id},on:{"current-change":e.handleCurrentChange}},[i("el-table-column",{scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",{staticClass:"listTime"},[e._v(e._s(t.row.time))]),e._v(" "),i("span",{staticClass:"listTitle"},[e._v(e._s(t.row.title))])]}}])})],1)],1)],1)],1)},staticRenderFns:[]}},66:function(t,e){},69:function(t,e,n){"use strict";var i=n(2),s=n(185),a=n(177),o=n.n(a),l=n(178),r=n.n(l),c=n(176),u=n.n(c),d=n(175),p=n.n(d);i.default.use(s.a),e.a=new s.a({routes:[{path:"/login",name:"Login",component:o.a},{path:"/",name:"Post",component:r.a},{path:"/editor",name:"Editor",component:u.a},{path:"/article",name:"Article",component:p.a}]})},70:function(t,e,n){"use strict";var i=n(2),s=n(45);i.default.use(s.a),e.a=new s.a.Store({state:{activeUser:null},mutations:{getActiveUser:function(t,e){t.activeUser=e}}})},72:function(t,e){},74:function(t,e,n){function i(t){n(167)}var s=n(14)(n(100),n(183),i,null,null);t.exports=s.exports},75:function(t,e,n){function i(t){n(164)}var s=n(14)(n(103),n(180),i,"data-v-3b05cf48",null);t.exports=s.exports},99:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(2),s=n(45),a=n(74),o=n.n(a),l=n(69),r=n(71),c=n.n(r),u=n(72),d=(n.n(u),n(73)),p=(n.n(d),n(70)),f=n(75),v=n.n(f);d.Kinvey.init({appKey:"kid_BJVrF0RKW",appSecret:"4cac002c973f44278b1c42787f3c8893"}),i.default.prototype.$kinvey=d.Kinvey,i.default.config.productionTip=!1,i.default.use(s.a),i.default.use(c.a),i.default.component("BlogHeader",v.a),new i.default({el:"#app",store:p.a,router:l.a,template:"<App/>",components:{App:o.a}})}},[99]);
//# sourceMappingURL=app.8bc3153a284ebdb8a7a9.js.map
(function(t){function e(e){for(var s,r,n=e[0],l=e[1],c=e[2],u=0,m=[];u<n.length;u++)r=n[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&m.push(o[r][0]),o[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);d&&d(e);while(m.length)m.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,n=1;n<a.length;n++){var l=a[n];0!==o[l]&&(s=!1)}s&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},o={app:0},i=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=e,n=n.slice();for(var c=0;c<n.length;c++)e(n[c]);var d=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var s=a("85ec"),o=a.n(s);o.a},"37d0":function(t,e,a){"use strict";var s=a("bca8"),o=a.n(s);o.a},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},i=[],r={name:"App"},n=r,l=(a("034f"),a("2877")),c=Object(l["a"])(n,o,i,!1,null,null,null),d=c.exports,u=a("8c4f"),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"boards"},[a("header",[a("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-primary"},[t._m(0),t._v(" "),a("div",[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:t.logout}},[t._v("\n          Logout\n        ")])])])]),t._v(" "),a("div",{staticClass:"centered"},[a("form",{staticClass:"group",on:{submit:function(e){return e.preventDefault(),t.addBoard(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newBoard.title,expression:"newBoard.title"}],attrs:{type:"text",placeholder:"Title",id:"title",required:""},domProps:{value:t.newBoard.title},on:{input:function(e){e.target.composing||t.$set(t.newBoard,"title",e.target.value)}}}),t._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Create Board")]),t._v(" "),a("div",{staticClass:"bar"})])]),t._v(" "),a("div",{staticClass:"row d-flex board-btn"},[a("div",{staticClass:"col"},[a("div",{staticClass:"row",attrs:{id:"b-btns"}},t._l(t.boards,(function(e){return a("div",{key:e._id,staticClass:"col-3"},[a("button",{staticClass:"btn btn-primary",attrs:{id:"board-card"}},[a("router-link",{attrs:{to:{name:"board",params:{boardId:e._id}},id:"router"}},[t._v("\n              "+t._s(e.title)+"\n            ")]),t._v(" "),a("i",{staticClass:"fas fa-trash",attrs:{id:"trash-icon"},on:{click:function(a){t.deleteBoard(e._id)}}})],1)])})))])])])},p=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex",attrs:{id:"logo-title-boards"}},[a("i",{staticClass:"fas fa-globe fa-2x"}),t._v(" "),a("h2",[t._v("PLAN-IT")])])}],h=a("3d20"),v=a.n(h),g={name:"boards",mounted(){this.$store.dispatch("getBoards")},data(){return{newBoard:{title:"",description:""}}},computed:{boards(){return this.$store.state.boards}},methods:{addBoard(){this.$store.dispatch("addBoard",this.newBoard),this.newBoard={title:"",description:""}},deleteBoard(t){v.a.fire({title:"Delete this board?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(e=>{e.value&&(this.$store.dispatch("deleteBoard",t),v.a.fire("Deleted!","Your file has been deleted.","success"))})},logout(){this.$store.dispatch("logout")}}},b=g,f=(a("af3c"),Object(l["a"])(b,m,p,!1,null,"4a0b4912",null)),w=f.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"board"},[a("header",[a("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-primary"},[a("div",{attrs:{id:"icon-title-group"},on:{click:t.goToHomePage}},[a("i",{staticClass:"fas fa-globe fa-2x"}),t._v(" "),a("h2",{staticClass:"ml-3"},[t._v(t._s(t.board.title))])]),t._v(" "),a("div",{staticClass:"m-4"},[a("form",{on:{submit:t.createList}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newList.title,expression:"newList.title"}],attrs:{type:"text",id:"title",required:""},domProps:{value:t.newList.title},on:{input:function(e){e.target.composing||t.$set(t.newList,"title",e.target.value)}}}),t._v(" "),a("button",{staticClass:"btn btn-secondary",attrs:{type:"submit"}},[t._v("Create List")])])])])]),t._v(" "),a("div",{style:{backgroundImage:"url("+t.image+")"},attrs:{id:"body"}},[a("div",{attrs:{id:"background-img"}},[a("div",{staticClass:"btn-group",attrs:{role:"group","aria-label":"Button group with nested dropdown"}},[a("button",{staticClass:"btn btn-dropdown",attrs:{type:"button"}},[t._v("Background")]),t._v(" "),a("div",{staticClass:"btn-group",attrs:{role:"group"}},[a("button",{staticClass:"btn btn-primary dropdown-toggle",attrs:{id:"btnGroupDrop1",type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}}),t._v(" "),a("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"btnGroupDrop1"}},[a("img",{attrs:{src:"https://wallpaperaccess.com/full/267871.jpg",alt:"bridge"},on:{click:function(e){e.preventDefault(),t.setBackground("https://wallpaperaccess.com/full/267871.jpg")}}}),t._v(" "),a("img",{attrs:{src:"https://cdn.hipwallpaper.com/i/81/49/YJ4T3p.jpg",alt:"scenic"},on:{click:function(e){e.preventDefault(),t.setBackground("https://cdn.hipwallpaper.com/i/81/49/YJ4T3p.jpg")}}}),t._v(" "),a("img",{attrs:{src:"https://www.itl.cat/pngfile/big/155-1558020_empty-office-hd-wallpaper-men-window.jpg",alt:"office"},on:{click:function(e){e.preventDefault(),t.setBackground("https://www.itl.cat/pngfile/big/155-1558020_empty-office-hd-wallpaper-men-window.jpg")}}}),t._v(" "),a("img",{attrs:{src:"http://getwallpapers.com/wallpaper/full/4/7/5/141079.jpg",alt:"keyboard"},on:{click:function(e){e.preventDefault(),t.setBackground("http://getwallpapers.com/wallpaper/full/4/7/5/141079.jpg")}}}),t._v(" "),a("img",{attrs:{src:"https://wallpapercave.com/wp/rhIs8kJ.jpg",alt:"tiger"},on:{click:function(e){e.preventDefault(),t.setBackground("https://wallpapercave.com/wp/rhIs8kJ.jpg")}}}),t._v(" "),a("img",{attrs:{src:"http://3.bp.blogspot.com/-wy5kJWK2NWY/UQW6tyrRWyI/AAAAAAAALzI/0aDOT3fpG9c/s1600/black-and-white-wallpaper-with-shark-hd-animal-background-photo.jpg",alt:"shark"},on:{click:function(e){e.preventDefault(),t.setBackground("http://3.bp.blogspot.com/-wy5kJWK2NWY/UQW6tyrRWyI/AAAAAAAALzI/0aDOT3fpG9c/s1600/black-and-white-wallpaper-with-shark-hd-animal-background-photo.jpg")}}})])])])]),t._v(" "),a("div",{staticClass:"d-flex",attrs:{id:"list-col"}},t._l(t.lists,(function(t){return a("list",{key:t.id,attrs:{listData:t}})})))])])},k=[],C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"list"},[a("div",{staticClass:"card border-primary mb-3",staticStyle:{"max-width":"20rem"}},[a("div",{staticClass:"card-header"},[t._v("\n      "+t._s(t.listData.title)+"\n      "),a("i",{staticClass:"fas fa-times",on:{click:function(e){t.deleteList(t.listData.id)}}})]),t._v(" "),a("body",{staticClass:"card-body"},[a("form",{staticClass:"group",on:{submit:function(e){return e.preventDefault(),t.createTask(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newTask.title,expression:"newTask.title"}],attrs:{type:"text",required:""},domProps:{value:t.newTask.title},on:{input:function(e){e.target.composing||t.$set(t.newTask,"title",e.target.value)}}}),t._v(" "),a("span",{staticClass:"highlight"}),t._v(" "),a("span",{staticClass:"bar"}),t._v(" "),a("label",[t._v("Enter task name")])]),t._v(" "),t._l(t.tasks,(function(t){return a("task",{key:t.id,attrs:{taskData:t}})}))],2)])])},y=[],$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"task"},[a("div",{staticClass:"task-window d-flex",attrs:{"data-target":"#modal"+t.taskData._id,"data-toggle":"modal"}},[a("p",[t._v(t._s(t.taskData.title))]),t._v(" "),a("div",{staticClass:"btn-group",attrs:{role:"group"}},[a("button",{staticClass:"btn btn-primary dropdown-toggle",attrs:{id:"btnGroupDrop1",type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}}),t._v(" "),a("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"btnGroupDrop1"}},t._l(t.listLinks,(function(e){return a("div",{key:e._id,attrs:{listData:e}},[a("p",{staticClass:"dropdown-item",on:{click:function(a){a.stopPropagation(),t.moveToList(e._id)}}},[t._v("\n            "+t._s(e.title)+"\n          ")])])})))])]),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"modal"+t.taskData._id,tabindex:"-1",role:"dialog","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header d-flex flex-column"},[t._m(0),t._v(" "),a("h5",{staticClass:"modal-title",attrs:{id:"taskTitle"}},[t._v(t._s(t.taskData.title))])]),t._v(" "),a("div",{staticClass:"modal-body"},[a("form",{staticClass:"group",on:{submit:function(e){return e.preventDefault(),t.createComment(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newComment.content,expression:"newComment.content"}],attrs:{id:"comment-form",type:"text",name:"content"},domProps:{value:t.newComment.content},on:{input:function(e){e.target.composing||t.$set(t.newComment,"content",e.target.value)}}}),t._v(" "),a("span",{staticClass:"highlight"}),t._v(" "),a("span",{staticClass:"bar"}),t._v(" "),a("label",[t._v("Enter comment")])]),t._v(" "),t._l(t.comments,(function(t){return a("comment",{key:t.id,attrs:{comData:t}})}))],2),t._v(" "),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-danger",attrs:{type:"button","data-dismiss":"modal"},on:{click:function(e){t.deleteTask(t.taskData._id)}}},[t._v("\n            Delete Task\n          ")])])])])])])},B=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal"}},[a("i",{staticClass:"fas fa-times fa-1x"})])}],L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"commment row"},[a("div",{staticClass:"col-11"},[a("p",[t._v(t._s(t.comData.content))])]),t._v(" "),a("div",{staticClass:"col-1"},[a("i",{staticClass:"fas fa-trash",on:{click:function(e){t.deleteComment(t.comData)}}})])])},D=[],I={name:"comment",props:["comData"],methods:{deleteComment(t){this.$store.dispatch("deleteComment",t)}}},x=I,T=(a("b379"),Object(l["a"])(x,L,D,!1,null,"6d8e4166",null)),A=T.exports,j={name:"Task",props:["taskData"],components:{Comment:A},mounted(){this.$store.dispatch("getComments",this.taskData._id)},data(){return{newComment:{content:"",authorId:this.$store.state.activeBoard.authorId,boardId:this.taskData.boardId,listId:this.taskData.listId,taskId:this.taskData._id}}},methods:{show(){this.$modal.show("modal")},opened(){this.$refs.description.focus()},hide(){this.$modal.hide("modal")},createComment(){let t={...this.newComment};this.$store.dispatch("createComment",t),this.newComment={content:""}},deleteTask(t){v.a.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(e=>{e.value&&(this.$store.dispatch("deleteTask",t),v.a.fire("Deleted!","Your file has been deleted.","success"))})},moveToList(t){this.taskData["oldListId"]=this.taskData.listId,this.taskData.listId=t,this.$store.dispatch("moveToList",this.taskData)}},computed:{comments(){return this.$store.state.comments[this.taskData._id]||[]},listLinks(){return this.$store.state.lists}}},U=j,P=(a("b809"),Object(l["a"])(U,$,B,!1,null,"20cd81fc",null)),O=P.exports,N={name:"List",props:["listData"],components:{Task:O},data(){return{newTask:{title:"",boardId:this.listData.boardId,authorId:this.listData.authorId,listId:this.listData._id}}},mounted(){this.$store.dispatch("getTasks",this.listData._id)},methods:{createTask(){let t={...this.newTask};this.$store.dispatch("createTask",t),this.newTask={title:""}},deleteList(t){v.a.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(e=>{e.value&&(this.$store.dispatch("deleteList",t),v.a.fire("Deleted!","Your file has been deleted.","success"))})}},computed:{tasks(){return this.$store.state.tasks[this.listData._id]||[]}}},R=N,E=(a("d08b"),Object(l["a"])(R,C,y,!1,null,"76679b60",null)),Y=E.exports,S={name:"board",components:{List:Y},props:["boardId"],mounted(){this.$store.dispatch("getBoardById",this.$route.params.boardId),this.$store.dispatch("getLists",this.$route.params.boardId)},methods:{createList(){let t={...this.newList};this.$store.dispatch("createList",t),this.newList={title:""}},goToHomePage(){Q.push({name:"boards"})},setBackground(t){this.$store.dispatch("setBackground",t)}},data(){return{newList:{title:"",boardId:this.$route.params.boardId,authorId:this.$store.state.activeBoard.authorId}}},computed:{board(){return this.$store.state.activeBoard},lists(){return this.$store.state.lists},image(){return this.$store.state.activeImage}}},J=S,M=(a("71fc"),Object(l["a"])(J,_,k,!1,null,"ab3f9f4a",null)),W=M.exports,G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login",attrs:{id:"login-row"}},[a("i",{staticClass:"fas fa-globe fa-5x"}),t._v(" "),a("h1",[t._v("PLAN-IT")]),t._v(" "),t.loginForm?a("form",{on:{submit:function(e){return e.preventDefault(),t.loginUser(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.creds.email,expression:"creds.email"}],attrs:{type:"email",placeholder:"email"},domProps:{value:t.creds.email},on:{input:function(e){e.target.composing||t.$set(t.creds,"email",e.target.value)}}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.creds.password,expression:"creds.password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:t.creds.password},on:{input:function(e){e.target.composing||t.$set(t.creds,"password",e.target.value)}}}),t._v(" "),a("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[t._v("Login")])]):a("form",{on:{submit:function(e){return e.preventDefault(),t.register(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.name,expression:"newUser.name"}],attrs:{type:"text",placeholder:"name"},domProps:{value:t.newUser.name},on:{input:function(e){e.target.composing||t.$set(t.newUser,"name",e.target.value)}}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.email,expression:"newUser.email"}],attrs:{type:"email",placeholder:"email"},domProps:{value:t.newUser.email},on:{input:function(e){e.target.composing||t.$set(t.newUser,"email",e.target.value)}}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.password,expression:"newUser.password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:t.newUser.password},on:{input:function(e){e.target.composing||t.$set(t.newUser,"password",e.target.value)}}}),t._v(" "),a("button",{staticClass:"btn btn-warning",attrs:{type:"submit"}},[t._v("Create Account")])]),t._v(" "),a("div",{staticClass:"action mt-1",on:{click:function(e){t.loginForm=!t.loginForm}}},[t.loginForm?a("p",[t._v("No account? Click here to Register")]):a("p",[t._v("Already have an account? Click here to Login")])])])},F=[],q={name:"login",data(){return{loginForm:!0,creds:{email:"",password:""},newUser:{email:"",password:"",name:""}}},beforeCreate(){this.$store.state.user._id&&this.$router.push({name:"boards"})},methods:{register(){this.$store.dispatch("register",this.newUser)},loginUser(){this.$store.dispatch("login",this.creds)}}},z=q,H=(a("37d0"),Object(l["a"])(z,G,F,!1,null,"21dc1cb9",null)),K=H.exports;s["a"].use(u["a"]);var Q=new u["a"]({routes:[{path:"/",name:"boards",component:w},{path:"/boards/:boardId",name:"board",props:!0,component:W},{path:"/login",name:"login",component:K},{path:"*",redirect:"/"}]}),V=a("2f62"),X=a("bc3a"),Z=a.n(X);let tt=location.host.includes("localhost")?"//localhost:3000/":"/",et=Z.a.create({baseURL:tt+"account/",timeout:3e3,withCredentials:!0});class at{static async Login(t){try{let e=await et.post("login",t);return e.data}catch(e){throw new Error(`[login failed] : ${e.response?e.response.data.error:"No response from server"}`)}}static async Register(t){try{let e=await et.post("register",t);return e.data}catch(e){throw new Error(`[registration failed] : ${e.response?e.response.data.error:"No response from server"}`)}}static async Logout(){try{await et.delete("logout");return!0}catch(t){throw new Error(`[logout failed] : ${t.response?t.response.data.error:"No response from server"}`)}}static async Authenticate(){try{let t=await et.get("authenticate");return t.data}catch(t){console.warn(`[Authentication failed] : ${t.response?t.response.data.error:"No response from server"}`)}}}let st=window.location.host.includes("localhost:8080")?"//localhost:3000/":"/",ot=Z.a.create({baseURL:st+"api/",timeout:3e3,withCredentials:!0});var it={actions:{getBoards({commit:t,dispatch:e}){ot.get("boards").then(e=>{t("setResource",{resource:"boards",data:e.data})})},async getBoardById({commit:t,dispatch:e},a){let s=await ot.get("boards/"+a);t("setActiveBoard",s.data)},addBoard({commit:t,dispatch:e},a){ot.post("boards",a).then(t=>{e("getBoards")})},async deleteBoard({commit:t,dispatch:e},a){await ot.delete("boards/"+a),e("getBoards")}}};let rt=window.location.host.includes("localhost:8080")?"//localhost:3000/":"/",nt=Z.a.create({baseURL:rt+"api/",timeout:3e3,withCredentials:!0});var lt={actions:{async createList({commit:t,dispatch:e},a){let s=await nt.post("lists",a);t("addList",s.data)},async getLists({commit:t,dispatch:e},a){let s=await nt.get("boards/"+a+"/lists");t("setResource",{resource:"lists",data:s.data})},async setActiveList({commit:t,dispatch:e},a){let s=await nt.get("lists/"+a);t("setResource",{resource:"activeList",data:s.data})}}};let ct=window.location.host.includes("localhost:8080")?"//localhost:3000/":"/",dt=Z.a.create({baseURL:ct+"api",timeout:3e3,withCredentials:!0});var ut={actions:{async createTask({commit:t,dispatch:e},a){let s=await dt.post("tasks",a);t("setTasks",s.data),e("getTasks",s.data.listId)},async getTasks({commit:t,dispatch:e},a){let s=await dt.get("lists/"+a+"/tasks");t("setTasks",{listId:a,data:s.data})},async moveToList({commit:t,dispatch:e},a){let s=await dt.put("tasks/"+a._id,a);e("getTasks",s.data.listId),e("getTasks",a.oldListId)}}};let mt=window.location.host.includes("localhost:8080")?"//localhost:3000/":"/",pt=Z.a.create({baseURL:mt+"api/",timeout:3e3,withCredentials:!0});var ht={actions:{async createComment({commit:t,dispatch:e},a){let s=await pt.post("comments",a);t("setComments",s.data),this.dispatch("getComments",s.data.taskId)},async getComments({commit:t,dispatch:e},a){let s=await pt.get("tasks/"+a+"/comments");t("setComments",{taskId:a,data:s.data})},async deleteComment({commit:t,dispatch:e},a){await pt.delete("comments/"+a._id),e("getComments",a.taskId)}}};a("eebe");s["a"].use(V["a"]);let vt=window.location.host.includes("localhost:8080")?"//localhost:3000/":"/",gt=Z.a.create({baseURL:vt+"api/",timeout:3e3,withCredentials:!0});var bt=new V["a"].Store({modules:{boardModule:it,listModule:lt,taskModule:ut,commentModule:ht},state:{user:{},boards:[],activeBoard:{},lists:[],tasks:{},comments:{},activeList:{},activeImage:{}},mutations:{setResource(t,e){t[e.resource]=e.data},setUser(t,e){t.user=e},setBoards(t,e){t.boards=e},setActiveBoard(t,e){t.activeBoard=e},addList(t,e){t.lists.push(e)},setTasks(t,e){s["a"].set(t.tasks,e.listId,e.data),console.log(t.tasks)},setComments(t,e){s["a"].set(t.comments,e.taskId,e.data)},resetState(t){t.user={},t.boards=[],t.activeBoard={},t.lists=[],t.tasks={},t.comments={},t.activeList={}},setActiveImage(t,e){t.activeImage=e,console.log(t.activeImage)}},actions:{async register({commit:t,dispatch:e},a){try{let e=await at.Register(a);t("setUser",e),Q.push({name:"boards"})}catch(s){console.warn(s.message)}},async login({commit:t,dispatch:e},a){try{let e=await at.Login(a);t("setUser",e),Q.push({name:"boards"})}catch(s){console.warn(s.message)}},async logout({commit:t,dispatch:e}){try{await at.Logout();t("resetState"),Q.push({name:"login"})}catch(a){console.warn(a.message)}},async deleteList({commit:t,dispatch:e},a){await gt.delete("lists/"+a),e("getLists",this.state.activeBoard._id)},async deleteTask({commit:t,dispatch:e},a){await gt.delete("tasks/"+a),e("getTasks",this.state.activeList._id)},async setBackground({commit:t,dispatch:e},a){console.log(a),t("setActiveImage",a)}}}),ft=a("1881"),wt=a.n(ft),_t=a("d8c5"),kt=a.n(_t);async function Ct(){let t=await at.Authenticate();t?bt.commit("setUser",t):Q.push({name:"login"}),new s["a"]({router:Q,store:bt,render:t=>t(d)}).$mount("#app")}s["a"].use(wt.a),s["a"].use(kt.a),Ct()},"71fc":function(t,e,a){"use strict";var s=a("e095"),o=a.n(s);o.a},"7e54":function(t,e,a){},"85ec":function(t,e,a){},"98d7":function(t,e,a){},"9a04":function(t,e,a){},af3c:function(t,e,a){"use strict";var s=a("9a04"),o=a.n(s);o.a},b379:function(t,e,a){"use strict";var s=a("7e54"),o=a.n(s);o.a},b809:function(t,e,a){"use strict";var s=a("bee5"),o=a.n(s);o.a},bca8:function(t,e,a){},bee5:function(t,e,a){},d08b:function(t,e,a){"use strict";var s=a("98d7"),o=a.n(s);o.a},e095:function(t,e,a){}});
//# sourceMappingURL=app.6c3f84bb.js.map
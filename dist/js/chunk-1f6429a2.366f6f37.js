(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1f6429a2"],{"1dde":function(t,e,a){var i=a("d039"),s=a("b622"),r=a("2d00"),o=s("species");t.exports=function(t){return r>=51||!i((function(){var e=[],a=e.constructor={};return a[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},3205:function(t,e,a){"use strict";a("8795")},5981:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content-table"},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v(t._s(t.headerCard))])]),a("div",{staticClass:"center"},[a("el-tabs",[a("el-tab-pane",{attrs:{label:"Setting Akun"}},[a("akun-user")],1),"admin"==t.role?a("el-tab-pane",{attrs:{label:"Add User"}},[a("add-user")],1):t._e(),"admin"==t.role?a("el-tab-pane",{attrs:{label:"Limit Apps"}},[a("limit-apps")],1):t._e(),"admin"==t.role?a("el-tab-pane",{attrs:{label:"Tutorial"}},[a("tutorial")],1):t._e()],1)],1)])],1)},s=[],r=(a("b0c0"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",{staticClass:"line-bottom"},[a("el-col",{staticClass:"line-right",attrs:{span:5}},[a("el-image",{staticStyle:{width:"150px",height:"150px"},attrs:{src:t.url,fit:"cover"}})],1),t.editProfile?a("el-col",{attrs:{span:8}},[a("el-form",{staticClass:"form-application-add",attrs:{"label-position":"left","label-width":"150px"}},[a("el-form-item",{attrs:{label:"Username"}},[t._v(" "+t._s(t.username)+" ")]),a("el-form-item",{attrs:{label:"Email"}},[t._v(" "+t._s(t.email)+" ")]),a("el-form-item",{attrs:{label:"Password"}},[t._v(" ******** ")]),a("el-form-item",{attrs:{label:"Role"}},[t._v(" "+t._s(t.role)+" ")]),a("el-form-item",[a("el-button",{attrs:{type:"warning",icon:"el-icon-edit",size:"mini"},on:{click:function(e){return t.editDataProfile()}}},[t._v("Edit Profile")])],1)],1)],1):a("el-col",{attrs:{span:15}},[a("el-form",{ref:"ruleForm",staticClass:"form-application-add",attrs:{"label-position":"left","label-width":"150px",model:t.ruleForm,rules:t.rules}},[a("el-form-item",{attrs:{label:"Username",prop:"username"}},[a("el-input",{attrs:{type:"Text",autocomplete:"off"},model:{value:t.ruleForm.username,callback:function(e){t.$set(t.ruleForm,"username",e)},expression:"ruleForm.username"}})],1),a("el-form-item",{attrs:{label:"Email"}},[t._v(" "+t._s(t.email)+" ")]),a("el-form-item",{attrs:{label:"Icon"}},[a("el-upload",{staticClass:"upload-demo",attrs:{action:"","file-list":t.fileList,"auto-upload":!1,limit:1,"list-type":"picture"}},[a("el-button",{attrs:{size:"small",type:"primary"}},[t._v("Click to upload")]),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("jpg/png files with a size less than 500kb")])],1)],1),a("el-form-item",{attrs:{label:"Password"}},[t.editPassword?a("el-button",{attrs:{type:"warning",icon:"el-icon-close",size:"mini"},on:{click:function(e){t.editPassword=!1}}},[t._v("Cancel")]):a("el-button",{attrs:{type:"danger",icon:"el-icon-edit",size:"mini"},on:{click:function(e){t.editPassword=!0}}},[t._v("Edit")])],1),t.editPassword?a("el-form-item",{attrs:{label:"Old Password"}},[a("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:t.passwordOld,callback:function(e){t.passwordOld=e},expression:"passwordOld"}})],1):t._e(),t.editPassword?a("el-form-item",{attrs:{label:"New Password"}},[a("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:t.passwordNew,callback:function(e){t.passwordNew=e},expression:"passwordNew"}})],1):t._e(),a("el-form-item",[a("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"mini"},on:{click:function(e){return t.editDataProfile("ruleForm")}}},[t._v("Submit")]),a("el-button",{attrs:{type:"warning",icon:"el-icon-close",size:"mini"},on:{click:function(e){return t.editDataProfile()}}},[t._v("Cancel")])],1)],1)],1)],1)}),o=[],n={data:function(){return{editPassword:!1,ruleForm:{username:""},editProfile:!0,passwordOld:"",passwordNew:"",fileList:[],rules:{},formData:new FormData}},methods:{editDataProfile:function(){}},created:function(){this.editProfile=!0,this.username=this.$store.state.userDataActive.user,this.email=this.$store.state.userDataActive.email,this.role=this.$store.state.userDataActive.role,this.url=this.$store.state.userDataActive.photo}},l=n,c=a("2877"),u=Object(c["a"])(l,r,o,!1,null,null,null),d=u.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",{attrs:{gutter:24}},[a("el-col",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{span:8}},[a("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{"label-position":"left","label-width":"100px",model:t.ruleForm,rules:t.rules}},[a("el-form-item",{attrs:{label:"Username",prop:"username"}},[a("el-input",{attrs:{type:"Text",autocomplete:"off"},model:{value:t.ruleForm.username,callback:function(e){t.$set(t.ruleForm,"username",e)},expression:"ruleForm.username"}})],1),a("el-form-item",{attrs:{label:"Email",prop:"email"}},[a("el-input",{attrs:{type:"Text",autocomplete:"off"},model:{value:t.ruleForm.email,callback:function(e){t.$set(t.ruleForm,"email",e)},expression:"ruleForm.email"}})],1),a("el-form-item",{attrs:{label:"Password",prop:"password"}},[a("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:t.ruleForm.password,callback:function(e){t.$set(t.ruleForm,"password",e)},expression:"ruleForm.password"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.submitForm("ruleForm")}}},[t._v("Add User")]),a("el-button",{attrs:{size:"mini"},on:{click:function(e){return t.resetForm("ruleForm")}}},[t._v("Reset")])],1)],1)],1),a("el-col",{attrs:{span:16}},[a("vs-table",{scopedSlots:t._u([{key:"thead",fn:function(){return[a("vs-tr",[a("vs-th",[t._v("Icon")]),a("vs-th",[t._v("Username")]),a("vs-th",[t._v("Email")]),a("vs-th",[t._v("Role")]),a("vs-th",[t._v("Action")])],1)]},proxy:!0},{key:"tbody",fn:function(){return t._l(t.$vs.getPage(t.itemUsers,t.page,t.max),(function(e,i){return a("vs-tr",{key:i,attrs:{data:e}},[a("vs-td",[e.url?a("el-image",{staticStyle:{width:"100px",height:"100px"},attrs:{src:e.url,fit:"cover"}}):a("el-image",{staticStyle:{width:"100px",height:"100px"},attrs:{src:e.photo,fit:"cover"}})],1),a("vs-td",[t._v(" "+t._s(e.username)+" ")]),a("vs-td",[t._v(" "+t._s(e.email)+" ")]),a("vs-td",[t._v(" "+t._s(e.role)+" ")]),a("vs-td",[a("el-dropdown",[a("span",{staticClass:"el-dropdown-link"},[t._v(" Action"),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{icon:"el-icon-check"}},[t._v("Detail")]),a("el-dropdown-item",{attrs:{icon:"el-icon-edit"}},[t._v("Edit")]),a("el-dropdown-item",{attrs:{icon:"el-icon-delete"}},[t._v("Delete")])],1)],1)],1)],1)}))},proxy:!0},{key:"footer",fn:function(){return[a("vs-pagination",{attrs:{length:t.$vs.getLength(t.itemUsers,t.max)},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})]},proxy:!0}])})],1)],1)},m=[],f={userMembers:[]},v=(a("c740"),a("a434"),{ADD_USERS:function(t,e){t.userMembers.unshift(e)},SET_USERS:function(t,e){t.userMembers=e},UPDATE_SET_STOCK:function(t,e){var a=t.setstock.findIndex((function(t){return t.id===e.id}));Object.assign(t.setstocks[a],e)},REMOVE_ITEM:function(t,e){var a=t.setstock.findIndex((function(t){return t.id===e}));t.setstock.splice(a,1)}}),h=(a("d3b7"),a("bb36")),g={headers:{Authorization:"Bearer ".concat(localStorage.getItem("accessToken"))}},_={addUsers:function(t,e){var a=t.commit;return new Promise((function(t,i){h["a"].post("user/insert",{item:e},g).then((function(e){a("ADD_USERS",Object.assign(e.data.data)),t(e)})).catch((function(t){i(t)}))}))},showUsers:function(t){var e=t.commit;return new Promise((function(t,a){h["a"].get("user/show",g).then((function(a){e("SET_USERS",a.data.data),t(a)})).catch((function(t){a(t)}))}))}},b={},w={namespaced:!0,state:f,mutations:v,actions:_,getters:b},x={data:function(){var t=this,e=function(t,e,a){""===e?a(new Error("Please input the Username")):a()},a=function(t,e,a){""===e?a(new Error("Please input the Email")):a()},i=function(e,a,i){""===a?i(new Error("Please input the password again")):a!==t.ruleForm.password?i(new Error("Two inputs don't match!")):i()};return{loading:!1,page:1,max:3,ruleForm:{username:"",email:"",password:""},rules:{username:[{validator:e,trigger:"blur"}],email:[{validator:a,trigger:"blur"}],password:[{validator:i,trigger:"blur"}]}}},computed:{itemUsers:function(){return this.$store.state.dataUsers.userMembers}},methods:{submitForm:function(t){var e=this;this.loading=!0,this.$refs[t].validate((function(a){a?e.$store.dispatch("dataUsers/addUsers",e.ruleForm).then((function(a){!0===a.data.success?(e.$notify.success({title:"Success",message:"This is a success message",offset:100}),e.loading=!1,e.$refs[t].resetFields()):e.$notify.error({title:"Error",message:"This is a Error message",offset:100})})):e.$notify.error({title:"Error",message:"Invalid Data Input",offset:100})}))},resetForm:function(t){this.$refs[t].resetFields()}},created:function(){w.isRegistered||(this.$store.registerModule("dataUsers",w),w.isRegistered=!0),this.$store.dispatch("dataUsers/showUsers")}},y=x,k=(a("3205"),Object(c["a"])(y,p,m,!1,null,null,null)),P=k.exports,U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content-table"},[a("div",{staticClass:"center"},[a("vs-table",{scopedSlots:t._u([{key:"thead",fn:function(){return[a("vs-tr",[a("vs-th",[t._v("Icon")]),a("vs-th",[t._v("Name Application")]),a("vs-th",[t._v("Dev")]),a("vs-th",[t._v("Count")]),a("vs-th",[t._v("Action")])],1)]},proxy:!0},{key:"tbody",fn:function(){return t._l(t.$vs.getPage(t.applicationsSettingLimits,t.page,t.max),(function(e,i){return a("vs-tr",{key:i,attrs:{data:e}},[a("vs-td",[a("el-image",{staticStyle:{width:"100px",height:"100px"},attrs:{src:e.url,fit:"cover"}})],1),a("vs-td",[t._v(" "+t._s(e.name_applications)+" ")]),a("vs-td",[t._v(" "+t._s(e.name)+" ")]),a("vs-td",[t._v(" "+t._s(e.limit_applications)+" ")]),a("vs-td",[a("el-dropdown",[a("span",{staticClass:"el-dropdown-link"},[t._v(" Action"),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{icon:"el-icon-check"},nativeOn:{click:function(a){return t.detail(e)}}},[t._v("Detail")]),a("el-dropdown-item",{attrs:{icon:"el-icon-edit"},nativeOn:{click:function(a){return t.open(e)}}},[t._v("Edit")])],1)],1)],1)],1)}))},proxy:!0},{key:"footer",fn:function(){return[a("vs-pagination",{attrs:{length:t.$vs.getLength(t.applicationsSettingLimits,t.max)},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})]},proxy:!0}])}),a("el-dialog",{attrs:{title:"Detail App",visible:t.dialogTableVisible},on:{"update:visible":function(e){t.dialogTableVisible=e}}},[a("el-form",{staticClass:"form-application-add",attrs:{"label-position":"left","label-width":"250px"}},[a("el-form-item",{attrs:{label:"Username Develop"}},[t._v(" "+t._s(t.dataPopUp.name)+" ")]),a("el-form-item",{attrs:{label:"Email"}},[t._v(" "+t._s(t.dataPopUp.email)+" ")]),a("el-form-item",{attrs:{label:"Icons"}},[a("el-image",{staticStyle:{width:"100px",height:"100px"},attrs:{src:t.dataPopUp.url,fit:"cover"}})],1),a("el-form-item",{attrs:{label:"Name App"}},[t._v(" "+t._s(t.dataPopUp.name_applications)+" ")]),a("el-form-item",{attrs:{label:"Package App"}},[t._v(" "+t._s(t.dataPopUp.package_applications)+" ")]),a("el-form-item",{attrs:{label:"Limit"}},[t._v(" "+t._s(t.dataPopUp.limit_applications)+" ")])],1)],1)],1)])},E=[],$={data:function(){return{dialogTableVisible:!1,page:1,max:5,applicationsSettingLimits:[],dataPopUp:{}}},methods:{detail:function(t){this.dataPopUp=t,this.dialogTableVisible=!0},open:function(t){var e=this,a=t;this.$prompt("Please input your e-mail","Tip",{confirmButtonText:"OK",cancelButtonText:"Cancel",inputErrorMessage:"Invalid Count"}).then((function(t){var i=t.value,s={id:a.id_applications,id_user:e.$store.state.userDataActive.id,count:i},r={headers:{Authorization:"Bearer ".concat(localStorage.getItem("accessToken"))}};h["a"].post("application/setting/limit/edit",s,r).then((function(t){if(1==t.data.success){var s={id_applications:a.id_applications,id_user:a.id_user,id_icons:a.id_icon,name_applications:a.name_applications,package_applications:a.package_applications,key_applications:a.key_applications,limit_applications:parseInt(i),created_at:a.created_at,name:a.name,email:a.email,role:a.role,folder:a.folder,extension:a.extension,url:a.url},r=e.applicationsSettingLimits.findIndex((function(t){return parseInt(t.id_applications)===parseInt(a.id_applications)}));Object.assign(e.applicationsSettingLimits[r],s),e.$message({type:"success",message:"Your Update "+t.data.data})}else e.$message({type:"Danger",message:"Update Failed"})}))})).catch((function(){e.$message({type:"info",message:"Input canceled"})}))}},computed:{baseUrl:function(){var t=this.$route.path;return t[0]},headerCard:function(){return this.$route.name}},created:function(){var t=this,e={headers:{Authorization:"Bearer ".concat(localStorage.getItem("accessToken"))}};h["a"].get("application/setting/limit/show",e).then((function(e){1==e.data.success&&(t.applicationsSettingLimits=e.data.data)}))}},S=$,F=Object(c["a"])(S,U,E,!1,null,null,null),A=F.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v(" tutorial ")])},D=[],T={},I=Object(c["a"])(T,C,D,!1,null,null,null),O=I.exports,L={data:function(){return{}},components:{AkunUser:d,AddUser:P,LimitApps:A,Tutorial:O},computed:{headerCard:function(){return this.$route.name},role:function(){return this.$store.state.userDataActive.role}}},z=L,M=(a("b3b2"),Object(c["a"])(z,i,s,!1,null,null,null));e["default"]=M.exports},8418:function(t,e,a){"use strict";var i=a("c04e"),s=a("9bf2"),r=a("5c6c");t.exports=function(t,e,a){var o=i(e);o in t?s.f(t,o,r(0,a)):t[o]=a}},8795:function(t,e,a){},"8e0f":function(t,e,a){},a434:function(t,e,a){"use strict";var i=a("23e7"),s=a("23cb"),r=a("a691"),o=a("50c4"),n=a("7b0b"),l=a("65f0"),c=a("8418"),u=a("1dde"),d=a("ae40"),p=u("splice"),m=d("splice",{ACCESSORS:!0,0:0,1:2}),f=Math.max,v=Math.min,h=9007199254740991,g="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!p||!m},{splice:function(t,e){var a,i,u,d,p,m,_=n(this),b=o(_.length),w=s(t,b),x=arguments.length;if(0===x?a=i=0:1===x?(a=0,i=b-w):(a=x-2,i=v(f(r(e),0),b-w)),b+a-i>h)throw TypeError(g);for(u=l(_,i),d=0;d<i;d++)p=w+d,p in _&&c(u,d,_[p]);if(u.length=i,a<i){for(d=w;d<b-i;d++)p=d+i,m=d+a,p in _?_[m]=_[p]:delete _[m];for(d=b;d>b-i+a;d--)delete _[d-1]}else if(a>i)for(d=b-i;d>w;d--)p=d+i-1,m=d+a-1,p in _?_[m]=_[p]:delete _[m];for(d=0;d<a;d++)_[d+w]=arguments[d+2];return _.length=b-i+a,u}})},b0c0:function(t,e,a){var i=a("83ab"),s=a("9bf2").f,r=Function.prototype,o=r.toString,n=/^\s*function ([^ (]*)/,l="name";i&&!(l in r)&&s(r,l,{configurable:!0,get:function(){try{return o.call(this).match(n)[1]}catch(t){return""}}})},b3b2:function(t,e,a){"use strict";a("8e0f")},c740:function(t,e,a){"use strict";var i=a("23e7"),s=a("b727").findIndex,r=a("44d2"),o=a("ae40"),n="findIndex",l=!0,c=o(n);n in[]&&Array(1)[n]((function(){l=!1})),i({target:"Array",proto:!0,forced:l||!c},{findIndex:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),r(n)}}]);
//# sourceMappingURL=chunk-1f6429a2.366f6f37.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6fedeada"],{a55b:function(e,r,t){"use strict";t.r(r);var o=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("el-card",{staticClass:"box-card card-form"},[t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,"status-icon":"",rules:e.rules}},[t("el-form-item",{attrs:{label:"Username",prop:"email"}},[t("el-input",{attrs:{type:"Text",autocomplete:"off"},model:{value:e.ruleForm.email,callback:function(r){e.$set(e.ruleForm,"email",r)},expression:"ruleForm.email"}})],1),t("el-form-item",{attrs:{label:"Password",prop:"password"}},[t("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.ruleForm.password,callback:function(r){e.$set(e.ruleForm,"password",r)},expression:"ruleForm.password"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(r){return e.submitForm("ruleForm")}}},[e._v("Submit")]),t("el-button",{on:{click:function(r){return e.resetForm("ruleForm")}}},[e._v("Reset")])],1)],1)],1)},s=[],a=t("883d"),l={data:function(){var e=this,r=function(e,r,t){""===r?t(new Error("Please input the Username")):t()},t=function(r,t,o){""===t?o(new Error("Please input the password again")):t!==e.ruleForm.pass?o(new Error("Two inputs don't match!")):o()};return{ruleForm:{email:"",password:""},rules:{username:[{validator:r,trigger:"blur"}],pass:[{validator:t,trigger:"blur"}]}}},methods:{submitForm:function(e){var r=this;this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;r.$store.dispatch("dataAuth/loginAuth",r.ruleForm)}))},resetForm:function(e){this.$refs[e].resetFields()}},created:function(){a["a"].isRegistered||(this.$store.registerModule("dataAuth",a["a"]),a["a"].isRegistered=!0)}},u=l,n=(t("d6db"),t("2877")),i=Object(n["a"])(u,o,s,!1,null,null,null);r["default"]=i.exports},d6db:function(e,r,t){"use strict";t("e67a")},e67a:function(e,r,t){}}]);
//# sourceMappingURL=chunk-6fedeada.267b8b92.js.map
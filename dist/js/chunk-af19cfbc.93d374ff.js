(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-af19cfbc"],{"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));r("d3b7");function n(t,e,r,n,a,o,i){try{var c=t[o](i),s=c.value}catch(u){return void r(u)}c.done?e(s):Promise.resolve(s).then(n,a)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(a,o){var i=t.apply(e,r);function c(t){n(i,a,o,c,s,"next",t)}function s(t){n(i,a,o,c,s,"throw",t)}c(void 0)}))}}},"1dde":function(t,e,r){var n=r("d039"),a=r("b622"),o=r("2d00"),i=a("species");t.exports=function(t){return o>=51||!n((function(){var e=[],r=e.constructor={};return r[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"56d3":function(t,e,r){"use strict";r("d563")},8418:function(t,e,r){"use strict";var n=r("c04e"),a=r("9bf2"),o=r("5c6c");t.exports=function(t,e,r){var i=n(e);i in t?a.f(t,i,o(0,r)):t[i]=r}},"853c":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content-table"},[t.data_found?r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[t._v(t._s(t.headerCard))])]),r("el-row",{staticClass:"line-bottom"},[r("el-col",{staticClass:"line-right",attrs:{span:10}},[r("el-form",{staticClass:"form-application-add",attrs:{"label-position":"left","label-width":"150px"}},[r("el-form-item",{attrs:{label:"Application"}},[t._v(" "+t._s(t.name)+" ")]),r("el-form-item",{attrs:{label:"Icon"}},[r("el-image",{staticStyle:{width:"100px",height:"100px"},attrs:{src:t.icon,fit:"cover"}})],1),r("el-form-item",{attrs:{label:"Play Store"}},[r("el-button",{attrs:{size:"small",target:"_blank",round:""},on:{click:function(e){return t.playStore(this.package)}}},[t._v("Play Store")])],1),r("el-form-item",{attrs:{label:"Key"}},[t._v(" "+t._s(t.key)+" ")]),r("el-form-item",{attrs:{label:"Limit"}},[t._v(" "+t._s(t.limit)+" ")])],1)],1),r("el-col",{attrs:{span:14}},[r("el-card",{staticClass:"box-card",staticStyle:{margin:"5px"}},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[t._v("Carousel Main Android")]),r("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"}},[t._v("Edit")])],1),r("el-carousel",{attrs:{interval:2e3,type:"card",height:"400px"}},t._l(6,(function(e){return r("el-carousel-item",{key:e},[r("h3",{staticClass:"medium"},[t._v(t._s(e))])])})),1)],1)],1)],1),r("el-row",{staticStyle:{width:"80%",margin:"0 auto","margin-top":"20px"}},t._l(t.image,(function(e,n){return r("el-col",{key:n,staticStyle:{margin:"5px"},attrs:{span:4}},[r("el-card",{attrs:{"body-style":{padding:"0px"}}},[r("img",{staticClass:"image",attrs:{src:e.url}}),r("div",{staticStyle:{margin:"0 auto"}},[r("el-button",{staticStyle:{width:"100%"},attrs:{type:"danger",icon:"el-icon-delete",size:"mini"},on:{click:function(r){return t.deleteData(e.id_images)}}},[t._v("Delete")])],1)])],1)})),1)],1):r("el-alert",{attrs:{title:"application not found",type:"error"},on:{close:t.routeApplication}})],1)},a=[],o=(r("99af"),r("c740"),r("a434"),r("b0c0"),r("96cf"),r("1da1")),i=r("bb36"),c=r("a18c"),s={data:function(){return{data_found:!1,name:"",icon:"",package:"",key:"",limit:"",image:[]}},methods:{routeApplication:function(){c["a"].push("/application")},playStore:function(t){var e=t;window.open("https://play.google.com/store/apps/details?id="+e,"_blank")},deleteData:function(t){var e=this;this.$alert("Are you sure you delete this image","Delete!",{confirmButtonText:"OK",callback:function(r){e.dataDel(t),e.$message({type:"info",message:"action: ".concat(r)})}})},dataDel:function(t){var e=this,r={headers:{Authorization:"Bearer ".concat(localStorage.getItem("accessToken"))}};i["a"].delete("image/".concat(t,"/").concat(this.$route.params.id,"/delete"),r).then((function(t){if(1==t.data.success){var r=parseInt(t.data.data),n=e.image.findIndex((function(t){return t.id_images===r}));e.image.splice(n,1)}}))}},computed:{baseUrl:function(){var t=this.$route.path;return t[0]},headerCard:function(){return this.$route.name},detailData:function(){return this.data}},created:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r={headers:{Authorization:"Bearer ".concat(localStorage.getItem("accessToken"))}},e.next=3,i["a"].get("application/".concat(t.$route.params.id,"/").concat(t.$store.state.userDataActive.id,"/image/detail"),r).then((function(e){1==e.data.success?(t.data_found=!0,t.name=e.data.data.name_applications,t.icon=e.data.data.url,t.package=e.data.data.package_applications,t.key=e.data.data.key_applications,t.limit=e.data.data.limit_applications,t.image=e.data.image):t.data_found=!1}));case 3:case"end":return e.stop()}}),e)})))()}},u=s,l=(r("56d3"),r("2877")),f=Object(l["a"])(u,n,a,!1,null,null,null);e["default"]=f.exports},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(T){s=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var a=e&&e.prototype instanceof m?e:m,o=Object.create(a.prototype),i=new A(n||[]);return o._invoke=E(t,r,i),o}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(T){return{type:"throw",arg:T}}}t.wrap=u;var f="suspendedStart",h="suspendedYield",d="executing",p="completed",y={};function m(){}function v(){}function g(){}var w={};w[o]=function(){return this};var b=Object.getPrototypeOf,x=b&&b(b(j([])));x&&x!==r&&n.call(x,o)&&(w=x);var _=g.prototype=m.prototype=Object.create(w);function k(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(a,o,i,c){var s=l(t[a],t,o);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"===typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(f).then((function(t){u.value=t,i(u)}),(function(t){return r("throw",t,i,c)}))}c(s.arg)}var a;function o(t,n){function o(){return new e((function(e,a){r(t,n,e,a)}))}return a=a?a.then(o,o):o()}this._invoke=o}function E(t,e,r){var n=f;return function(a,o){if(n===d)throw new Error("Generator is already running");if(n===p){if("throw"===a)throw o;return I()}r.method=a,r.arg=o;while(1){var i=r.delegate;if(i){var c=S(i,r);if(c){if(c===y)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var s=l(t,e,r);if("normal"===s.type){if(n=r.done?p:h,s.arg===y)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=p,r.method="throw",r.arg=s.arg)}}}function S(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,S(t,r),"throw"===r.method))return y;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var a=l(n,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,y;var o=a.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function j(t){if(t){var r=t[o];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var a=-1,i=function r(){while(++a<t.length)if(n.call(t,a))return r.value=t[a],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:I}}function I(){return{value:e,done:!0}}return v.prototype=_.constructor=g,g.constructor=v,v.displayName=s(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s(t,c,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},k(L.prototype),L.prototype[i]=function(){return this},t.AsyncIterator=L,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new L(u(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},k(_),s(_,c,"Generator"),_[o]=function(){return this},_.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=j,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function a(n,a){return c.type="throw",c.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,y):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;O(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:j(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}(t.exports);try{regeneratorRuntime=n}catch(a){Function("r","regeneratorRuntime = r")(n)}},"99af":function(t,e,r){"use strict";var n=r("23e7"),a=r("d039"),o=r("e8b5"),i=r("861d"),c=r("7b0b"),s=r("50c4"),u=r("8418"),l=r("65f0"),f=r("1dde"),h=r("b622"),d=r("2d00"),p=h("isConcatSpreadable"),y=9007199254740991,m="Maximum allowed index exceeded",v=d>=51||!a((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),g=f("concat"),w=function(t){if(!i(t))return!1;var e=t[p];return void 0!==e?!!e:o(t)},b=!v||!g;n({target:"Array",proto:!0,forced:b},{concat:function(t){var e,r,n,a,o,i=c(this),f=l(i,0),h=0;for(e=-1,n=arguments.length;e<n;e++)if(o=-1===e?i:arguments[e],w(o)){if(a=s(o.length),h+a>y)throw TypeError(m);for(r=0;r<a;r++,h++)r in o&&u(f,h,o[r])}else{if(h>=y)throw TypeError(m);u(f,h++,o)}return f.length=h,f}})},a434:function(t,e,r){"use strict";var n=r("23e7"),a=r("23cb"),o=r("a691"),i=r("50c4"),c=r("7b0b"),s=r("65f0"),u=r("8418"),l=r("1dde"),f=r("ae40"),h=l("splice"),d=f("splice",{ACCESSORS:!0,0:0,1:2}),p=Math.max,y=Math.min,m=9007199254740991,v="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!h||!d},{splice:function(t,e){var r,n,l,f,h,d,g=c(this),w=i(g.length),b=a(t,w),x=arguments.length;if(0===x?r=n=0:1===x?(r=0,n=w-b):(r=x-2,n=y(p(o(e),0),w-b)),w+r-n>m)throw TypeError(v);for(l=s(g,n),f=0;f<n;f++)h=b+f,h in g&&u(l,f,g[h]);if(l.length=n,r<n){for(f=b;f<w-n;f++)h=f+n,d=f+r,h in g?g[d]=g[h]:delete g[d];for(f=w;f>w-n+r;f--)delete g[f-1]}else if(r>n)for(f=w-n;f>b;f--)h=f+n-1,d=f+r-1,h in g?g[d]=g[h]:delete g[d];for(f=0;f<r;f++)g[f+b]=arguments[f+2];return g.length=w-n+r,l}})},b0c0:function(t,e,r){var n=r("83ab"),a=r("9bf2").f,o=Function.prototype,i=o.toString,c=/^\s*function ([^ (]*)/,s="name";n&&!(s in o)&&a(o,s,{configurable:!0,get:function(){try{return i.call(this).match(c)[1]}catch(t){return""}}})},c740:function(t,e,r){"use strict";var n=r("23e7"),a=r("b727").findIndex,o=r("44d2"),i=r("ae40"),c="findIndex",s=!0,u=i(c);c in[]&&Array(1)[c]((function(){s=!1})),n({target:"Array",proto:!0,forced:s||!u},{findIndex:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),o(c)},d563:function(t,e,r){}}]);
//# sourceMappingURL=chunk-af19cfbc.93d374ff.js.map
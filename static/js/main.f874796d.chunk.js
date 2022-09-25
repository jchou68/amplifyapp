(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{235:function(t,e,n){t.exports=n(462)},243:function(t,e,n){},245:function(t,e,n){},252:function(t,e){},462:function(t,e,n){"use strict";n.r(e);var r=n(1),a=n.n(r),o=n(207),i=n.n(o),c=(n(243),n(89)),u=n(9),s=(n(245),n(247),n(477)),l=n(476),p=n(3),f=n(14),h=n(4),d=n(45),m=n(38),g=n(32),y=n(473),v=n(475),w="\n  query ListNotes(\n    $filter: ModelNoteFilterInput\n    $limit: Int\n    $nextToken: String\n  ) {\n    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {\n      items {\n        id\n        name\n        description\n        image\n        createdAt\n        updatedAt\n      }\n      nextToken\n    }\n  }\n",_="\n  mutation CreateNote(\n    $input: CreateNoteInput!\n    $condition: ModelNoteConditionInput\n  ) {\n    createNote(input: $input, condition: $condition) {\n      id\n      name\n      description\n      image\n      createdAt\n      updatedAt\n    }\n  }\n",b="\n  mutation DeleteNote(\n    $input: DeleteNoteInput!\n    $condition: ModelNoteConditionInput\n  ) {\n    deleteNote(input: $input, condition: $condition) {\n      id\n      name\n      description\n      image\n      createdAt\n      updatedAt\n    }\n  }\n";function x(){x=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(j){c=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var a=e&&e.prototype instanceof p?e:p,o=Object.create(a.prototype),i=new L(r||[]);return o._invoke=function(t,e,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return N()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=_(i,n);if(c){if(c===l)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=s(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===l)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}(t,n,i),o}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(j){return{type:"throw",arg:j}}}t.wrap=u;var l={};function p(){}function f(){}function h(){}var d={};c(d,a,function(){return this});var m=Object.getPrototypeOf,g=m&&m(m(k([])));g&&g!==e&&n.call(g,a)&&(d=g);var y=h.prototype=p.prototype=Object.create(d);function v(t){["next","throw","return"].forEach(function(e){c(t,e,function(t){return this._invoke(e,t)})})}function w(t,e){var r;this._invoke=function(a,o){function i(){return new e(function(r,i){!function r(a,o,i,c){var u=s(t[a],t,o);if("throw"!==u.type){var l=u.arg,p=l.value;return p&&"object"==typeof p&&n.call(p,"__await")?e.resolve(p.__await).then(function(t){r("next",t,i,c)},function(t){r("throw",t,i,c)}):e.resolve(p).then(function(t){l.value=t,i(l)},function(t){return r("throw",t,i,c)})}c(u.arg)}(a,o,r,i)})}return r=r?r.then(i,i):i()}}function _(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,_(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var r=s(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,l;var a=r.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function b(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(b,this),this.reset(!0)}function k(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:N}}function N(){return{value:void 0,done:!0}}return f.prototype=h,c(y,"constructor",h),c(h,"constructor",f),f.displayName=c(h,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,c(t,i,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},v(w.prototype),c(w.prototype,o,function(){return this}),t.AsyncIterator=w,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var i=new w(u(e,n,r,a),o);return t.isGeneratorFunction(n)?i:i.next().then(function(t){return t.done?t.value:i.next()})},v(y),c(y,i,"Generator"),c(y,a,function(){return this}),c(y,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=k,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),u=n.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,l):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),E(n),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;E(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:k(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),l}},t}var E=Object(v.a)(function(t){var e=t.signOut,n=Object(r.useState)([]),o=Object(u.a)(n,2),i=o[0],v=o[1];function E(){return L.apply(this,arguments)}function L(){return(L=Object(c.a)(x().mark(function t(){var e,n;return x().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.graphql({query:w});case 2:return e=t.sent,n=e.data.listNotes.items,t.next=6,Promise.all(n.map(function(){var t=Object(c.a)(x().mark(function t(e){var n;return x().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.image){t.next=5;break}return t.next=3,l.a.get(e.name);case 3:n=t.sent,e.image=n;case 5:return t.abrupt("return",e);case 6:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()));case 6:v(n);case 7:case"end":return t.stop()}},t)}))).apply(this,arguments)}function k(){return(k=Object(c.a)(x().mark(function t(e){var n,r,a;return x().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preventDefault(),n=new FormData(e.target),r=n.get("image"),!(a={name:n.get("name"),description:n.get("description"),image:r.name}).image){t.next=7;break}return t.next=7,l.a.put(a.name,r);case 7:return t.next=9,s.a.graphql({query:_,variables:{input:a}});case 9:E(),e.target.reset();case 11:case"end":return t.stop()}},t)}))).apply(this,arguments)}function N(){return(N=Object(c.a)(x().mark(function t(e){var n,r,a;return x().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.id,r=e.name,a=i.filter(function(t){return t.id!==n}),v(a),t.next=5,l.a.remove(r);case 5:return t.next=7,s.a.graphql({query:b,variables:{input:{id:n}}});case 7:case"end":return t.stop()}},t)}))).apply(this,arguments)}return Object(r.useEffect)(function(){E()},[]),a.a.createElement(p.a,{className:"App"},a.a.createElement(f.a,{level:1},"My Notes App"),a.a.createElement(p.a,{as:"form",margin:"3rem 0",onSubmit:function(t){return k.apply(this,arguments)}},a.a.createElement(h.a,{direction:"row",justifyContent:"center"},a.a.createElement(d.a,{name:"name",placeholder:"Note Name",label:"Note Name",labelHidden:!0,variation:"quiet",required:!0}),a.a.createElement(d.a,{name:"description",placeholder:"Note Description",label:"Note Description",labelHidden:!0,variation:"quiet",required:!0}),a.a.createElement(p.a,{name:"image",as:"input",type:"file",style:{alignSelf:"end"}}),a.a.createElement(m.a,{type:"submit",variation:"primary"},"Create Note"))),a.a.createElement(f.a,{level:2},"Current Notes"),a.a.createElement(p.a,{margin:"3rem 0"},i.map(function(t){return a.a.createElement(h.a,{key:t.id||t.name,direction:"row",justifyContent:"center",alignItems:"center"},a.a.createElement(g.a,{as:"strong",fontWeight:700},t.name),t.image&&a.a.createElement(y.a,{src:t.image,alt:"visual aid for ".concat(i.name),style:{width:400}}),a.a.createElement(g.a,{as:"span"},t.description),a.a.createElement(m.a,{variation:"link",onClick:function(){return function(t){return N.apply(this,arguments)}(t)}},"Delete note"))})),a.a.createElement(m.a,{onClick:e},"Sign Out"))}),L=function(t){t&&t instanceof Function&&n.e(1).then(n.bind(null,474)).then(function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,o=e.getLCP,i=e.getTTFB;n(t),r(t),a(t),o(t),i(t)})},k={aws_project_region:"us-west-2",aws_cognito_identity_pool_id:"us-west-2:b5ec9b95-6fa9-4485-b06e-aa02aa052980",aws_cognito_region:"us-west-2",aws_user_pools_id:"us-west-2_WToMzcVrV",aws_user_pools_web_client_id:"74otbj76kvkplkahfaonsk9gq3",oauth:{},aws_cognito_username_attributes:[],aws_cognito_social_providers:[],aws_cognito_signup_attributes:["EMAIL"],aws_cognito_mfa_configuration:"OFF",aws_cognito_mfa_types:["SMS"],aws_cognito_password_protection_settings:{passwordPolicyMinLength:8,passwordPolicyCharacters:[]},aws_cognito_verification_mechanisms:["EMAIL"],aws_appsync_graphqlEndpoint:"https://6vaaykkpnva45i66i7iwzdlx34.appsync-api.us-west-2.amazonaws.com/graphql",aws_appsync_region:"us-west-2",aws_appsync_authenticationType:"API_KEY",aws_appsync_apiKey:"da2-4n5rnn37qbcw3krhxcmzue5wuy",aws_user_files_s3_bucket:"amplifyappc09a1ae54e80455e8b8190044be8b0a1200120-staging",aws_user_files_s3_bucket_region:"us-west-2"};n(21).a.configure(k),i.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(E,null))),L()}},[[235,3,2]]]);
//# sourceMappingURL=main.f874796d.chunk.js.map
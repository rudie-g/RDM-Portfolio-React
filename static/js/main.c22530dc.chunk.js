(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,a){},33:function(e,t,a){e.exports=a(40)},40:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(22),c=a.n(o),i=(a(21),a(28)),l=(a(27),a(29)),s=a(24),m=a(25),u=a(14),d=[{id:1,name:"GoodNeighbor",description:"A community-driven service-exchange app written using node, express, and handlebars",role:"Backend Development, UX/UI Design, Project Management",techUsed:"Node, Express, Handlebars, MySQL, Sequelize, Bootstrap",deployedLink:"thegoodneighbor.herokuapp.com",view:"https://github.com/Northwestern-Coding-Bootcamp-Project-2/GoodNeighbor",imgSrc:"https://i.imgur.com/UsOxQq7.jpeg"},{id:2,name:"Tripsight",description:"A one stop shop for all things travel content, pictures for planning future travel or just getting your fix of far off places! Allows the user to create an account, post blogs and search other users blogs.",role:"Backend Development, API Management, Frontend Development",techUsed:"React, Node.js, MongoDB, Mongoose, GraphQL, Apollo, JWT, and Sass",deployedLink:"https://tripsight.herokuapp.com/",view:"https://github.com/travel-app-devs/TripSight",imgSrc:"https://github.com/travel-app-devs/TripSight/blob/main/client/public/previewImage1.png?raw=true"},{id:4,name:"Select Tech Inc",description:"A tech company website designed with Squarespace using custom styling and code injections",role:"Sole Author",techUsed:"Squarespace, Javascript, CSS",view:"https://www.selecttechinc.com",imgSrc:"https://i.imgur.com/5InsjAE.png"},{id:5,name:"livreSearch",description:"A MERN stack app to search for and save books",role:"Sole Author",techUsed:"React, Node.js, MongoDB, Mongoose, GraphQL, Apollo, JWT, and Express",view:"https://github.com/rudie-g/livreSearch",imgSrc:"https://i.imgur.com/9T72LMW.png?1"}],p={cardStyle:{marginTop:"20px",height:"30rem",width:"27rem",textAlign:"center",marginRight:"20%"},textStyle:{marginTop:"15px"},techStyle:{lineHeight:"16px"},linkStyle:{marginTop:"15px"},wrapper:{padding:"30px",marginLeft:".5%",marginRight:".5%"}},h=function(){return n.a.createElement("div",{className:"projectsContainer",id:"projects"},n.a.createElement(l.a,{className:"projectsRow"},d.map(function(e,t){return 4!==e.id?n.a.createElement(s.a,{key:t,xs:12,md:6,lg:4,style:p.wrapper},n.a.createElement(u.a,{style:p.cardStyle},n.a.createElement(u.a.Img,{src:e.imgSrc}),n.a.createElement(u.a.Body,{style:p.cardBodyStyle},n.a.createElement(u.a.Title,{style:p.textStyle},e.name),n.a.createElement(u.a.Text,{style:p.textStyle},e.description),n.a.createElement(u.a.Text,{style:p.techStyle},"Tech Used: ",e.techUsed),n.a.createElement("a",{href:e.view}," ",n.a.createElement(m.a,{variant:"dark",className:"mt-auto",style:{padding:".8%"}},"View Code"))))):n.a.createElement(s.a,{key:t,xs:12,md:6,lg:4,style:p.wrapper},n.a.createElement(u.a,{style:p.cardStyle},n.a.createElement(u.a.Img,{src:e.imgSrc}),n.a.createElement(u.a.Body,null,n.a.createElement(u.a.Title,{style:p.textStyle},e.name),n.a.createElement(u.a.Text,{style:p.textStyle},e.description),n.a.createElement("a",{href:e.view}," ",n.a.createElement(m.a,{variant:"dark",className:"mt-auto",style:{padding:".8%"}},"View Site")))))})))},v=a(7),f=a(30),g=a(32),E=a(26);a(39);function y(){y=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,r=Object.defineProperty||function(e,t,a){e[t]=a.value},n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",c=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function l(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(_){l=function(e,t,a){return e[t]=a}}function s(e,t,a,n){var o=t&&t.prototype instanceof d?t:d,c=Object.create(o.prototype),i=new L(n||[]);return r(c,"_invoke",{value:N(e,a,i)}),c}function m(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(_){return{type:"throw",arg:_}}}e.wrap=s;var u={};function d(){}function p(){}function h(){}var v={};l(v,o,function(){return this});var f=Object.getPrototypeOf,g=f&&f(f(k([])));g&&g!==t&&a.call(g,o)&&(v=g);var E=h.prototype=d.prototype=Object.create(v);function b(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function w(e,t){var n;r(this,"_invoke",{value:function(r,o){function c(){return new t(function(n,c){!function r(n,o,c,i){var l=m(e[n],e,o);if("throw"!==l.type){var s=l.arg,u=s.value;return u&&"object"==typeof u&&a.call(u,"__await")?t.resolve(u.__await).then(function(e){r("next",e,c,i)},function(e){r("throw",e,c,i)}):t.resolve(u).then(function(e){s.value=e,c(s)},function(e){return r("throw",e,c,i)})}i(l.arg)}(r,o,n,c)})}return n=n?n.then(c,c):c()}})}function N(e,t,a){var r="suspendedStart";return function(n,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===n)throw o;return O()}for(a.method=n,a.arg=o;;){var c=a.delegate;if(c){var i=x(c,a);if(i){if(i===u)continue;return i}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===r)throw r="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);r="executing";var l=m(e,t,a);if("normal"===l.type){if(r=a.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:a.done}}"throw"===l.type&&(r="completed",a.method="throw",a.arg=l.arg)}}}function x(e,t){var a=t.method,r=e.iterator[a];if(void 0===r)return t.delegate=null,"throw"===a&&e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method)||"return"!==a&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+a+"' method")),u;var n=m(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,u;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function k(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function t(){for(;++r<e.length;)if(a.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return n.next=n}}return{next:O}}function O(){return{value:void 0,done:!0}}return p.prototype=h,r(E,"constructor",{value:h,configurable:!0}),r(h,"constructor",{value:p,configurable:!0}),p.displayName=l(h,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,l(e,i,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},b(w.prototype),l(w.prototype,c,function(){return this}),e.AsyncIterator=w,e.async=function(t,a,r,n,o){void 0===o&&(o=Promise);var c=new w(s(t,a,r,n),o);return e.isGeneratorFunction(a)?c:c.next().then(function(e){return e.done?e.value:c.next()})},b(E),l(E,i,"Generator"),l(E,o,function(){return this}),l(E,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),a=[];for(var r in t)a.push(r);return a.reverse(),function e(){for(;a.length;){var r=a.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=k,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(a,r){return c.type="throw",c.arg=e,t.next=a,r&&(t.method="next",t.arg=void 0),!!r}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],c=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var i=a.call(o,"catchLoc"),l=a.call(o,"finallyLoc");if(i&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=e,c.arg=t,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),j(a),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var r=a.completion;if("throw"===r.type){var n=r.arg;j(a)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:k(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),u}},e}var b=function(){var e=Object(f.a)(),t=e.register,a=e.handleSubmit,r=e.reset,o=e.formState.errors,c=function(){var e=Object(v.a)(y().mark(function e(t){var a,n,o,c,i;return y().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.name,n=t.email,o=t.subject,c=t.message,e.prev=1,i={name:a,email:n,subject:o,message:c},e.next=5,g.a.send(Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_SERVICE_ID,Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_TEMPLATE_ID,i,Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_USER_ID);case 5:r(),Object(E.b)("Form sent!",{position:"bottom-right",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!1,className:"submit-feedback success",toastId:"notifyToast"}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}},e,null,[[1,9]])}));return function(t){return e.apply(this,arguments)}}();return n.a.createElement("div",{className:"contactFormDiv",id:"contact"},n.a.createElement("div",null,n.a.createElement("div",null,n.a.createElement("div",null,n.a.createElement("h1",null,"Send Me An Email"),n.a.createElement("div",{className:"contactForm"},n.a.createElement("form",{id:"contact-form",onSubmit:a(c),noValidate:!0},n.a.createElement("div",null,n.a.createElement("div",null,n.a.createElement("input",Object.assign({type:"text",name:"name"},t("name",{required:{value:!0,message:"Please enter your name"},maxLength:{value:30,message:"Please use 30 characters or less"}}),{className:"form-control formInput",placeholder:"Name"})),o.name&&n.a.createElement("span",{className:"errorMessage"},o.name.message)),n.a.createElement("div",null,n.a.createElement("input",Object.assign({type:"email",name:"email"},t("email",{required:!0,pattern:/^[a-zA-Z0-9.!#$%&\u2019*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/}),{className:"form-control formInput",placeholder:"Your email address"})),o.email&&n.a.createElement("span",{className:"errorMessage"},"Please enter a valid email address"))),n.a.createElement("div",null,n.a.createElement("div",null,n.a.createElement("input",Object.assign({type:"text",name:"subject"},t("subject",{required:{value:!0,message:"Please enter a subject"},maxLength:{value:75,message:"Subject cannot exceed 75 characters"}}),{className:"form-control formInput",placeholder:"Subject"})),o.subject&&n.a.createElement("span",{className:"errorMessage"},o.subject.message))),n.a.createElement("div",null,n.a.createElement("div",null,n.a.createElement("textarea",Object.assign({rows:3,name:"message"},t("message",{required:!0}),{className:"form-control formInput",placeholder:"Message"})),o.message&&n.a.createElement("span",{className:"errorMessage"},"Please enter a message"))),n.a.createElement("button",{className:"submit-btn",type:"submit"},"Submit"))),n.a.createElement(E.a,null)))))};var w=function(){return n.a.createElement("div",{className:"footer bg-dark"},"Copyright \xa9 Rauol D Moore 2022")},N={margins:{marginTop:"100px",height:"400px"}},x=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container",style:N.margins},n.a.createElement(i.a,{type:"cobweb",color:"#ffbb00",bg:{position:"absolute",zIndex:-1,top:0,left:0,width:"100%",height:1200}}),n.a.createElement("div",{className:"row "},n.a.createElement("div",{className:"col-md-8 col-sm-12 order-sm-first order-last"},n.a.createElement("div",{className:"shadow",id:"theSelf"},n.a.createElement("img",{src:"./images/theSelf2.jpg",className:"bottom",alt:"headshot"}),n.a.createElement("img",{src:"./images/theSelf3.jpg",className:"top",alt:"headshot"}))),n.a.createElement("div",{className:"col-md-4 col-sm-12 leftJust"},n.a.createElement("p",null,"I'm a web developer proficient in ",n.a.createElement("span",null,"Javascript"),", specializing in ",n.a.createElement("span",null,"Backend Development")," but with a passion for ",n.a.createElement("span",null,"UX/UI"),". "),n.a.createElement("p",null," I excel at ",n.a.createElement("span",null,"Creative Problem Solving")," and challenging work environments. I am perfectly capable of, and comfortable with, ",n.a.createElement("span",null,"Full Stack Development"),", particularly in the ",n.a.createElement("span",null,"MERN Stack"),", but I am always looking to expand my toolbox with new languages and technologies! ")))),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row "},n.a.createElement("div",{className:"col-sm-4",id:"skillsText"},n.a.createElement("div",{className:"myNames"},n.a.createElement("h1",{id:"rauoldmoore"},"Rauol D Moore"),n.a.createElement("h3",{id:"rudieg"},"Rudie G"))),n.a.createElement("div",{className:"col-sm-8  order-last"},n.a.createElement("div",{className:"wrap-circles"},n.a.createElement("div",{className:"circle"},n.a.createElement("div",{className:"inner"},"HTML & CSS")),n.a.createElement("div",{className:"circle"},n.a.createElement("div",{className:"inner"},"JavaScript")),n.a.createElement("div",{className:"circle"},n.a.createElement("div",{className:"inner"},"Express JS")),n.a.createElement("div",{className:"circle"},n.a.createElement("div",{className:"inner"},"Node JS")),n.a.createElement("div",{className:"circle"},n.a.createElement("div",{className:"inner"},"MySQL")),n.a.createElement("div",{className:"circle"},n.a.createElement("div",{className:"inner"},"UX/UI Design")),n.a.createElement("div",{className:"circle"},n.a.createElement("div",{className:"inner"},"MongoDB")),n.a.createElement("div",{className:"circle"},n.a.createElement("div",{className:"inner"},"GraphQL")),n.a.createElement("div",{className:"circle"},n.a.createElement("div",{className:"inner"},"React")))))),n.a.createElement(h,null),n.a.createElement(b,null),n.a.createElement(w,null))},S=a(5);var j=function(){var e=Object(r.useState)(!1),t=Object(S.a)(e,2);return t[0],t[1],n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark ourNav"},n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},n.a.createElement("ul",{className:"navbar-nav"},n.a.createElement("li",null,n.a.createElement("a",{className:"nav-link",href:"#about"},"About ")),n.a.createElement("li",null,n.a.createElement("a",{className:"nav-link",href:"#projects"},"Projects")),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link ",href:"#contact"},"Contact")))))};a(31),a(2);var L=function(){return n.a.createElement("div",{className:"main",id:"about"},n.a.createElement(j,null),n.a.createElement(x,null))};c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(L,null)),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.c22530dc.chunk.js.map
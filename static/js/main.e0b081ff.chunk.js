(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,a,t){e.exports=t(38)},28:function(e,a,t){},29:function(e,a,t){},38:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(13),c=t.n(r),o=(t(28),t(8)),s=(t(29),t(11)),m=t(2),i=t(1),u=t.n(i),p=t(6),d=t(22),E=t(21),g=t(17);t(32);var h=function(e){var a=Object(d.a)(),t=a.register,n=a.handleSubmit,r=a.reset,c=a.formState.errors,o=function(){var e=Object(p.a)(u.a.mark(function e(a){var t,n,l,c,o;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.name,n=a.email,l=a.subject,c=a.message,e.prev=1,o={name:t,email:n,subject:l,message:c},e.next=5,E.a.send(Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_SERVICE_ID,Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_TEMPLATE_ID,o,Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_USER_ID);case 5:r(),Object(g.b)("Form sent!",{position:"bottom-right",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!1,className:"submit-feedback success",toastId:"notifyToast"}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}},e,null,[[1,9]])}));return function(a){return e.apply(this,arguments)}}();return e.projectData?(e.projectData.deployedLink||(e.projectData.deployedLink="No Deployed Link"),l.a.createElement("div",{className:"projectCard"},l.a.createElement("img",{src:e.projectData.imgSrc,alt:e.projectData.name}),l.a.createElement("h3",{className:e.projectData.name},e.projectData.name),l.a.createElement("span",{className:"projectDetails"},e.projectData.description),l.a.createElement("p",null,"Technologies Used: "),l.a.createElement("span",{className:"projectDetails"},e.projectData.techUsed),l.a.createElement("p",null,"My Role: "),l.a.createElement("span",{className:"projectDetails"},e.projectData.role),l.a.createElement("a",{href:e.projectData.deployedLink},"Deployed Project: ",e.projectData.deployedLink),l.a.createElement("a",{href:e.projectData.githubLink},"Github Link: ",e.projectData.githubLink))):l.a.createElement("div",{className:"contactFormDiv"},l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("div",{className:"contactForm"},l.a.createElement("form",{id:"contact-form",onSubmit:n(o),noValidate:!0},l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("input",Object.assign({type:"text",name:"name"},t("name",{required:{value:!0,message:"Please enter your name"},maxLength:{value:30,message:"Please use 30 characters or less"}}),{className:"form-control formInput",placeholder:"Name"})),c.name&&l.a.createElement("span",{className:"errorMessage"},c.name.message)),l.a.createElement("div",null,l.a.createElement("input",Object.assign({type:"email",name:"email"},t("email",{required:!0,pattern:/^[a-zA-Z0-9.!#$%&\u2019*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/}),{className:"form-control formInput",placeholder:"Your email address"})),c.email&&l.a.createElement("span",{className:"errorMessage"},"Please enter a valid email address"))),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("input",Object.assign({type:"text",name:"subject"},t("subject",{required:{value:!0,message:"Please enter a subject"},maxLength:{value:75,message:"Subject cannot exceed 75 characters"}}),{className:"form-control formInput",placeholder:"Subject"})),c.subject&&l.a.createElement("span",{className:"errorMessage"},c.subject.message))),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("textarea",Object.assign({rows:3,name:"message"},t("message",{required:!0}),{className:"form-control formInput",placeholder:"Message"})),c.message&&l.a.createElement("span",{className:"errorMessage"},"Please enter a message"))),l.a.createElement("button",{className:"submit-btn",type:"submit"},"Submit"))),l.a.createElement(g.a,null)))))};var v=function(e){var a=e.projectData.map(function(e){return l.a.createElement("div",{className:"projectListItem"},l.a.createElement(s.b,{to:"/".concat(e.id)},l.a.createElement("span",{className:e.name},e.name)))});return l.a.createElement(s.a,null,l.a.createElement("div",{className:"projectList"},a),l.a.createElement("div",{id:"projectDisplay"},l.a.createElement(m.c,null,l.a.createElement(m.a,{path:"/1"},l.a.createElement(h,{projectData:e.projectData[0]})),l.a.createElement(m.a,{path:"/2"},l.a.createElement(h,{projectData:e.projectData[1]})),l.a.createElement(m.a,{path:"/3"},l.a.createElement(h,{projectData:e.projectData[2]})))))};var b=function(){return l.a.createElement("div",{className:"footer"},"Copyright \xa9 Rauol D Moore 2021")};var f=function(){return l.a.createElement("div",{className:"contact"},l.a.createElement("h2",null,"Email Me"),l.a.createElement(h,{projectData:!1}),l.a.createElement("p",null,"rauoldm@gmail.com"))};var N=function(){return l.a.createElement("div",{className:"about"},l.a.createElement("div",{className:"aboutHead"},l.a.createElement("h3",null,"About"),l.a.createElement("p",null,"I'm a web developer proficient in ",l.a.createElement("span",null,"Javascript"),", specializing in ",l.a.createElement("span",null,"Backend Development")," but with a passion for ",l.a.createElement("span",null,"UX/UI"),". I excel at ",l.a.createElement("span",null,"Creative Problem Solving")," and challenging work environments. I am perfectly capable of, and comfortable with, ",l.a.createElement("span",null,"Full Stack Development"),", particularly in the ",l.a.createElement("span",null,"MERN Stack"),", but I am always looking to expand my toolbox with new languages and technologies!")),l.a.createElement("div",{className:"aboutContainer"},l.a.createElement("div",{className:"aboutCard"},l.a.createElement("h4",null,"Strengths"),l.a.createElement("li",null,"Very Quick Learner"),l.a.createElement("li",null,"Creative Problem Solver"),l.a.createElement("li",null,"Teamwork and Leadership")),l.a.createElement("div",{className:"aboutCard"},l.a.createElement("h4",null,"Interests"),l.a.createElement("li",null,"Efficient Data Storage"),l.a.createElement("li",null,"Cloud-Based Computing"),l.a.createElement("li",null,"Mobile-Focused Development")),l.a.createElement("div",{className:"aboutCard"},l.a.createElement("h4",null,"Hobbies"),l.a.createElement("li",null,"Songwriting"),l.a.createElement("li",null,"Poetry"),l.a.createElement("li",null,"Combat Sports"))))};var j=function(){var e=Object(n.useState)(0),a=Object(o.a)(e,2),t=a[0],r=a[1];return Object(n.useEffect)(function(){var e=setInterval(function(){r(t<=7?t+1:0)},5e3);return function(){return clearInterval(e)}},[t]),l.a.createElement("div",{className:"header"},l.a.createElement("div",{className:"shadow",id:"theSelf"},l.a.createElement("img",{src:"./images/theSelf2.jpg",className:"bottom",alt:"headshot"}),l.a.createElement("img",{src:"./images/theSelf3.jpg",className:"top",alt:"headshot"})),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"myNames"},l.a.createElement("h1",{id:"rauoldmoore"},"Rauol D Moore"),l.a.createElement("h3",{id:"rudieg"},"Rudie G")),l.a.createElement("div",{className:"skillsBorderBox"},l.a.createElement("div",{id:"skillsContainer"},l.a.createElement("p",{id:"skill"},["Javascript","UX/UI Design","Backend Development","Database/API Management","Full Stack Development","MERN Stack","GraphQL","MongoDB","MySQL"][t]))))},D=[{id:1,name:"GoodNeighbor",description:"A community-driven service-exchange app written using node, express, and handlebars",role:"Backend Development, UX/UI Design, Project Management",techUsed:"Node, Express, Handlebars, MySQL, Sequelize, Bootstrap",deployedLink:"thegoodneighbor.herokuapp.com",githubLink:"https://github.com/Northwestern-Coding-Bootcamp-Project-2/GoodNeighbor",imgSrc:"https://i.imgur.com/UsOxQq7.jpeg"},{id:2,name:"Tripsight",description:"A one stop shop for all things travel content, pictures for planning future travel or just getting your fix of far off places! Allows the user to create an account, post blogs and search other users blogs.",role:"Backend Development, API Management, Frontend Development",techUsed:"React, Node.js, MongoDB, Mongoose, GraphQL, Apollo, JavaScript and Sass",deployedLink:"https://tripsight.herokuapp.com/",githubLink:"https://github.com/travel-app-devs/TripSight",imgSrc:"https://github.com/travel-app-devs/TripSight/blob/main/client/public/previewImage1.png?raw=true"},{id:3,name:"Ebuy",description:"An ecommerce backend built using express and sequelize",role:"Sole Author",techUsed:"Express, Node, Sequelize, MySQL",githubLink:"https://github.com/rudie-g/Ebuy",imgSrc:"https://i.imgur.com/0WXwmcP.png"}];var k=function(){var e=Object(n.useState)("0%"),a=Object(o.a)(e,2),t=a[0],r=a[1],c=function(){r("0%")};return l.a.createElement(s.a,null,l.a.createElement("div",{className:"App"},l.a.createElement("h4",{id:"navopen",onClick:function(){r("25%")}},"| Links \u279c"),l.a.createElement("div",{className:"sidenav",style:{width:t}},l.a.createElement("div",{className:"navBtnContainer",onClick:c},l.a.createElement("a",{href:"https://www.github.com/rudie-g"},l.a.createElement("img",{src:"images/github-icon.png",alt:"navbar icon"}),l.a.createElement("h4",{className:"navBtn"},"Github"))),l.a.createElement("div",{className:"navBtnContainer",onClick:c},l.a.createElement("a",{href:"https://www.linkedin.com/in/rauol-moore-22144620a/"},l.a.createElement("img",{src:"images/in-Blue.png",alt:"navbar icon"}),l.a.createElement("h4",{className:"navBtn"},"LinkedIn"))),l.a.createElement("div",{className:"navBtnContainer",onClick:c},l.a.createElement("a",{href:"https://docs.google.com/document/d/1EeSvIrYfqTyJJRiHwth2N5kR4Y0ahdW3BiKQ5R9xOZQ/edit?usp=sharing"},l.a.createElement("img",{src:"images/homepage-icon.png",alt:"navbar icon"}),l.a.createElement("h4",{className:"navBtn"},"View Resume"))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"navclose",onClick:c},l.a.createElement("p",{className:"theX"},"\u2716"),l.a.createElement("p",{className:"theX"},"close"))),l.a.createElement(j,null),l.a.createElement(m.a,{path:"/"},l.a.createElement(N,null)),l.a.createElement("div",{className:"nativenav"},l.a.createElement(s.b,{to:"/contact"},l.a.createElement("div",{className:"navBtnContainer"},l.a.createElement("img",{src:"images/contact-icon.png",alt:"navbar icon"})),l.a.createElement("h4",{className:"navBtn",href:"#contactContainer"},"Click to Contact"))),l.a.createElement(m.c,null,l.a.createElement(m.a,{path:"/contact"},l.a.createElement("div",{id:"contactContainer"},l.a.createElement(f,null)))),l.a.createElement("div",{id:"projectListContainer"},l.a.createElement("h2",null,"Some of my work"),l.a.createElement(v,{projectData:D})),l.a.createElement(b,null)))},S=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,39)).then(function(a){var t=a.getCLS,n=a.getFID,l=a.getFCP,r=a.getLCP,c=a.getTTFB;t(e),n(e),l(e),r(e),c(e)})};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(k,null)),document.getElementById("root")),S()}},[[23,1,2]]]);
//# sourceMappingURL=main.e0b081ff.chunk.js.map
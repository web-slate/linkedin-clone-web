"use strict";(self.webpackChunklinkedin_clone_web=self.webpackChunklinkedin_clone_web||[]).push([[789],{2872:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var n=a(7294);const l=function(){return n.createElement(n.Fragment,null,n.createElement("div",{id:"profile-groups"},n.createElement("section",null,n.createElement("header",null,n.createElement("span",null,"Recent"),n.createElement("span",{className:"fas fa-angle-up"})),n.createElement("ul",{className:"group-list"},n.createElement("li",null,n.createElement("span",{className:"fas fa-users"}),n.createElement("span",null,"React Developers")),n.createElement("li",null,n.createElement("span",{className:"fas fa-hashtag"}),n.createElement("span",null,"javascript")),n.createElement("li",null,n.createElement("span",{className:"fas fa-hashtag"}),n.createElement("span",null,"webdevelopment")),n.createElement("li",null,n.createElement("span",{className:"fas fa-users"}),n.createElement("span",null,"Javascript Brasil")),n.createElement("li",null,n.createElement("span",{className:"fas fa-users"}),n.createElement("span",null,"Dog Lovers")))),n.createElement("section",null,n.createElement("header",null,n.createElement("span",{className:"group-title"},"Groups"),n.createElement("span",{className:"fas fa-angle-up"})),n.createElement("ul",null,n.createElement("li",null,n.createElement("span",{className:"fas fa-users"}),n.createElement("span",{id:"aaaa"},"React Developers")),n.createElement("li",null,n.createElement("span",{className:"fas fa-users"}),n.createElement("span",null,"Javascript Brasil")),n.createElement("li",null,n.createElement("span",{className:"fas fa-users"}),n.createElement("span",null,"Dog Lovers"))),n.createElement("div",{className:"group-list"},n.createElement("a",{href:"#"},"See all"))),n.createElement("section",null,n.createElement("header",null,n.createElement("span",{className:"group-title"},"Followed Hashtags"),n.createElement("span",{className:"fas fa-angle-up"})),n.createElement("ul",null,n.createElement("li",null,n.createElement("span",{className:"fas fa-hashtag"}),n.createElement("span",null,"javascript")),n.createElement("li",null,n.createElement("span",{className:"fas fa-hashtag"}),n.createElement("span",null,"webdevelopment"))),n.createElement("a",{href:"#"},"See all")),n.createElement("a",{href:"#"},"Discover more")))},r=function(){return n.createElement(n.Fragment,null,n.createElement("div",{id:"profile-card"},n.createElement("div",{id:"background"}),n.createElement("div",{id:"profile-info"},n.createElement("img",{src:"https://avatars.githubusercontent.com/u/1652629?v=4",alt:"Profile picture"}),n.createElement("strong",{id:"profile-name"},"Venkat"),n.createElement("small",null,"Application Manager")),n.createElement("div",{id:"profile-links"},n.createElement("a",{href:"#"},n.createElement("span",null,"Who's viewed your profile"),n.createElement("span",{className:"profile-number"},"102")),n.createElement("a",{href:"#"},n.createElement("span",null,"Connections"),n.createElement("span",{className:"profile-number"},"452"))),n.createElement("span",null,"Grow your network"),n.createElement("a",{href:"#"},n.createElement("span",null,"Access exclusive tools & insights"),n.createElement("span",{id:"profile-premium"},n.createElement("span",{id:"profile-square"},"■")," Try Premium Free for 1 Month"))))},s=function(){return n.createElement(n.Fragment,null,n.createElement("div",{id:"left-aside-wrapper"},n.createElement("aside",{id:"left-aside"},n.createElement(r,null),n.createElement(l,null))))},c=function(){return n.createElement(n.Fragment,null,n.createElement("div",{id:"share-box"},n.createElement("div",{id:"button-box"},n.createElement("button",{id:"btn-post"},n.createElement("span",{className:"fas fa-edit"}),n.createElement("span",{id:"btn-text"},"Start a post")),n.createElement("button",{id:"btn-picture"},n.createElement("span",{className:"fas fa-camera"})),n.createElement("button",{id:"btn-video"},n.createElement("span",{className:"fas fa-video"})),n.createElement("button",{id:"btn-document"},n.createElement("span",{className:"fas fa-file"}))),n.createElement("div",{id:"link-box"},n.createElement("a",{href:"#"},"Write an article"),n.createElement("span",null,"on LinkedIn"))))};var m=a(9669);const i=a.n(m)().create({baseURL:"https://linkedincloneapp01.herokuapp.com/api",headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":"true"}});var u=a(8422);const o=function(){return n.createElement(n.Fragment,null,n.createElement("div",{id:"post-author"},n.createElement("a",{href:"#"},n.createElement("div",null,n.createElement("img",{src:"https://avatars.githubusercontent.com/u/16048888?s=96&v=4",alt:""}),n.createElement("div",null,n.createElement("div",null,n.createElement("strong",{id:"post-author-name"},"Govindaraj K"),n.createElement("span",null,n.createElement("span",null," · "),"1st")),n.createElement("span",null,"Web Developer at Jp Morgan"),n.createElement("span",null,"12h")))),n.createElement("div",null,n.createElement("span",{className:"fas fa-circle"}),n.createElement("span",{className:"fas fa-circle"}),n.createElement("span",{className:"fas fa-circle"}))))},E=function(){return n.createElement(n.Fragment,null,n.createElement("div",{id:"post-data"},n.createElement("p",null,"Yesterday I had a conversation with",n.createElement("span",null," Yuvraj "),", Front-End Developer, and found out that he cloned LinkedIn layout using HTML/CSS. I think you should check this out ;)"),n.createElement("p",{id:"post-translation"},n.createElement("button",null,"See translation"))))},p=function(){return n.createElement(n.Fragment,null,n.createElement("div",{id:"post-interactions"},n.createElement("div",{id:"interactions-amount"},n.createElement("span",{id:"like-icon",className:"fas fa-thumbs-up fa-flip-horizontal"}),n.createElement("span",{id:"heart-icon",className:"fas fa-heart"}),n.createElement("span",{id:"amount-info"},"23 ",n.createElement("span",null," · ")," 4 Comments")),n.createElement("div",{id:"interactions-btns"},n.createElement("button",null,n.createElement("span",{className:"far fa-thumbs-up fa-flip-horizontal"}),n.createElement("span",null,"Like")),n.createElement("button",null,n.createElement("span",{className:"far fa-comment-dots fa-flip-horizontal"}),n.createElement("span",null,"Comment")),n.createElement("button",null,n.createElement("span",{className:"far fa-share-square"}),n.createElement("span",null,"Share")))))},d=function(){const{isLoading:e,serverError:t,postItems:a}=(()=>{const[e,t]=(0,n.useState)(!0),[a,l]=(0,n.useState)(null),[r,s]=(0,n.useState)(null);return(0,n.useEffect)((()=>{(async()=>{try{const e=await i.get("/feed?userId=2"),a=null==e?void 0:e.data;l(a),t(!1)}catch(e){s(!0),t(!1)}})()}),[]),{isLoading:e,postItems:a,serverError:r}})(),l={success:a,error:t,loading:e};return n.createElement(n.Fragment,null,n.createElement("div",{id:"main-wrapper"},n.createElement("main",{id:"main-section"},n.createElement(c,null),n.createElement(u.Xd,{statusMapping:l},n.createElement(u.Xd.Fetching,null,n.createElement("div",null,"Loading...")),n.createElement(u.Xd.Fetched,null,n.createElement("span",null,JSON.stringify(a))),n.createElement(u.Xd.Error,null,n.createElement("div",null,"sorry error message"))),n.createElement("div",{id:"feed-sort"},n.createElement("hr",null),n.createElement("button",null,n.createElement("span",null,"Sort by:"),n.createElement("strong",null,"Top"),n.createElement("span",{className:"fas fa-sort-down"}))),n.createElement("article",null,n.createElement(o,null),n.createElement(E,null),n.createElement(p,null)))))};var f=a(4428);const h=function(){return window.addEventListener("scroll",(e=>{const t=document.getElementById("profile-groups"),a=document.getElementById("linkedin-section"),n=document.getElementById("right-aside");window.scrollY>356?(t.classList.add("position-fixed"),a.classList.add("position-fixed","right-aside-fixed"),n.classList.add("vanish")):(t.classList.remove("position-fixed"),a.classList.remove("position-fixed","right-aside-fixed"),n.classList.remove("vanish"))})),n.createElement(f.Z,null,n.createElement(s,null),n.createElement(d,null))}}}]);
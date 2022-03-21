import{d as E,o as l,c as d,a as s,b as f,t as m,e as p,f as B,g as U,r as R,h as N,u as r,i as u,w as h,p as S,j as O,k as P,l as T,F as I,m as W,n as b,R as v,q as D,s as H}from"./vendor.168a59b9.js";const M=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function a(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(t){if(t.ep)return;t.ep=!0;const i=a(t);fetch(t.href,i)}};M();const j=E("messages",{state:()=>({notifications:[{type:"primary",message:"This is a primary notification"},{type:"link",message:"This is a link notification"},{type:"success",message:"Yay you did it!"},{type:"warning",message:"Uh Oh! Watch out!"},{type:"danger",message:"I cant believe you just did that!"}]}),actions:{close(e){this.notifications.splice(e,1)}}}),V="modulepreload",C={},F="/",J=function(o,a){return!a||a.length===0?o():Promise.all(a.map(n=>{if(n=`${F}${n}`,n in C)return;C[n]=!0;const t=n.endsWith(".css"),i=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${i}`))return;const c=document.createElement("link");if(c.rel=t?"stylesheet":V,t||(c.as="script",c.crossOrigin=""),c.href=n,document.head.appendChild(c),t)return new Promise((L,A)=>{c.addEventListener("load",L),c.addEventListener("error",A)})})).then(()=>o())};var w=(e,o)=>{const a=e.__vccOpts||e;for(const[n,t]of o)a[n]=t;return a};const q={},Y={class:"section"},z=s("h1",{class:"title"},"Home Page",-1),K=[z];function G(e,o){return l(),d("div",Y,K)}var Q=w(q,[["render",G]]);const X={class:"section"},Z={class:"title"},g=f({props:{title:{type:String,default:"Hello World"}},setup(e){const o=e;return(a,n)=>(l(),d("div",X,[s("h1",Z,m(o.title),1)]))}}),ss={class:"section"},ts=s("h1",{class:"title"},"Login Page",-1),es=s("span",{class:"icon"},[s("i",{class:"fa fa-sign-in"})],-1),os=s("span",null,"Login",-1),as=[es,os],ns=p(" \xA0 "),is=s("span",{class:"icon"},[s("i",{class:"fa fa-sign-in"})],-1),rs=s("span",null,"Bad Login",-1),cs=[is,rs],ls=f({setup(e){function o(){x("Andres Mena","meme")}function a(){x("@joannadoe","password")}return(n,t)=>(l(),d("div",ss,[ts,s("button",{class:"button is-primary",onClick:a},as),ns,s("button",{class:"button is-warning",onClick:o},cs)]))}}),ds=[{path:"/",component:Q},{path:"/about",component:g,props:{title:"About Page!"}},{path:"/contact",component:g,props:{title:"Contact Page!"}},{path:"/login",component:ls},{path:"/signup",component:g,props:{title:"Signup Page!"}},{path:"/wall",component:()=>J(()=>import("./Wall.110ffcef.js"),["assets/Wall.110ffcef.js","assets/Wall.a0b51b7e.css","assets/vendor.168a59b9.js"])},{path:"/hidden",component:g,props:{title:"You reached the hiddden Page!"}}],y=B({history:U(),routes:ds,linkActiveClass:"is-active"});y.beforeEach((e,o)=>{_.destinationUrl==null&&e.path!="/login"&&(_.destinationUrl=e.path);const a=["/messages","/wall","/feed","/hidden"];if(console.log({protectedUrls:a}),a.includes(e.path)&&!_.user)return"/login"});const us=[{firstName:"John",lastName:"Doe",handle:"@johndoe",password:"password",email:"email@email.com",pic:"https://randomuser.me/api/portraits/men/1.jpg",id:1},{firstName:"Joanna",lastName:"Doe",handle:"@joannadoe",password:"password",email:"Joanna@email.com",pic:"https://randomuser.me/api/portraits/women/2.jpg",id:2},{firstName:"Obo",lastName:"Doe",handle:"@Obodoe",password:"password",email:"Obo@email.com",pic:"https://randomuser.me/api/portraits/men/3.jpg",id:3}],$=R({user:null,destinationUrl:null});async function x(e,o){var t;const a=us.find(i=>i.handle===e),n=j();try{if(!a)throw{message:"User not found"};if(a.password!==o)throw{message:"Incorrect password"};n.notifications.push({type:"success",message:`Welcome back ${a.firstName}`}),$.user=a,y.push((t=$.destinationUrl)!=null?t:"/wall")}catch(i){n.notifications.push({type:"danger",message:i.message})}}function _s(){$.user=null,y.push("/login")}var _=$;const k=e=>(S("data-v-6aa0b106"),e=e(),O(),e),ps={key:0,class:"buttons"},hs=k(()=>s("strong",null,"Sign up",-1)),ms=p(" Log in "),fs={key:1,class:"buttons"},vs={class:"avatar"},gs=["src"],bs=p(),$s=k(()=>s("br",null,null,-1)),ys=k(()=>s("strong",null,"Log out",-1)),ws=[ys],ks=f({setup(e){return(o,a)=>{const n=N("router-link");return r(_).user?(l(),d("div",fs,[s("div",vs,[s("img",{src:r(_).user.pic},null,8,gs),s("div",null,[s("strong",null,m(r(_).user.firstName)+" "+m(r(_).user.lastName),1),bs,$s,s("i",null,m(r(_).user.email),1)])]),s("a",{class:"button is-primary",onClick:a[0]||(a[0]=t=>r(_s)())},ws)])):(l(),d("div",ps,[u(n,{class:"button is-primary",to:"/signup"},{default:h(()=>[hs]),_:1}),u(n,{class:"button is-light",to:"/login"},{default:h(()=>[ms]),_:1})]))}}});var Ls=w(ks,[["__scopeId","data-v-6aa0b106"]]);const Cs=e=>(S("data-v-7d7da554"),e=e(),O(),e),xs=Cs(()=>s("span",{class:"icon"},[s("i",{class:"fas fa-bell"})],-1)),Ns={key:0,class:"tag is-danger"},Ss={class:"navbar-dropdown"},Os=["onClick"],Ps=f({setup(e){const o=j(),a=P(!1);return(n,t)=>(l(),d("div",{class:b(["navbar-item has-dropdown",{"is-active":a.value}])},[s("a",{class:"navbar-link",onClick:t[0]||(t[0]=i=>a.value=!a.value)},[xs,r(o).notifications.length?(l(),d("span",Ns,m(r(o).notifications.length),1)):T("",!0)]),s("div",Ss,[(l(!0),d(I,null,W(r(o).notifications,(i,c)=>(l(),d("div",{class:b(`notification is-light is-${i.type}`)},[s("button",{class:"delete",onClick:L=>r(o).close(c)},null,8,Os),p(" "+m(i.message),1)],2))),256))])],2))}});var Is=w(Ps,[["__scopeId","data-v-7d7da554"]]);const js={class:"navbar is-info",role:"navigation","aria-label":"main navigation"},As={class:"container"},Es={class:"navbar-brand"},Bs=s("a",{class:"navbar-item",href:"https://bulma.io"},[s("img",{src:"https://bulma.io/images/bulma-logo.png",width:"112",height:"28"})],-1),Us=s("span",{"aria-hidden":"true"},null,-1),Rs=s("span",{"aria-hidden":"true"},null,-1),Ts=s("span",{"aria-hidden":"true"},null,-1),Ws=[Us,Rs,Ts],Ds={class:"navbar-start"},Hs=p(" Home "),Ms=p(" Wall "),Vs={class:"navbar-item has-dropdown is-hoverable"},Fs=s("a",{class:"navbar-link"}," More ",-1),Js={class:"navbar-dropdown"},qs=p(" About "),Ys=s("a",{class:"navbar-item"}," Jobs ",-1),zs=p(" Contact "),Ks=s("hr",{class:"navbar-divider"},null,-1),Gs=s("a",{class:"navbar-item"}," Report an issue ",-1),Qs={class:"navbar-end"},Xs={class:"navbar-item"},Zs=s("div",{class:"navbar-item"},[s("a",{class:"bd-tw-button button","data-social-network":"Twitter","data-social-action":"tweet","data-social-target":"https://bulma.io",target:"_blank",href:"https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&hashtags=bulmaio&url=https://bulma.io&via=jgthms"},[s("span",{class:"icon"},[s("i",{class:"fab fa-twitter"})]),s("span",null," Tweet ")])],-1),st=f({setup(e){const o=P(!1);return(a,n)=>(l(),d("nav",js,[s("div",As,[s("div",Es,[Bs,s("a",{role:"button",class:b(["navbar-burger",{"is-active":o.value}]),"aria-label":"menu","aria-expanded":"false",onClick:n[0]||(n[0]=t=>o.value=!o.value)},Ws,2)]),s("div",{class:b(["navbar-menu",{"is-active":o.value}])},[s("div",Ds,[u(r(v),{class:"navbar-item",to:"/"},{default:h(()=>[Hs]),_:1}),u(r(v),{class:"navbar-item",to:"/wall"},{default:h(()=>[Ms]),_:1}),s("div",Vs,[Fs,s("div",Js,[u(r(v),{class:"navbar-item",to:"/about"},{default:h(()=>[qs]),_:1}),Ys,u(r(v),{class:"navbar-item",to:"/contact"},{default:h(()=>[zs]),_:1}),Ks,Gs])])]),s("div",Qs,[s("div",Xs,[u(Ls)]),u(Is),Zs])],2)])]))}}),tt={class:"container"},et=f({setup(e){return(o,a)=>{const n=N("router-view");return l(),d(I,null,[u(st),s("div",tt,[u(n)])],64)}}});D(et).use(y).use(H()).mount("#app");

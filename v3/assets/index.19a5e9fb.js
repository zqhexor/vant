import{a as s,T as v}from"./index.4925f8d4.js";import{I as L}from"./index.f787d2de.js";import{a as D}from"./use-translate.55dc92d8.js";import{T as M}from"./function-call.367cae1e.js";import{z as N,D as d,r as w,o as r,c as P,w as l,e as i,a as f,b,B as t,h as o,t as u,F as p}from"./vue-libs.b1f02cae.js";import"./with-install.c8955fea.js";import"./use-id.94af3717.js";import"./use-expose.07028ce8.js";import"./use-route.2e5a4a96.js";import"./index.72c42701.js";import"./use-touch.491278bc.js";import"./on-popup-reopen.a7f9dc8b.js";import"./constant.80c6de18.js";import"./interceptor.58bac5b6.js";import"./use-refs.193a18d1.js";import"./index.484db6d1.js";import"./mount-component.bb4140aa.js";import"./index.2a45ff86.js";import"./use-lazy-render.15986b8e.js";import"./index.81fd671d.js";import"./index.64be35d3.js";const $=N({setup(z){const a=D({"zh-CN":{tab:"\u6807\u7B7E ",shrink:"\u6536\u7F29\u5E03\u5C40"},"en-US":{tab:"Tab ",shrink:"Shrink"}}),k=[1,2,3,4],y=d(0),B=d(0);return(U,_)=>{const C=w("demo-block");return r(),P(C,{title:t(a)("shrink")},{default:l(()=>[i(t(v),{active:y.value,"onUpdate:active":_[0]||(_[0]=c=>y.value=c),shrink:""},{default:l(()=>[(r(),f(p,null,b(k,c=>i(t(s),{title:t(a)("tab")+c,key:c},{default:l(()=>[o(u(t(a)("content"))+" "+u(c),1)]),_:2},1032,["title"])),64))]),_:1},8,["active"]),i(t(v),{active:B.value,"onUpdate:active":_[1]||(_[1]=c=>B.value=c),type:"card",shrink:"",style:{"margin-top":"var(--van-padding-lg)"}},{default:l(()=>[(r(),f(p,null,b(k,c=>i(t(s),{title:t(a)("tab")+c,key:c},{default:l(()=>[o(u(t(a)("content"))+" "+u(c),1)]),_:2},1032,["title"])),64))]),_:1},8,["active"])]),_:1},8,["title"])}}});const ot=N({setup(z){const a=D({"zh-CN":{tab:"\u6807\u7B7E ",title2:"\u6807\u7B7E\u680F\u6EDA\u52A8",title3:"\u7981\u7528\u6807\u7B7E",title4:"\u6837\u5F0F\u98CE\u683C",title5:"\u70B9\u51FB\u4E8B\u4EF6",title6:"\u7C98\u6027\u5E03\u5C40",title7:"\u81EA\u5B9A\u4E49\u6807\u7B7E",title8:"\u5207\u6362\u52A8\u753B",title9:"\u6ED1\u52A8\u5207\u6362",title10:"\u6EDA\u52A8\u5BFC\u822A",disabled:" \u5DF2\u88AB\u7981\u7528",matchByName:"\u901A\u8FC7\u540D\u79F0\u5339\u914D",beforeChange:"\u5F02\u6B65\u5207\u6362"},"en-US":{tab:"Tab ",content:"content of tab",title2:"Swipe Tabs",title3:"Disabled Tab",title4:"Card Style",title5:"Click Event",title6:"Sticky",title7:"Custom Tab",title8:"Switch Animation",title9:"Swipeable",title10:"Scrollspy",disabled:" is disabled",matchByName:"Match By Name",beforeChange:"Before Change"}}),k=d(0),y=d(0),B=d(0),U=d(0),_=d(0),C=d(0),c=d(0),g=d(0),F=d(0),T=d(0),A=d(0),S=d("b"),E=[1,2,3,4],I=({title:j})=>{M(j)},V=j=>j===1?!1:new Promise(n=>{n(j!==3)});return(j,n)=>{const m=w("demo-block");return r(),f(p,null,[i(m,{title:t(a)("basicUsage")},{default:l(()=>[i(t(v),{active:k.value,"onUpdate:active":n[0]||(n[0]=e=>k.value=e)},{default:l(()=>[(r(),f(p,null,b(E,e=>i(t(s),{title:t(a)("tab")+e,key:e},{default:l(()=>[o(u(t(a)("content"))+" "+u(e),1)]),_:2},1032,["title"])),64))]),_:1},8,["active"])]),_:1},8,["title"]),i(m,{title:t(a)("matchByName")},{default:l(()=>[i(t(v),{active:S.value,"onUpdate:active":n[1]||(n[1]=e=>S.value=e)},{default:l(()=>[i(t(s),{name:"a",title:t(a)("tab")+1},{default:l(()=>[o(u(t(a)("content"))+" 1 ",1)]),_:1},8,["title"]),i(t(s),{name:"b",title:t(a)("tab")+2},{default:l(()=>[o(u(t(a)("content"))+" 2 ",1)]),_:1},8,["title"]),i(t(s),{name:"c",title:t(a)("tab")+3},{default:l(()=>[o(u(t(a)("content"))+" 3 ",1)]),_:1},8,["title"])]),_:1},8,["active"])]),_:1},8,["title"]),i(m,{title:t(a)("title2")},{default:l(()=>[i(t(v),{active:y.value,"onUpdate:active":n[2]||(n[2]=e=>y.value=e)},{default:l(()=>[(r(),f(p,null,b(8,e=>i(t(s),{title:t(a)("tab")+e,key:e},{default:l(()=>[o(u(t(a)("content"))+" "+u(e),1)]),_:2},1032,["title"])),64))]),_:1},8,["active"])]),_:1},8,["title"]),i(m,{title:t(a)("title3")},{default:l(()=>[i(t(v),{active:B.value,"onUpdate:active":n[3]||(n[3]=e=>B.value=e)},{default:l(()=>[(r(),f(p,null,b(3,e=>i(t(s),{title:t(a)("tab")+e,disabled:e===2,key:e},{default:l(()=>[o(u(t(a)("content"))+" "+u(e),1)]),_:2},1032,["title","disabled"])),64))]),_:1},8,["active"])]),_:1},8,["title"]),i(m,{title:t(a)("title4")},{default:l(()=>[i(t(v),{active:U.value,"onUpdate:active":n[4]||(n[4]=e=>U.value=e),type:"card"},{default:l(()=>[(r(),f(p,null,b(3,e=>i(t(s),{title:t(a)("tab")+e,key:e},{default:l(()=>[o(u(t(a)("content"))+" "+u(e),1)]),_:2},1032,["title"])),64))]),_:1},8,["active"])]),_:1},8,["title"]),i(m,{title:t(a)("title5")},{default:l(()=>[i(t(v),{active:_.value,"onUpdate:active":n[5]||(n[5]=e=>_.value=e),onClickTab:I},{default:l(()=>[(r(),f(p,null,b(2,e=>i(t(s),{title:t(a)("tab")+e,key:e},{default:l(()=>[o(u(t(a)("content"))+" "+u(e),1)]),_:2},1032,["title"])),64))]),_:1},8,["active"])]),_:1},8,["title"]),i(m,{title:t(a)("title6")},{default:l(()=>[i(t(v),{active:C.value,"onUpdate:active":n[6]||(n[6]=e=>C.value=e),sticky:""},{default:l(()=>[(r(),f(p,null,b(E,e=>i(t(s),{title:t(a)("tab")+e,key:e},{default:l(()=>[o(u(t(a)("content"))+" "+u(e),1)]),_:2},1032,["title"])),64))]),_:1},8,["active"])]),_:1},8,["title"]),i($),i(m,{title:t(a)("title7")},{default:l(()=>[i(t(v),{active:c.value,"onUpdate:active":n[7]||(n[7]=e=>c.value=e)},{default:l(()=>[(r(),f(p,null,b(2,e=>i(t(s),{key:e},{title:l(()=>[i(t(L),{name:"more-o"}),o(u(t(a)("tab")),1)]),default:l(()=>[o(" "+u(t(a)("content"))+" "+u(e),1)]),_:2},1024)),64))]),_:1},8,["active"])]),_:1},8,["title"]),i(m,{title:t(a)("title8")},{default:l(()=>[i(t(v),{active:g.value,"onUpdate:active":n[8]||(n[8]=e=>g.value=e),animated:""},{default:l(()=>[(r(),f(p,null,b(E,e=>i(t(s),{title:t(a)("tab")+e,key:e},{default:l(()=>[o(u(t(a)("content"))+" "+u(e),1)]),_:2},1032,["title"])),64))]),_:1},8,["active"])]),_:1},8,["title"]),i(m,{title:t(a)("title9")},{default:l(()=>[i(t(v),{active:F.value,"onUpdate:active":n[9]||(n[9]=e=>F.value=e),swipeable:""},{default:l(()=>[(r(),f(p,null,b(E,e=>i(t(s),{title:t(a)("tab")+e,key:e},{default:l(()=>[o(u(t(a)("content"))+" "+u(e),1)]),_:2},1032,["title"])),64))]),_:1},8,["active"])]),_:1},8,["title"]),i(m,{title:t(a)("title10")},{default:l(()=>[i(t(v),{active:T.value,"onUpdate:active":n[10]||(n[10]=e=>T.value=e),scrollspy:"",sticky:""},{default:l(()=>[(r(),f(p,null,b(8,e=>i(t(s),{title:t(a)("tab")+e,key:e},{default:l(()=>[o(u(t(a)("content"))+" "+u(e),1)]),_:2},1032,["title"])),64))]),_:1},8,["active"])]),_:1},8,["title"]),i(m,{title:t(a)("beforeChange")},{default:l(()=>[i(t(v),{active:A.value,"onUpdate:active":n[11]||(n[11]=e=>A.value=e),"before-change":V},{default:l(()=>[(r(),f(p,null,b(4,e=>i(t(s),{title:t(a)("tab")+e,key:e},{default:l(()=>[o(u(t(a)("content"))+" "+u(e),1)]),_:2},1032,["title"])),64))]),_:1},8,["active"])]),_:1},8,["title"])],64)}}});export{ot as default};
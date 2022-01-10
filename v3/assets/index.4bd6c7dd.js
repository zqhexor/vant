import{c as U,b as R,L as W,i as H,X as K,n as L,G,P as Q,u as X,t as Y,a as Z}from"./use-translate.55dc92d8.js";import{t as D,n as q,c as J,m as ee,w as z,b as te,u as _}from"./with-install.c8955fea.js";import{H as oe}from"./constant.80c6de18.js";import{u as le}from"./use-id.94af3717.js";import{z as S,D as V,C as E,e as o,H as ne,j as ae,v as ue,Q as se,R as ie,r as re,o as de,a as ce,w as c,B as t,d as pe,h as me,t as ve,F as fe}from"./vue-libs.b1f02cae.js";import{u as Ce}from"./use-expose.07028ce8.js";import{C as I}from"./index.e44b8753.js";import{I as we}from"./index.f787d2de.js";import{P as be}from"./index.2a45ff86.js";import{S as F}from"./index.41cbc385.js";import{B as xe}from"./index.7415a29e.js";import"./use-route.2e5a4a96.js";import"./interceptor.58bac5b6.js";import"./use-touch.491278bc.js";import"./use-lazy-render.15986b8e.js";import"./on-popup-reopen.a7f9dc8b.js";import"./index.81fd671d.js";import"./index.64be35d3.js";const[N,j]=U("dropdown-menu"),Ve={overlay:D,zIndex:q,duration:J(.2),direction:ee("down"),activeColor:String,closeOnClickOutside:D,closeOnClickOverlay:D},$=Symbol(N);var ge=S({name:N,props:Ve,setup(a,{slots:u}){const v=le(),s=V(),p=V(),r=V(0),{children:i,linkChildren:w}=R($),b=W(s),g=E(()=>i.some(e=>e.state.showWrapper)),y=E(()=>{if(g.value&&H(a.zIndex))return{zIndex:+a.zIndex+1}}),l=()=>{a.closeOnClickOutside&&i.forEach(e=>{e.toggle(!1)})},f=()=>{if(p.value){const e=G(p);a.direction==="down"?r.value=e.bottom:r.value=Q.value-e.top}},n=()=>{g.value&&f()},T=e=>{i.forEach((d,m)=>{m===e?(f(),d.toggle()):d.state.showPopup&&d.toggle(!1,{immediate:!0})})},P=(e,d)=>{const{showPopup:m}=e.state,{disabled:x,titleClass:O}=e;return o("div",{id:`${v}-${d}`,role:"button",tabindex:x?void 0:0,class:[j("item",{disabled:x}),{[oe]:!x}],onClick:()=>{x||T(d)}},[o("span",{class:[j("title",{down:m===(a.direction==="down"),active:m}),O],style:{color:m?a.activeColor:""}},[o("div",{class:"van-ellipsis"},[e.renderTitle()])])])};return w({id:v,props:a,offset:r}),K(s,l),L("scroll",n,{target:b}),()=>{var e;return o("div",{ref:s,class:j()},[o("div",{ref:p,style:y.value,class:j("bar",{opened:g.value})},[i.map(P)]),(e=u.default)==null?void 0:e.call(u)])}}});const k=z(ge);function ye(a){return typeof a=="function"||Object.prototype.toString.call(a)==="[object Object]"&&!se(a)}const[Oe,B]=U("dropdown-item"),ke={title:String,options:te(),disabled:Boolean,teleport:[String,Object],lazyRender:D,modelValue:_,titleClass:_};var Pe=S({name:Oe,props:ke,emits:["open","opened","close","closed","change","update:modelValue"],setup(a,{emit:u,slots:v}){const s=ne({showPopup:!1,transition:!0,showWrapper:!1}),{parent:p,index:r}=X($);if(!p)return;const i=e=>()=>u(e),w=i("open"),b=i("close"),g=i("opened"),y=()=>{s.showWrapper=!1,u("closed")},l=e=>{a.teleport&&e.stopPropagation()},f=(e=!s.showPopup,d={})=>{e!==s.showPopup&&(s.showPopup=e,s.transition=!d.immediate,e&&(s.showWrapper=!0))},n=()=>{if(v.title)return v.title();if(a.title)return a.title;const e=a.options.find(d=>d.value===a.modelValue);return e?e.text:""},T=e=>{const{activeColor:d}=p.props,m=e.value===a.modelValue,x=()=>{s.showPopup=!1,e.value!==a.modelValue&&(u("update:modelValue",e.value),u("change",e.value))},O=()=>{if(m)return o(we,{class:B("icon"),color:d,name:"success"},null)};return o(I,{role:"menuitem",key:e.value,icon:e.icon,title:e.text,class:B("option",{active:m}),style:{color:m?d:""},tabindex:m?0:-1,clickable:!0,onClick:x},{value:O})},P=()=>{const{offset:e}=p,{zIndex:d,overlay:m,duration:x,direction:O,closeOnClickOverlay:M}=p.props,A=Y(d);return O==="down"?A.top=`${e.value}px`:A.bottom=`${e.value}px`,ae(o("div",{style:A,class:B([O]),onClick:l},[o(be,{show:s.showPopup,"onUpdate:show":h=>s.showPopup=h,role:"menu",class:B("content"),overlay:m,position:O==="down"?"top":"bottom",duration:s.transition?x:0,lazyRender:a.lazyRender,overlayStyle:{position:"absolute"},"aria-labelledby":`${p.id}-${r.value}`,closeOnClickOverlay:M,onOpen:w,onClose:b,onOpened:g,onClosed:y},{default:()=>{var h;return[a.options.map(T),(h=v.default)==null?void 0:h.call(v)]}})]),[[ue,s.showWrapper]])};return Ce({state:s,toggle:f,renderTitle:n}),()=>{if(a.teleport){let e;return o(ie,{to:a.teleport},ye(e=P())?e:{default:()=>[e]})}return P()}}});const C=z(Pe),he={style:{padding:"5px 16px"}},Ke=S({setup(a){const u=Z({"zh-CN":{disableMenu:"\u7981\u7528\u83DC\u5355",switchTitle1:"\u5305\u90AE",switchTitle2:"\u56E2\u8D2D",itemTitle:"\u7B5B\u9009",expandDirection:"\u5411\u4E0A\u5C55\u5F00",customContent:"\u81EA\u5B9A\u4E49\u83DC\u5355\u5185\u5BB9",customActiveColor:"\u81EA\u5B9A\u4E49\u9009\u4E2D\u6001\u989C\u8272",option1:[{text:"\u5168\u90E8\u5546\u54C1",value:0},{text:"\u65B0\u6B3E\u5546\u54C1",value:1},{text:"\u6D3B\u52A8\u5546\u54C1",value:2}],option2:[{text:"\u9ED8\u8BA4\u6392\u5E8F",value:"a"},{text:"\u597D\u8BC4\u6392\u5E8F",value:"b"},{text:"\u9500\u91CF\u6392\u5E8F",value:"c"}]},"en-US":{disableMenu:"Disable Menu",switchTitle1:"Title",switchTitle2:"Title",itemTitle:"Title",expandDirection:"Expand Direction",customContent:"Custom Content",customActiveColor:"Custom Active Color",option1:[{text:"Option1",value:0},{text:"Option2",value:1},{text:"Option3",value:2}],option2:[{text:"Option A",value:"a"},{text:"Option B",value:"b"},{text:"Option C",value:"c"}]}}),v=V(),s=V(!0),p=V(!1),r=V(0),i=V("a"),w=E(()=>u("option1")),b=E(()=>u("option2")),g=()=>{var y;(y=v.value)==null||y.toggle()};return(y,l)=>{const f=re("demo-block");return de(),ce(fe,null,[o(f,{title:t(u)("basicUsage")},{default:c(()=>[o(t(k),null,{default:c(()=>[o(t(C),{modelValue:r.value,"onUpdate:modelValue":l[0]||(l[0]=n=>r.value=n),options:t(w)},null,8,["modelValue","options"]),o(t(C),{modelValue:i.value,"onUpdate:modelValue":l[1]||(l[1]=n=>i.value=n),options:t(b)},null,8,["modelValue","options"])]),_:1})]),_:1},8,["title"]),o(f,{title:t(u)("customContent")},{default:c(()=>[o(t(k),null,{default:c(()=>[o(t(C),{modelValue:r.value,"onUpdate:modelValue":l[2]||(l[2]=n=>r.value=n),options:t(w)},null,8,["modelValue","options"]),o(t(C),{title:t(u)("itemTitle"),ref_key:"item",ref:v},{default:c(()=>[o(t(I),{center:"",title:t(u)("switchTitle1")},{"right-icon":c(()=>[o(t(F),{modelValue:s.value,"onUpdate:modelValue":l[3]||(l[3]=n=>s.value=n),size:"24","active-color":"#ee0a24"},null,8,["modelValue"])]),_:1},8,["title"]),o(t(I),{center:"",title:t(u)("switchTitle2")},{"right-icon":c(()=>[o(t(F),{modelValue:p.value,"onUpdate:modelValue":l[4]||(l[4]=n=>p.value=n),size:"24","active-color":"#ee0a24"},null,8,["modelValue"])]),_:1},8,["title"]),pe("div",he,[o(t(xe),{type:"danger",block:"",round:"",style:{height:"40px"},onClick:g},{default:c(()=>[me(ve(t(u)("confirm")),1)]),_:1})])]),_:1},8,["title"])]),_:1})]),_:1},8,["title"]),o(f,{title:t(u)("customActiveColor")},{default:c(()=>[o(t(k),{"active-color":"#1989fa"},{default:c(()=>[o(t(C),{modelValue:r.value,"onUpdate:modelValue":l[5]||(l[5]=n=>r.value=n),options:t(w)},null,8,["modelValue","options"]),o(t(C),{modelValue:i.value,"onUpdate:modelValue":l[6]||(l[6]=n=>i.value=n),options:t(b)},null,8,["modelValue","options"])]),_:1})]),_:1},8,["title"]),o(f,{title:t(u)("expandDirection")},{default:c(()=>[o(t(k),{direction:"up"},{default:c(()=>[o(t(C),{modelValue:r.value,"onUpdate:modelValue":l[7]||(l[7]=n=>r.value=n),options:t(w)},null,8,["modelValue","options"]),o(t(C),{modelValue:i.value,"onUpdate:modelValue":l[8]||(l[8]=n=>i.value=n),options:t(b)},null,8,["modelValue","options"])]),_:1})]),_:1},8,["title"]),o(f,{title:t(u)("disableMenu")},{default:c(()=>[o(t(k),null,{default:c(()=>[o(t(C),{modelValue:r.value,"onUpdate:modelValue":l[9]||(l[9]=n=>r.value=n),disabled:"",options:t(w)},null,8,["modelValue","options"]),o(t(C),{modelValue:i.value,"onUpdate:modelValue":l[10]||(l[10]=n=>i.value=n),disabled:"",options:t(b)},null,8,["modelValue","options"])]),_:1})]),_:1},8,["title"])],64)}}});export{Ke as default};
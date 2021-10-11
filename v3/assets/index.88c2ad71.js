import{c as K,f as U,F as _,G as q,z,p as L,h as Q,x as W}from"./use-translate.789845f9.js";import{b as w,n as j,w as Z}from"./with-install.c13b505f.js";import{u as p}from"./use-touch.b0c07ae6.js";import{z as ee,D as P,C as x,e as y}from"./vue-libs.1dda7261.js";import{u as te}from"./index.5b10c1d9.js";const[ae,f]=K("slider");var ne=ee({name:ae,props:{min:w(0),max:w(100),step:w(1),range:Boolean,reverse:Boolean,disabled:Boolean,readonly:Boolean,vertical:Boolean,barHeight:j,buttonSize:j,activeColor:String,inactiveColor:String,modelValue:{type:[Number,Array],default:0}},emits:["change","drag-end","drag-start","update:modelValue"],setup(t,{emit:b,slots:V}){let S,o,u;const N=P(),c=P(),g=p(),m=x(()=>Number(t.max)-Number(t.min)),D=x(()=>{const e=t.vertical?"width":"height";return{background:t.inactiveColor,[e]:U(t.barHeight)}}),s=e=>t.range&&Array.isArray(e),M=()=>{const{modelValue:e,min:a}=t;return s(e)?`${(e[1]-e[0])*100/m.value}%`:`${(e-Number(a))*100/m.value}%`},O=()=>{const{modelValue:e,min:a}=t;return s(e)?`${(e[0]-Number(a))*100/m.value}%`:"0%"},R=x(()=>{const a={[t.vertical?"height":"width"]:M(),background:t.activeColor};c.value&&(a.transition="none");const n=()=>t.vertical?t.reverse?"bottom":"top":t.reverse?"right":"left";return a[n()]=O(),a}),h=e=>{const a=+t.min,n=+t.max,i=+t.step;e=W(e,a,n);const r=Math.round((e-a)/i)*i;return q(a,r)},B=(e,a)=>JSON.stringify(e)===JSON.stringify(a),X=e=>{var i,r;const a=(i=e[0])!=null?i:Number(t.min),n=(r=e[1])!=null?r:Number(t.max);return a>n?[n,a]:[a,n]},d=(e,a)=>{s(e)?e=X(e).map(h):e=h(e),B(e,t.modelValue)||b("update:modelValue",e),a&&!B(e,u)&&b("change",e)},Y=e=>{if(e.stopPropagation(),t.disabled||t.readonly)return;const{min:a,reverse:n,vertical:i,modelValue:r}=t,l=z(N),J=()=>i?n?l.bottom-e.clientY:e.clientY-l.top:n?l.right-e.clientX:e.clientX-l.left,E=i?l.height:l.width,v=Number(a)+J()/E*m.value;if(s(r)){const[A,k]=r,G=(A+k)/2;v<=G?d([v,k],!0):d([A,v],!0)}else d(v,!0)},$=e=>{t.disabled||t.readonly||(g.start(e),o=t.modelValue,s(o)?u=o.map(h):u=h(o),c.value="start")},F=e=>{if(t.disabled||t.readonly)return;c.value==="start"&&b("drag-start",e),L(e,!0),g.move(e),c.value="dragging";const a=z(N),n=t.vertical?g.deltaY.value:g.deltaX.value,i=t.vertical?a.height:a.width;let r=n/i*m.value;if(t.reverse&&(r=-r),s(u)){const l=t.reverse?1-S:S;o[l]=u[l]+r}else o=u+r;d(o)},T=e=>{t.disabled||t.readonly||(c.value==="dragging"&&(d(o,!0),b("drag-end",e)),c.value="")},H=e=>typeof e=="number"?f("button-wrapper",["left","right"][e]):f("button-wrapper",t.reverse?"left":"right"),I=(e,a)=>{if(typeof a=="number"){const n=V[a===0?"left-button":"right-button"];if(n)return n({value:e})}return V.button?V.button({value:e}):y("div",{class:f("button"),style:Q(t.buttonSize)},null)},C=e=>{const a=typeof e=="number"?t.modelValue[e]:t.modelValue;return y("div",{role:"slider",class:H(e),tabindex:t.disabled||t.readonly?-1:0,"aria-valuemin":+t.min,"aria-valuenow":a,"aria-valuemax":+t.max,"aria-orientation":t.vertical?"vertical":"horizontal",onTouchstart:n=>{typeof e=="number"&&(S=e),$(n)},onTouchmove:F,onTouchend:T,onTouchcancel:T,onClick:_},[I(a,e)])};return d(t.modelValue),te(()=>t.modelValue),()=>y("div",{ref:N,style:D.value,class:f({vertical:t.vertical,disabled:t.disabled}),onClick:Y},[y("div",{class:f("bar"),style:R.value},[t.range?[C(0),C(1)]:C()])])}});const ce=Z(ne);export{ce as S};
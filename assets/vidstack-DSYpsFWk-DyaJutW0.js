var u=i=>{throw TypeError(i)};var c=(i,t,s)=>t.has(i)||u("Cannot "+s);var n=(i,t,s)=>(c(i,t,"read from private field"),s?s.call(i):t.get(i)),e=(i,t,s)=>t.has(i)?u("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(i):t.set(i,s),h=(i,t,s,f)=>(c(i,t,"write to private field"),f?f.call(i,s):t.set(i,s),s),d=(i,t,s)=>(c(i,t,"access private method"),s);import{aU as l,aj as p}from"./app-LJXK5QgX.js";var a,o,r,m;class F{constructor(t){e(this,r);e(this,a);e(this,o);h(this,o,t)}start(){l(n(this,a))&&d(this,r,m).call(this)}stop(){p(n(this,a))&&window.cancelAnimationFrame(n(this,a)),h(this,a,void 0)}}a=new WeakMap,o=new WeakMap,r=new WeakSet,m=function(){h(this,a,window.requestAnimationFrame(()=>{l(n(this,a))||(n(this,o).call(this),d(this,r,m).call(this))}))};export{F as R};
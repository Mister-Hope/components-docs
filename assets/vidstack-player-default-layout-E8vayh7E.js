const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vidstack-H72EDyqs-Ben2gmfM.js","assets/app-LJXK5QgX.js"])))=>i.map(i=>d[i]);
var Ae=Object.defineProperty;var Pe=Object.getPrototypeOf;var Ge=Reflect.get;var Vt=t=>{throw TypeError(t)};var Be=(t,e,n)=>e in t?Ae(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var G=(t,e,n)=>Be(t,typeof e!="symbol"?e+"":e,n),pt=(t,e,n)=>e.has(t)||Vt("Cannot "+n);var S=(t,e,n)=>(pt(t,e,"read from private field"),n?n.call(t):e.get(t)),I=(t,e,n)=>e.has(t)?Vt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),tt=(t,e,n,s)=>(pt(t,e,"write to private field"),s?s.call(t,n):e.set(t,n),n),M=(t,e,n)=>(pt(t,e,"access private method"),n);var mt=(t,e,n)=>Ge(Pe(t),n,e);import{u as Le,C as Fe,i as h,j as w,p as Ne,k as x,l as Et,m as Ve,n as Qt,q as O,t as q,v as K,x as $,y as U,_ as We,z as Re,A as zt,B as _e,D as Ke,E as Ee,G as qt,H as et,I as kt,J as Qe,K as Ht,L as ze,M as qe,N as He,O as Ue,P as F,Q as je,R as Ye,S as Ze,T as Ut,U as vt,V as Xe,W as Je,X as tn,Y as en,Z as jt}from"./app-LJXK5QgX.js";import{A as ht,x as o,s as nn,$ as sn,L as Yt}from"./vidstack-CwTj4H1w-2oiDf-Sp.js";import{e as Zt,c as an,L as on,I as ln,$ as a,l as rn,S as Xt,i as un,a as dn}from"./vidstack-7xep0lg7-DoH2YDoT.js";const ft=new WeakMap,st=Zt(class extends an{render(t){return ht}update(t,[e]){var n;const s=e!==this.G;return s&&this.G!==void 0&&this.ot(void 0),(s||this.rt!==this.lt)&&(this.G=e,this.dt=(n=t.options)===null||n===void 0?void 0:n.host,this.ot(this.lt=t.element)),ht}ot(t){var e;if(typeof this.G=="function"){const n=(e=this.dt)!==null&&e!==void 0?e:globalThis;let s=ft.get(n);s===void 0&&(s=new WeakMap,ft.set(n,s)),s.get(this.G)!==void 0&&this.G.call(this.dt,void 0),s.set(this.G,t),t!==void 0&&this.G.call(this.dt,t)}else this.G.value=t}get rt(){var t,e,n;return typeof this.G=="function"?(e=ft.get((t=this.dt)!==null&&t!==void 0?t:globalThis))===null||e===void 0?void 0:e.get(this.G):(n=this.G)===null||n===void 0?void 0:n.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}}),Jt=Re();function r(){return Le(Jt)}const cn={colorScheme:"system",download:null,customIcons:!1,disableTimeSlider:!1,menuContainer:null,menuGroup:"bottom",noAudioGain:!1,noGestures:!1,noKeyboardAnimations:!1,noModal:!1,noScrubGesture:!1,playbackRates:{min:0,max:2,step:.25},audioGains:{min:0,max:300,step:25},seekStep:10,sliderChaptersMinWidth:325,hideQualityBitrate:!1,smallWhen:!1,thumbnails:null,translations:null,when:!1};var j,W,B,Y,gt;class at extends Fe{constructor(){super(...arguments);I(this,Y);I(this,j);I(this,W,h(()=>{const n=this.$props.when();return M(this,Y,gt).call(this,n)}));I(this,B,h(()=>{const n=this.$props.smallWhen();return M(this,Y,gt).call(this,n)}))}get isMatch(){return S(this,W).call(this)}get isSmallLayout(){return S(this,B).call(this)}onSetup(){tt(this,j,w()),this.setAttributes({"data-match":S(this,W),"data-sm":()=>S(this,B).call(this)?"":null,"data-lg":()=>S(this,B).call(this)?null:"","data-size":()=>S(this,B).call(this)?"sm":"lg","data-no-scrub-gesture":this.$props.noScrubGesture}),Ne(Jt,{...this.$props,when:S(this,W),smallWhen:S(this,B),userPrefersAnnouncements:x(!0),userPrefersKeyboardAnimations:x(!0),menuPortal:x(null)})}onAttach(n){Et(n,this.$props.colorScheme)}}j=new WeakMap,W=new WeakMap,B=new WeakMap,Y=new WeakSet,gt=function(n){return n!=="never"&&(Ve(n)?n:h(()=>n(S(this,j).player.state))())},G(at,"props",cn);const te=at.prototype;Qt(te,"isMatch");Qt(te,"isSmallLayout");function ee(t,e){O(()=>{const{player:n}=w(),s=n.el;return s&&q(s,"data-layout",e()&&t),()=>s==null?void 0:s.removeAttribute("data-layout")})}function k(t,e){var n;return((n=t())==null?void 0:n[e])??e}function Tt(){return a(()=>{const{translations:t,userPrefersAnnouncements:e}=r();return e()?o`<media-announcer .translations=${a(t)}></media-announcer>`:null})}function C(t,e=""){return o`<slot
    name=${`${t}-icon`}
    data-class=${`vds-icon vds-${t}-icon${e?` ${e}`:""}`}
  ></slot>`}function X(t){return t.map(e=>C(e))}function d(t,e){return a(()=>k(t,e))}function wt({tooltip:t}){const{translations:e}=r(),{remotePlaybackState:n}=$(),s=a(()=>{const l=k(e,"AirPlay"),u=zt(n());return`${l} ${u}`}),i=d(e,"AirPlay");return o`
    <media-tooltip class="vds-airplay-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-airplay-button class="vds-airplay-button vds-button" aria-label=${s}>
          ${C("airplay")}
        </media-airplay-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${t}>
        <span class="vds-airplay-tooltip-text">${i}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function ne({tooltip:t}){const{translations:e}=r(),{remotePlaybackState:n}=$(),s=a(()=>{const l=k(e,"Google Cast"),u=zt(n());return`${l} ${u}`}),i=d(e,"Google Cast");return o`
    <media-tooltip class="vds-google-cast-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-google-cast-button class="vds-google-cast-button vds-button" aria-label=${s}>
          ${C("google-cast")}
        </media-google-cast-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${t}>
        <span class="vds-google-cast-tooltip-text">${i}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function it({tooltip:t}){const{translations:e}=r(),n=d(e,"Play"),s=d(e,"Pause");return o`
    <media-tooltip class="vds-play-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-play-button
          class="vds-play-button vds-button"
          aria-label=${d(e,"Play")}
        >
          ${X(["play","pause","replay"])}
        </media-play-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${t}>
        <span class="vds-play-tooltip-text">${n}</span>
        <span class="vds-pause-tooltip-text">${s}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function Wt({tooltip:t,ref:e=ze}){const{translations:n}=r(),s=d(n,"Mute"),i=d(n,"Unmute");return o`
    <media-tooltip class="vds-mute-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-mute-button
          class="vds-mute-button vds-button"
          aria-label=${d(n,"Mute")}
          ${st(e)}
        >
          ${X(["mute","volume-low","volume-high"])}
        </media-mute-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${t}>
        <span class="vds-mute-tooltip-text">${i}</span>
        <span class="vds-unmute-tooltip-text">${s}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function Ct({tooltip:t}){const{translations:e}=r(),n=d(e,"Closed-Captions On"),s=d(e,"Closed-Captions Off");return o`
    <media-tooltip class="vds-caption-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-caption-button
          class="vds-caption-button vds-button"
          aria-label=${d(e,"Captions")}
        >
          ${X(["cc-on","cc-off"])}
        </media-caption-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${t}>
        <span class="vds-cc-on-tooltip-text">${s}</span>
        <span class="vds-cc-off-tooltip-text">${n}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function pn(){const{translations:t}=r(),e=d(t,"Enter PiP"),n=d(t,"Exit PiP");return o`
    <media-tooltip class="vds-pip-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-pip-button
          class="vds-pip-button vds-button"
          aria-label=${d(t,"PiP")}
        >
          ${X(["pip-enter","pip-exit"])}
        </media-pip-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content">
        <span class="vds-pip-enter-tooltip-text">${e}</span>
        <span class="vds-pip-exit-tooltip-text">${n}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function se({tooltip:t}){const{translations:e}=r(),n=d(e,"Enter Fullscreen"),s=d(e,"Exit Fullscreen");return o`
    <media-tooltip class="vds-fullscreen-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-fullscreen-button
          class="vds-fullscreen-button vds-button"
          aria-label=${d(e,"Fullscreen")}
        >
          ${X(["fs-enter","fs-exit"])}
        </media-fullscreen-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${t}>
        <span class="vds-fs-enter-tooltip-text">${n}</span>
        <span class="vds-fs-exit-tooltip-text">${s}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function Rt({backward:t,tooltip:e}){const{translations:n,seekStep:s}=r(),i=t?"Seek Backward":"Seek Forward",l=d(n,i);return o`
    <media-tooltip class="vds-seek-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-seek-button
          class="vds-seek-button vds-button"
          seconds=${a(()=>(t?-1:1)*s())}
          aria-label=${l}
        >
          ${C(t?"seek-backward":"seek-forward")}
        </media-seek-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        ${d(n,i)}
      </media-tooltip-content>
    </media-tooltip>
  `}function ae(){const{translations:t}=r(),{live:e}=$(),n=d(t,"Skip To Live"),s=d(t,"LIVE");return e()?o`
        <media-live-button class="vds-live-button" aria-label=${n}>
          <span class="vds-live-button-text">${s}</span>
        </media-live-button>
      `:null}function Dt(){return a(()=>{const{download:t,translations:e}=r(),n=t();if(_e(n))return null;const{source:s,title:i}=$(),l=s(),u=Ke({title:i(),src:l,download:n});return K(u==null?void 0:u.url)?o`
          <media-tooltip class="vds-download-tooltip vds-tooltip">
            <media-tooltip-trigger>
              <a
                role="button"
                class="vds-download-button vds-button"
                aria-label=${d(e,"Download")}
                href=${Ee(u.url,{download:u.name})}
                download=${u.name}
                target="_blank"
              >
                <slot name="download-icon" data-class="vds-icon" />
              </a>
            </media-tooltip-trigger>
            <media-tooltip-content class="vds-tooltip-content" placement="top">
              ${d(e,"Download")}
            </media-tooltip-content>
          </media-tooltip>
        `:null})}function Mt(){const{translations:t}=r();return o`
    <media-captions
      class="vds-captions"
      .exampleText=${d(t,"Captions look like this")}
    ></media-captions>
  `}function A(){return o`<div class="vds-controls-spacer"></div>`}function ie(t,e){return o`
    <media-menu-portal .container=${a(t)} disabled="fullscreen">
      ${e}
    </media-menu-portal>
  `}function oe(t,e,n,s){let i=K(e)?document.querySelector(e):e;i||(i=t==null?void 0:t.closest("dialog")),i||(i=document.body);const l=document.createElement("div");l.style.display="contents",l.classList.add(n),i.append(l),O(()=>{if(!l)return;const{viewType:p}=$(),c=s();q(l,"data-view-type",p()),q(l,"data-sm",c),q(l,"data-lg",!c),q(l,"data-size",c?"sm":"lg")});const{colorScheme:u}=r();return Et(l,u),l}function le({placement:t,tooltip:e,portal:n}){const{textTracks:s}=w(),{viewType:i,seekableStart:l,seekableEnd:u}=$(),{translations:p,thumbnails:c,menuPortal:b,noModal:v,menuGroup:m,smallWhen:f}=r();if(h(()=>{var Ft;const Ie=l(),Oe=u(),Lt=x(null);qt(s,"chapters",Lt.set);const ct=(Ft=Lt())==null?void 0:Ft.cues.filter(Nt=>Nt.startTime<=Oe&&Nt.endTime>=Ie);return!(ct!=null&&ct.length)})())return null;const y=h(()=>v()?et(t):f()?null:et(t)),Q=h(()=>!f()&&m()==="bottom"&&i()==="video"?26:0),z=x(!1);function De(){z.set(!0)}function Me(){z.set(!1)}const Bt=o`
    <media-menu-items
      class="vds-chapters-menu-items vds-menu-items"
      placement=${a(y)}
      offset=${a(Q)}
    >
      ${a(()=>z()?o`
          <media-chapters-radio-group
            class="vds-chapters-radio-group vds-radio-group"
            .thumbnails=${a(c)}
          >
            <template>
              <media-radio class="vds-chapter-radio vds-radio">
                <media-thumbnail class="vds-thumbnail"></media-thumbnail>
                <div class="vds-chapter-radio-content">
                  <span class="vds-chapter-radio-label" data-part="label"></span>
                  <span class="vds-chapter-radio-start-time" data-part="start-time"></span>
                  <span class="vds-chapter-radio-duration" data-part="duration"></span>
                </div>
              </media-radio>
            </template>
          </media-chapters-radio-group>
        `:null)}
    </media-menu-items>
  `;return o`
    <media-menu class="vds-chapters-menu vds-menu" @open=${De} @close=${Me}>
      <media-tooltip class="vds-tooltip">
        <media-tooltip-trigger>
          <media-menu-button
            class="vds-menu-button vds-button"
            aria-label=${d(p,"Chapters")}
          >
            ${C("menu-chapters")}
          </media-menu-button>
        </media-tooltip-trigger>
        <media-tooltip-content
          class="vds-tooltip-content"
          placement=${kt(e)?a(e):e}
        >
          ${d(p,"Chapters")}
        </media-tooltip-content>
      </media-tooltip>
      ${n?ie(b,Bt):Bt}
    </media-menu>
  `}function $t(t){const{style:e}=new Option;return e.color=t,e.color.match(/\((.*?)\)/)[1].replace(/,/g," ")}const It={type:"color"},mn={type:"radio",values:{"Monospaced Serif":"mono-serif","Proportional Serif":"pro-serif","Monospaced Sans-Serif":"mono-sans","Proportional Sans-Serif":"pro-sans",Casual:"casual",Cursive:"cursive","Small Capitals":"capitals"}},vn={type:"slider",min:0,max:400,step:25,upIcon:null,downIcon:null},fn={type:"slider",min:0,max:100,step:5,upIcon:null,downIcon:null},$n={type:"radio",values:["None","Drop Shadow","Raised","Depressed","Outline"]},nt={fontFamily:"pro-sans",fontSize:"100%",textColor:"#ffffff",textOpacity:"100%",textShadow:"none",textBg:"#000000",textBgOpacity:"100%",displayBg:"#000000",displayBgOpacity:"0%"},N=Object.keys(nt).reduce((t,e)=>({...t,[e]:x(nt[e])}),{});for(const t of Object.keys(N)){const e=localStorage.getItem(`vds-player:${U(t)}`);K(e)&&N[t].set(e)}function bn(){for(const t of Object.keys(N)){const e=nt[t];N[t].set(e)}}let _t=!1,bt=new Set;function hn(){const{player:t}=w();bt.add(t),qe(()=>bt.delete(t)),_t||(He(()=>{for(const e of Ue(N)){const n=N[e],s=nt[e],i=`--media-user-${U(e)}`,l=`vds-player:${U(e)}`;O(()=>{var b;const u=n(),p=u===s,c=p?null:gn(t,e,u);for(const v of bt)(b=v.el)==null||b.style.setProperty(i,c);p?localStorage.removeItem(l):localStorage.setItem(l,u)})}},null),_t=!0)}function gn(t,e,n){var s;switch(e){case"fontFamily":const i=n==="capitals"?"small-caps":"";return(s=t.el)==null||s.style.setProperty("--media-user-font-variant",i),xn(n);case"fontSize":case"textOpacity":case"textBgOpacity":case"displayBgOpacity":return yn(n);case"textColor":return`rgb(${$t(n)} / var(--media-user-text-opacity, 1))`;case"textShadow":return Sn(n);case"textBg":return`rgb(${$t(n)} / var(--media-user-text-bg-opacity, 1))`;case"displayBg":return`rgb(${$t(n)} / var(--media-user-display-bg-opacity, 1))`}}function yn(t){return(parseInt(t)/100).toString()}function xn(t){switch(t){case"mono-serif":return'"Courier New", Courier, "Nimbus Mono L", "Cutive Mono", monospace';case"mono-sans":return'"Deja Vu Sans Mono", "Lucida Console", Monaco, Consolas, "PT Mono", monospace';case"pro-sans":return'Roboto, "Arial Unicode Ms", Arial, Helvetica, Verdana, "PT Sans Caption", sans-serif';case"casual":return'"Comic Sans MS", Impact, Handlee, fantasy';case"cursive":return'"Monotype Corsiva", "URW Chancery L", "Apple Chancery", "Dancing Script", cursive';case"capitals":return'"Arial Unicode Ms", Arial, Helvetica, Verdana, "Marcellus SC", sans-serif + font-variant=small-caps';default:return'"Times New Roman", Times, Georgia, Cambria, "PT Serif Caption", serif'}}function Sn(t){switch(t){case"drop shadow":return"rgb(34, 34, 34) 1.86389px 1.86389px 2.79583px, rgb(34, 34, 34) 1.86389px 1.86389px 3.72778px, rgb(34, 34, 34) 1.86389px 1.86389px 4.65972px";case"raised":return"rgb(34, 34, 34) 1px 1px, rgb(34, 34, 34) 2px 2px";case"depressed":return"rgb(204, 204, 204) 1px 1px, rgb(34, 34, 34) -1px -1px";case"outline":return"rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px";default:return""}}let kn=0;function D({label:t="",value:e="",children:n}){if(!t)return o`
      <div class="vds-menu-section">
        <div class="vds-menu-section-body">${n}</div>
      </div>
    `;const s=`vds-menu-section-${++kn}`;return o`
    <section class="vds-menu-section" role="group" aria-labelledby=${s}>
      <div class="vds-menu-section-title">
        <header id=${s}>${t}</header>
        ${e?o`<div class="vds-menu-section-value">${e}</div>`:null}
      </div>
      <div class="vds-menu-section-body">${n}</div>
    </section>
  `}function J({label:t,children:e}){return o`
    <div class="vds-menu-item">
      <div class="vds-menu-item-label">${t}</div>
      ${e}
    </div>
  `}function V({label:t,icon:e,hint:n}){return o`
    <media-menu-button class="vds-menu-item">
      ${C("menu-arrow-left","vds-menu-close-icon")}
      ${e?C(e,"vds-menu-item-icon"):null}
      <span class="vds-menu-item-label">${a(t)}</span>
      <span class="vds-menu-item-hint" data-part="hint">${n?a(n):null} </span>
      ${C("menu-arrow-right","vds-menu-open-icon")}
    </media-menu-button>
  `}function Tn({value:t=null,options:e,hideLabel:n=!1,children:s=null,onChange:i=null}){function l(u){const{value:p,label:c}=u;return o`
      <media-radio class="vds-radio" value=${p}>
        ${C("menu-radio-check")}
        ${n?null:o`
              <span class="vds-radio-label" data-part="label">
                ${K(c)?c:a(c)}
              </span>
            `}
        ${kt(s)?s(u):s}
      </media-radio>
    `}return o`
    <media-radio-group
      class="vds-radio-group"
      value=${K(t)?t:t?a(t):""}
      @change=${i}
    >
      ${F(e)?e.map(l):a(()=>e().map(l))}
    </media-radio-group>
  `}function wn(t){return F(t)?t.map(e=>({label:e,value:e.toLowerCase()})):Object.keys(t).map(e=>({label:e,value:t[e]}))}function ot(){return o`
    <div class="vds-slider-track"></div>
    <div class="vds-slider-track-fill vds-slider-track"></div>
    <div class="vds-slider-thumb"></div>
  `}function lt(){return o`
    <media-slider-steps class="vds-slider-steps">
      <template>
        <div class="vds-slider-step"></div>
      </template>
    </media-slider-steps>
  `}function rt({label:t=null,value:e=null,upIcon:n="",downIcon:s="",children:i,isMin:l,isMax:u}){const p=t||e,c=[s?C(s,"down"):null,i,n?C(n,"up"):null];return o`
    <div
      class=${`vds-menu-item vds-menu-slider-item${p?" group":""}`}
      data-min=${a(()=>l()?"":null)}
      data-max=${a(()=>u()?"":null)}
    >
      ${p?o`
            <div class="vds-menu-slider-title">
              ${[t?o`<div>${t}</div>`:null,e?o`<div>${e}</div>`:null]}
            </div>
            <div class="vds-menu-slider-body">${c}</div>
          `:c}
    </div>
  `}const Cn={...vn,upIcon:"menu-opacity-up",downIcon:"menu-opacity-down"},Ot={...fn,upIcon:"menu-opacity-up",downIcon:"menu-opacity-down"};function Dn(){return a(()=>{const{hasCaptions:t}=$(),{translations:e}=r();return t()?o`
      <media-menu class="vds-font-menu vds-menu">
        ${V({label:()=>k(e,"Caption Styles")})}
        <media-menu-items class="vds-menu-items">
          ${[D({label:d(e,"Font"),children:[Mn(),In()]}),D({label:d(e,"Text"),children:[On(),Pn(),An()]}),D({label:d(e,"Text Background"),children:[Gn(),Bn()]}),D({label:d(e,"Display Background"),children:[Ln(),Fn()]}),D({children:[Nn()]})]}
        </media-menu-items>
      </media-menu>
    `:null})}function Mn(){return P({label:"Family",option:mn,type:"fontFamily"})}function In(){return P({label:"Size",option:Cn,type:"fontSize"})}function On(){return P({label:"Color",option:It,type:"textColor"})}function An(){return P({label:"Opacity",option:Ot,type:"textOpacity"})}function Pn(){return P({label:"Shadow",option:$n,type:"textShadow"})}function Gn(){return P({label:"Color",option:It,type:"textBg"})}function Bn(){return P({label:"Opacity",option:Ot,type:"textBgOpacity"})}function Ln(){return P({label:"Color",option:It,type:"displayBg"})}function Fn(){return P({label:"Opacity",option:Ot,type:"displayBgOpacity"})}function Nn(){const{translations:t}=r();return o`
    <button class="vds-menu-item" role="menuitem" @click=${bn}>
      <span class="vds-menu-item-label">${a(()=>k(t,"Reset"))}</span>
    </button>
  `}function P({label:t,option:e,type:n}){const{player:s}=w(),{translations:i}=r(),l=N[n],u=()=>k(i,t);function p(){Ze(),s.dispatchEvent(new Event("vds-font-change"))}if(e.type==="color"){let v=function(m){l.set(m.target.value),p()};return J({label:a(u),children:o`
        <input
          class="vds-color-picker"
          type="color"
          .value=${a(l)}
          @input=${v}
        />
      `})}if(e.type==="slider"){let v=function(z){l.set(z.detail+"%"),p()};const{min:m,max:f,step:g,upIcon:y,downIcon:Q}=e;return rt({label:a(u),value:a(l),upIcon:y,downIcon:Q,isMin:()=>l()===m+"%",isMax:()=>l()===f+"%",children:o`
        <media-slider
          class="vds-slider"
          min=${m}
          max=${f}
          step=${g}
          key-step=${g}
          .value=${a(()=>parseInt(l()))}
          aria-label=${a(u)}
          @value-change=${v}
          @drag-value-change=${v}
        >
          ${ot()}${lt()}
        </media-slider>
      `})}const c=wn(e.values),b=()=>{var f;const v=l(),m=((f=c.find(g=>g.value===v))==null?void 0:f.label)||"";return k(i,K(m)?m:m())};return o`
    <media-menu class=${`vds-${U(n)}-menu vds-menu`}>
      ${V({label:u,hint:b})}
      <media-menu-items class="vds-menu-items">
        ${Tn({value:l,options:c,onChange({detail:v}){l.set(v),p()}})}
      </media-menu-items>
    </media-menu>
  `}function ut({label:t,checked:e,defaultChecked:n=!1,storageKey:s,onChange:i}){const{translations:l}=r(),u=s?localStorage.getItem(s):null,p=x(!!(u??n)),c=x(!1),b=a(sn(p)),v=d(l,t);s&&i(je(p)),e&&O(()=>void p.set(e()));function m(y){(y==null?void 0:y.button)!==1&&(p.set(Q=>!Q),s&&localStorage.setItem(s,p()?"1":""),i(p(),y),c.set(!1))}function f(y){Ye(y)&&m()}function g(y){y.button===0&&c.set(!0)}return o`
    <div
      class="vds-menu-checkbox"
      role="menuitemcheckbox"
      tabindex="0"
      aria-label=${v}
      aria-checked=${b}
      data-active=${a(()=>c()?"":null)}
      @pointerup=${m}
      @pointerdown=${g}
      @keydown=${f}
    ></div>
  `}function Vn(){return a(()=>{const{translations:t}=r();return o`
      <media-menu class="vds-accessibility-menu vds-menu">
        ${V({label:()=>k(t,"Accessibility"),icon:"menu-accessibility"})}
        <media-menu-items class="vds-menu-items">
          ${[D({children:[Wn(),Rn()]}),D({children:[Dn()]})]}
        </media-menu-items>
      </media-menu>
    `})}function Wn(){const{userPrefersAnnouncements:t,translations:e}=r(),n="Announcements";return J({label:d(e,n),children:ut({label:n,storageKey:"vds-player::announcements",onChange(s){t.set(s)}})})}function Rn(){return a(()=>{const{translations:t,userPrefersKeyboardAnimations:e,noKeyboardAnimations:n}=r(),{viewType:s}=$();if(h(()=>s()!=="video"||n())())return null;const l="Keyboard Animations";return J({label:d(t,l),children:ut({label:l,defaultChecked:!0,storageKey:"vds-player::keyboard-animations",onChange(u){e.set(u)}})})})}function _n(){return a(()=>{const{noAudioGain:t,translations:e}=r(),{audioTracks:n,canSetAudioGain:s}=$();return h(()=>!(s()&&!t())&&n().length<=1)()?null:o`
      <media-menu class="vds-audio-menu vds-menu">
        ${V({label:()=>k(e,"Audio"),icon:"menu-audio"})}
        <media-menu-items class="vds-menu-items">
          ${[Kn(),En()]}
        </media-menu-items>
      </media-menu>
    `})}function Kn(){return a(()=>{const{translations:t}=r(),{audioTracks:e}=$(),n=d(t,"Default");return h(()=>e().length<=1)()?null:D({children:o`
        <media-menu class="vds-audio-tracks-menu vds-menu">
          ${V({label:()=>k(t,"Track")})}
          <media-menu-items class="vds-menu-items">
            <media-audio-radio-group
              class="vds-audio-track-radio-group vds-radio-group"
              empty-label=${n}
            >
              <template>
                <media-radio class="vds-audio-track-radio vds-radio">
                  <slot name="menu-radio-check-icon" data-class="vds-icon"></slot>
                  <span class="vds-radio-label" data-part="label"></span>
                </media-radio>
              </template>
            </media-audio-radio-group>
          </media-menu-items>
        </media-menu>
      `})})}function En(){return a(()=>{const{noAudioGain:t,translations:e}=r(),{canSetAudioGain:n}=$();if(h(()=>!n()||t())())return null;const{audioGain:i}=$();return D({label:d(e,"Boost"),value:a(()=>Math.round(((i()??1)-1)*100)+"%"),children:[rt({upIcon:"menu-audio-boost-up",downIcon:"menu-audio-boost-down",children:Qn(),isMin:()=>((i()??1)-1)*100<=re(),isMax:()=>((i()??1)-1)*100===ue()})]})})}function Qn(){const{translations:t}=r(),e=d(t,"Boost"),n=re,s=ue,i=zn;return o`
    <media-audio-gain-slider
      class="vds-audio-gain-slider vds-slider"
      aria-label=${e}
      min=${a(n)}
      max=${a(s)}
      step=${a(i)}
      key-step=${a(i)}
    >
      ${ot()}${lt()}
    </media-audio-gain-slider>
  `}function re(){const{audioGains:t}=r(),e=t();return F(e)?e[0]??0:e.min}function ue(){const{audioGains:t}=r(),e=t();return F(e)?e[e.length-1]??300:e.max}function zn(){const{audioGains:t}=r(),e=t();return F(e)?e[1]-e[0]||25:e.step}function qn(){return a(()=>{const{translations:t}=r(),{hasCaptions:e}=$(),n=d(t,"Off");return e()?o`
      <media-menu class="vds-captions-menu vds-menu">
        ${V({label:()=>k(t,"Captions"),icon:"menu-captions"})}
        <media-menu-items class="vds-menu-items">
          <media-captions-radio-group
            class="vds-captions-radio-group vds-radio-group"
            off-label=${n}
          >
            <template>
              <media-radio class="vds-caption-radio vds-radio">
                <slot name="menu-radio-check-icon" data-class="vds-icon"></slot>
                <span class="vds-radio-label" data-part="label"></span>
              </media-radio>
            </template>
          </media-captions-radio-group>
        </media-menu-items>
      </media-menu>
    `:null})}function Hn(){return a(()=>{const{translations:t}=r();return o`
      <media-menu class="vds-playback-menu vds-menu">
        ${V({label:()=>k(t,"Playback"),icon:"menu-playback"})}
        <media-menu-items class="vds-menu-items">
          ${[D({children:Un()}),jn(),Jn()]}
        </media-menu-items>
      </media-menu>
    `})}function Un(){const{remote:t}=w(),{translations:e}=r(),n="Loop";return J({label:d(e,n),children:ut({label:n,storageKey:"vds-player::user-loop",onChange(s,i){t.userPrefersLoopChange(s,i)}})})}function jn(){return a(()=>{const{translations:t}=r(),{canSetPlaybackRate:e,playbackRate:n}=$();return e()?D({label:d(t,"Speed"),value:a(()=>n()===1?k(t,"Normal"):n()+"x"),children:[rt({upIcon:"menu-speed-up",downIcon:"menu-speed-down",children:Zn(),isMin:()=>n()===de(),isMax:()=>n()===ce()})]}):null})}function de(){const{playbackRates:t}=r(),e=t();return F(e)?e[0]??0:e.min}function ce(){const{playbackRates:t}=r(),e=t();return F(e)?e[e.length-1]??2:e.max}function Yn(){const{playbackRates:t}=r(),e=t();return F(e)?e[1]-e[0]||.25:e.step}function Zn(){const{translations:t}=r(),e=d(t,"Speed"),n=de,s=ce,i=Yn;return o`
    <media-speed-slider
      class="vds-speed-slider vds-slider"
      aria-label=${e}
      min=${a(n)}
      max=${a(s)}
      step=${a(i)}
      key-step=${a(i)}
    >
      ${ot()}${lt()}
    </media-speed-slider>
  `}function Xn(){const{remote:t,qualities:e}=w(),{autoQuality:n,canSetQuality:s,qualities:i}=$(),{translations:l}=r(),u="Auto";return h(()=>!s()||i().length<=1)()?null:J({label:d(l,u),children:ut({label:u,checked:n,onChange(c,b){c?t.requestAutoQuality(b):t.changeQuality(e.selectedIndex,b)}})})}function Jn(){return a(()=>{const{hideQualityBitrate:t,translations:e}=r(),{canSetQuality:n,qualities:s,quality:i}=$(),l=h(()=>!n()||s().length<=1),u=h(()=>nn(s()));return l()?null:D({label:d(e,"Quality"),value:a(()=>{var m,f;const p=(m=i())==null?void 0:m.height,c=t()?null:(f=i())==null?void 0:f.bitrate,b=c&&c>0?`${(c/1e6).toFixed(2)} Mbps`:null,v=k(e,"Auto");return p?`${p}p${b?` (${b})`:""}`:v}),children:[rt({upIcon:"menu-quality-up",downIcon:"menu-quality-down",children:ts(),isMin:()=>u()[0]===i(),isMax:()=>u().at(-1)===i()}),Xn()]})})}function ts(){const{translations:t}=r(),e=d(t,"Quality");return o`
    <media-quality-slider class="vds-quality-slider vds-slider" aria-label=${e}>
      ${ot()}${lt()}
    </media-quality-slider>
  `}function pe({placement:t,portal:e,tooltip:n}){return a(()=>{const{viewType:s}=$(),{translations:i,menuPortal:l,noModal:u,menuGroup:p,smallWhen:c}=r(),b=h(()=>u()?et(t):c()?null:et(t)),v=h(()=>!c()&&p()==="bottom"&&s()==="video"?26:0),m=x(!1);hn();function f(){m.set(!0)}function g(){m.set(!1)}const y=o`
      <media-menu-items
        class="vds-settings-menu-items vds-menu-items"
        placement=${a(b)}
        offset=${a(v)}
      >
        ${a(()=>m()?[Hn(),Vn(),_n(),qn()]:null)}
      </media-menu-items>
    `;return o`
      <media-menu class="vds-settings-menu vds-menu" @open=${f} @close=${g}>
        <media-tooltip class="vds-tooltip">
          <media-tooltip-trigger>
            <media-menu-button
              class="vds-menu-button vds-button"
              aria-label=${d(i,"Settings")}
            >
              ${C("menu-settings","vds-rotate-icon")}
            </media-menu-button>
          </media-tooltip-trigger>
          <media-tooltip-content
            class="vds-tooltip-content"
            placement=${kt(n)?a(n):n}
          >
            ${d(i,"Settings")}
          </media-tooltip-content>
        </media-tooltip>
        ${e?ie(l,y):y}
      </media-menu>
    `})}function At({orientation:t,tooltip:e}){return a(()=>{const{pointer:n,muted:s,canSetVolume:i}=$();if(n()==="coarse"&&!s())return null;if(!i())return Wt({tooltip:e});const l=x(void 0),u=Qe(l);return o`
      <div class="vds-volume" ?data-active=${a(u)} ${st(l.set)}>
        ${Wt({tooltip:e})}
        <div class="vds-volume-popup">${es({orientation:t})}</div>
      </div>
    `})}function es({orientation:t}={}){const{translations:e}=r(),n=d(e,"Volume");return o`
    <media-volume-slider
      class="vds-volume-slider vds-slider"
      aria-label=${n}
      orientation=${rn(t)}
    >
      <div class="vds-slider-track"></div>
      <div class="vds-slider-track-fill vds-slider-track"></div>
      <media-slider-preview class="vds-slider-preview" no-clamp>
        <media-slider-value class="vds-slider-value"></media-slider-value>
      </media-slider-preview>
      <div class="vds-slider-thumb"></div>
    </media-volume-slider>
  `}function Pt(){const t=x(void 0),e=x(0),{thumbnails:n,translations:s,sliderChaptersMinWidth:i,disableTimeSlider:l,seekStep:u,noScrubGesture:p}=r(),c=d(s,"Seek"),b=a(l),v=a(()=>e()<i()),m=a(n);return Ht(t,()=>{const f=t();f&&e.set(f.clientWidth)}),o`
    <media-time-slider
      class="vds-time-slider vds-slider"
      aria-label=${c}
      key-step=${a(u)}
      ?disabled=${b}
      ?no-swipe-gesture=${a(p)}
      ${st(t.set)}
    >
      <media-slider-chapters class="vds-slider-chapters" ?disabled=${v}>
        <template>
          <div class="vds-slider-chapter">
            <div class="vds-slider-track"></div>
            <div class="vds-slider-track-fill vds-slider-track"></div>
            <div class="vds-slider-progress vds-slider-track"></div>
          </div>
        </template>
      </media-slider-chapters>
      <div class="vds-slider-thumb"></div>
      <media-slider-preview class="vds-slider-preview">
        <media-slider-thumbnail
          class="vds-slider-thumbnail vds-thumbnail"
          .src=${m}
        ></media-slider-thumbnail>
        <div class="vds-slider-chapter-title" data-part="chapter-title"></div>
        <media-slider-value class="vds-slider-value"></media-slider-value>
      </media-slider-preview>
    </media-time-slider>
  `}function ns(){return o`
    <div class="vds-time-group">
      ${a(()=>{const{duration:t}=$();return t()?[o`<media-time class="vds-time" type="current"></media-time>`,o`<div class="vds-time-divider">/</div>`,o`<media-time class="vds-time" type="duration"></media-time>`]:null})}
    </div>
  `}function ss(){return a(()=>{const{live:t,duration:e}=$();return t()?ae():e()?o`<media-time class="vds-time" type="current" toggle remainder></media-time>`:null})}function me(){return a(()=>{const{live:t}=$();return t()?ae():ns()})}function ve(){return a(()=>{const{textTracks:t}=w(),{title:e,started:n}=$(),s=x(null);return qt(t,"chapters",s.set),s()&&(n()||!e())?fe():o`<media-title class="vds-chapter-title"></media-title>`})}function fe(){return o`<media-chapter-title class="vds-chapter-title"></media-chapter-title>`}class $e extends on{async loadIcons(){const e=(await We(async()=>{const{icons:s}=await import("./vidstack-H72EDyqs-Ben2gmfM.js");return{icons:s}},__vite__mapDeps([0,1]))).icons,n={};for(const s of Object.keys(e))n[s]=ln({name:s,paths:e[s]});return n}}var L;let as=(L=class extends at{},G(L,"props",{...mt(L,L,"props"),when:({viewType:e})=>e==="audio",smallWhen:({width:e})=>e<576}),L);function is(){return[Tt(),Mt(),o`
      <media-controls class="vds-controls">
        <media-controls-group class="vds-controls-group">
          ${[Rt({backward:!0,tooltip:"top start"}),it({tooltip:"top"}),Rt({tooltip:"top"}),os(),Pt(),ss(),At({orientation:"vertical",tooltip:"top"}),Ct({tooltip:"top"}),Dt(),wt({tooltip:"top"}),ls()]}
        </media-controls-group>
      </media-controls>
    `]}function os(){return a(()=>{let t=x(void 0),e=x(!1),n=w(),{title:s,started:i,currentTime:l,ended:u}=$(),{translations:p}=r(),c=Je(t),b=()=>i()||l()>0;const v=()=>{const g=u()?"Replay":b()?"Continue":"Play";return`${k(p,g)}: ${s()}`};O(()=>{var g;c()&&document.activeElement===document.body&&((g=n.player.el)==null||g.focus({preventScroll:!0}))});function m(){const g=t(),y=!!g&&!c()&&g.clientWidth<g.children[0].clientWidth;g&&tn(g,"vds-marquee",y),e.set(y)}function f(){return o`
        <span class="vds-title-text">
          ${a(v)}${a(()=>b()?fe():null)}
        </span>
      `}return Ht(t,m),s()?o`
          <span class="vds-title" title=${a(v)} ${st(t.set)}>
            ${[f(),a(()=>e()&&!c()?f():null)]}
          </span>
        `:A()})}function ls(){const t="top end";return[le({tooltip:"top",placement:t,portal:!0}),pe({tooltip:"top end",placement:t,portal:!0})]}var Z,R,T,be,he,ge,ye,xe,Se;class yt extends Ut(Yt,as){constructor(){super(...arguments);I(this,T);I(this,Z);I(this,R,x(!1))}onSetup(){this.forwardKeepAlive=!1,tt(this,Z,w()),this.classList.add("vds-audio-layout"),M(this,T,ge).call(this)}onConnect(){ee("audio",()=>this.isMatch),M(this,T,he).call(this)}render(){return a(M(this,T,be).bind(this))}}Z=new WeakMap,R=new WeakMap,T=new WeakSet,be=function(){return this.isMatch?is():null},he=function(){const{menuPortal:n}=r();O(()=>{if(!this.isMatch)return;const s=oe(this,this.menuContainer,"vds-audio-layout",()=>this.isSmallLayout),i=s?[this,s]:[this];return(this.$props.customIcons()?new Xt(i):new $e(i)).connect(),n.set(s),()=>{s.remove(),n.set(null)}})},ge=function(){const{pointer:n}=S(this,Z).$state;O(()=>{n()==="coarse"&&O(M(this,T,ye).bind(this))})},ye=function(){if(!S(this,R).call(this)){vt(this,"pointerdown",M(this,T,xe).bind(this),{capture:!0});return}vt(this,"pointerdown",n=>n.stopPropagation()),vt(window,"pointerdown",M(this,T,Se).bind(this))},xe=function(n){const{target:s}=n;Xe(s)&&s.closest(".vds-time-slider")&&(n.stopImmediatePropagation(),this.setAttribute("data-scrubbing",""),S(this,R).set(!0))},Se=function(){S(this,R).set(!1),this.removeAttribute("data-scrubbing")},G(yt,"tagName","media-audio-layout"),G(yt,"attrs",{smallWhen:{converter(n){return n!=="never"&&!!n}}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rs=Zt(class extends un{constructor(){super(...arguments),this.key=ht}render(t,e){return this.key=t,e}update(t,[e,n]){return e!==this.key&&(dn(t),this.key=e),n}}),H=class H extends at{};G(H,"props",{...mt(H,H,"props"),when:({viewType:e})=>e==="video",smallWhen:({width:e,height:n})=>e<576||n<380});let xt=H;function ke(){return a(()=>{const t=w(),{noKeyboardAnimations:e,userPrefersKeyboardAnimations:n}=r();if(h(()=>e()||!n())())return null;const i=x(!1),{lastKeyboardAction:l}=t.$state;O(()=>{i.set(!!l());const m=setTimeout(()=>i.set(!1),500);return()=>{i.set(!1),window.clearTimeout(m)}});const u=h(()=>{var f;const m=(f=l())==null?void 0:f.action;return m&&i()?U(m):null}),p=h(()=>`vds-kb-action${i()?"":" hidden"}`),c=h(us),b=h(()=>{const m=ds();return m?en(m):null});function v(){const m=b();return m?o`
        <div class="vds-kb-bezel">
          <div class="vds-kb-icon">${m}</div>
        </div>
      `:null}return o`
      <div class=${a(p)} data-action=${a(u)}>
        <div class="vds-kb-text-wrapper">
          <div class="vds-kb-text">${a(c)}</div>
        </div>
        ${a(()=>rs(l(),v()))}
      </div>
    `})}function us(){var s;const{$state:t}=w(),e=(s=t.lastKeyboardAction())==null?void 0:s.action,n=t.audioGain()??1;switch(e){case"toggleMuted":return t.muted()?"0%":Kt(t.volume(),n);case"volumeUp":case"volumeDown":return Kt(t.volume(),n);default:return""}}function Kt(t,e){return`${Math.round(t*e*100)}%`}function ds(){var n;const{$state:t}=w();switch((n=t.lastKeyboardAction())==null?void 0:n.action){case"togglePaused":return t.paused()?"kb-pause-icon":"kb-play-icon";case"toggleMuted":return t.muted()||t.volume()===0?"kb-mute-icon":t.volume()>=.5?"kb-volume-up-icon":"kb-volume-down-icon";case"toggleFullscreen":return`kb-fs-${t.fullscreen()?"enter":"exit"}-icon`;case"togglePictureInPicture":return`kb-pip-${t.pictureInPicture()?"enter":"exit"}-icon`;case"toggleCaptions":return t.hasCaptions()?`kb-cc-${t.textTrack()?"on":"off"}-icon`:null;case"volumeUp":return"kb-volume-up-icon";case"volumeDown":return"kb-volume-down-icon";case"seekForward":return"kb-seek-forward-icon";case"seekBackward":return"kb-seek-backward-icon";default:return null}}function cs(){return[Tt(),Te(),dt(),ke(),Mt(),o`<div class="vds-scrim"></div>`,o`
      <media-controls class="vds-controls">
        ${[ms(),A(),o`<media-controls-group class="vds-controls-group"></media-controls-group>`,A(),o`
            <media-controls-group class="vds-controls-group">
              ${Pt()}
            </media-controls-group>
          `,o`
            <media-controls-group class="vds-controls-group">
              ${[it({tooltip:"top start"}),At({orientation:"horizontal",tooltip:"top"}),me(),ve(),Ct({tooltip:"top"}),ps(),wt({tooltip:"top"}),ne({tooltip:"top"}),Dt(),pn(),se({tooltip:"top end"})]}
            </media-controls-group>
          `]}
      </media-controls>
    `]}function ps(){return a(()=>{const{menuGroup:t}=r();return t()==="bottom"?Gt():null})}function ms(){return o`
    <media-controls-group class="vds-controls-group">
      ${a(()=>{const{menuGroup:t}=r();return t()==="top"?[A(),Gt()]:null})}
    </media-controls-group>
  `}function vs(){return[Tt(),Te(),dt(),Mt(),ke(),o`<div class="vds-scrim"></div>`,o`
      <media-controls class="vds-controls">
        <media-controls-group class="vds-controls-group">
          ${[wt({tooltip:"top start"}),ne({tooltip:"bottom start"}),A(),Ct({tooltip:"bottom"}),Dt(),Gt(),At({orientation:"vertical",tooltip:"bottom end"})]}
        </media-controls-group>

        ${A()}

        <media-controls-group class="vds-controls-group" style="pointer-events: none;">
          ${[A(),it({tooltip:"top"}),A()]}
        </media-controls-group>

        ${A()}

        <media-controls-group class="vds-controls-group">
          ${[me(),ve(),se({tooltip:"top end"})]}
        </media-controls-group>

        <media-controls-group class="vds-controls-group">
          ${Pt()}
        </media-controls-group>
      </media-controls>
    `,$s()]}function fs(){return o`
    <div class="vds-load-container">
      ${[dt(),it({tooltip:"top"})]}
    </div>
  `}function $s(){return a(()=>{const{duration:t}=$();return t()===0?null:o`
      <div class="vds-start-duration">
        <media-time class="vds-time" type="duration"></media-time>
      </div>
    `})}function dt(){return o`
    <div class="vds-buffering-indicator">
      <media-spinner class="vds-buffering-spinner"></media-spinner>
    </div>
  `}function Gt(){const{menuGroup:t,smallWhen:e}=r(),n=()=>t()==="top"||e()?"bottom":"top",s=h(()=>`${n()} ${t()==="top"?"end":"center"}`),i=h(()=>`${n()} end`);return[le({tooltip:s,placement:i,portal:!0}),pe({tooltip:s,placement:i,portal:!0})]}function Te(){return a(()=>{const{noGestures:t}=r();return t()?null:o`
      <div class="vds-gestures">
        <media-gesture class="vds-gesture" event="pointerup" action="toggle:paused"></media-gesture>
        <media-gesture
          class="vds-gesture"
          event="pointerup"
          action="toggle:controls"
        ></media-gesture>
        <media-gesture
          class="vds-gesture"
          event="dblpointerup"
          action="toggle:fullscreen"
        ></media-gesture>
        <media-gesture class="vds-gesture" event="dblpointerup" action="seek:-10"></media-gesture>
        <media-gesture class="vds-gesture" event="dblpointerup" action="seek:10"></media-gesture>
      </div>
    `})}var _,E,we,Ce;class St extends Ut(Yt,xt){constructor(){super(...arguments);I(this,E);I(this,_)}onSetup(){this.forwardKeepAlive=!1,tt(this,_,w()),this.classList.add("vds-video-layout")}onConnect(){ee("video",()=>this.isMatch),M(this,E,we).call(this)}render(){return a(M(this,E,Ce).bind(this))}}_=new WeakMap,E=new WeakSet,we=function(){const{menuPortal:n}=r();O(()=>{if(!this.isMatch)return;const s=oe(this,this.menuContainer,"vds-video-layout",()=>this.isSmallLayout),i=s?[this,s]:[this];return(this.$props.customIcons()?new Xt(i):new $e(i)).connect(),n.set(s),()=>{s.remove(),n.set(null)}})},Ce=function(){const{load:n}=S(this,_).$props,{canLoad:s,streamType:i,nativeControls:l}=S(this,_).$state;return!l()&&this.isMatch?n()==="play"&&!s()?fs():i()==="unknown"?dt():this.isSmallLayout?vs():cs():null},G(St,"tagName","media-video-layout"),G(St,"attrs",{smallWhen:{converter(n){return n!=="never"&&!!n}}});jt(yt);jt(St);

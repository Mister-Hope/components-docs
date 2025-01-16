var q=Object.defineProperty;var B=n=>{throw TypeError(n)};var G=(n,r,e)=>r in n?q(n,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[r]=e;var T=(n,r,e)=>G(n,typeof r!="symbol"?r+"":r,e),C=(n,r,e)=>r.has(n)||B("Cannot "+e);var s=(n,r,e)=>(C(n,r,"read from private field"),e?e.call(n):r.get(n)),p=(n,r,e)=>r.has(n)?B("Cannot add the same private member more than once"):r instanceof WeakSet?r.add(n):r.set(n,e),l=(n,r,e,t)=>(C(n,r,"write to private field"),t?t.call(n,e):r.set(n,e),e),o=(n,r,e)=>(C(n,r,"access private method"),e);import{ae as z,k as A,aN as H,q as J,v as K,b7 as Q,aG as W,aj as $,b6 as M,m as X}from"./app-LJXK5QgX.js";import{E as Z}from"./vidstack-BePVaxm4-jOJyUj-c.js";import{resolveYouTubeVideoId as ee}from"./vidstack-Zc3I7oOd-CA6XwpqT.js";const b={Unstarted:-1,Ended:0,Playing:1,Paused:2,Buffering:3,Cued:5};var a,k,P,S,w,m,y,i,te,se,D,f,O,Y,F,I,R,U,x,_,V,L;class re extends Z{constructor(e,t){super(e);p(this,i);T(this,"$$PROVIDER_TYPE","YOUTUBE");T(this,"scope",z());p(this,a);p(this,k,A(""));p(this,P,-1);p(this,S,null);p(this,w,-1);p(this,m,!1);p(this,y,new Map);T(this,"language","en");T(this,"color","red");T(this,"cookies",!1);l(this,a,t)}get currentSrc(){return s(this,S)}get type(){return"youtube"}get videoId(){return s(this,k).call(this)}preconnect(){H(this.getOrigin())}setup(){super.setup(),J(o(this,i,D).bind(this)),s(this,a).notify("provider-setup",this)}destroy(){o(this,i,_).call(this);const e="provider destroyed";for(const t of s(this,y).values())for(const{reject:d}of t)d(e);s(this,y).clear()}async play(){return o(this,i,f).call(this,"playVideo")}async pause(){return o(this,i,f).call(this,"pauseVideo")}setMuted(e){e?o(this,i,f).call(this,"mute"):o(this,i,f).call(this,"unMute")}setCurrentTime(e){o(this,i,f).call(this,"seekTo",e),s(this,a).notify("seeking",e)}setVolume(e){o(this,i,f).call(this,"setVolume",e*100)}setPlaybackRate(e){o(this,i,f).call(this,"setPlaybackRate",e)}async loadSource(e){if(!K(e.src)){l(this,S,null),s(this,k).set("");return}const t=ee(e.src);s(this,k).set(t??""),l(this,S,e)}getOrigin(){return this.cookies?"https://www.youtube.com":"https://www.youtube-nocookie.com"}buildParams(){const{keyDisabled:e}=s(this,a).$props,{muted:t,playsInline:d,nativeControls:u}=s(this,a).$state,h=u();return{autoplay:0,cc_lang_pref:this.language,cc_load_policy:h?1:void 0,color:this.color,controls:h?1:0,disablekb:!h||e()?1:0,enablejsapi:1,fs:1,hl:this.language,iv_load_policy:h?1:3,mute:t()?1:0,playsinline:d()?1:0}}onLoad(){window.setTimeout(()=>this.postMessage({event:"listening"}),100)}onMessage({info:e},t){var c;if(!e)return;const{title:d,intrinsicDuration:u,playbackRate:h}=s(this,a).$state;if(W(e.videoData)&&e.videoData.title!==d()&&s(this,a).notify("title-change",e.videoData.title,t),$(e.duration)&&e.duration!==u()){if($(e.videoLoadedFraction)){const g=((c=e.progressState)==null?void 0:c.loaded)??e.videoLoadedFraction*e.duration,v=new M(0,e.duration);o(this,i,I).call(this,g,v,t)}s(this,a).notify("duration-change",e.duration,t)}if($(e.playbackRate)&&e.playbackRate!==h()&&s(this,a).notify("rate-change",e.playbackRate,t),e.progressState){const{current:g,seekableStart:v,seekableEnd:E,loaded:N,duration:j}=e.progressState;o(this,i,F).call(this,g,t),o(this,i,I).call(this,N,new M(v,E),t),j!==u()&&s(this,a).notify("duration-change",j,t)}if($(e.volume)&&X(e.muted)&&!s(this,m)){const g={muted:e.muted,volume:e.volume/100};s(this,a).notify("volume-change",g,t)}$(e.playerState)&&e.playerState!==s(this,P)&&o(this,i,x).call(this,e.playerState,t)}}a=new WeakMap,k=new WeakMap,P=new WeakMap,S=new WeakMap,w=new WeakMap,m=new WeakMap,y=new WeakMap,i=new WeakSet,te=function(e){var t;(t=o(this,i,V).call(this,"playVideo"))==null||t.reject(e)},se=function(e){var t;(t=o(this,i,V).call(this,"pauseVideo"))==null||t.reject(e)},D=function(){o(this,i,_).call(this);const e=s(this,k).call(this);if(!e){this.src.set("");return}this.src.set(`${this.getOrigin()}/embed/${e}`),s(this,a).notify("load-start")},f=function(e,t){let d=Q(),u=s(this,y).get(e);return u||s(this,y).set(e,u=[]),u.push(d),this.postMessage({event:"command",func:e,args:t?[t]:void 0}),d.promise},O=function(e){s(this,a).notify("loaded-metadata"),s(this,a).notify("loaded-data"),s(this,a).delegate.ready(void 0,e)},Y=function(e){var t;(t=o(this,i,V).call(this,"pauseVideo"))==null||t.resolve(),s(this,a).notify("pause",void 0,e)},F=function(e,t){const{duration:d,realCurrentTime:u}=s(this,a).$state,h=s(this,P)===b.Ended,c=h?d():e;s(this,a).notify("time-change",c,t),!h&&Math.abs(c-u())>1&&s(this,a).notify("seeking",c,t)},I=function(e,t,d){const u={buffered:new M(0,e),seekable:t};s(this,a).notify("progress",u,d);const{seeking:h,realCurrentTime:c}=s(this,a).$state;h()&&e>c()&&o(this,i,R).call(this,d)},R=function(e){const{paused:t,realCurrentTime:d}=s(this,a).$state;window.clearTimeout(s(this,w)),l(this,w,window.setTimeout(()=>{s(this,a).notify("seeked",d(),e),l(this,w,-1)},t()?100:0))},U=function(e){const{seeking:t}=s(this,a).$state;t()&&o(this,i,R).call(this,e),s(this,a).notify("pause",void 0,e),s(this,a).notify("end",void 0,e)},x=function(e,t){var E;const{paused:d,seeking:u}=s(this,a).$state,h=e===b.Playing,c=e===b.Buffering,g=o(this,i,L).call(this,"playVideo"),v=d()&&(c||h);if(c&&s(this,a).notify("waiting",void 0,t),u()&&h&&o(this,i,R).call(this,t),s(this,m)&&h){this.pause(),l(this,m,!1),this.setMuted(s(this,a).$state.muted());return}if(!g&&v){l(this,m,!0),this.setMuted(!0);return}switch(v&&((E=o(this,i,V).call(this,"playVideo"))==null||E.resolve(),s(this,a).notify("play",void 0,t)),e){case b.Cued:o(this,i,O).call(this,t);break;case b.Playing:s(this,a).notify("playing",void 0,t);break;case b.Paused:o(this,i,Y).call(this,t);break;case b.Ended:o(this,i,U).call(this,t);break}l(this,P,e)},_=function(){l(this,P,-1),l(this,w,-1),l(this,m,!1)},V=function(e){var t;return(t=s(this,y).get(e))==null?void 0:t.shift()},L=function(e){var t;return!!((t=s(this,y).get(e))!=null&&t.length)};export{re as YouTubeProvider};

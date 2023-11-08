import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o as d,c as r,f as n,a as t,w as s,b as a,d as e,e as p}from"./app-9184d182.js";const u={},h=a("p",null,"在 Markdown 文件中嵌入音频。",-1),m=a("h2",{id:"示例",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#示例","aria-hidden":"true"},"#"),e(" 示例")],-1),k=a("div",{class:"language-markdown","data-ext":"md"},[a("pre",{class:"language-markdown"},[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),e("AudioPlayer")]),e(),a("span",{class:"token attr-name"},"src"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),e("/assets/sample.mp3"),a("span",{class:"token punctuation"},'"')]),e(),a("span",{class:"token punctuation"},"/>")]),e(`
`)])])],-1),_=a("div",{class:"language-markdown","data-ext":"md"},[a("pre",{class:"language-markdown"},[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),e("AudioPlayer")]),e(`
  `),a("span",{class:"token attr-name"},"src"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),e("/assets/sample.mp3"),a("span",{class:"token punctuation"},'"')]),e(`
  `),a("span",{class:"token attr-name"},"title"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),e("A Sample Audio"),a("span",{class:"token punctuation"},'"')]),e(`
  `),a("span",{class:"token attr-name"},"poster"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),e("/logo.svg"),a("span",{class:"token punctuation"},'"')]),e(`
`),a("span",{class:"token punctuation"},"/>")]),e(`
`)])])],-1),g=p('<h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2><h3 id="src" tabindex="-1"><a class="header-anchor" href="#src" aria-hidden="true">#</a> src</h3><ul><li>类型: <code>string</code></li><li>必填: 是</li></ul><p>音频文件地址</p><h3 id="width" tabindex="-1"><a class="header-anchor" href="#width" aria-hidden="true">#</a> width</h3><ul><li>类型: <code>string | number</code></li><li>默认值: <code>100%</code></li></ul><p>音频组件宽度。</p><h3 id="type" tabindex="-1"><a class="header-anchor" href="#type" aria-hidden="true">#</a> type</h3><ul><li>类型: <code>string</code></li><li>必填: 否</li></ul><p>音频类型。</p><div class="hint-container note"><p class="hint-container-title">注</p><p>如果你的服务器不能为音频文件返回正确的 mime 类型，你应该指定它。 (例如：<code>audio/mp3</code>)</p></div><h3 id="title" tabindex="-1"><a class="header-anchor" href="#title" aria-hidden="true">#</a> title</h3><ul><li>类型: <code>string</code></li><li>必填: 否</li></ul><p>音频标题</p><h3 id="poster" tabindex="-1"><a class="header-anchor" href="#poster" aria-hidden="true">#</a> poster</h3><ul><li>类型: <code>string</code></li><li>必填: 否</li></ul><p>音频封面</p>',17);function f(x,v){const o=c("AudioPlayer"),l=c("MdDemo");return d(),r("div",null,[h,n(" more "),m,n(" #region demo "),t(l,{title:"一个音频播放器",id:"md-demo-8"},{default:s(()=>[t(o,{src:"/assets/sample.mp3"})]),code:s(()=>[k]),_:1}),t(l,{title:"一个拥有标题和封面的音频播放器",id:"md-demo-13"},{default:s(()=>[t(o,{src:"/assets/sample.mp3",title:"A Sample Audio",poster:"/logo.svg"})]),code:s(()=>[_]),_:1}),n(" #endregion demo "),g])}const y=i(u,[["render",f],["__file","audioplayer.html.vue"]]);export{y as default};

import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as o,a as i,g as a,b as t,d as l,f as r,r as h,o as p}from"./app-LJXK5QgX.js";const c={};function k(g,e){const s=h("BiliBili"),d=h("MdDemo");return p(),o("div",null,[e[2]||(e[2]=i("p",null,"在 Markdown 文件中嵌入 B 站视频。",-1)),a(" more "),e[3]||(e[3]=i("h2",{id:"案例",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#案例"},[i("span",null,"案例")])],-1)),a(" #region demo "),t(d,{title:"一个 B 站视频",id:"md-demo-8"},{default:l(()=>[t(s,{bvid:"BV1kt411o7C3"})]),code:l(()=>e[0]||(e[0]=[i("div",{class:"language-md","data-highlighter":"shiki","data-ext":"md","data-title":"md",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"<"),i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"BiliBili"),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," bvid"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"="),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},'"BV1kt411o7C3"'),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," />")])])])],-1)])),_:1}),t(d,{title:"一个自定义空降地址的 B 站视频",id:"md-demo-15"},{default:l(()=>[t(s,{aid:"34304064",cid:"109293122",ratio:"9:16",time:"60",page:"2"})]),code:l(()=>e[1]||(e[1]=[i("div",{class:"language-md","data-highlighter":"shiki","data-ext":"md","data-title":"md",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"<"),i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"BiliBili"),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," aid"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"="),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},'"34304064"'),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," cid"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"="),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},'"109293122"'),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," ratio"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"="),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},'"9:16"'),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," time"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"="),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},'"60"'),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," page"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"="),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},'"2"'),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," />")])])])],-1)])),_:1}),a(" #endregion demo "),e[4]||(e[4]=r('<h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性"><span>属性</span></a></h2><h3 id="bvid" tabindex="-1"><a class="header-anchor" href="#bvid"><span>bvid</span></a></h3><ul><li>类型: <code>string</code></li><li>必填: 是</li></ul><p>B 站视频 bvid。</p><h3 id="title" tabindex="-1"><a class="header-anchor" href="#title"><span>title</span></a></h3><ul><li>类型: <code>string</code></li><li>必填: 否</li></ul><p>B 站视频标题</p><h3 id="page" tabindex="-1"><a class="header-anchor" href="#page"><span>page</span></a></h3><ul><li>类型: <code>number</code></li><li>默认值: <code>1</code></li></ul><p>视频分 P。</p><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>设置视频分 P 时，必须提供 <code>aid</code> 和 <code>cid</code>，并且可以忽略 <code>bvid</code> 属性。</p></div><h3 id="width" tabindex="-1"><a class="header-anchor" href="#width"><span>width</span></a></h3><ul><li>类型: <code>string | number</code></li><li>默认值: <code>100%</code></li></ul><p>B 站组件宽度。</p><h3 id="height" tabindex="-1"><a class="header-anchor" href="#height"><span>height</span></a></h3><ul><li>类型: <code>string | number</code></li><li>必填：否</li></ul><p>B 站组件高度</p><h3 id="ratio" tabindex="-1"><a class="header-anchor" href="#ratio"><span>ratio</span></a></h3><ul><li>类型: <code>number</code></li><li>默认值: <code>16 / 9</code></li></ul><p>B 站组件高度宽高比，只有当未指定 <code>height</code> 时有效。</p><h3 id="time" tabindex="-1"><a class="header-anchor" href="#time"><span>time</span></a></h3><ul><li>类型: <code>number</code></li><li>默认值: <code>0</code></li></ul><p>视频开始时间 (单位: 秒)。</p><h3 id="autoplay" tabindex="-1"><a class="header-anchor" href="#autoplay"><span>autoplay</span></a></h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li></ul><p>视频自动播放</p>',26))])}const B=n(c,[["render",k],["__file","bili-bili.html.vue"]]),b=JSON.parse('{"path":"/zh/guide/media/bili-bili.html","title":"BiliBili","lang":"zh-CN","frontmatter":{"title":"BiliBili","description":"在 Markdown 文件中嵌入 B 站视频。 案例 属性 bvid 类型: string 必填: 是 B 站视频 bvid。 title 类型: string 必填: 否 B 站视频标题 page 类型: number 默认值: 1 视频分 P。 相关信息 设置视频分 P 时，必须提供 aid 和 cid，并且可以忽略 bvid 属性。 width ...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://plugin-components.vuejs.press/guide/media/bili-bili.html"}],["meta",{"property":"og:url","content":"https://plugin-components.vuejs.press/zh/guide/media/bili-bili.html"}],["meta",{"property":"og:site_name","content":"组件库"}],["meta",{"property":"og:title","content":"BiliBili"}],["meta",{"property":"og:description","content":"在 Markdown 文件中嵌入 B 站视频。 案例 属性 bvid 类型: string 必填: 是 B 站视频 bvid。 title 类型: string 必填: 否 B 站视频标题 page 类型: number 默认值: 1 视频分 P。 相关信息 设置视频分 P 时，必须提供 aid 和 cid，并且可以忽略 bvid 属性。 width ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-11-10T07:38:58.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-10T07:38:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"BiliBili\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-10T07:38:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"案例","slug":"案例","link":"#案例","children":[]},{"level":2,"title":"属性","slug":"属性","link":"#属性","children":[{"level":3,"title":"bvid","slug":"bvid","link":"#bvid","children":[]},{"level":3,"title":"title","slug":"title","link":"#title","children":[]},{"level":3,"title":"page","slug":"page","link":"#page","children":[]},{"level":3,"title":"width","slug":"width","link":"#width","children":[]},{"level":3,"title":"height","slug":"height","link":"#height","children":[]},{"level":3,"title":"ratio","slug":"ratio","link":"#ratio","children":[]},{"level":3,"title":"time","slug":"time","link":"#time","children":[]},{"level":3,"title":"autoplay","slug":"autoplay","link":"#autoplay","children":[]}]}],"git":{"createdTime":1664952998000,"updatedTime":1699601938000,"contributors":[{"name":"Jason Ren","username":"Jason Ren","email":"40999116+jasonren0403@users.noreply.github.com","commits":1,"url":"https://github.com/Jason Ren"},{"name":"MonoLogueChi","username":"MonoLogueChi","email":"xxwhite.com@gmail.com","commits":1,"url":"https://github.com/MonoLogueChi"},{"name":"Mr.Hope","username":"Mr.Hope","email":"mister-hope@outlook.com","commits":17,"url":"https://github.com/Mr.Hope"}]},"readingTime":{"minutes":0.71,"words":213},"filePathRelative":"zh/guide/media/bili-bili.md","localizedDate":"2022年10月5日","autoDesc":true}');export{B as comp,b as data};
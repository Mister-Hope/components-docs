import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,a as i,g as l,b as e,d as a,f as d,r as h,o}from"./app-LJXK5QgX.js";const k={};function c(g,s){const t=h("PDF"),n=h("MdDemo");return o(),r("div",null,[s[2]||(s[2]=i("p",null,"PDF 预览组件。",-1)),s[3]||(s[3]=i("p",null,"你可以使用此组件在 Markdown 中嵌入 PDF 阅读器。",-1)),l(" more "),s[4]||(s[4]=i("h2",{id:"示例",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#示例"},[i("span",null,"示例")])],-1)),l(" #region demo "),e(n,{title:"默认 PDF 阅读器",id:"md-demo-11"},{default:a(()=>[e(t,{url:"//theme-hope-assets.vuejs.press/files/sample.pdf"})]),code:a(()=>s[0]||(s[0]=[i("div",{class:"language-md","data-highlighter":"shiki","data-ext":"md","data-title":"md",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"<"),i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"PDF"),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," url"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"="),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},'"//theme-hope-assets.vuejs.press/files/sample.pdf"'),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," />")])])])],-1)])),_:1}),e(n,{title:"禁用工具栏且初始页面为第二页的阅读器",id:"md-demo-18"},{default:a(()=>[e(t,{url:"//theme-hope-assets.vuejs.press/files/sample.pdf",page:"2","no-toolbar":""})]),code:a(()=>s[1]||(s[1]=[i("div",{class:"language-md","data-highlighter":"shiki","data-ext":"md","data-title":"md",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"<"),i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"PDF"),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," url"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"="),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},'"//theme-hope-assets.vuejs.press/files/sample.pdf"'),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," page"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"="),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},'"2"'),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," no-toolbar"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," />")])])])],-1)])),_:1}),l(" #endregion demo "),s[5]||(s[5]=d(`<h2 id="pdfjs-查看器" tabindex="-1"><a class="header-anchor" href="#pdfjs-查看器"><span>PDFJS 查看器</span></a></h2><p>并非所有浏览器都支持嵌入 PDF 查看器 (如: 现在没有移动浏览器支持此功能)，因此我们添加了对 PDFJS 查看器的支持。</p><p>默认情况下，PDFJS 查看器是从 <code>https://theme-hope-assets.vuejs.press/pdfjs/</code> 获取的。你可以在组件选项中自定义 <code>componentOptions.pdf.pdfjs</code> 以指定其他位置。</p><div class="hint-container important"><p class="hint-container-title">PDFJS 查看器</p><p>我们的 PDFJS 查看器仅供非商业用途的社区使用，要使用 PDFJS 查看器，你的 PDF 文件应包含允许 <code>theme-hope-assets.vuejs.press</code> 的 CORS 标头。</p><p>如果你不能满足上述条件，则需自行托管 PDFJS 查看器。为此，你应该从 <a href="https://github.com/mozilla/pdf.js/releases" target="_blank" rel="noopener noreferrer">https://github.com/mozilla/pdf.js/releases</a> 下载最新的 PDFJS 查看器，然后将其复制到 <code>.vuepress/public</code> 文件夹。 之后，在组件选项中将<code>componentOptions.pdf.pdfjs</code> 设置为 <code>&lt;BASE&gt;&lt;public 文件夹内的相对路径&gt;</code>。</p></div><details class="hint-container details"><summary>noToolbar 支持</summary><p>默认的 PDFJS 查看器不支持自定义工具栏，如果你想添加这个功能的支持，你应该手动将以下代码添加到在 <code>pdfjs</code> 文件夹中的 <code>web/viewer.html</code> 的 <code>&lt;script src=&quot;viewer.js&quot;&gt;&lt;/script&gt;</code> 行之前：</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&lt;!-- ... --&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">link</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> rel</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;stylesheet&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> href</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;viewer.css&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&lt;!-- ========== 下面是你应该添加的内容 ============= --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&lt;!-- 添加对 toolbar=0 的支持 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">location</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">hash</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">includes</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;toolbar=0&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> style</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> document</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">createElement</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;style&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">    style</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">textContent</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;#toolbarContainer { display: none; }&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">    document</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">head</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">append</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">style</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&lt;!-- ========== 以上是你应该添加的 ============= --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> src</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;viewer.mjs&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&lt;!-- ... --&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性"><span>属性</span></a></h2><h3 id="url" tabindex="-1"><a class="header-anchor" href="#url"><span>url</span></a></h3><ul><li>类型: <code>string</code></li><li>必填: 是</li></ul><p>PDF 链接</p><p>当填写路径名时，<code>base</code> 将自动添加到路径名的开头。</p><div class="hint-container warning"><p class="hint-container-title">限制</p><ul><li>始终推荐完整的 URL</li><li>不支持相对路径。</li><li>路径名无法在开发服务器中和嵌入 PDFJS 查看器一起使用，并且生产环境的 URL 必须拥有合适的 CORS 策略。</li></ul></div><h3 id="width" tabindex="-1"><a class="header-anchor" href="#width"><span>width</span></a></h3><ul><li>类型: <code>string | number</code></li><li>默认值: <code>100%</code></li></ul><p>PDF 浏览器宽度。</p><h3 id="height" tabindex="-1"><a class="header-anchor" href="#height"><span>height</span></a></h3><ul><li>类型: <code>string | number</code></li><li>必填：否</li></ul><p>PDF 浏览器件高度</p><h3 id="ratio" tabindex="-1"><a class="header-anchor" href="#ratio"><span>ratio</span></a></h3><ul><li>类型: <code>number</code></li><li>默认值: <code>16 / 9</code></li></ul><p>PDF 浏览器高度宽高比，只有当未指定 <code>height</code> 时有效。</p><h3 id="viewer" tabindex="-1"><a class="header-anchor" href="#viewer"><span>viewer</span></a></h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li></ul><p>是否强制使用 PDFJS 查看器。</p><h3 id="page" tabindex="-1"><a class="header-anchor" href="#page"><span>page</span></a></h3><ul><li>类型: <code>number</code></li><li>默认值: <code>1</code></li></ul><p>PDF 文档的初始页面</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>此属性仅在基于 Chromium 内核的浏览器上有效。</p></div><h3 id="nofullscreen" tabindex="-1"><a class="header-anchor" href="#nofullscreen"><span>noFullscreen</span></a></h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li></ul><p>是否禁用全屏按钮</p><h3 id="notoolbar" tabindex="-1"><a class="header-anchor" href="#notoolbar"><span>noToolbar</span></a></h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li></ul><p>是否隐藏工具栏</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>此属性仅在基于 Chromium 内核的浏览器上有效。</p></div><h4 id="zoom" tabindex="-1"><a class="header-anchor" href="#zoom"><span>zoom</span></a></h4><ul><li>类型: <code>number</code></li><li>默认值: <code>100</code></li></ul><p>PDF 文档的初始缩放比例</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>此属性仅在基于 Chromium 内核的浏览器上有效。</p></div>`,38))])}const A=p(k,[["render",c],["__file","p-d-f.html.vue"]]),B=JSON.parse('{"path":"/zh/guide/media/p-d-f.html","title":"PDF","lang":"zh-CN","frontmatter":{"title":"PDF","description":"PDF 预览组件。 你可以使用此组件在 Markdown 中嵌入 PDF 阅读器。 示例 PDFJS 查看器 并非所有浏览器都支持嵌入 PDF 查看器 (如: 现在没有移动浏览器支持此功能)，因此我们添加了对 PDFJS 查看器的支持。 默认情况下，PDFJS 查看器是从 https://theme-hope-assets.vuejs.press/pd...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://plugin-components.vuejs.press/guide/media/p-d-f.html"}],["meta",{"property":"og:url","content":"https://plugin-components.vuejs.press/zh/guide/media/p-d-f.html"}],["meta",{"property":"og:site_name","content":"组件库"}],["meta",{"property":"og:title","content":"PDF"}],["meta",{"property":"og:description","content":"PDF 预览组件。 你可以使用此组件在 Markdown 中嵌入 PDF 阅读器。 示例 PDFJS 查看器 并非所有浏览器都支持嵌入 PDF 查看器 (如: 现在没有移动浏览器支持此功能)，因此我们添加了对 PDFJS 查看器的支持。 默认情况下，PDFJS 查看器是从 https://theme-hope-assets.vuejs.press/pd..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-20T10:15:47.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-20T10:15:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"PDF\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-20T10:15:47.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"示例","slug":"示例","link":"#示例","children":[]},{"level":2,"title":"PDFJS 查看器","slug":"pdfjs-查看器","link":"#pdfjs-查看器","children":[]},{"level":2,"title":"属性","slug":"属性","link":"#属性","children":[{"level":3,"title":"url","slug":"url","link":"#url","children":[]},{"level":3,"title":"width","slug":"width","link":"#width","children":[]},{"level":3,"title":"height","slug":"height","link":"#height","children":[]},{"level":3,"title":"ratio","slug":"ratio","link":"#ratio","children":[]},{"level":3,"title":"viewer","slug":"viewer","link":"#viewer","children":[]},{"level":3,"title":"page","slug":"page","link":"#page","children":[]},{"level":3,"title":"noFullscreen","slug":"nofullscreen","link":"#nofullscreen","children":[]},{"level":3,"title":"noToolbar","slug":"notoolbar","link":"#notoolbar","children":[]}]}],"git":{"createdTime":1653139678000,"updatedTime":1716200147000,"contributors":[{"name":"Mister-Hope","username":"Mister-Hope","email":"mister-hope@outlook.com","commits":2,"url":"https://github.com/Mister-Hope"},{"name":"MonoLogueChi","username":"MonoLogueChi","email":"xxwhite.com@gmail.com","commits":1,"url":"https://github.com/MonoLogueChi"},{"name":"Mr.Hope","username":"Mr.Hope","email":"mister-hope@outlook.com","commits":19,"url":"https://github.com/Mr.Hope"}]},"readingTime":{"minutes":2.3,"words":690},"filePathRelative":"zh/guide/media/p-d-f.md","localizedDate":"2022年5月21日","autoDesc":true}');export{A as comp,B as data};
import{_ as c}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as r,c as d,f as o,a,w as s,b as e,d as n,e as p}from"./app-9184d182.js";const u={},v=e("p",null,"Share component, share page content to social media.",-1),m=e("h2",{id:"demo",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#demo","aria-hidden":"true"},"#"),n(" Demo")],-1),h=e("div",{class:"language-markdown","data-ext":"md"},[e("pre",{class:"language-markdown"},[e("code",null,[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),n("Share")]),n(),e("span",{class:"token punctuation"},"/>")]),n(`
`)])])],-1),g=e("div",{class:"language-markdown","data-ext":"md"},[e("pre",{class:"language-markdown"},[e("code",null,[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),n("Share")]),n(),e("span",{class:"token attr-name"},"services"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),n("qq,weibo"),e("span",{class:"token punctuation"},'"')]),n(),e("span",{class:"token punctuation"},"/>")]),n(`
`),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),n("Share")]),n(),e("span",{class:"token attr-name"},":services"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),n("['qq','weibo']"),e("span",{class:"token punctuation"},'"')]),n(),e("span",{class:"token punctuation"},"/>")]),n(`
`)])])],-1),k=e("div",{class:"language-markdown","data-ext":"md"},[e("pre",{class:"language-markdown"},[e("code",null,[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),n("Share")]),n(),e("span",{class:"token attr-name"},"colorful"),n(),e("span",{class:"token punctuation"},"/>")]),n(`
`)])])],-1),b=p(`<h2 id="setting-component" tabindex="-1"><a class="header-anchor" href="#setting-component" aria-hidden="true">#</a> Setting Component</h2><p>To provide tree-shaking support, you should set <code>componentOptions.share.services</code> in plugin options with services you want to use at client side. This will prevent unused config injected to client, and will reduce the size of the client bundle.</p><p>The following built-in keywords are supported:</p><ul><li>buffer</li><li>douban</li><li>email</li><li>evernote</li><li>facebook</li><li>flipboard</li><li>line</li><li>qq</li><li>qrcode</li><li>reddit</li><li>skype</li><li>telegram</li><li>twitter</li><li>whatsapp</li><li>weibo</li></ul><p>Besides the built-in keyword, you can add your own service config to <code>componentOptions.share.services</code>. Each of the config should be an object with the following properties:</p><ul><li><code>name</code>: Service name</li><li><code>link</code>: Share link, where <code>title</code>, <code>description</code>, <code>url</code>, <code>excerpt</code>, <code>summary</code>, <code>tags</code>, <code>cover</code> and <code>image</code> wrapped by <code>[]</code> will be replaced with the value of the page.</li><li><code>action</code>: action of share button, can be <code>open</code> (open the link in a new tab), <code>navigate</code> (navigate to the link), <code>popup</code> (open a popup window) or <code>qrcode</code> (show a QR code with link), default is <code>popup</code></li><li><code>color</code>: theme color of icon</li><li><code>shape</code>: plain icon shape, image url, svg code or font icon class are all supported</li><li><code>icon</code>: colorful icon (will generate from <code>color</code> and <code>shape</code> if not provided), svg code or font icon class are all supported</li></ul><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>If you are using twitter, you can set <code>componentOptions.share.twitterUserName</code> with your twitter username.</p></div><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h2><h3 id="services" tabindex="-1"><a class="header-anchor" href="#services" aria-hidden="true">#</a> services</h3><ul><li><p>Type: <code>string | ShareService[]</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">BuiltInShareService</span> <span class="token operator">=</span>
  <span class="token operator">|</span> <span class="token string">&quot;buffer&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;douban&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;email&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;evernote&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;facebook&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;flipboard&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;line&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;qq&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;qrcode&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;reddit&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;skype&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;telegram&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;twitter&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;whatsapp&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;weibo&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">ShareServiceConfig</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Share link
   *
   * <span class="token keyword">@description</span> You can use \`[\` and \`]\` to wrap the variable name, and the variable will be replaced with the value of the page.:
   *
   * - \`title\` will be replaced with the title of the page
   * - \`description\` will be replaced with the description of the page
   * - \`url\` will be replaced with the url of the page
   * - \`excerpt\` will be replaced with the excerpt of the page
   * - \`summary\` will be replaced with the summary of the page
   * - \`tags\` will be replaced with the tags of the page
   * - \`cover\` will be replaced with the cover/banner of the page
   * - \`image\` will be replaced with the first image of the page
   */</span>
  link<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Action of share button
   *
   * <span class="token keyword">@description</span>
   * - \`open\` will open the link in a new tab
   * - \`navigate\` will navigate to the link
   * - \`popup\` will open a popup window
   * - \`qrcode\` will show a QR code with link
   *
   * <span class="token keyword">@default</span> &quot;popup&quot;
   */</span>
  action<span class="token operator">?</span><span class="token operator">:</span> ShareAction<span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Theme color of icon
   *
   * <span class="token keyword">@default</span> &#39;currentColor&#39;
   */</span>
  color<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Plain icon shape
   */</span>
  shape<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Colorful icon
   */</span>
  icon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">ShareServiceOptions</span> <span class="token keyword">extends</span> <span class="token class-name">ShareServiceConfig</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Service name
   */</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">ShareService</span> <span class="token operator">=</span> BuiltInShareService <span class="token operator">|</span> ShareServiceOptions<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Default: All available services</p></li></ul><p>Share services.</p><h3 id="titlegetter" tabindex="-1"><a class="header-anchor" href="#titlegetter" aria-hidden="true">#</a> titleGetter</h3><ul><li>Type: <code>(page: PageData) =&gt; string</code></li><li>Default: <code>(page) =&gt; page.title</code></li></ul><p>Title getter.</p><h3 id="descriptiongetter" tabindex="-1"><a class="header-anchor" href="#descriptiongetter" aria-hidden="true">#</a> descriptionGetter</h3><ul><li>Type: <code>(page: PageData) =&gt; string</code></li><li>Default: <code>(page) =&gt; page.frontmatter.description</code></li></ul><p>Description getter.</p><h3 id="summarygetter" tabindex="-1"><a class="header-anchor" href="#summarygetter" aria-hidden="true">#</a> summaryGetter</h3><ul><li>Type: <code>(page: PageData) =&gt; string</code></li><li>Default: <code>(page) =&gt; page.summary</code></li></ul><p>Summary getter.</p><h3 id="covergetter" tabindex="-1"><a class="header-anchor" href="#covergetter" aria-hidden="true">#</a> coverGetter</h3><ul><li>Type: <code>(page: PageData) =&gt; string</code></li><li>Default: <code>(page) =&gt; page.cover</code></li></ul><p>Cover getter.</p><h3 id="taggetter" tabindex="-1"><a class="header-anchor" href="#taggetter" aria-hidden="true">#</a> tagGetter</h3><ul><li>Type: <code>(page: PageData) =&gt; string</code></li><li>Default: <code>({ frontmatter }) =&gt; frontmatter[&quot;tag&quot;] || frontmatter[&quot;tags&quot;]</code></li></ul><p>Tag getter.</p><h3 id="inline" tabindex="-1"><a class="header-anchor" href="#inline" aria-hidden="true">#</a> inline</h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether to display inline.</p><h3 id="colorful" tabindex="-1"><a class="header-anchor" href="#colorful" aria-hidden="true">#</a> colorful</h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether to use colorful icon.</p>`,32);function f(w,q){const i=l("Share"),t=l("MdDemo");return r(),d("div",null,[v,o(" more "),m,o(" #region demo "),a(t,{title:"Basic share",id:"md-demo-8"},{default:s(()=>[a(i)]),code:s(()=>[h]),_:1}),a(t,{title:"Customize services",id:"md-demo-13"},{default:s(()=>[a(i,{services:"qq,weibo"}),a(i,{services:["qq","weibo"]})]),code:s(()=>[g]),_:1}),a(t,{title:"Colorful icon",id:"md-demo-20"},{default:s(()=>[a(i,{colorful:""})]),code:s(()=>[k]),_:1}),o(" #endregion demo "),b])}const _=c(u,[["render",f],["__file","share.html.vue"]]);export{_ as default};

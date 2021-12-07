import{r as s,o as n,c as a,a as e,w as l,F as o,b as p,d as t}from"./app.480fd06a.js";const r={},i=p('<h1 id="docs-site" tabindex="-1"><a class="header-anchor" href="#docs-site" aria-hidden="true">#</a> Docs &amp; Site</h1><p>Documentation &amp; site contribution guide.</p><h2 id="initial-setup" tabindex="-1"><a class="header-anchor" href="#initial-setup" aria-hidden="true">#</a> Initial Setup</h2><p>Fork <code>asdf</code> on GitHub and/or Git clone the default branch:</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#88846F;"># clone your fork</span></span>\n<span class="line"><span style="color:#F8F8F2;">git clone https://github.com/</span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">GITHUB_USER</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;">/asdf.git</span></span>\n<span class="line"><span style="color:#88846F;"># or clone asdf</span></span>\n<span class="line"><span style="color:#F8F8F2;">git clone https://github.com/asdf-vm/asdf.git</span></span>\n<span class="line"></span></code></pre></div><p>The tools for Docs site development are managed with <code>asdf</code> in the <code>docs/.tool-versions</code>. Add the plugins with:</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf plugin add nodejs https://github.com/asdf-vm/asdf-nodejs</span></span>\n<span class="line"></span></code></pre></div><p>Install the tool version(s) with:</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf install</span></span>\n<span class="line"></span></code></pre></div>',9),c={href:"https://nodejs.org",target:"_blank",rel:"noopener noreferrer"},F=t("Node.js"),d=t(": JavaScript runtime built on Chrome's V8 JavaScript engine."),u=p('<p>Install Node.js dependencies from <code>docs/package.json</code>:</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">npm install</span></span>\n<span class="line"></span></code></pre></div><h2 id="development" tabindex="-1"><a class="header-anchor" href="#development" aria-hidden="true">#</a> Development</h2>',3),h={href:"https://v2.vuepress.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},b=t("Vuepress (v2)"),y=t(" is the Static Site Generator (SSG) we use to build the asdf documentation site. It was chosen to replace "),m={href:"https://docsify.js.org/",target:"_blank",rel:"noopener noreferrer"},f=t("Docsify.js"),g=t(" as we would like to support an HTML only fallback when users do not have JavaScript available or enabled. This was not possible with Docsify. Other than this, the feature-set is largely the same, with the focus on writing Markdown files with minimal configuration."),v=p('<p><code>package.json</code> contains the scripts required for development:</p><div class="language-json ext-json line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">{</span></span>\n<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">&quot;scripts&quot;</span><span style="color:#F8F8F2;">: {</span></span>\n<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#66D9EF;font-style:italic;">&quot;dev&quot;</span><span style="color:#F8F8F2;">: </span><span style="color:#CFCFC2;">&quot;vuepress-vite dev .&quot;</span><span style="color:#F8F8F2;">,</span></span>\n<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#66D9EF;font-style:italic;">&quot;build&quot;</span><span style="color:#F8F8F2;">: </span><span style="color:#CFCFC2;">&quot;vuepress-vite build .&quot;</span><span style="color:#F8F8F2;">,</span></span>\n<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#66D9EF;font-style:italic;">&quot;format&quot;</span><span style="color:#F8F8F2;">: </span><span style="color:#CFCFC2;">&quot;npx -y prettier --write &#39;{.vuepress/{config,navbar,sidebar}.js,./**/*.md}&#39;&quot;</span></span>\n<span class="line"><span style="color:#F8F8F2;">  },</span></span>\n<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">&quot;devDependencies&quot;</span><span style="color:#F8F8F2;">: {</span></span>\n<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#66D9EF;font-style:italic;">&quot;@vue/component-compiler-utils&quot;</span><span style="color:#F8F8F2;">: </span><span style="color:#CFCFC2;">&quot;^3.2.2&quot;</span><span style="color:#F8F8F2;">,</span></span>\n<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#66D9EF;font-style:italic;">&quot;@vuepress/plugin-back-to-top&quot;</span><span style="color:#F8F8F2;">: </span><span style="color:#CFCFC2;">&quot;^2.0.0-beta.22&quot;</span><span style="color:#F8F8F2;">,</span></span>\n<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#66D9EF;font-style:italic;">&quot;@vuepress/plugin-search&quot;</span><span style="color:#F8F8F2;">: </span><span style="color:#CFCFC2;">&quot;^2.0.0-beta.22&quot;</span><span style="color:#F8F8F2;">,</span></span>\n<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#66D9EF;font-style:italic;">&quot;@vuepress/plugin-shiki&quot;</span><span style="color:#F8F8F2;">: </span><span style="color:#CFCFC2;">&quot;^2.0.0-beta.22&quot;</span><span style="color:#F8F8F2;">,</span></span>\n<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#66D9EF;font-style:italic;">&quot;vuepress-vite&quot;</span><span style="color:#F8F8F2;">: </span><span style="color:#CFCFC2;">&quot;^2.0.0-beta.22&quot;</span></span>\n<span class="line"><span style="color:#F8F8F2;">  }</span></span>\n<span class="line"><span style="color:#F8F8F2;">}</span></span>\n<span class="line"></span></code></pre><div class="highlight-lines"><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>To start the local development server:</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">npm run dev</span></span>\n<span class="line"></span></code></pre></div><p>Format the code before committing:</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">npm run format</span></span>\n<span class="line"></span></code></pre></div><h2 id="pull-requests-releases-conventional-commits" tabindex="-1"><a class="header-anchor" href="#pull-requests-releases-conventional-commits" aria-hidden="true">#</a> Pull Requests, Releases &amp; Conventional Commits</h2>',7),q=e("code",null,"asdf",-1),k=t(" is using an automated release pipeline which relies on Conventional Commits in PR titles. Detailed documentation found in the "),C=t("core contribution guide"),w=t("."),D=e("p",null,[t("When creating a PR for documentation changes please make the PR title with the Conventional Commit type "),e("code",null,"docs"),t(" in the format "),e("code",null,"docs: <description>"),t(".")],-1),j=e("h2",{id:"vuepress",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vuepress","aria-hidden":"true"},"#"),t(" Vuepress")],-1),E=e("p",null,"Configuration of the site is contained within a few JavaScript files with JS Objects used to represent the config. They are:",-1),x=e("code",null,"docs/.vuepress/config.js",-1),R=t(": the root config file for the site. Read the "),S={href:"https://v2.vuepress.vuejs.org/guide/configuration.html#config-file",target:"_blank",rel:"noopener noreferrer"},T=t("Vuepress documentation"),B=t(" for it's spec."),_=e("p",null,[t("To simplify the root config, the larger JS Objects representing the "),e("em",null,"navbar"),t(" and "),e("em",null,"sidebar"),t(" configuration have been extracted and separated by their locale. See both in:")],-1),I=e("ul",null,[e("li",null,[e("code",null,"docs/.vuepress/navbar.js")]),e("li",null,[e("code",null,"docs/.vuepress/sidebar.js")])],-1),J=t("With the official documentation for these configs living in the "),L={href:"https://v2.vuepress.vuejs.org/reference/default-theme/config.html#locale-config",target:"_blank",rel:"noopener noreferrer"},M=t("Default Theme Reference"),V=t("."),A=p('<h2 id="i18n" tabindex="-1"><a class="header-anchor" href="#i18n" aria-hidden="true">#</a> I18n</h2><p>Vuepress has first-class support for internationalization. The root config <code>docs/.vuepress/config.js</code> defines the supported locales with their URL, title in the selection dropdown menu and navbar/sidebar configs references.</p><p>The navbar/sidebar configs are captured in the aforementioned config files, separated by locale and exported individually.</p><p>The markdown content for each locale must fall under a folder with the same name as the keys for <code>locales</code> in the root config. That is:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">{</span></span>\n<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">...</span></span>\n<span class="line"><span style="color:#F8F8F2;">  themeConfig: {</span></span>\n<span class="line"><span style="color:#F8F8F2;">    locales: {</span></span>\n<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#E6DB74;">&quot;/&quot;</span><span style="color:#F8F8F2;">: {</span></span>\n<span class="line"><span style="color:#F8F8F2;">        selectLanguageName: </span><span style="color:#E6DB74;">&quot;English (US)&quot;</span><span style="color:#F8F8F2;">,</span></span>\n<span class="line"><span style="color:#F8F8F2;">        sidebar: sidebar.en,</span></span>\n<span class="line"><span style="color:#F8F8F2;">        navbar: navbar.en</span></span>\n<span class="line"><span style="color:#F8F8F2;">      },</span></span>\n<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#E6DB74;">&quot;/pt-BR/&quot;</span><span style="color:#F8F8F2;">: {</span></span>\n<span class="line"><span style="color:#F8F8F2;">        selectLanguageName: </span><span style="color:#E6DB74;">&quot;Brazilian Portuguese&quot;</span><span style="color:#F8F8F2;">,</span></span>\n<span class="line"><span style="color:#F8F8F2;">        sidebar: sidebar.pt_br,</span></span>\n<span class="line"><span style="color:#F8F8F2;">        navbar: navbar.pt_br</span></span>\n<span class="line"><span style="color:#F8F8F2;">      }</span></span>\n<span class="line"><span style="color:#F8F8F2;">    }</span></span>\n<span class="line"><span style="color:#F8F8F2;">  }</span></span>\n<span class="line"><span style="color:#F8F8F2;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p><code>/pt-BR/</code> will require the same set of markdown files located under <code>docs/pt-BR/</code>, like so:</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">docs</span></span>\n<span class="line"><span style="color:#F8F8F2;">├─ README.md</span></span>\n<span class="line"><span style="color:#F8F8F2;">├─ foo.md</span></span>\n<span class="line"><span style="color:#F8F8F2;">├─ nested</span></span>\n<span class="line"><span style="color:#F8F8F2;">│  └─ README.md</span></span>\n<span class="line"><span style="color:#F8F8F2;">└─ pt-BR</span></span>\n<span class="line"><span style="color:#F8F8F2;">   ├─ README.md</span></span>\n<span class="line"><span style="color:#F8F8F2;">   ├─ foo.md</span></span>\n<span class="line"><span style="color:#F8F8F2;">   └─ nested</span></span>\n<span class="line"><span style="color:#F8F8F2;">      └─ README.md</span></span>\n<span class="line"></span></code></pre></div>',7),G=t("The "),P={href:"https://v2.vuepress.vuejs.org/guide/i18n.html#site-i18n-config",target:"_blank",rel:"noopener noreferrer"},N=t("official Vuepress i18n documentation"),O=t(" goes into more detail.");r.render=function(p,t){const r=s("OutboundLink"),U=s("RouterLink");return n(),a(o,null,[i,e("ul",null,[e("li",null,[e("a",c,[F,e(r)]),d])]),u,e("p",null,[e("a",h,[b,e(r)]),y,e("a",m,[f,e(r)]),g]),v,e("p",null,[q,k,e(U,{to:"/contribute/core.html"},{default:l((()=>[C])),_:1}),w]),D,j,E,e("ul",null,[e("li",null,[x,R,e("a",S,[T,e(r)]),B])]),_,I,e("p",null,[J,e("a",L,[M,e(r)]),V]),A,e("p",null,[G,e("a",P,[N,e(r)]),O])],64)};export default r;

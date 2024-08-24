import{_ as t,c as s,o as a,a4 as d}from"./chunks/framework.uym2WrGe.js";const b=JSON.parse('{"title":"TRC20转账","description":"","frontmatter":{},"headers":[],"relativePath":"zh/api/trc20/trc20-transfer.md","filePath":"zh/api/trc20/trc20-transfer.md","lastUpdated":1724253314000}'),i={name:"zh/api/trc20/trc20-transfer.md"},e=d(`<h1 id="TRON-API" tabindex="-1">TRC20转账 <a class="header-anchor" href="#TRON-API" aria-label="Permalink to &quot;TRC20转账 {#TRON-API}&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">小提示</p><p>用于转账TRON上的TRC20的代币</p></div><p><strong>接口URL</strong></p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/tron/trc20_transfer</span></span></code></pre></div><p><strong>请求方式</strong></p><blockquote><p>POST</p></blockquote><p><strong>请求Body参数</strong></p><table tabindex="0"><thead><tr><th>参数名</th><th>示例值</th><th>参数类型</th><th>是否必填</th><th>参数描述</th></tr></thead><tbody><tr><td>private_key</td><td>b639151e1f18b28e6c71d38262d949da1864871d8385a198582d57e06492960b</td><td>String</td><td>是</td><td>-</td></tr><tr><td>from</td><td>TVbo8fGRDmaiitf1JhpDhai5bLLxBwWpPt</td><td>String</td><td>是</td><td>-</td></tr><tr><td>to_address</td><td>TYRU6GKmeSvfygYxDbtNQSbm4DdtRypZWQ</td><td>String</td><td>是</td><td>-</td></tr><tr><td>amount</td><td>1</td><td>String</td><td>是</td><td>程序自动*1e18 直接传入单位既可</td></tr><tr><td>contract_address</td><td>TF17BgPaZYbz8oxbjhriubPDsA7ArKoLX3</td><td>String</td><td>是</td><td>JST 的合约地址</td></tr><tr><td>fee_limit</td><td>1000000</td><td>String</td><td>是</td><td>100000000 -&gt; 默认1e8</td></tr></tbody></table><p><strong>响应示例</strong></p><ul><li>成功(200)</li></ul><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;code&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;data&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;44d036424bb08599c58b9c7e7082a3d406cf1beecfaa2a0a17f5d177662f37b5&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;msg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;transfer SUCCESS&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><ul><li>失败(404)</li></ul><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">暂无数据</span></span></code></pre></div><table tabindex="0"><thead><tr><th>参数名</th><th>示例值</th><th>参数类型</th><th>参数描述</th></tr></thead><tbody><tr><td>code</td><td>0</td><td>Number</td><td>-</td></tr><tr><td>data</td><td>44d036424bb08599c58b9c7e7082a3d406cf1beecfaa2a0a17f5d177662f37b5</td><td>String</td><td>转账Hash</td></tr><tr><td>msg</td><td>transfer SUCCESS</td><td>String</td><td>-</td></tr></tbody></table>`,14),n=[e];function r(h,p,l,o,c,k){return a(),s("div",null,n)}const u=t(i,[["render",r]]);export{b as __pageData,u as default};

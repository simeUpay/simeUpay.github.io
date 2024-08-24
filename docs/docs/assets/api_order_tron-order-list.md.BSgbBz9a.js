import{_ as a,D as i,c as d,j as s,a as t,I as r,a4 as n,o}from"./chunks/framework.uym2WrGe.js";const v=JSON.parse('{"title":"Query Tron Order List","description":"","frontmatter":{},"headers":[],"relativePath":"api/order/tron-order-list.md","filePath":"en/api/order/tron-order-list.md","lastUpdated":1724459615000}'),p={name:"api/order/tron-order-list.md"},l={id:"query-tron-order-list",tabindex:"-1"},h=s("a",{class:"header-anchor",href:"#query-tron-order-list","aria-label":'Permalink to "Query Tron Order List  <Badge type="tip" text="Payment System Version" />"'},"​",-1),c=n(`<div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Query Tron Order List</p></div><p><strong>URL</strong></p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/order?order_type</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">=buy_vip</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&amp;receiving_address</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">0x4F07AdA08F4970dB9343d60A42ec65140c777B06</span></span></code></pre></div><p><strong>Request Method</strong></p><blockquote><p>GET</p></blockquote><p><strong>Query Parameters Translation</strong></p><table tabindex="0"><thead><tr><th>Parameter Name</th><th>Example Value</th><th>Data Type</th><th>Required</th><th>Description</th></tr></thead><tbody><tr><td>order_type</td><td>buy_vip</td><td>String</td><td>No</td><td>-</td></tr><tr><td>product_id</td><td>1</td><td>String</td><td>No</td><td>-</td></tr><tr><td>receiving_address</td><td>0x4F07AdA08F4970.....</td><td>String</td><td>No</td><td>-</td></tr></tbody></table><p><strong>Response</strong></p><ul><li>success(200)</li></ul><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;code&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;msg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;create order success&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><ul><li>fail(404)</li></ul><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">No data available</span></span></code></pre></div><table tabindex="0"><thead><tr><th>Parameter Name</th><th>Example Value</th><th>Data Type</th><th>Description</th></tr></thead><tbody><tr><td>code</td><td>0</td><td>Number</td><td>-</td></tr><tr><td>msg</td><td>create order success</td><td>String</td><td>-</td></tr></tbody></table>`,13);function k(g,u,y,_,E,b){const e=i("Badge");return o(),d("div",null,[s("h1",l,[t("Query Tron Order List "),r(e,{type:"tip",text:"Payment System Version"}),t(),h]),c])}const F=a(p,[["render",k]]);export{v as __pageData,F as default};

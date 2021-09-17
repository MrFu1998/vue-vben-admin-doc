import{o as n,c as s,a}from"./app.b2699450.js";const t='{"title":"Excel 组件","description":"","frontmatter":{},"headers":[{"level":2,"title":"Import","slug":"import"},{"level":3,"title":"Usage","slug":"usage"},{"level":3,"title":"Events","slug":"events"},{"level":3,"title":"ExcelData","slug":"exceldata"},{"level":2,"title":"Export","slug":"export"},{"level":3,"title":"数组格式数据导出","slug":"数组格式数据导出"},{"level":3,"title":"自定义导出格式","slug":"自定义导出格式"},{"level":3,"title":"json 格式导出","slug":"json-格式导出"},{"level":2,"title":"Function","slug":"function"},{"level":3,"title":"JsonToSheet Type","slug":"jsontosheet-type"},{"level":3,"title":"AoAToSheet Type","slug":"aoatosheet-type"}],"relativePath":"components/excel.md","lastUpdated":1631857862008}',p={},e=a('<h1 id="excel-组件"><a class="header-anchor" href="#excel-组件" aria-hidden="true">#</a> Excel 组件</h1><p>excel 导入导出操作</p><p>项目中使用到的是 XLSX，具体文档可以参考<a href="https://sheetjs.com/" target="_blank" rel="noopener noreferrer">XLSX 文档</a></p><h2 id="import"><a class="header-anchor" href="#import" aria-hidden="true">#</a> Import</h2><h3 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h3><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ImpExcel</span> <span class="token attr-name">@success</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>loadDataSuccess<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>m-3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>导入Excel<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ImpExcel</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> ImpExcel<span class="token punctuation">,</span> ExcelData <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/components/Excel&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    components<span class="token operator">:</span> <span class="token punctuation">{</span> ImpExcel <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">function</span> <span class="token function">loadDataSuccess</span><span class="token punctuation">(</span><span class="token parameter">excelDataList<span class="token operator">:</span> ExcelData<span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        tableListRef<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>excelDataList<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> excelData <span class="token keyword">of</span> excelDataList<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          <span class="token keyword">const</span> <span class="token punctuation">{</span>\n            header<span class="token punctuation">,</span>\n            results<span class="token punctuation">,</span>\n            meta<span class="token operator">:</span> <span class="token punctuation">{</span> sheetName <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span> <span class="token operator">=</span> excelData<span class="token punctuation">;</span>\n          <span class="token keyword">const</span> columns<span class="token operator">:</span> BasicColumn<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n          <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> title <span class="token keyword">of</span> header<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            columns<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> title<span class="token punctuation">,</span> dataIndex<span class="token operator">:</span> title <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token punctuation">}</span>\n          tableListRef<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> title<span class="token operator">:</span> sheetName<span class="token punctuation">,</span> dataSource<span class="token operator">:</span> results<span class="token punctuation">,</span> columns <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n      <span class="token keyword">return</span> <span class="token punctuation">{</span>\n        loadDataSuccess<span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h3 id="events"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h3><table><thead><tr><th>事件</th><th>回调参数</th><th>说明</th></tr></thead><tbody><tr><td>success</td><td><code>(res:ExcelData)=&gt;void</code></td><td>导入成功回调</td></tr><tr><td>error</td><td><code>()=&gt;void</code></td><td>导出错误</td></tr></tbody></table><h3 id="exceldata"><a class="header-anchor" href="#exceldata" aria-hidden="true">#</a> ExcelData</h3><table><thead><tr><th>属性</th><th>类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>header:</td><td>string[];</td><td></td><td>table 表头</td></tr><tr><td>results:</td><td>T[];</td><td></td><td>table 数据</td></tr><tr><td>meta:</td><td>{ sheetName: string };</td><td></td><td>table title</td></tr></tbody></table><h2 id="export"><a class="header-anchor" href="#export" aria-hidden="true">#</a> Export</h2><p>具体详情可以参考完整版示例</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> jsonToSheetXlsx<span class="token punctuation">,</span> aoaToSheetXlsx <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/components/Excel&#39;</span><span class="token punctuation">;</span>\n</code></pre></div><h3 id="数组格式数据导出"><a class="header-anchor" href="#数组格式数据导出" aria-hidden="true">#</a> 数组格式数据导出</h3><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> aoaToSheetXlsx <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/components/Excel&#39;</span><span class="token punctuation">;</span>\n<span class="token comment">// 保证data顺序与header一致</span>\n<span class="token function">aoaToSheetXlsx</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  header<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  filename<span class="token operator">:</span> <span class="token string">&#39;二维数组方式导出excel.xlsx&#39;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><h3 id="自定义导出格式"><a class="header-anchor" href="#自定义导出格式" aria-hidden="true">#</a> 自定义导出格式</h3><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> jsonToSheetXlsx <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/components/Excel&#39;</span><span class="token punctuation">;</span>\n\n<span class="token function">jsonToSheetXlsx</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  data<span class="token punctuation">,</span>\n  filename<span class="token punctuation">,</span>\n  write2excelOpts<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 可以是 xlsx/html/csv/txt</span>\n    bookType<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><h3 id="json-格式导出"><a class="header-anchor" href="#json-格式导出" aria-hidden="true">#</a> json 格式导出</h3><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> jsonToSheetXlsx <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/components/Excel&#39;</span><span class="token punctuation">;</span>\n\n<span class="token function">jsonToSheetXlsx</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  data<span class="token punctuation">,</span>\n  filename<span class="token operator">:</span> <span class="token string">&#39;使用key作为默认头部.xlsx&#39;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token function">jsonToSheetXlsx</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  data<span class="token punctuation">,</span>\n  header<span class="token operator">:</span> <span class="token punctuation">{</span>\n    id<span class="token operator">:</span> <span class="token string">&#39;ID&#39;</span><span class="token punctuation">,</span>\n    name<span class="token operator">:</span> <span class="token string">&#39;姓名&#39;</span><span class="token punctuation">,</span>\n    age<span class="token operator">:</span> <span class="token string">&#39;年龄&#39;</span><span class="token punctuation">,</span>\n    no<span class="token operator">:</span> <span class="token string">&#39;编号&#39;</span><span class="token punctuation">,</span>\n    address<span class="token operator">:</span> <span class="token string">&#39;地址&#39;</span><span class="token punctuation">,</span>\n    beginTime<span class="token operator">:</span> <span class="token string">&#39;开始时间&#39;</span><span class="token punctuation">,</span>\n    endTime<span class="token operator">:</span> <span class="token string">&#39;结束时间&#39;</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  filename<span class="token operator">:</span> <span class="token string">&#39;自定义头部.xlsx&#39;</span><span class="token punctuation">,</span>\n  json2sheetOpts<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 指定顺序</span>\n    header<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;id&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><h2 id="function"><a class="header-anchor" href="#function" aria-hidden="true">#</a> Function</h2><table><thead><tr><th>方法</th><th>回调参数</th><th>返回值</th><th>说明</th></tr></thead><tbody><tr><td>jsonToSheetXlsx</td><td><code>Function(JsonToSheet)</code></td><td></td><td>json 格式数据，导出到 excel</td></tr><tr><td>aoaToSheetXlsx</td><td><code>Function(AoAToSheet)</code></td><td></td><td>数组格式，导出到 excel</td></tr></tbody></table><h3 id="jsontosheet-type"><a class="header-anchor" href="#jsontosheet-type" aria-hidden="true">#</a> JsonToSheet Type</h3><table><thead><tr><th>属性</th><th>类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>data</td><td><code>T[]</code></td><td></td><td>JSON 对象数组</td></tr><tr><td>header?:</td><td><code>T</code>;</td><td></td><td>表头未设置则取 JSON 对象的 <code>key</code> 作为 <code>header</code></td></tr><tr><td>filename?:</td><td><code>string</code></td><td><code>excel-list.xlsx</code></td><td>导出的文件名</td></tr><tr><td>json2sheetOpts?:</td><td><code>JSON2SheetOpts</code></td><td></td><td>调用 <code>XLSX.utils.json_to_sheet</code> 的可选参数</td></tr><tr><td>write2excelOpts?:</td><td><code>WritingOptions</code></td><td><code>{ bookType: &#39;xlsx&#39; }</code></td><td>调用 <code>XLSX.writeFile</code> 的可选参数，具体参 XLSX 文档</td></tr></tbody></table><h3 id="aoatosheet-type"><a class="header-anchor" href="#aoatosheet-type" aria-hidden="true">#</a> AoAToSheet Type</h3><table><thead><tr><th>属性</th><th>类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>data</td><td>T[][];</td><td></td><td>二维数组</td></tr><tr><td>header?:</td><td>T;</td><td></td><td>表头 ；未设置则没有表头</td></tr><tr><td>filename?:</td><td>string;</td><td><code>excel-list.xlsx</code></td><td>导出的文件名</td></tr><tr><td>write2excelOpts?:</td><td>WritingOptions;</td><td><code>{ bookType: &#39;xlsx&#39; }</code></td><td>调用 <code>XLSX.writeFile</code> 的可选参数</td></tr></tbody></table>',25);p.render=function(a,t,p,o,c,l){return n(),s("div",null,[e])};export default p;export{t as __pageData};

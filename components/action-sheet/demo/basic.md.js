webpackJsonp([97,158],{13:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function p(n){if(n&&n.__esModule)return n;var s={};if(null!=n)for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(s[a]=n[a]);return s["default"]=n,s}function o(n,s){for(var a=Object.getOwnPropertyNames(s),t=0;t<a.length;t++){var p=a[t],o=Object.getOwnPropertyDescriptor(s,p);o&&o.configurable&&void 0===n[p]&&Object.defineProperty(n,p,o)}return n}function e(n,s,a){return s in n?Object.defineProperty(n,s,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[s]=a,n}function c(n,s){if(!(n instanceof s))throw new TypeError("Cannot call a class as a function")}function u(n,s){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!s||"object"!=typeof s&&"function"!=typeof s?n:s}function l(n,s){if("function"!=typeof s&&null!==s)throw new TypeError("Super expression must either be null or a function, not "+typeof s);n.prototype=Object.create(s&&s.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),s&&(Object.setPrototypeOf?Object.setPrototypeOf(n,s):o(n,s))}function i(n){return"string"==typeof n}function k(n){return i(n.type)&&j(n.props.children)?m.cloneElement(n,{},n.props.children.split("").join(" ")):i(n)?(j(n)&&(n=n.split("").join(" ")),m.createElement("span",null,n)):n}Object.defineProperty(s,"__esModule",{value:!0}),s["default"]=void 0;var r=Object.assign||function(n){for(var s=1;s<arguments.length;s++){var a=arguments[s];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(n[t]=a[t])}return n},g=function(){function n(n,s){var a=[],t=!0,p=!1,o=void 0;try{for(var e,c=n[Symbol.iterator]();!(t=(e=c.next()).done)&&(a.push(e.value),!s||a.length!==s);t=!0);}catch(u){p=!0,o=u}finally{try{!t&&c["return"]&&c["return"]()}finally{if(p)throw o}}return a}return function(s,a){if(Array.isArray(s))return s;if(Symbol.iterator in Object(s))return n(s,a);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),d=a(1),m=p(d),h=a(2),f=t(h),y=a(20),v=t(y),b=a(23),w=t(b),S=/^[\u4e00-\u9fa5]{2}$/,j=S.test.bind(S),A=function(n){function s(){c(this,s);for(var a=arguments.length,t=Array(a),p=0;p<a;p++)t[p]=arguments[p];var o=u(this,n.call.apply(n,[this].concat(t)));return o.onClick=function(){o.props.onClick(o)},o}return l(s,n),s.prototype.render=function(){var n,s=(0,w["default"])(this.props,["children","className","prefixCls","type","size","ghost","inline","disabled","htmlType","icon","loading"]),a=g(s,2),t=a[0],p=t.children,o=t.className,c=t.prefixCls,u=t.type,l=t.size,i=t.ghost,d=t.inline,h=t.disabled,y=t.htmlType,b=t.icon,S=t.loading,j=a[1],A=(0,f["default"])((n={},e(n,o,o),e(n,c,!0),e(n,c+"-primary","primary"===u),e(n,c+"-ghost",i),e(n,c+"-warning","warning"===u),e(n,c+"-small","small"===l&&d),e(n,c+"-loading",S),e(n,c+"-inline",d),e(n,c+"-disabled",h),n)),T=S?"loading":b,x=m.Children.map(p,k);return m.createElement("button",r({},j,{type:y||"button",className:A,disabled:h,onClick:this.onClick}),T?m.createElement(v["default"],{type:T}):null,x)},s}(m.Component);s["default"]=A,A.propTypes={prefixCls:d.PropTypes.string,type:d.PropTypes.string,size:d.PropTypes.oneOf(["large","small"]),htmlType:d.PropTypes.oneOf(["submit","button","reset"]),ghost:d.PropTypes.bool,inline:d.PropTypes.bool,disabled:d.PropTypes.bool,loading:d.PropTypes.bool,icon:d.PropTypes.bool,onClick:d.PropTypes.func},A.defaultProps={prefixCls:"am-button",size:"large",ghost:!1,inline:!1,disabled:!1,loading:!1,onClick:function(){}},n.exports=s["default"]},18:function(n,s,a){"use strict";a(5),a(19)},19:function(n,s){},779:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(a(18),a(13)),o=t(p),e=(a(532),a(531)),c=t(e),u=a(1),l=t(u),i=a(4);t(i);n.exports={content:[],meta:{order:0,title:"\u57fa\u672c",filename:"components/action-sheet/demo/basic.md",id:"components-action-sheet-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> ActionSheet<span class="token punctuation" >,</span> Button <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> Test <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >getInitialState</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span>\n      clicked<span class="token punctuation" >:</span> <span class="token string" >\'none\'</span><span class="token punctuation" >,</span>\n      clicked1<span class="token punctuation" >:</span> <span class="token string" >\'none\'</span><span class="token punctuation" >,</span>\n      BUTTONS<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n        <span class="token string" >\'\u64cd\u4f5c 0\'</span><span class="token punctuation" >,</span>\n        <span class="token string" >\'\u64cd\u4f5c 1\'</span><span class="token punctuation" >,</span>\n        <span class="token string" >\'\u64cd\u4f5c 2\'</span><span class="token punctuation" >,</span>\n        <span class="token string" >\'\u5220\u9664\'</span><span class="token punctuation" >,</span>\n        <span class="token string" >\'\u53d6\u6d88\'</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n      icons<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n        <span class="token punctuation" >{</span>\n          icon<span class="token punctuation" >:</span> <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>img</span> <span class="token attr-name" >src</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>https://os.alipayobjects.com/rmsportal/zfQfLxUmXfgWech.png<span class="token punctuation" >"</span></span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span>\n            height<span class="token punctuation" >:</span> <span class="token number" >27</span><span class="token punctuation" >,</span>\n            verticalAlign<span class="token punctuation" >:</span> <span class="token string" >\'top\'</span><span class="token punctuation" >,</span>\n          <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span>\n          title<span class="token punctuation" >:</span> <span class="token string" >\'\u652f\u4ed8\u5b9d\'</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >{</span>\n          icon<span class="token punctuation" >:</span> <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>img</span> <span class="token attr-name" >src</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>https://os.alipayobjects.com/rmsportal/pTINxOHGLBxzEAG.png<span class="token punctuation" >"</span></span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span>\n            height<span class="token punctuation" >:</span> <span class="token number" >27</span><span class="token punctuation" >,</span>\n            verticalAlign<span class="token punctuation" >:</span> <span class="token string" >\'top\'</span><span class="token punctuation" >,</span>\n          <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span>\n          title<span class="token punctuation" >:</span> <span class="token string" >\'\u5fae\u4fe1\u597d\u53cb\'</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >{</span>\n          icon<span class="token punctuation" >:</span> <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>img</span> <span class="token attr-name" >src</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>https://os.alipayobjects.com/rmsportal/VMjNbIuafpXfjQE.png<span class="token punctuation" >"</span></span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span>\n            height<span class="token punctuation" >:</span> <span class="token number" >27</span><span class="token punctuation" >,</span>\n            verticalAlign<span class="token punctuation" >:</span> <span class="token string" >\'top\'</span><span class="token punctuation" >,</span>\n          <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span>\n          title<span class="token punctuation" >:</span> <span class="token string" >\'QQ\'</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >{</span> iconName<span class="token punctuation" >:</span> <span class="token string" >\'android\'</span><span class="token punctuation" >,</span> title<span class="token punctuation" >:</span> <span class="token string" >\'\u7528Android\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >{</span> iconName<span class="token punctuation" >:</span> <span class="token string" >\'apple\'</span><span class="token punctuation" >,</span> title<span class="token punctuation" >:</span> <span class="token string" >\'\u7528Apple\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >showActionSheet</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >const</span> BUTTONS <span class="token operator" >=</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>BUTTONS<span class="token punctuation" >;</span>\n    ActionSheet<span class="token punctuation" >.</span><span class="token function" >showActionSheetWithOptions</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n      options<span class="token punctuation" >:</span> BUTTONS<span class="token punctuation" >,</span>\n      cancelButtonIndex<span class="token punctuation" >:</span> BUTTONS<span class="token punctuation" >.</span>length <span class="token operator" >-</span> <span class="token number" >1</span><span class="token punctuation" >,</span>\n      destructiveButtonIndex<span class="token punctuation" >:</span> BUTTONS<span class="token punctuation" >.</span>length <span class="token operator" >-</span> <span class="token number" >2</span><span class="token punctuation" >,</span>\n      <span class="token comment" spellcheck="true">// title: \'\u6807\u9898\',</span>\n      message<span class="token punctuation" >:</span> <span class="token string" >\'\u6211\u662f\u63cf\u8ff0\u6211\u662f\u63cf\u8ff0\'</span><span class="token punctuation" >,</span>\n      maskClosable<span class="token punctuation" >:</span> <span class="token boolean" >true</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >(</span>buttonIndex<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n      <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> clicked<span class="token punctuation" >:</span> BUTTONS<span class="token punctuation" >[</span>buttonIndex<span class="token punctuation" >]</span> <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >showShareActionSheet</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >const</span> icons <span class="token operator" >=</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>icons<span class="token punctuation" >;</span>\n    ActionSheet<span class="token punctuation" >.</span><span class="token function" >showShareActionSheetWithOptions</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n      options<span class="token punctuation" >:</span> icons<span class="token punctuation" >,</span>\n      title<span class="token punctuation" >:</span> <span class="token string" >\'\u6807\u9898\'</span><span class="token punctuation" >,</span>\n      message<span class="token punctuation" >:</span> <span class="token string" >\'\u6211\u662f\u63cf\u8ff0\u6211\u662f\u63cf\u8ff0\'</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >(</span>buttonIndex<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n      <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> clicked1<span class="token punctuation" >:</span> icons<span class="token punctuation" >[</span>buttonIndex<span class="token punctuation" >]</span><span class="token punctuation" >.</span>title <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >showActionSheetWithCustom</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    ActionSheet<span class="token punctuation" >.</span><span class="token function" >showActionSheetWithCustom</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n      title<span class="token punctuation" >:</span> <span class="token string" >\'\u81ea\u5b9a\u4e49 ActionSheet\'</span><span class="token punctuation" >,</span>\n      message<span class="token punctuation" >:</span> <span class="token string" >\'\u6211\u662f\u63cf\u8ff0\u6211\u662f\u63cf\u8ff0\'</span><span class="token punctuation" >,</span>\n      component<span class="token punctuation" >:</span> <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> color<span class="token punctuation" >:</span> <span class="token string" >\'red\'</span><span class="token punctuation" >,</span> padding<span class="token punctuation" >:</span> <span class="token number" >20</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n        \u81ea\u5b9a\u4e49\u5185\u5bb9 <span class="token entity" title="&nbsp;">&amp;nbsp;</span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >inline</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>small<span class="token punctuation" >"</span></span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> ActionSheet<span class="token punctuation" >.</span><span class="token function" >close</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u5173\u95ed<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> margin<span class="token punctuation" >:</span> <span class="token string" >\'0 8px\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> margin<span class="token punctuation" >:</span> <span class="token string" >\'32px 0\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n        <span class="token punctuation" >{</span><span class="token comment" spellcheck="true">/* &lt;p className="demo-p">\u9ed8\u8ba4\u72b6\u6001\u64cd\u4f5c\u5217\u8868&lt;/p> */</span><span class="token punctuation" >}</span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> padding<span class="token punctuation" >:</span> <span class="token string" >\'8px 0\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>showActionSheet<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u9ed8\u8ba4\u72b6\u6001\u64cd\u4f5c\u5217\u8868<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>demo-p<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u70b9\u51fb\u8fc7\u7684\u6309\u94ae<span class="token punctuation" >:</span> <span class="token entity" title="&nbsp;">&amp;nbsp;</span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>span</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> color<span class="token punctuation" >:</span> <span class="token string" >\'#222\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>clicked<span class="token punctuation" >}</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>span</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> margin<span class="token punctuation" >:</span> <span class="token string" >\'32px 0\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> padding<span class="token punctuation" >:</span> <span class="token string" >\'8px 0\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>showShareActionSheet<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u5e26\u5206\u4eab\u529f\u80fd\u7684\u64cd\u4f5c\u5217\u8868<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> margin<span class="token punctuation" >:</span> <span class="token string" >\'32px 0\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> padding<span class="token punctuation" >:</span> <span class="token string" >\'8px 0\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>showActionSheetWithCustom<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u81ea\u5b9a\u4e49\u7684\u64cd\u4f5c\u5217\u8868<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Test</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=l["default"].createClass({displayName:"Test",getInitialState:function(){return{clicked:"none",clicked1:"none",BUTTONS:["\u64cd\u4f5c 0","\u64cd\u4f5c 1","\u64cd\u4f5c 2","\u5220\u9664","\u53d6\u6d88"],icons:[{icon:l["default"].createElement("img",{src:"https://os.alipayobjects.com/rmsportal/zfQfLxUmXfgWech.png",style:{height:27,verticalAlign:"top"}}),title:"\u652f\u4ed8\u5b9d"},{icon:l["default"].createElement("img",{src:"https://os.alipayobjects.com/rmsportal/pTINxOHGLBxzEAG.png",style:{height:27,verticalAlign:"top"}}),title:"\u5fae\u4fe1\u597d\u53cb"},{icon:l["default"].createElement("img",{src:"https://os.alipayobjects.com/rmsportal/VMjNbIuafpXfjQE.png",style:{height:27,verticalAlign:"top"}}),title:"QQ"},{iconName:"android",title:"\u7528Android"},{iconName:"apple",title:"\u7528Apple"}]}},showActionSheet:function(){var n=this,s=this.state.BUTTONS;c["default"].showActionSheetWithOptions({options:s,cancelButtonIndex:s.length-1,destructiveButtonIndex:s.length-2,message:"\u6211\u662f\u63cf\u8ff0\u6211\u662f\u63cf\u8ff0",maskClosable:!0},function(a){n.setState({clicked:s[a]})})},showShareActionSheet:function(){var n=this,s=this.state.icons;c["default"].showShareActionSheetWithOptions({options:s,title:"\u6807\u9898",message:"\u6211\u662f\u63cf\u8ff0\u6211\u662f\u63cf\u8ff0"},function(a){n.setState({clicked1:s[a].title})})},showActionSheetWithCustom:function(){c["default"].showActionSheetWithCustom({title:"\u81ea\u5b9a\u4e49 ActionSheet",message:"\u6211\u662f\u63cf\u8ff0\u6211\u662f\u63cf\u8ff0",component:l["default"].createElement("div",{style:{color:"red",padding:20}},"\u81ea\u5b9a\u4e49\u5185\u5bb9 \xa0",l["default"].createElement(o["default"],{inline:!0,size:"small",onClick:function(){return c["default"].close()}},"\u5173\u95ed"))})},render:function(){return l["default"].createElement("div",{style:{margin:"0 8px"}},l["default"].createElement("div",{style:{margin:"32px 0"}},l["default"].createElement("div",{style:{padding:"8px 0"}},l["default"].createElement(o["default"],{type:"primary",onClick:this.showActionSheet},"\u9ed8\u8ba4\u72b6\u6001\u64cd\u4f5c\u5217\u8868")),l["default"].createElement("p",{className:"demo-p"},"\u70b9\u51fb\u8fc7\u7684\u6309\u94ae: \xa0",l["default"].createElement("span",{
style:{color:"#222"}},this.state.clicked))),l["default"].createElement("div",{style:{margin:"32px 0"}},l["default"].createElement("div",{style:{padding:"8px 0"}},l["default"].createElement(o["default"],{type:"primary",onClick:this.showShareActionSheet},"\u5e26\u5206\u4eab\u529f\u80fd\u7684\u64cd\u4f5c\u5217\u8868"))),l["default"].createElement("div",{style:{margin:"32px 0"}},l["default"].createElement("div",{style:{padding:"8px 0"}},l["default"].createElement(o["default"],{type:"primary",onClick:this.showActionSheetWithCustom},"\u81ea\u5b9a\u4e49\u7684\u64cd\u4f5c\u5217\u8868"))))}});return l["default"].createElement(n,null)}}}});
webpackJsonp([44,158],{10:function(n,t,a){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}function s(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a]);return t["default"]=n,t}function p(n,t){for(var a=Object.getOwnPropertyNames(t),e=0;e<a.length;e++){var s=a[e],p=Object.getOwnPropertyDescriptor(t,s);p&&p.configurable&&void 0===n[s]&&Object.defineProperty(n,s,p)}return n}function o(n,t,a){return t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}function l(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function c(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function r(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):p(n,t))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var u=a(1),i=s(u),f=a(2),k=e(f),d=function(n){function t(){return l(this,t),c(this,n.apply(this,arguments))}return r(t,n),t.prototype.render=function(){var n,t=this.props,a=t.prefixCls,e=t.size,s=t.className,p=t.style,l=t.onClick,c=(0,k["default"])((n={},o(n,""+a,!0),o(n,s,!!s),o(n,a+"-ws"+e,!0),n));return i.createElement("div",{className:c,style:p,onClick:l})},t}(i.Component);t["default"]=d,d.defaultProps={prefixCls:"am-whitespace",size:8},n.exports=t["default"]},11:function(n,t,a){"use strict";a(5),a(12)},12:function(n,t){},15:function(n,t,a){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}function s(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a]);return t["default"]=n,t}function p(n,t){for(var a=Object.getOwnPropertyNames(t),e=0;e<a.length;e++){var s=a[e],p=Object.getOwnPropertyDescriptor(t,s);p&&p.configurable&&void 0===n[s]&&Object.defineProperty(n,s,p)}return n}function o(n,t,a){return t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}function l(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function c(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function r(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):p(n,t))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var u=a(1),i=s(u),f=a(2),k=e(f),d=function(n){function t(){return l(this,t),c(this,n.apply(this,arguments))}return r(t,n),t.prototype.render=function(){var n,t=this.props,a=t.prefixCls,e=t.size,s=t.className,p=t.children,l=t.style,c=(0,k["default"])((n={},o(n,""+a,!0),o(n,s,!!s),o(n,a+"-wb"+e,!0),n));return i.createElement("div",{className:c,style:l},p)},t}(i.Component);t["default"]=d,d.defaultProps={prefixCls:"am-wingblank",size:8},n.exports=t["default"]},16:function(n,t,a){"use strict";a(5),a(17)},17:function(n,t){},293:function(n,t,a){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}function s(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a]);return t["default"]=n,t}function p(n,t){for(var a=Object.getOwnPropertyNames(t),e=0;e<a.length;e++){var s=a[e],p=Object.getOwnPropertyDescriptor(t,s);p&&p.configurable&&void 0===n[s]&&Object.defineProperty(n,s,p)}return n}function o(n,t,a){return t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}function l(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function c(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function r(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):p(n,t))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var u=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(n[e]=a[e])}return n},i=function(){function n(n,t){var a=[],e=!0,s=!1,p=void 0;try{for(var o,l=n[Symbol.iterator]();!(e=(o=l.next()).done)&&(a.push(o.value),!t||a.length!==t);e=!0);}catch(c){s=!0,p=c}finally{try{!e&&l["return"]&&l["return"]()}finally{if(s)throw p}}return a}return function(t,a){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return n(t,a);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),f=a(1),k=s(f),d=a(2),m=e(d),b=a(23),g=e(b),y=function(n){function t(){return l(this,t),c(this,n.apply(this,arguments))}return r(t,n),t.prototype.render=function(){var n,t=(0,g["default"])(this.props,["prefixCls","color","last","children","pending","className"]),a=i(t,2),e=a[0],s=e.prefixCls,p=e.color,l=e.last,c=e.children,r=e.pending,f=e.className,d=a[1],b=(0,m["default"])((n={},o(n,s+"-item",!0),o(n,s+"-item-last",l),o(n,s+"-item-pending",r),o(n,f,f),n));return k.createElement("li",u({},d,{className:b}),k.createElement("div",{className:s+"-item-tail"}),k.createElement("div",{className:s+"-item-head "+s+"-item-head-"+p}),k.createElement("div",{className:s+"-item-content"},c))},t}(k.Component);t["default"]=y,y.defaultProps={prefixCls:"am-timeline",color:"blue",last:!1,pending:!1},n.exports=t["default"]},395:function(n,t,a){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}function s(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a]);return t["default"]=n,t}function p(n,t){for(var a=Object.getOwnPropertyNames(t),e=0;e<a.length;e++){var s=a[e],p=Object.getOwnPropertyDescriptor(t,s);p&&p.configurable&&void 0===n[s]&&Object.defineProperty(n,s,p)}return n}function o(n,t,a){return t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}function l(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function c(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function r(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):p(n,t))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var u=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(n[e]=a[e])}return n},i=function(){function n(n,t){var a=[],e=!0,s=!1,p=void 0;try{for(var o,l=n[Symbol.iterator]();!(e=(o=l.next()).done)&&(a.push(o.value),!t||a.length!==t);e=!0);}catch(c){s=!0,p=c}finally{try{!e&&l["return"]&&l["return"]()}finally{if(s)throw p}}return a}return function(t,a){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return n(t,a);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),f=a(1),k=s(f),d=a(2),m=e(d),b=a(293),g=e(b),y=a(23),h=e(y),v=function(n){function t(){return l(this,t),c(this,n.apply(this,arguments))}return r(t,n),t.prototype.render=function(){var n,t=(0,h["default"])(this.props,["prefixCls","children","pending","className"]),a=i(t,2),e=a[0],s=e.prefixCls,p=e.children,l=e.pending,c=e.className,r=a[1],f="boolean"==typeof l?null:l,d=(0,m["default"])((n={},o(n,s,!0),o(n,s+"-pending",!!l),o(n,c,c),n));return k.createElement("ul",u({},r,{className:d}),k.Children.map(p,function(n,t){return k.cloneElement(n,{last:t===p.length-1})}),l?k.createElement(g["default"],{pending:!!l},f):null)},t}(k.Component);t["default"]=v,v.defaultProps={prefixCls:"am-timeline"},n.exports=t["default"]},396:function(n,t,a){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(t,"__esModule",{value:!0});var s=a(395),p=e(s),o=a(293),l=e(o);p["default"].Item=l["default"],t["default"]=p["default"],n.exports=t["default"]},397:function(n,t,a){"use strict";a(5),a(453)},453:function(n,t){},910:function(n,t,a){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}var s=(a(16),a(15)),p=e(s),o=(a(397),a(396)),l=e(o),c=(a(11),a(10)),r=e(c),u=a(1),i=e(u),f=a(4);e(f);n.exports={content:[["p","\u5706\u5708\u989c\u8272\uff0c\u7eff\u8272\u7528\u4e8e\u5df2\u5b8c\u6210\u3001\u6210\u529f\u72b6\u6001\uff0c\u6a59\u8272\u8868\u793a\u544a\u8b66\u6216\u9519\u8bef\u72b6\u6001\uff0c\u84dd\u8272\u53ef\u8868\u793a\u6b63\u5728\u8fdb\u884c\u6216\u5176\u4ed6\u9ed8\u8ba4\u72b6\u6001\u3002"]],meta:{order:1,title:"\u5706\u5708\u989c\u8272",filename:"components/timeline/demo/color.md",id:"components-timeline-demo-color"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Timeline<span class="token punctuation" >,</span> WingBlank<span class="token punctuation" >,</span> WhiteSpace <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >let</span> App <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >32</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WingBlank</span> <span class="token attr-name" >size</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >32</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Timeline</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Timeline.Item</span> <span class="token attr-name" >color</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>green<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u521b\u5efa\u670d\u52a1\u73b0\u573a <span class="token number" >2015</span><span class="token operator" >-</span><span class="token number" >09</span><span class="token operator" >-</span><span class="token number" >01</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Timeline.Item</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Timeline.Item</span> <span class="token attr-name" >color</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>green<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u521b\u5efa\u670d\u52a1\u73b0\u573a <span class="token number" >2015</span><span class="token operator" >-</span><span class="token number" >09</span><span class="token operator" >-</span><span class="token number" >01</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Timeline.Item</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Timeline.Item</span> <span class="token attr-name" >color</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>orange<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n              <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span><span class="token punctuation" >></span></span>\u521d\u6b65\u6392\u9664\u7f51\u7edc\u5f02\u5e38<span class="token number" >1</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n              <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span><span class="token punctuation" >></span></span>\u521d\u6b65\u6392\u9664\u7f51\u7edc\u5f02\u5e38<span class="token number" >2</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n              <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span><span class="token punctuation" >></span></span>\u521d\u6b65\u6392\u9664\u7f51\u7edc\u5f02\u5e38<span class="token number" >3</span> <span class="token number" >2015</span><span class="token operator" >-</span><span class="token number" >09</span><span class="token operator" >-</span><span class="token number" >01</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Timeline.Item</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Timeline.Item</span><span class="token punctuation" >></span></span>\n              <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span><span class="token punctuation" >></span></span>\u6280\u672f\u6d4b\u8bd5\u5f02\u5e38<span class="token number" >1</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n              <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span><span class="token punctuation" >></span></span>\u6280\u672f\u6d4b\u8bd5\u5f02\u5e38<span class="token number" >2</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n              <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span><span class="token punctuation" >></span></span>\u6280\u672f\u6d4b\u8bd5\u5f02\u5e38<span class="token number" >3</span> <span class="token number" >2015</span><span class="token operator" >-</span><span class="token number" >09</span><span class="token operator" >-</span><span class="token number" >01</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Timeline.Item</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Timeline</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>WingBlank</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>App</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=i["default"].createClass({displayName:"App",render:function(){return i["default"].createElement("div",null,i["default"].createElement(r["default"],{size:32}),i["default"].createElement(p["default"],{size:32},i["default"].createElement(l["default"],null,i["default"].createElement(l["default"].Item,{color:"green"},"\u521b\u5efa\u670d\u52a1\u73b0\u573a 2015-09-01"),i["default"].createElement(l["default"].Item,{color:"green"},"\u521b\u5efa\u670d\u52a1\u73b0\u573a 2015-09-01"),i["default"].createElement(l["default"].Item,{color:"orange"},i["default"].createElement("p",null,"\u521d\u6b65\u6392\u9664\u7f51\u7edc\u5f02\u5e381"),i["default"].createElement("p",null,"\u521d\u6b65\u6392\u9664\u7f51\u7edc\u5f02\u5e382"),i["default"].createElement("p",null,"\u521d\u6b65\u6392\u9664\u7f51\u7edc\u5f02\u5e383 2015-09-01")),i["default"].createElement(l["default"].Item,null,i["default"].createElement("p",null,"\u6280\u672f\u6d4b\u8bd5\u5f02\u5e381"),i["default"].createElement("p",null,"\u6280\u672f\u6d4b\u8bd5\u5f02\u5e382"),i["default"].createElement("p",null,"\u6280\u672f\u6d4b\u8bd5\u5f02\u5e383 2015-09-01")))))}});return i["default"].createElement(n,null)},style:"\n  .demo-preview-wrapper .demo-preview-scroller * { box-sizing: border-box; }\n"}}});
webpackJsonp([47,158],{76:function(n,a,s){"use strict";n.exports=s(80)},77:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function e(n){if(n&&n.__esModule)return n;var a={};if(null!=n)for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(a[s]=n[s]);return a["default"]=n,a}function p(n,a){for(var s=Object.getOwnPropertyNames(a),t=0;t<s.length;t++){var e=s[t],p=Object.getOwnPropertyDescriptor(a,e);p&&p.configurable&&void 0===n[e]&&Object.defineProperty(n,e,p)}return n}function o(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function c(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function u(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):p(n,a))}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var l=Object.assign||function(n){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t])}return n},i=s(1),r=e(i),k=s(76),d=t(k),f=function(n){function a(){return o(this,a),c(this,n.apply(this,arguments))}return u(a,n),a.prototype.render=function(){return r.createElement(d["default"],l({},this.props,{type:"radio"}))},a}(r.Component);a["default"]=f,f.defaultProps={prefixCls:"am-radio",name:"",checked:!1,disabled:!1,onChange:function(){}},n.exports=a["default"]},80:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function e(n,a,s){return a in n?Object.defineProperty(n,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[a]=s,n}function p(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function o(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function c(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):n.__proto__=a)}Object.defineProperty(a,"__esModule",{value:!0});var u=Object.assign||function(n){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t])}return n},l=function(){function n(n,a){for(var s=0;s<a.length;s++){var t=a[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(a,s,t){return s&&n(a.prototype,s),t&&n(a,t),a}}(),i=s(1),r=t(i),k=s(81),d=t(k),f=s(2),h=t(f),g=function(n){function a(n){p(this,a);var s=o(this,Object.getPrototypeOf(a).call(this,n));y.call(s);var t=!1;return t="checked"in n?n.checked:n.defaultChecked,s.state={checked:t,focus:!1},s}return c(a,n),l(a,[{key:"componentWillReceiveProps",value:function(n){"checked"in n&&this.setState({checked:n.checked})}},{key:"shouldComponentUpdate",value:function(){for(var n=arguments.length,a=Array(n),s=0;s<n;s++)a[s]=arguments[s];return d["default"].shouldComponentUpdate.apply(this,a)}},{key:"render",value:function(){var n,a=u({},this.props);delete a.defaultChecked;var s=this.state,t=a.prefixCls,p=s.checked;"boolean"==typeof p&&(p=p?1:0);var o=(0,h["default"])((n={},e(n,a.className,!!a.className),e(n,t,1),e(n,t+"-checked",p),e(n,t+"-checked-"+p,!!p),e(n,t+"-focused",s.focus),e(n,t+"-disabled",a.disabled),n));return r["default"].createElement("span",{className:o,style:a.style},r["default"].createElement("span",{className:t+"-inner"}),r["default"].createElement("input",{name:a.name,type:a.type,readOnly:a.readOnly,disabled:a.disabled,className:t+"-input",checked:!!p,onFocus:this.handleFocus,onBlur:this.handleBlur,onChange:this.handleChange}))}}]),a}(r["default"].Component),y=function(){var n=this;this.handleFocus=function(a){n.setState({focus:!0}),n.props.onFocus(a)},this.handleBlur=function(a){n.setState({focus:!1}),n.props.onBlur(a)},this.handleChange=function(a){var s=n.state.checked;"checked"in n.props||n.setState({checked:!s}),n.props.onChange({target:u({},n.props,{checked:!s}),stopPropagation:function(){a.stopPropagation()},preventDefault:function(){a.preventDefault()}})}};a["default"]=g,g.propTypes={name:r["default"].PropTypes.string,prefixCls:r["default"].PropTypes.string,style:r["default"].PropTypes.object,type:r["default"].PropTypes.string,className:r["default"].PropTypes.string,defaultChecked:r["default"].PropTypes.oneOfType([r["default"].PropTypes.number,r["default"].PropTypes.bool]),checked:r["default"].PropTypes.oneOfType([r["default"].PropTypes.number,r["default"].PropTypes.bool]),onFocus:r["default"].PropTypes.func,onBlur:r["default"].PropTypes.func,onChange:r["default"].PropTypes.func},g.defaultProps={prefixCls:"rc-checkbox",style:{},type:"checkbox",className:"",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){}},n.exports=a["default"]},81:function(n,a,s){n.exports=s(82)},82:function(n,a,s){"use strict";var t=s(83),e={shouldComponentUpdate:function(n,a){return t(this,n,a)}};n.exports=e},83:function(n,a,s){"use strict";function t(n,a,s){return!e(n.props,a)||!e(n.state,s)}var e=s(106);n.exports=t},113:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function e(n){if(n&&n.__esModule)return n;var a={};if(null!=n)for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(a[s]=n[s]);return a["default"]=n,a}function p(n,a){for(var s=Object.getOwnPropertyNames(a),t=0;t<s.length;t++){var e=s[t],p=Object.getOwnPropertyDescriptor(a,e);p&&p.configurable&&void 0===n[e]&&Object.defineProperty(n,e,p)}return n}function o(n,a,s){return a in n?Object.defineProperty(n,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[a]=s,n}function c(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function u(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function l(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):p(n,a))}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var i=s(1),r=e(i),k=s(2),d=t(k),f=s(77),h=t(f),g=s(21),y=t(g),b=y["default"].Item,m=function(n){function a(){return c(this,a),u(this,n.apply(this,arguments))}return l(a,n),a.prototype.render=function(){var n,a=this.props,s=a.prefixCls,t=a.listPrefixCls,e=a.style,p=a.name,c=a.checked,u=a.disabled,l=a.children,i=a.className,k=a.onChange,f=(0,d["default"])((n={},o(n,s+"-item",!0),o(n,s+"-item-disabled",u===!0),o(n,i,i),n));return r.createElement(b,{prefixCls:t,style:e,className:f,extra:r.createElement(h["default"],{checked:c,name:p,onChange:k,disabled:u})},l)},a}(r.Component);a["default"]=m,m.defaultProps={prefixCls:"am-radio",listPrefixCls:"am-list",name:"",checked:!1,disabled:!1,onChange:function(){}},n.exports=a["default"]},114:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var e=s(77),p=t(e),o=s(113),c=t(o);p["default"].RadioItem=c["default"],a["default"]=p["default"],n.exports=a["default"]},290:function(n,a,s){"use strict";s(5),s(25),s(342)},342:function(n,a){},867:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var e=(s(25),s(21)),p=t(e),o=(s(290),s(114)),c=t(o),u=s(1),l=t(u),i=s(4);t(i);n.exports={content:[["p","Radio.RadioItem"]],meta:{order:1,title:"\u5217\u8868\u5355\u9009\u6846",filename:"components/radio/demo/RadioItem.md",id:"components-radio-demo-RadioItem"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> List<span class="token punctuation" >,</span> Radio <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> RadioItem <span class="token operator" >=</span> Radio<span class="token punctuation" >.</span>RadioItem<span class="token punctuation" >;</span>\n\n<span class="token keyword" >let</span> Test <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >getInitialState</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span>\n      disabled<span class="token punctuation" >:</span> <span class="token boolean" >false</span><span class="token punctuation" >,</span>\n      value<span class="token punctuation" >:</span> <span class="token number" >1</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >handleChange</span><span class="token punctuation" >(</span>e<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >if</span> <span class="token punctuation" >(</span>e<span class="token punctuation" >.</span>target<span class="token punctuation" >.</span>checked<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n      <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n        value<span class="token punctuation" >:</span> <span class="token number" >1</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >handleChange2</span><span class="token punctuation" >(</span>e<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >if</span> <span class="token punctuation" >(</span>e<span class="token punctuation" >.</span>target<span class="token punctuation" >.</span>checked<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n      <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n        value<span class="token punctuation" >:</span> <span class="token number" >2</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List</span> <span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List.Header</span><span class="token punctuation" >></span></span>\u8868\u5355\u5355\u9009\u6846\uff0c\u666e\u901a\u5217\u8868\u4e2d\u5355\u9009<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List.Header</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List.Body</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>RadioItem</span>\n              <span class="token attr-name" >checked</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>value <span class="token operator" >===</span> <span class="token number" >1</span><span class="token punctuation" >}</span></span>\n              <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>handleChange<span class="token punctuation" >}</span></span>\n              <span class="token attr-name" >disabled</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>disabled<span class="token punctuation" >}</span></span>\n            <span class="token punctuation" >></span></span>\n              \u4f7f\u7528 Ant Desgin Component\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>RadioItem</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>RadioItem</span>\n              <span class="token attr-name" >checked</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>value <span class="token operator" >===</span> <span class="token number" >2</span><span class="token punctuation" >}</span></span>\n              <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>handleChange2<span class="token punctuation" >}</span></span>\n              <span class="token attr-name" >disabled</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>disabled<span class="token punctuation" >}</span></span>\n            <span class="token punctuation" >></span></span>\n              \u4f7f\u7528 Ant Desgin Component\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>RadioItem</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>RadioItem</span>\n              <span class="token attr-name" >checked</span>\n              <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>handleChange<span class="token punctuation" >}</span></span>\n              <span class="token attr-name" >disabled</span>\n            <span class="token punctuation" >></span></span>\n              \u4e2a\u6027\u5316\u8c03\u6574disabled\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>RadioItem</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>RadioItem</span>\n              <span class="token attr-name" >checked</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token boolean" >false</span><span class="token punctuation" >}</span></span>\n              <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>handleChange<span class="token punctuation" >}</span></span>\n              <span class="token attr-name" >disabled</span>\n            <span class="token punctuation" >></span></span>\n              \u4e2a\u6027\u5316\u8c03\u6574disabled\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>RadioItem</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List.Body</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Test</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=c["default"].RadioItem,a=l["default"].createClass({displayName:"Test",getInitialState:function(){return{disabled:!1,value:1}},handleChange:function(n){n.target.checked&&this.setState({value:1})},handleChange2:function(n){n.target.checked&&this.setState({value:2})},render:function(){return l["default"].createElement("div",null,l["default"].createElement(p["default"],null,l["default"].createElement(p["default"].Header,null,"\u8868\u5355\u5355\u9009\u6846\uff0c\u666e\u901a\u5217\u8868\u4e2d\u5355\u9009"),l["default"].createElement(p["default"].Body,null,l["default"].createElement(n,{checked:1===this.state.value,onChange:this.handleChange,disabled:this.state.disabled},"\u4f7f\u7528 Ant Desgin Component"),l["default"].createElement(n,{checked:2===this.state.value,onChange:this.handleChange2,disabled:this.state.disabled},"\u4f7f\u7528 Ant Desgin Component"),l["default"].createElement(n,{checked:!0,onChange:this.handleChange,disabled:!0},"\u4e2a\u6027\u5316\u8c03\u6574disabled"),l["default"].createElement(n,{checked:!1,onChange:this.handleChange,disabled:!0},"\u4e2a\u6027\u5316\u8c03\u6574disabled"))))}});return l["default"].createElement(a,null)}}}});
webpackJsonp([77,158],{107:function(n,t,s){"use strict";function a(n){return n&&n.__esModule?n:{"default":n}}function e(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s]);return t["default"]=n,t}function p(n,t){for(var s=Object.getOwnPropertyNames(t),a=0;a<s.length;a++){var e=s[a],p=Object.getOwnPropertyDescriptor(t,e);p&&p.configurable&&void 0===n[e]&&Object.defineProperty(n,e,p)}return n}function o(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function c(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function l(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):p(n,t))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var u=s(1),i=e(u),r=s(261),k=a(r),d=s(14),f=a(d);if("undefined"!=typeof window){var h=function(){return{matches:!1,addListener:function(){},removeListener:function(){}}};window.matchMedia=window.matchMedia||h}var m=function(n){function t(){return o(this,t),c(this,n.apply(this,arguments))}return l(t,n),t.prototype.render=function(){var n=(0,f["default"])({},this.props);"fade"===n.effect&&(n.fade=!0,n.draggable=!1);var t="am-carousel";return n.vertical&&(t+=" am-carousel-vertical"),"banner"===n.mode&&(t+=" am-carousel-banner"),"card"===n.mode&&(t+=" am-carousel-card center slider variable-width",n.centerMode=!0,n.infinite=!0,n.slidesToShow=1,n.slidesToScroll=1,n.variableWidth=!0),i.createElement("div",{className:t},i.createElement(k["default"],n))},t}(i.Component);t["default"]=m,m.defaultProps={dots:!0,arrows:!1},n.exports=t["default"]},108:function(n,t,s){"use strict";s(5),s(133)},133:function(n,t){},216:function(n,t,s){"use strict";function a(n){return n&&n.__esModule?n:{"default":n}}function e(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s]);return t["default"]=n,t}function p(n,t){for(var s=Object.getOwnPropertyNames(t),a=0;a<s.length;a++){var e=s[a],p=Object.getOwnPropertyDescriptor(t,e);p&&p.configurable&&void 0===n[e]&&Object.defineProperty(n,e,p)}return n}function o(n,t,s){return t in n?Object.defineProperty(n,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[t]=s,n}function c(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function l(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function u(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):p(n,t))}function i(){}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r=s(1),k=e(r),d=s(2),f=a(d),h=s(71),m=a(h),g=s(107),y=a(g),b=function(n){function t(s){c(this,t);var a=l(this,n.call(this,s));return a.onTouchStart=function(n){a.props.needActive&&a.setState({hover:!0,hoverIndex:n})},a.onTouchEnd=function(){a.props.needActive&&a.setState({hover:!1})},a.state={hover:!1},a}return u(t,n),t.prototype.componentWillMount=function(){this.clientWidth=document.documentElement.clientWidth},t.prototype.render=function(){for(var n,t=this,s=this.props,a=s.className,e=s.data,p=s.prefixCls,c=s.hasLine,l=s.isCarousel,u=s.needActive,i=(0,f["default"])((n={},o(n,p,!0),o(n,p+"-line",c),o(n,a,a),n)),r=(0,f["default"])(o({},p+"-item-hover",u)),d=e.length,h=Math.ceil(d/4),g=[],b=[],j={height:this.clientWidth/4+"px",paddingTop:(this.clientWidth/4-40)/2+"px"},v=function(n){for(var s=[],a=function(a){4*n+a<d?s.push(k.createElement(m["default"].Item,{className:r,style:j,onClick:function(){t.props.onClick(e[4*n+a],4*n+a)},key:"griditem-"+(4*n+a)},k.createElement("div",{className:p+"-icon",style:{backgroundImage:"url("+e[4*n+a].icon+")"}}),k.createElement("div",{className:p+"-text"},e[4*n+a].text))):s.push(k.createElement(m["default"].Item,{style:j,key:"griditem-"+(4*n+a)}))},o=0;o<4;o++)a(o);g.push(k.createElement(m["default"],{key:"fridflex"+n},s))},E=0;E<h;E++)v(E);if(l)for(var C=g.length,x=0,w=Math.ceil(C/2);x<w;x++)2*x<C&&b.push(),2*x+1<C?b.push(k.createElement("div",{key:"carouselitem-"+(2*x+1)},g[2*x],g[2*x+1])):b.push(k.createElement("div",{key:"carouselitem-"+2*x},g[2*x],k.createElement(m["default"],null,k.createElement(m["default"].Item,{className:r,style:j}),k.createElement(m["default"].Item,{className:r,style:j}),k.createElement(m["default"].Item,{className:r,style:j}),k.createElement(m["default"].Item,{className:r,style:j}))));return k.createElement("div",{className:i},l?k.createElement(y["default"],{mode:"banner",infinite:!1},b):g)},t}(k.Component);t["default"]=b,b.propTypes={prefixCls:r.PropTypes.string,data:r.PropTypes.array,onClick:r.PropTypes.func,hasLine:r.PropTypes.bool,needActive:r.PropTypes.bool,isCarousel:r.PropTypes.bool},b.defaultProps={prefixCls:"am-grid",data:[],onClick:i,hasLine:!0,needActive:!0,isCarousel:!1},n.exports=t["default"]},217:function(n,t,s){"use strict";s(5),s(84),s(108),s(240)},240:function(n,t){},825:function(n,t,s){"use strict";function a(n){return n&&n.__esModule?n:{"default":n}}var e=(s(217),s(216)),p=a(e),o=s(1),c=a(o),l=s(4);a(l);n.exports={content:[],meta:{order:2,title:"\u8d70\u9a6c\u706f\u6709\u8fb9\u7ebf",filename:"components/grid/demo/carousel-border.md",id:"components-grid-demo-carousel-border"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Grid <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >let</span> data3 <span class="token operator" >=</span> <span class="token punctuation" >[</span>\n  <span class="token punctuation" >{</span>\n    icon<span class="token punctuation" >:</span> <span class="token string" >\'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png\'</span><span class="token punctuation" >,</span>\n    text<span class="token punctuation" >:</span> <span class="token string" >\'\u540d\u5b57\'</span><span class="token punctuation" >,</span>\n    link<span class="token punctuation" >:</span> <span class="token string" >\'hehe\'</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span>\n    icon<span class="token punctuation" >:</span> <span class="token string" >\'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png\'</span><span class="token punctuation" >,</span>\n    text<span class="token punctuation" >:</span> <span class="token string" >\'\u540d\u5b57\'</span><span class="token punctuation" >,</span>\n    link<span class="token punctuation" >:</span> <span class="token string" >\'hehe\'</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span>\n    icon<span class="token punctuation" >:</span> <span class="token string" >\'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png\'</span><span class="token punctuation" >,</span>\n    text<span class="token punctuation" >:</span> <span class="token string" >\'\u540d\u5b57\'</span><span class="token punctuation" >,</span>\n    link<span class="token punctuation" >:</span> <span class="token string" >\'hehe\'</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span>\n    icon<span class="token punctuation" >:</span> <span class="token string" >\'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png\'</span><span class="token punctuation" >,</span>\n    text<span class="token punctuation" >:</span> <span class="token string" >\'\u540d\u5b57\'</span><span class="token punctuation" >,</span>\n    link<span class="token punctuation" >:</span> <span class="token string" >\'hehe\'</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span>\n    icon<span class="token punctuation" >:</span> <span class="token string" >\'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png\'</span><span class="token punctuation" >,</span>\n    text<span class="token punctuation" >:</span> <span class="token string" >\'\u540d\u5b57\'</span><span class="token punctuation" >,</span>\n    link<span class="token punctuation" >:</span> <span class="token string" >\'hehe\'</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span>\n    icon<span class="token punctuation" >:</span> <span class="token string" >\'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png\'</span><span class="token punctuation" >,</span>\n    text<span class="token punctuation" >:</span> <span class="token string" >\'\u540d\u5b57\'</span><span class="token punctuation" >,</span>\n    link<span class="token punctuation" >:</span> <span class="token string" >\'hehe\'</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span>\n    icon<span class="token punctuation" >:</span> <span class="token string" >\'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png\'</span><span class="token punctuation" >,</span>\n    text<span class="token punctuation" >:</span> <span class="token string" >\'\u540d\u5b57\'</span><span class="token punctuation" >,</span>\n    link<span class="token punctuation" >:</span> <span class="token string" >\'hehe\'</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span>\n    icon<span class="token punctuation" >:</span> <span class="token string" >\'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png\'</span><span class="token punctuation" >,</span>\n    text<span class="token punctuation" >:</span> <span class="token string" >\'\u540d\u5b57\'</span><span class="token punctuation" >,</span>\n    link<span class="token punctuation" >:</span> <span class="token string" >\'hehe\'</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span>\n    icon<span class="token punctuation" >:</span> <span class="token string" >\'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png\'</span><span class="token punctuation" >,</span>\n    text<span class="token punctuation" >:</span> <span class="token string" >\'\u540d\u5b57\'</span><span class="token punctuation" >,</span>\n    link<span class="token punctuation" >:</span> <span class="token string" >\'hehe\'</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span>\n    icon<span class="token punctuation" >:</span> <span class="token string" >\'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png\'</span><span class="token punctuation" >,</span>\n    text<span class="token punctuation" >:</span> <span class="token string" >\'\u540d\u5b57\'</span><span class="token punctuation" >,</span>\n    link<span class="token punctuation" >:</span> <span class="token string" >\'hehe\'</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >let</span> GridExample <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Grid</span>\n        <span class="token attr-name" >data</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>data3<span class="token punctuation" >}</span></span>\n        <span class="token attr-name" >isCarousel</span>\n        <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span>el<span class="token punctuation" >,</span> index<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span> <span class="token function" >alert</span><span class="token punctuation" >(</span>index<span class="token punctuation" >)</span><span class="token punctuation" >;</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n        <span class="token attr-name" >needActive</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token boolean" >false</span><span class="token punctuation" >}</span></span>\n      <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>GridExample</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=[{icon:"https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png",text:"\u540d\u5b57",link:"hehe"},{icon:"https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png",text:"\u540d\u5b57",link:"hehe"},{icon:"https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png",text:"\u540d\u5b57",link:"hehe"},{icon:"https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png",text:"\u540d\u5b57",link:"hehe"},{icon:"https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png",text:"\u540d\u5b57",link:"hehe"},{icon:"https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png",text:"\u540d\u5b57",link:"hehe"},{icon:"https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png",text:"\u540d\u5b57",link:"hehe"},{icon:"https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png",text:"\u540d\u5b57",link:"hehe"},{icon:"https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png",text:"\u540d\u5b57",link:"hehe"},{icon:"https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png",text:"\u540d\u5b57",link:"hehe"}],t=c["default"].createClass({displayName:"GridExample",render:function(){return c["default"].createElement("div",null,c["default"].createElement(p["default"],{data:n,isCarousel:!0,onClick:function(n,t){alert(t)},needActive:!1}))}});return c["default"].createElement(t,null)}}}});
webpackJsonp([31,158],{10:function(t,n,e){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}function s(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e]);return n["default"]=t,n}function o(t,n){for(var e=Object.getOwnPropertyNames(n),a=0;a<e.length;a++){var s=e[a],o=Object.getOwnPropertyDescriptor(n,s);o&&o.configurable&&void 0===t[s]&&Object.defineProperty(t,s,o)}return t}function i(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function p(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function r(t,n){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?t:n}function c(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(t,n):o(t,n))}Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=void 0;var l=e(1),u=s(l),f=e(2),d=a(f),v=function(t){function n(){return p(this,n),r(this,t.apply(this,arguments))}return c(n,t),n.prototype.render=function(){var t,n=this.props,e=n.prefixCls,a=n.size,s=n.className,o=n.style,p=n.onClick,r=(0,d["default"])((t={},i(t,""+e,!0),i(t,s,!!s),i(t,e+"-ws"+a,!0),t));return u.createElement("div",{className:r,style:o,onClick:p})},n}(u.Component);n["default"]=v,v.defaultProps={prefixCls:"am-whitespace",size:8},t.exports=n["default"]},11:function(t,n,e){"use strict";e(5),e(12)},12:function(t,n){},145:function(t,n,e){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}function s(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}Object.defineProperty(n,"__esModule",{value:!0});var o=e(1),i=a(o),p=e(2),r=a(p),c=i["default"].createClass({displayName:"TabPane",propTypes:{active:o.PropTypes.bool},render:function(){var t,n=this.props;if(this._isActived=this._isActived||n.active,!this._isActived)return null;var e=n.rootPrefixCls+"-tabpane",a=(0,r["default"])((t={},s(t,e+"-hidden",!n.active),s(t,e,1),t));return i["default"].createElement("div",{role:"tabpanel","aria-hidden":n.active?"false":"true",className:a},n.children)}});n["default"]=c,t.exports=n["default"]},146:function(t,n){"use strict";function e(t,n){var e=t["page"+(n?"Y":"X")+"Offset"],a="scroll"+(n?"Top":"Left");if("number"!=typeof e){var s=t.document;e=s.documentElement[a],"number"!=typeof e&&(e=s.body[a])}return e}function a(t){var n=void 0,a=void 0,s=void 0,o=t.ownerDocument,i=o.body,p=o&&o.documentElement;n=t.getBoundingClientRect(),a=n.left,s=n.top,a-=p.clientLeft||i.clientLeft||0,s-=p.clientTop||i.clientTop||0;var r=o.defaultView||o.parentWindow;return a+=e(r),s+=e(r,!0),{left:a,top:s}}function s(){if(!window.getComputedStyle)return!1;if(void 0!==o)return o;var t=document.createElement("p"),n=void 0,e={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};document.body.insertBefore(t,null);for(var a in e)void 0!==t.style[a]&&(t.style[a]="translate3d(1px,1px,1px)",n=window.getComputedStyle(t).getPropertyValue(e[a]),void 0!==n&&n.length>0&&"none"!==n&&(o=a));return document.body.removeChild(t),o}Object.defineProperty(n,"__esModule",{value:!0}),n.getScroll=e,n.offset=a,n.getTransformPropertyName=s;var o=void 0},222:function(t,n,e){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}function s(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e]);return n["default"]=t,n}function o(t,n){for(var e=Object.getOwnPropertyNames(n),a=0;a<e.length;a++){var s=e[a],o=Object.getOwnPropertyDescriptor(n,s);o&&o.configurable&&void 0===t[s]&&Object.defineProperty(t,s,o)}return t}function i(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function p(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function r(t,n){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?t:n}function c(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(t,n):o(t,n))}Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=void 0;var l=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t},u=e(1),f=s(u),d=e(2),v=a(d),k=e(258),b=a(k),h=function(t){function n(){return p(this,n),r(this,t.apply(this,arguments))}return c(n,t),n.prototype.render=function(){var t,n=this.props,e=n.className,a=n.prefixCls,s=n.type,o=n.children,p=n.animation,r=n.mode,c=n.tabPosition,u=(0,v["default"])((t={},i(t,e,!!e),i(t,a+"-"+s,!0),i(t,a+"-"+r,"tabbar"===s),t)),d="tabbar"!==s?c:"bottom",k="tabbar"!==s&&p?p:"",h=Object.assign({},this.props);return["className","prefixCls","type","animation","mode","tabPosition","children"].forEach(function(t){h.hasOwnProperty(t)&&delete h[t]}),f.createElement(b["default"],l({prefixCls:a,className:u,tabPosition:d,animation:k},h),o)},n}(f.Component);n["default"]=h,h.TabPane=b["default"].TabPane,h.defaultProps={prefixCls:"am-tab",animation:"slide-horizontal",type:"line",mode:"light",onChange:function(){},onTabClick:function(){}},t.exports=n["default"]},223:function(t,n,e){"use strict";e(5),e(243)},243:function(t,n){},254:function(t,n,e){"use strict";function a(t){var n=t.refs,e=n.nav,a=(0,s.offset)(e),o=n.inkBar,i=n.activeTab,p=t.props.tabPosition;if(i){var r=i,c=(0,s.offset)(r),l=(0,s.getTransformPropertyName)();if("top"===p||"bottom"===p){var u=c.left-a.left;l?(o.style[l]="translate3d("+u+"px,0,0)",o.style.width=r.offsetWidth+"px",o.style.height=""):(o.style.left=u+"px",o.style.top="",o.style.bottom="",o.style.right=e.offsetWidth-u-r.offsetWidth+"px")}else{var f=c.top-a.top;l?(o.style[l]="translate3d(0,"+f+"px,0)",o.style.height=r.offsetHeight+"px",o.style.width=""):(o.style.left="",o.style.right="",o.style.top=f+"px",o.style.bottom=e.offsetHeight-f-r.offsetHeight+"px")}}o.style.display=i?"block":"none"}Object.defineProperty(n,"__esModule",{value:!0});var s=e(146);n["default"]={componentDidUpdate:function(){a(this)},componentDidMount:function(){a(this)}},t.exports=n["default"]},255:function(t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n["default"]={LEFT:37,UP:38,RIGHT:39,DOWN:40},t.exports=n["default"]},256:function(t,n,e){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}function s(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function o(){}Object.defineProperty(n,"__esModule",{value:!0});var i=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t},p=e(1),r=a(p),c=e(2),l=a(c),u=e(254),f=a(u),d=e(146),v={"float":"right"},k=r["default"].createClass({displayName:"Nav",propTypes:{tabPosition:p.PropTypes.string,tabBarExtraContent:p.PropTypes.any,onTabClick:p.PropTypes.func,onKeyDown:p.PropTypes.func},mixins:[f["default"]],getInitialState:function(){return{next:!1,offset:0,prev:!1}},componentDidMount:function(){this.componentDidUpdate()},componentDidUpdate:function(t){var n=this.props;if(t&&t.tabPosition!==n.tabPosition)return void this.setOffset(0);var e=this.refs.nav,a=this.getOffsetWH(e),s=this.refs.navWrap,o=this.getOffsetWH(s),i=this.state,p=i.offset,r=o-a,c=this.state,l=c.next,u=c.prev;r>=0?(l=!1,this.setOffset(0),p=0):r<p?l=!0:(l=!1,this.setOffset(r),p=r),u=p<0,this.setNext(l),this.setPrev(u);var f={next:l,prev:u};this.isNextPrevShown(i)!==this.isNextPrevShown(f)?this.setNextPrev({},this.scrollToActiveTab):t&&n.activeKey===t.activeKey||this.scrollToActiveTab()},onTabClick:function(t){this.props.onTabClick(t)},setNextPrev:function(t,n){this.setState(t,n)},getTabs:function(){var t=this,n=this.props,e=n.panels,a=n.activeKey,s=[],o=n.prefixCls;return r["default"].Children.forEach(e,function(n){var e=n.key,p=a===e?o+"-tab-active":"";p+=" "+o+"-tab";var c={};n.props.disabled?p+=" "+o+"-tab-disabled":c={onClick:t.onTabClick.bind(t,e)};var l={};a===e&&(l.ref="activeTab"),s.push(r["default"].createElement("div",i({role:"tab","aria-disabled":n.props.disabled?"true":"false","aria-selected":a===e?"true":"false"},c,{className:p,key:e},l),r["default"].createElement("div",{className:o+"-tab-inner"},n.props.tab)))}),s},getOffsetWH:function(t){var n=this.props.tabPosition,e="offsetWidth";return"left"!==n&&"right"!==n||(e="offsetHeight"),t[e]},getOffsetLT:function(t){var n=this.props.tabPosition,e="left";return"left"!==n&&"right"!==n||(e="top"),t.getBoundingClientRect()[e]},setOffset:function(t){var n=Math.min(0,t);if(this.state.offset!==n){this.setState({offset:n});var e={},a=this.props.tabPosition,s=(0,d.getTransformPropertyName)();e="left"===a||"right"===a?s?{name:s,value:"translate3d(0,"+n+"px,0)"}:{name:"top",value:n+"px"}:s?{name:s,value:"translate3d("+n+"px,0,0)"}:{name:"left",value:n+"px"},this.refs.nav.style[e.name]=e.value}},setPrev:function(t){this.state.prev!==t&&this.setState({prev:t})},setNext:function(t){this.state.next!==t&&this.setState({next:t})},isNextPrevShown:function(t){return t.next||t.prev},scrollToActiveTab:function(){var t=this.refs,n=t.activeTab,e=t.navWrap;if(n){var a=this.getOffsetWH(n),s=this.getOffsetWH(e),o=this.state.offset,i=this.getOffsetLT(e),p=this.getOffsetLT(n);i>p?(o+=i-p,this.setState({offset:o})):i+s<p+a&&(o-=p+a-(i+s),this.setState({offset:o}))}},prev:function(){var t=this.refs.navWrap,n=this.getOffsetWH(t),e=this.state,a=e.offset;this.setOffset(a+n)},next:function(){var t=this.refs.navWrap,n=this.getOffsetWH(t),e=this.state,a=e.offset;this.setOffset(a-n)},render:function(){var t=this.props,n=this.state,e=t.prefixCls,a=this.getTabs(),i=t.tabMovingDirection,p=e+"-ink-bar";i&&(p+=" "+e+"-ink-bar-transition-"+i);var c=void 0,u=void 0,f=n.prev||n.next;if(f){var d,k;u=r["default"].createElement("span",{onClick:n.prev?this.prev:o,unselectable:"unselectable",className:(0,l["default"])((d={},s(d,e+"-tab-prev",1),s(d,e+"-tab-btn-disabled",!n.prev),d))},r["default"].createElement("span",{className:e+"-tab-prev-icon"})),c=r["default"].createElement("span",{onClick:n.next?this.next:o,unselectable:"unselectable",className:(0,l["default"])((k={},s(k,e+"-tab-next",1),s(k,e+"-tab-btn-disabled",!n.next),k))},r["default"].createElement("span",{className:e+"-tab-next-icon"}))}var b=this.props.tabBarExtraContent;return r["default"].createElement("div",{role:"tablist",className:e+"-bar",tabIndex:"0",onKeyDown:this.props.onKeyDown},b?r["default"].createElement("div",{style:v},b):null,r["default"].createElement("div",{className:e+"-nav-container "+(f?e+"-nav-container-scrolling":""),style:t.style,ref:"container"},u,c,r["default"].createElement("div",{className:e+"-nav-wrap",ref:"navWrap"},r["default"].createElement("div",{className:e+"-nav-scroll"},r["default"].createElement("div",{className:e+"-nav",ref:"nav"},r["default"].createElement("div",{className:p,ref:"inkBar"}),a)))))}});n["default"]=k,t.exports=n["default"]},257:function(t,n,e){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}function s(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function o(){}function i(t){var n=void 0;return r["default"].Children.forEach(t.children,function(t){n||t.props.disabled||(n=t.key)}),n}Object.defineProperty(n,"__esModule",{value:!0});var p=e(1),r=a(p),c=e(255),l=a(c),u=e(145),f=a(u),d=e(256),v=a(d),k=e(69),b=a(k),h=e(2),y=a(h),m=r["default"].createClass({displayName:"Tabs",propTypes:{destroyInactiveTabPane:p.PropTypes.bool,onTabClick:p.PropTypes.func,onChange:p.PropTypes.func,children:p.PropTypes.any,tabBarExtraContent:p.PropTypes.any,animation:p.PropTypes.string,prefixCls:p.PropTypes.string,className:p.PropTypes.string,tabPosition:p.PropTypes.string},getDefaultProps:function(){return{prefixCls:"rc-tabs",destroyInactiveTabPane:!1,tabBarExtraContent:null,onChange:o,tabPosition:"top",style:{},contentStyle:{},navStyle:{},onTabClick:o}},getInitialState:function(){var t=this.props,n=void 0;return n="activeKey"in t?t.activeKey:"defaultActiveKey"in t?t.defaultActiveKey:i(t),{activeKey:n}},componentWillReceiveProps:function(t){var n=this.state.activeKey;if("activeKey"in t&&(n=t.activeKey,!n))return void this.setState({activeKey:n});var e=void 0;r["default"].Children.forEach(t.children,function(t){t.key===n&&(e=!0)}),e?this.setActiveKey(n,t):this.setActiveKey(i(t),t)},onTabClick:function(t){this.setActiveKey(t),this.props.onTabClick(t),this.state.activeKey!==t&&this.props.onChange(t)},onNavKeyDown:function(t){var n=t.keyCode;if(n===l["default"].RIGHT||n===l["default"].DOWN){t.preventDefault();var e=this.getNextActiveKey(!0);this.onTabClick(e)}else if(n===l["default"].LEFT||n===l["default"].UP){t.preventDefault();var a=this.getNextActiveKey(!1);this.onTabClick(a)}},getNextActiveKey:function(t){var n=this.state.activeKey,e=[];r["default"].Children.forEach(this.props.children,function(n){n.props.disabled||(t?e.push(n):e.unshift(n))});var a=e.length,s=a&&e[0].key;return e.forEach(function(t,o){t.key===n&&(s=o===a-1?e[0].key:e[o+1].key)}),s},getTabPanes:function(){var t=this.state,n=this.props,e=t.activeKey,a=n.children,s=[];return r["default"].Children.forEach(a,function(t){var a=t.key,o=e===a;s.push(r["default"].cloneElement(t,{active:o,rootPrefixCls:n.prefixCls}))}),s},getIndexPair:function(t,n,e){var a=[];r["default"].Children.forEach(t.children,function(t){a.push(t.key)});var s=a.indexOf(n),o=a.indexOf(e);return{currentIndex:s,nextIndex:o}},setActiveKey:function(t,n){var e=n||this.props,a=this.state.activeKey;if(!(a===t||"activeKey"in e&&e===this.props))if(a){var s=this.getIndexPair(e,a,t),o=s.currentIndex,i=s.nextIndex;if(o===-1){var p=this.getIndexPair(this.props,a,t);o=p.currentIndex,i=p.nextIndex}var r=o>i?"backward":"forward";this.setState({activeKey:t,tabMovingDirection:r})}else this.setState({activeKey:t})},render:function(){var t,n=this.props,e=n.destroyInactiveTabPane,a=n.prefixCls,o=n.tabPosition,i=n.className,p=n.animation,c=(0,y["default"])((t={},s(t,a,1),s(t,a+"-"+o,1),s(t,i,!!i),t)),l=this.state.tabMovingDirection,u=this.getTabPanes(),f=void 0;f=n.transitionName&&n.transitionName[l||"backward"],!f&&p&&(f=a+"-"+p+"-"+(l||"backward")),e&&(u=u.filter(function(t){return t.props.active})),f&&(u=e?r["default"].createElement(b["default"],{exclusive:!0,component:"div",transitionName:f},u):r["default"].createElement(b["default"],{showProp:"active",exclusive:!0,component:"div",transitionName:f},u));var d=[r["default"].createElement(v["default"],{prefixCls:a,key:"nav",onKeyDown:this.onNavKeyDown,tabBarExtraContent:this.props.tabBarExtraContent,tabPosition:o,style:n.navStyle,onTabClick:this.onTabClick,tabMovingDirection:l,panels:this.props.children,activeKey:this.state.activeKey}),r["default"].createElement("div",{className:a+"-content",style:n.contentStyle,key:"content"},u)];return"bottom"===o&&d.reverse(),r["default"].createElement("div",{className:c,style:n.style},d)}});m.TabPane=f["default"],n["default"]=m,t.exports=n["default"]},258:function(t,n,e){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(n,"__esModule",{value:!0}),n.TabPane=n["default"]=void 0;var s=e(257),o=a(s),i=e(145),p=a(i);n["default"]=o["default"],n.TabPane=p["default"]},899:function(t,n,e){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}var s=(e(218),e(20)),o=a(s),i=(e(11),e(10)),p=a(i),r=(e(223),e(222)),c=a(r),l=e(1),u=a(l),f=e(4);a(f);t.exports={content:[["p","\u7981\u7528\u5185\u5bb9\u533a\u57df\u7684\u5207\u6362\u52a8\u753b\u6548\u679c"]],meta:{order:3,title:"\u5185\u5bb9\u533a\u57df\u65e0\u52a8\u753b",filename:"components/tabs/demo/noanim.md",id:"components-tabs-demo-noanim"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Tabs<span class="token punctuation" >,</span> WhiteSpace<span class="token punctuation" >,</span> Icon <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> TabPane <span class="token operator" >=</span> Tabs<span class="token punctuation" >.</span>TabPane<span class="token punctuation" >;</span>\n\n<span class="token keyword" >function</span> <span class="token function" >callback</span><span class="token punctuation" >(</span>key<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span>key<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token keyword" >let</span> TabExample <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Tabs</span> <span class="token attr-name" >defaultActiveKey</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>1<span class="token punctuation" >"</span></span> <span class="token attr-name" >animation</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token boolean" >false</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>callback<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TabPane</span> <span class="token attr-name" >tab={&lt;span</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Icon</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>loading<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\u9009\u9879\u5361\u4e00<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>span</span><span class="token punctuation" >></span></span><span class="token punctuation" >}</span> key<span class="token operator" >=</span><span class="token string" >"1"</span><span class="token operator" >></span>\u9009\u9879\u5361\u4e00\u5185\u5bb9<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>TabPane</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TabPane</span> <span class="token attr-name" >tab</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u9009\u9879\u5361\u4e8c<span class="token punctuation" >"</span></span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>2<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u9009\u9879\u5361\u4e8c\u5185\u5bb9<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>TabPane</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TabPane</span> <span class="token attr-name" >tab</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u9009\u9879\u5361\u4e09<span class="token punctuation" >"</span></span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>3<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u9009\u9879\u5361\u4e09\u5185\u5bb9<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>TabPane</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Tabs</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token punctuation" >/></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TabExample</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){function t(t){console.log(t)}var n=c["default"].TabPane,e=u["default"].createClass({displayName:"TabExample",render:function(){return u["default"].createElement("div",null,u["default"].createElement(p["default"],null),u["default"].createElement(c["default"],{defaultActiveKey:"1",animation:!1,onChange:t},u["default"].createElement(n,{tab:u["default"].createElement("span",null,u["default"].createElement(o["default"],{type:"loading"}),"\u9009\u9879\u5361\u4e00"),key:"1"},"\u9009\u9879\u5361\u4e00\u5185\u5bb9"),u["default"].createElement(n,{tab:"\u9009\u9879\u5361\u4e8c",key:"2"},"\u9009\u9879\u5361\u4e8c\u5185\u5bb9"),u["default"].createElement(n,{tab:"\u9009\u9879\u5361\u4e09",key:"3"},"\u9009\u9879\u5361\u4e09\u5185\u5bb9")),u["default"].createElement(p["default"],null))}});return u["default"].createElement(e,null)}}}});
webpackJsonp([134,158],{848:function(t,e,d){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}var a=d(1),l=(o(a),d(4));o(l);t.exports={content:["section",["h3","\u5b9a\u4e49\uff0fDefinition"],["p","\u5bf9\u8bdd\u6846\u901a\u5e38\u662f\u5305\u542b\u4e86\u67d0\u4e2a\u7279\u5b9a\u4efb\u52a1\u6216\u63d0\u9192\uff0c\u7528\u6765\u544a\u77e5\u7528\u6237\u5173\u952e\u4fe1\u606f\uff0c\u8981\u6c42\u7528\u6237\u4f5c\u51fa\u51b3\u5b9a\u6216\u64cd\u4f5c\u3002\u5f53\u9875\u64cd\u4f5c\u5f39\u51fa\u5c55\u793a\uff0c\u53ef\u627f\u8f7d\uff1a\u63d0\u793a\u3001\u6570\u636e\u6536\u96c6\u3001\u4fe1\u606f\u786e\u8ba4\u3001\u53cd\u9988\u4fe1\u606f\u3001\u901a\u77e5\u5c55\u793a\u2026"],["h3","\u89c4\u5219 / Rule"],["ol",["li",["p","\u591a\u4e2aModal\u7c7b\u7ec4\u4ef6\u540c\u65f6\u88ab\u547c\u8d77\u65f6\uff0c\u4f1a\u6309\u5148\u540e\u987a\u5e8f\u88ab\u7f13\u5b58\u5728\u961f\u5217\u4e2d\uff0c\u524d\u4e00\u4e2amodal\u5173\u95ed\u540e\uff0c\u4e0b\u4e00\u4e2amodal\u624d\u4f1a\u6253\u5f00\u3002"]],["li",["p","\u4f7f\u7528\u5bf9\u8bdd\u6846\u65f6\u9700\u8981\u614e\u91cd\u8003\u8651\uff0c\u56e0\u4e3a\u5176\u7279\u6027\u5177\u6709\u5f88\u5f3a\u7684\u5e72\u6270\u9879\u3002\u975e\u4e0d\u5f97\u5df2\u7684\u60c5\u51b5\u4e0b\u53ef\u4ee5\u4f7f\u7528\u539f\u751f\u63a7\u4ef6\u7684\u4e0b\u62c9\u6216\u5c55\u5f00\u65b9\u5f0f\u66ff\u4ee3\u3002"]],["li",["p","\u5e94\u907f\u514d\u5bf9\u8bdd\u6846\u91cc\u518d\u5f39\u5bf9\u8bdd\u6846\u7684\u60c5\u51b5\u3002"]]]],meta:{category:"APIS",type:"APIS",chinese:"\u5bf9\u8bdd\u6846",english:"Modal",filename:"components/modal/index.md"},toc:["ul",["li",["a",{href:"#API"},"API"]]],api:["section",["h2","API"],["h3","Modal ",["code","web & react native"]],["table",["thead",["tr",["th","\u53c2\u6570"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","prefixCls"],["td","\u6837\u5f0f\u7c7b\u540d\u524d\u7f00"],["td","String"],["td",["code","am-modal"]]],["tr",["td","visible"],["td","\u5bf9\u8bdd\u6846\u662f\u5426\u53ef\u89c1"],["td","Boolean"],["td","false"]],["tr",["td","title"],["td","\u6807\u9898"],["td","React.Element"],["td","\u65e0"]],["tr",["td","closable"],["td","\u662f\u5426\u663e\u793a\u53f3\u4e0a\u89d2\u7684\u5173\u95ed\u6309\u94ae"],["td","Boolean"],["td","false"]],["tr",["td","maskClosable"],["td","\u70b9\u51fb\u8499\u5c42\u662f\u5426\u5141\u8bb8\u5173\u95ed"],["td","Boolean"],["td","false"]],["tr",["td","footer"],["td","\u5e95\u90e8\u5185\u5bb9"],["td","React.Element"],["td","\u65e0"]],["tr",["td","onClose"],["td","\u70b9\u51fb x \u6216 mask \u56de\u8c03"],["td","Function"],["td","\u65e0"]],["tr",["td","onShow"],["td","modal \u663e\u793a\u56de\u8c03"],["td","Function"],["td","\u65e0"]],["tr",["td","animated"],["td","\u662f\u5426\u5c55\u793a\u52a8\u753b"],["td","Boolean"],["td","true"]],["tr",["td","transparent"],["td","\u662f\u5426\u663e\u793a\u534a\u900f\u660e"],["td","Boolean"],["td","false"]],["tr",["td","style"],["td","\u6837\u5f0f"],["td","Object"],["td","\u900f\u660e\u6a21\u5f0f\u4e0b: {width: '286px', height: 'auto'}, ",["br"],"\u975e\u900f\u660e\u6a21\u5f0f:  {width: '100%', height: '100%'} (web)"]]]],["h3","Modal.alert(title, message, actions?) ",["code","web only"]],["table",["thead",["tr",["th","\u53c2\u6570"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","title"],["td","\u6807\u9898"],["td","String \u6216 React.Element"],["td","\u65e0"]],["tr",["td","message"],["td","\u63d0\u793a\u4fe1\u606f"],["td","String \u6216 React.Element"],["td","\u65e0"]],["tr",["td","actions"],["td","\u6309\u94ae\u7ec4, ","[{text, onpress}]"],["td","Array"],["td","\u65e0"]]]],["h3","Modal.prompt(title?, message?, callbackOrActions, type?) ",["code","web only"]],["table",["thead",["tr",["th","\u53c2\u6570"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","title"],["td","\u6807\u9898"],["td","String \u6216 React.Element"],["td","\u65e0"]],["tr",["td","message"],["td","\u63d0\u793a\u4fe1\u606f"],["td","String \u6216 React.Element"],["td","\u65e0"]],["tr",["td","callbackOrActions"],["td","\u6309\u94ae\u7ec4 ","[{text, onpress}]"," \u6216\u56de\u8c03\u51fd\u6570"],["td","Array or Function"],["td","\u65e0"]],["tr",["td","type"],["td","prompt \u7684\u6837\u5f0f"],["td","String (",["code","default"],", ",["code","secure-text"],", ",["code","login-password"],")"],["td",["code","default"]]]]]]}}});
(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{13:function(t,e,c){"use strict";c.r(e);var i=c(3),n=c.n(i),a=c(5),d=c(1),s=(c(10),c(11),c(4)),b=c.n(s),l=c(0),o=function(t){var e,c,i=t.tabs,n=t.selectedTabId,a=t.onTabSelected,d=null===(e=i.find((function(t){return t.id===n})))||void 0===e?void 0:e.id;return d||(d=i[0].id),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"tabs is-boxed",children:Object(l.jsx)("ul",{children:i.map((function(t){return Object(l.jsx)("li",{className:b()({"is-active":d===t.id}),children:Object(l.jsx)("a",{href:"#".concat(t.id),onClick:function(){t.id!==n&&a(t)},children:t.title})},t.id)}))})}),Object(l.jsx)("div",{className:"block","data-cy":"tab-content",children:null===(c=i.find((function(t){return t.id===n})))||void 0===c?void 0:c.content})]})},r=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],j=function(){var t=Object(d.useState)(r[0]),e=Object(a.a)(t,2),c=e[0],i=e[1];return Object(l.jsxs)("div",{className:"section",children:[Object(l.jsxs)("h1",{className:"title",children:["Selected tab is\xa0",c.title]}),Object(l.jsx)(o,{tabs:r,selectedTabId:c.id,onTabSelected:i})]})};n.a.render(Object(l.jsx)(j,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.3ed918c1.chunk.js.map
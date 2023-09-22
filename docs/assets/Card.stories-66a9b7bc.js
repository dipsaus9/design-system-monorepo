import{r as x}from"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";var m={exports:{}},f={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y=x,h=Symbol.for("react.element"),v=Symbol.for("react.fragment"),j=Object.prototype.hasOwnProperty,g=y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,E={key:!0,ref:!0,__self:!0,__source:!0};function d(t,e,o){var r,n={},i=null,p=null;o!==void 0&&(i=""+o),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(p=e.ref);for(r in e)j.call(e,r)&&!E.hasOwnProperty(r)&&(n[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)n[r]===void 0&&(n[r]=e[r]);return{$$typeof:h,type:t,key:i,ref:p,props:n,_owner:g.current}}f.Fragment=v;f.jsx=d;f.jsxs=d;m.exports=f;var s=m.exports;function _(t){var e,o,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(o=_(t[e]))&&(r&&(r+=" "),r+=o);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function O(){for(var t,e,o=0,r="";o<arguments.length;)(t=arguments[o++])&&(e=_(t))&&(r&&(r+=" "),r+=e);return r}const b=O;function R({className:t,title:e,children:o,href:r}){return s.jsxs("a",{className:b("text-brand-tertiary-700",t),href:r,rel:"noopener noreferrer",target:"_blank",children:[s.jsxs("h2",{children:[e," ",s.jsx("span",{children:"->"})]}),s.jsx("p",{children:o})]})}const C={component:R,args:{children:"Card content",title:"Card title",href:""}},a={};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const w=["Default"];export{a as Default,w as __namedExportsOrder,C as default};
//# sourceMappingURL=Card.stories-66a9b7bc.js.map

import{r as i}from"./index-76fb7be0.js";var a={exports:{}},f={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l=i,_=Symbol.for("react.element"),m=Symbol.for("react.fragment"),x=Object.prototype.hasOwnProperty,y=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function p(t,e,o){var r,n={},s=null,u=null;o!==void 0&&(s=""+o),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(u=e.ref);for(r in e)x.call(e,r)&&!d.hasOwnProperty(r)&&(n[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)n[r]===void 0&&(n[r]=e[r]);return{$$typeof:_,type:t,key:s,ref:u,props:n,_owner:y.current}}f.Fragment=m;f.jsx=p;f.jsxs=p;a.exports=f;var v=a.exports;function c(t){var e,o,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(o=c(t[e]))&&(r&&(r+=" "),r+=o);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function R(){for(var t,e,o=0,r="";o<arguments.length;)(t=arguments[o++])&&(e=c(t))&&(r&&(r+=" "),r+=e);return r}const j=R;function E(t){return i.forwardRef(t)}const O="a",b=E(({children:t,as:e,className:o,...r},n)=>{const s=e??O;return v.jsx(s,{ref:n,className:j("text-current no-underline hover:text-current hover:underline",o),...r,children:t})});export{b as L,j as c,E as f,v as j};
//# sourceMappingURL=Link-ed7136e5.js.map

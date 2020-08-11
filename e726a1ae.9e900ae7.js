(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{148:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return b}));var a=r(2),n=r(7),o=(r(0),r(165)),l={id:"colorlog",title:"Colorlog plugin",sidebar_label:"Colorlog plugin"},c={unversionedId:"plugins/colorlog",id:"plugins/colorlog",isDocsHomePage:!1,title:"Colorlog plugin",description:"PyPI",source:"@site/docs/plugins/colorlog.md",permalink:"/docs/next/plugins/colorlog",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/plugins/colorlog.md",version:"next",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1590958613,sidebar_label:"Colorlog plugin",sidebar:"docs",previous:{title:"Ax Sweeper plugin",permalink:"/docs/next/plugins/ax_sweeper"},next:{title:"Joblib Launcher plugin",permalink:"/docs/next/plugins/joblib_launcher"}},i=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]}],p={rightToc:i};function b(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://pypi.org/project/hydra-colorlog/"}),Object(o.b)("img",Object(a.a)({parentName:"a"},{src:"https://img.shields.io/pypi/v/hydra-colorlog",alt:"PyPI"}))),"\n",Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"https://img.shields.io/pypi/l/hydra-colorlog",alt:"PyPI - License"})),"\n",Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"https://img.shields.io/pypi/pyversions/hydra-colorlog",alt:"PyPI - Python Version"})),"\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://pypistats.org/packages/hydra-colorlog"}),Object(o.b)("img",Object(a.a)({parentName:"a"},{src:"https://img.shields.io/pypi/dm/hydra-colorlog.svg",alt:"PyPI - Downloads"}))),"\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/tree/master/plugins/hydra_colorlog/example"}),Object(o.b)("img",Object(a.a)({parentName:"a"},{src:"https://img.shields.io/badge/-Example%20application-informational",alt:"Example application"}))),"\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/tree/master/plugins/hydra_colorlog"}),Object(o.b)("img",Object(a.a)({parentName:"a"},{src:"https://img.shields.io/badge/-Plugin%20source-informational",alt:"Plugin source"})))),Object(o.b)("p",null,"Adds ",Object(o.b)("a",{class:"external",href:"https://github.com/borntyping/python-colorlog",target:"_blank"},"colorlog")," colored logs for ",Object(o.b)("inlineCode",{parentName:"p"},"hydra/job_logging")," and ",Object(o.b)("inlineCode",{parentName:"p"},"hydra/hydra_logging"),"."),Object(o.b)("h3",{id:"installation"},"Installation"),Object(o.b)("h4",{id:"hydra-011---stable"},"Hydra 0.11 - stable"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"pip install hydra-colorlog --upgrade\n")),Object(o.b)("h4",{id:"hydra-10---release-candidate"},"Hydra 1.0 - Release candidate"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"pip install hydra_colorlog --upgrade --pre\n")),Object(o.b)("h3",{id:"usage"},"Usage"),Object(o.b)("p",null,"Override ",Object(o.b)("inlineCode",{parentName:"p"},"hydra/job_logging")," and ",Object(o.b)("inlineCode",{parentName:"p"},"hydra/hydra_logging")," your config:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"defaults:\n  - hydra/job_logging: colorlog\n  - hydra/hydra_logging: colorlog\n")),Object(o.b)("p",null,"See included ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/tree/master/plugins/hydra_colorlog/example"}),"example"),"."),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/plugins/colorlog/colorlog.png",alt:"Colored log output"}))))}b.isMDXComponent=!0},165:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return u}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=n.a.createContext({}),b=function(e){var t=n.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=b(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=b(r),d=a,u=s["".concat(l,".").concat(d)]||s[d]||g[d]||o;return r?n.a.createElement(u,c(c({ref:t},p),{},{components:r})):n.a.createElement(u,c({ref:t},p))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var p=2;p<o;p++)l[p]=r[p];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);
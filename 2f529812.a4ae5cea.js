(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{165:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return d}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var g=o.a.createContext({}),p=function(e){var n=o.a.useContext(g),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},b=function(e){var n=p(e.components);return o.a.createElement(g.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},s=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,g=c(e,["components","mdxType","originalType","parentName"]),b=p(t),s=r,d=b["".concat(i,".").concat(s)]||b[s]||u[s]||a;return t?o.a.createElement(d,l(l({ref:n},g),{},{components:t})):o.a.createElement(d,l({ref:n},g))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=s;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var g=2;g<a;g++)i[g]=t[g];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},82:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return p}));var r=t(2),o=t(7),a=(t(0),t(165)),i={id:"logging",title:"Logging",sidebar_label:"Logging"},l={unversionedId:"tutorials/basic/running_your_app/logging",id:"tutorials/basic/running_your_app/logging",isDocsHomePage:!1,title:"Logging",description:"People often do not use Python logging due to the setup cost.",source:"@site/docs/tutorials/basic/running_your_app/4_logging.md",permalink:"/docs/next/tutorials/basic/running_your_app/logging",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/tutorials/basic/running_your_app/4_logging.md",version:"next",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1590802749,sidebar_label:"Logging",sidebar:"docs",previous:{title:"Output/Working directory",permalink:"/docs/next/tutorials/basic/running_your_app/working_directory"},next:{title:"Debugging",permalink:"/docs/next/tutorials/basic/running_your_app/debugging"}},c=[],g={rightToc:c};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},g,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"People often do not use Python logging due to the setup cost.\nHydra solves that by configuring the Python logging for you."),Object(a.b)("p",null,"By default Hydra logs at the INFO level to both the console and a log file in the automatic working directory."),Object(a.b)("p",null,"Example of logging with Hydra:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'import logging\nfrom omegaconf import DictConfig\nimport hydra\n\n# A logger for this file\nlog = logging.getLogger(__name__)\n\n@hydra.main()\ndef my_app(_cfg: DictConfig) -> None:\n    log.info("Info level message")\n    log.debug("Debug level message")\n\nif __name__ == "__main__":\n    my_app()\n\n$ python my_app.py\n[2019-06-27 00:52:46,653][__main__][INFO] - Info level message\n\n')),Object(a.b)("p",null,"You can enable DEBUG level logging from the command line  by overriding ",Object(a.b)("inlineCode",{parentName:"p"},"hydra.verbose"),"."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"hydra.verbose")," can be a Boolean, a String or a List:"),Object(a.b)("p",null,"Examples:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"hydra.verbose=true")," : Sets the log level of ",Object(a.b)("strong",{parentName:"li"},"all")," loggers to ",Object(a.b)("inlineCode",{parentName:"li"},"DEBUG")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"hydra.verbose=NAME")," : Sets the log level of the logger ",Object(a.b)("inlineCode",{parentName:"li"},"NAME")," to ",Object(a.b)("inlineCode",{parentName:"li"},"DEBUG")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"hydra.verbose=[NAME1,NAME2]"),": Sets the log level of the loggers ",Object(a.b)("inlineCode",{parentName:"li"},"NAME1")," and ",Object(a.b)("inlineCode",{parentName:"li"},"NAME2")," to ",Object(a.b)("inlineCode",{parentName:"li"},"DEBUG"))),Object(a.b)("p",null,"Example output:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"$ python my_app.py hydra.verbose=[__main__,hydra]\n[2019-09-29 13:06:00,880] - Installed Hydra Plugins\n[2019-09-29 13:06:00,880] - ***********************\n...\n[2019-09-29 13:06:00,896][__main__][INFO] - Info level message\n[2019-09-29 13:06:00,896][__main__][DEBUG] - Debug level message\n")),Object(a.b)("p",null,"You can disable the logging output using by setting ",Object(a.b)("inlineCode",{parentName:"p"},"hydra/job_logging")," to `disabled'   "),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-commandline"}),"$ python my_app.py hydra/job_logging=disabled\n<NO OUTPUT>\n")),Object(a.b)("p",null,"Logging can be ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/configure_hydra/logging"}),"customized"),"."))}p.isMDXComponent=!0}}]);
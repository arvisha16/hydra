(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{116:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(7),o=(n(0),n(165)),i={id:"schema",title:"Structured config schema"},c={unversionedId:"tutorials/structured_config/schema",id:"tutorials/structured_config/schema",isDocsHomePage:!1,title:"Structured config schema",description:"We have seen how to use Structured Configs as configuration, but they can also be used as a schema (i.e. validating configuration files).",source:"@site/docs/tutorials/structured_config/5_schema.md",permalink:"/docs/next/tutorials/structured_config/schema",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/tutorials/structured_config/5_schema.md",version:"next",lastUpdatedBy:"Olivier Delalleau",lastUpdatedAt:1594925230,sidebar:"docs",previous:{title:"Defaults",permalink:"/docs/next/tutorials/structured_config/defaults"},next:{title:"Config Store API",permalink:"/docs/next/tutorials/structured_config/config_store"}},s=[],l={rightToc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"We have seen how to use Structured Configs as configuration, but they can also be used as a schema (i.e. validating configuration files).\nWhen Hydra loads a configuration, it looks for a config with the same name in the ",Object(o.b)("inlineCode",{parentName:"p"},"ConfigStore"),".\nIf found, it is used as the schema for the newly loaded config."),Object(o.b)("p",null,"This is an example of defining and storing one schema for db/mysql and another for db/postgresql."),Object(o.b)("p",null,"Given a config directory structure like:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"$ tree conf/\nconf/\n\u251c\u2500\u2500 config.yaml\n\u2514\u2500\u2500 db\n    \u251c\u2500\u2500 mysql.yaml\n    \u2514\u2500\u2500 postgresql.yaml\n")),Object(o.b)("p",null,"The Structurd Configs below are stored as db/mysql and db/postgresql. They will be used as schema\nwhen we load their corresponding config files."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python",metastring:'title="my_app.py"',title:'"my_app.py"'}),'@dataclass\nclass DBConfig:\n    driver: str = MISSING\n    host: str = "localhost"\n    port: int = MISSING\n\n\n@dataclass\nclass MySQLConfig(DBConfig):\n    driver: str = "mysql"\n    port: int = 3306\n    user: str = MISSING\n    password: str = MISSING\n\n\n@dataclass\nclass PostGreSQLConfig(DBConfig):\n    driver: str = "postgresql"\n    user: str = MISSING\n    port: int = 5432\n    password: str = MISSING\n    timeout: int = 10\n\n\n# registering db/mysql and db/postgresql schemas.\ncs = ConfigStore.instance()\ncs.store(group="db", name="mysql", node=MySQLConfig)\ncs.store(group="db", name="postgresql", node=PostGreSQLConfig)\n\n\n# config here is config.yaml under the conf directory.\n# config.yaml will compose in db: mysql by default (per the defaults list),\n# and it will be validated against the schema\n@hydra.main(config_path="conf", config_name="config")\ndef my_app(cfg: DictConfig) -> None:\n    ...\n')),Object(o.b)("p",null,"When ",Object(o.b)("inlineCode",{parentName:"p"},"db/mysql.yaml")," and ",Object(o.b)("inlineCode",{parentName:"p"},"db/postgresql.yaml")," are loaded, the corresponding configs from the ",Object(o.b)("inlineCode",{parentName:"p"},"ConfigStore")," are used automatically.\nThis can be used to validate that both the configuration files (",Object(o.b)("inlineCode",{parentName:"p"},"mysql.yaml")," and ",Object(o.b)("inlineCode",{parentName:"p"},"postgresql.yaml"),") and the command line overrides are conforming to the schema. "),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"$ python my_app.py db.port=fail\nError merging override db.port=fail\nValue 'fail' could not be converted to Integer\n        full_key: db.port\n        reference_type=Optional[MySQLConfig]\n        object_type=MySQLConfig\n")),Object(o.b)("p",null,"The defaults list in this example is contained in the config.yaml file:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'}),"defaults:\n  - db: mysql\n")))}u.isMDXComponent=!0},165:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=r,m=d["".concat(i,".").concat(f)]||d[f]||p[f]||o;return n?a.a.createElement(m,c(c({ref:t},l),{},{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);
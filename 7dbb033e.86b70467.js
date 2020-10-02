(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{137:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(2),o=r(6),a=(r(0),r(160)),c={id:"DeveloperGuide",title:"Developer's guide"},i={id:"DeveloperGuide",isDocsHomePage:!1,title:"Developer's guide",description:"This describes how to contribute to this software.",source:"@site/docs/DeveloperGuide.md",permalink:"/grucloud/docs/DeveloperGuide",sidebar:"someSidebar",previous:{title:"Common Requirements",permalink:"/grucloud/docs/Requirements"},next:{title:"Requirements",permalink:"/grucloud/docs/aws/AwsRequirements"}},l=[{value:"CircleCI",id:"circleci",children:[]}],p={rightToc:l};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This describes how to contribute to this software."),Object(a.b)("p",null,"Node 14 is the minimum version to support ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining"}),"Optional Chaining")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"node -v\nv14.0.0\n")),Object(a.b)("p",null,"Make sure the git user name and email are configured properly:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"git config --global user.name\ngit config --global user.email\n")),Object(a.b)("p",null,"Now you are ready to clone the code, install the dependencies and run the functional testing against a mock cloud provider."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"git clone https://github.com/grucloud/grucloud\ncd grucloud\nnpm install\nnpm run test:ci\n")),Object(a.b)("h3",{id:"circleci"},"CircleCI"),Object(a.b)("p",null,"Create an ",Object(a.b)("em",{parentName:"p"},".env")," file at the root directory and set the ",Object(a.b)("em",{parentName:"p"},"KEY")," environment variable to a random value:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"KEY=527C35A7-E186-44B0-AA38-1B8E18D897CC\n")),Object(a.b)("p",null,"Encrypt the ",Object(a.b)("em",{parentName:"p"},"default.env")," and the google credential file:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"npm run encrypt-data-ci\n")),Object(a.b)("p",null,"Go the the ",Object(a.b)("em",{parentName:"p"},"circleCI")," interface and set the ",Object(a.b)("em",{parentName:"p"},"ENV")," variable used to decrypt the secrets"))}u.isMDXComponent=!0},160:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},b=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=u(r),d=n,m=b["".concat(c,".").concat(d)]||b[d]||s[d]||a;return r?o.a.createElement(m,i(i({ref:t},p),{},{components:r})):o.a.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);
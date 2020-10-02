(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{102:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return s}));var n=r(2),a=r(6),c=(r(0),r(160)),o={id:"RouteTables",title:"Route Tables"},l={id:"aws/resources/EC2/RouteTables",isDocsHomePage:!1,title:"Route Tables",description:"Provides a Route Tables",source:"@site/docs/aws/resources/EC2/RouteTables.md",permalink:"/grucloud/docs/aws/resources/EC2/RouteTables",sidebar:"someSidebar",previous:{title:"Internet Gateway",permalink:"/grucloud/docs/aws/resources/EC2/InternetGateway"},next:{title:"Subnet",permalink:"/grucloud/docs/aws/resources/EC2/Subnet"}},u=[{value:"Examples",id:"examples",children:[]},{value:"Dependencies",id:"dependencies",children:[]},{value:"AWS CLI",id:"aws-cli",children:[]}],i={rightToc:u};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Provides a ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html"}),"Route Tables")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'const rt = await provider.makeRouteTable({\n  name: "rt",\n  dependencies: { vpc, subnet },\n});\n')),Object(c.b)("h3",{id:"examples"},"Examples"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/grucloud/grucloud/blob/master/examples/aws/ec2-vpc/iac.js"}),"simple example"))),Object(c.b)("h3",{id:"dependencies"},"Dependencies"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"./Vpc"}),"Vpc")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"./Subnet"}),"Subnet"))),Object(c.b)("h3",{id:"aws-cli"},"AWS CLI"),Object(c.b)("p",null,"List the route tables"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"aws ec2 describe-route-tables\n")))}s.isMDXComponent=!0},160:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=a.a.createContext({}),s=function(e){var t=a.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),p=s(r),d=n,m=p["".concat(o,".").concat(d)]||p[d]||b[d]||c;return r?a.a.createElement(m,l(l({ref:t},i),{},{components:r})):a.a.createElement(m,l({ref:t},i))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var i=2;i<c;i++)o[i]=r[i];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);
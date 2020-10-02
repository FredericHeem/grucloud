(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{130:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return s}));var r=n(2),c=n(6),o=(n(0),n(160)),a={id:"GoogleRequirements",title:"Google Requirements"},l={id:"google/GoogleRequirements",isDocsHomePage:!1,title:"Google Requirements",description:"Gcloud",source:"@site/docs/google/GoogleRequirements.md",permalink:"/grucloud/docs/google/GoogleRequirements",sidebar:"someSidebar",previous:{title:"Miscellaneous",permalink:"/grucloud/docs/azure/AzureMisc"},next:{title:"Getting Started",permalink:"/grucloud/docs/google/GoogleGettingStarted"}},i=[{value:"Gcloud",id:"gcloud",children:[]},{value:"Initialise gcloud",id:"initialise-gcloud",children:[]},{value:"Project Id",id:"project-id",children:[]},{value:"Enable Google API",id:"enable-google-api",children:[]},{value:"Service Account",id:"service-account",children:[]},{value:"SSH keys",id:"ssh-keys",children:[]}],u={rightToc:i};function s(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"gcloud"},"Gcloud"),Object(o.b)("p",null,"Ensure ",Object(o.b)("strong",{parentName:"p"},"gcloud")," is installed:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"$ gcloud -v\nGoogle Cloud SDK 288.0.0\nbq 2.0.56\ncore 2020.04.03\ngsutil 4.49\n\n")),Object(o.b)("h2",{id:"initialise-gcloud"},"Initialise gcloud"),Object(o.b)("p",null,"Initialise gcloud in order to authenticate your user, as well and seting default region and zone:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"gcloud init\n")),Object(o.b)("p",null,"Check the config at any time with:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"gcloud config list\n")),Object(o.b)("h2",{id:"project-id"},"Project Id"),Object(o.b)("p",null,"Create a new project and retrieve the project id\nby visiting ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://console.cloud.google.com/home/dashboard"}),"google cloud console")),Object(o.b)("p",null,"Check your projects with:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"gcloud projects list\n")),Object(o.b)("h2",{id:"enable-google-api"},"Enable Google API"),Object(o.b)("p",null,"Ensure these API are enabled for your newly created project:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"cd examples/google\n./api-enable.sh\n")),Object(o.b)("p",null,"Get the list of all API ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://console.cloud.google.com/apis/library"}),"here")),Object(o.b)("h2",{id:"service-account"},"Service Account"),Object(o.b)("p",null,"Edit the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../../../examples/google/service-account.sh"}),"service-account.sh")," script and set ",Object(o.b)("em",{parentName:"p"},"GOOGLE_PROJECT")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"cd examples/google\n./service-account.sh\n")),Object(o.b)("h2",{id:"ssh-keys"},"SSH keys"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"gcloud compute os-login ssh-keys list\n")),Object(o.b)("p",null,"Upload your ssh keys:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"gcloud compute os-login ssh-keys add --key-file .ssh/id_rsa.pub\n")),Object(o.b)("p",null,"Describe a key"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"gcloud compute os-login ssh-keys describe --key=ad1811081881c04dad627f96b5d20ddd41fd44e31e76fc259c3e2534f75a190b\n")))}s.isMDXComponent=!0},160:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return g}));var r=n(0),c=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var u=c.a.createContext({}),s=function(e){var t=c.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=s(e.components);return c.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),b=s(n),d=r,g=b["".concat(a,".").concat(d)]||b[d]||p[d]||o;return n?c.a.createElement(g,l(l({ref:t},u),{},{components:n})):c.a.createElement(g,l({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
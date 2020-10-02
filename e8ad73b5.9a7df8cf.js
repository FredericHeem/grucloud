(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{155:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),c=(n(0),n(160)),o={id:"AwsRequirements",title:"Requirements"},s={id:"aws/AwsRequirements",isDocsHomePage:!1,title:"Requirements",description:"Ensure that you have the AWS necessary tools, accounts, keys, etc...",source:"@site/docs/aws/AwsRequirements.md",permalink:"/grucloud/docs/aws/AwsRequirements",sidebar:"someSidebar",previous:{title:"Developer's guide",permalink:"/grucloud/docs/DeveloperGuide"},next:{title:"Getting Started",permalink:"/grucloud/docs/aws/AwsGettingStarted"}},i=[{value:"AWS account",id:"aws-account",children:[]},{value:"AWS CLI",id:"aws-cli",children:[]},{value:"Access Key",id:"access-key",children:[]},{value:"Configure AWS CLI",id:"configure-aws-cli",children:[]},{value:"Key Pair",id:"key-pair",children:[]}],l={rightToc:i};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Ensure that you have the AWS necessary tools, accounts, keys, etc..."),Object(c.b)("h2",{id:"aws-account"},"AWS account"),Object(c.b)("p",null,"Ensure access to the ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://console.aws.amazon.com"}),"amazon cloud console")," and create an account if necessary."),Object(c.b)("h2",{id:"aws-cli"},"AWS CLI"),Object(c.b)("p",null,"Ensure the ",Object(c.b)("em",{parentName:"p"},"AWS CLI")," is installed and configured:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"aws --version\n")),Object(c.b)("p",null,"If not, visit ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2-mac.html"}),"https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2-mac.html")),Object(c.b)("h2",{id:"access-key"},"Access Key"),Object(c.b)("p",null,"Visit the ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://console.aws.amazon.com/iam/home#/security_credentials"}),"security credentials")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Click on ",Object(c.b)("strong",{parentName:"li"},"Access key (access key ID and secret access key).")),Object(c.b)("li",{parentName:"ul"},"Click on the button ",Object(c.b)("strong",{parentName:"li"},"Create New Access Key"),".")),Object(c.b)("p",null,"Write down the ",Object(c.b)("strong",{parentName:"p"},"AWSAccessKeyId")," and ",Object(c.b)("strong",{parentName:"p"},"AWSSecretKey")),Object(c.b)("h2",{id:"configure-aws-cli"},"Configure AWS CLI"),Object(c.b)("p",null,"Configure the account, region and zone:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"aws configure\n")),Object(c.b)("h2",{id:"key-pair"},"Key Pair"),Object(c.b)("p",null,"Let's create an ssh key pair to access the server."),Object(c.b)("p",null,"Some key pairs may already have been created, here is how to list all existing key pairs:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"aws ec2 describe-key-pairs\n")),Object(c.b)("p",null,"If you need to create a new key pair, go to the ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html"}),"AWS documentation for ec2 key pair")))}u.isMDXComponent=!0},160:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(o,".").concat(d)]||p[d]||b[d]||c;return n?a.a.createElement(m,s(s({ref:t},l),{},{components:n})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<c;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
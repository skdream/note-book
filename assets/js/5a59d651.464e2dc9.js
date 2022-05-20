"use strict";(self.webpackChunkreact_note_book=self.webpackChunkreact_note_book||[]).push([[8105],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return m}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(t),m=a,d=p["".concat(c,".").concat(m)]||p[m]||f[m]||l;return t?n.createElement(d,o(o({ref:r},u),{},{components:t})):n.createElement(d,o({ref:r},u))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=p;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},6732:function(e,r,t){t.r(r),t.d(r,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return f}});var n=t(7462),a=t(3366),l=(t(7294),t(3905)),o=["components"],i={slug:"array-flat-methods",title:"\u6570\u7ec4\u6241\u5e73\u5316\u65b9\u6cd5",authors:"jsir",tags:["array","flat"]},c=void 0,s={permalink:"/blog/array-flat-methods",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/array-flat-methods.md",source:"@site/blog/array-flat-methods.md",title:"\u6570\u7ec4\u6241\u5e73\u5316\u65b9\u6cd5",description:"es6 flat(depth)",date:"2022-05-20T05:55:54.000Z",formattedDate:"2022\u5e745\u670820\u65e5",tags:[{label:"array",permalink:"/blog/tags/array"},{label:"flat",permalink:"/blog/tags/flat"}],readingTime:1.015,truncated:!1,authors:[{name:"jiyongjia",title:"blog author",url:"https://blog.szlife.xyz",imageURL:"https://github.com/skdream.png",key:"jsir"}],frontMatter:{slug:"array-flat-methods",title:"\u6570\u7ec4\u6241\u5e73\u5316\u65b9\u6cd5",authors:"jsir",tags:["array","flat"]},nextItem:{title:"Welcome",permalink:"/blog/welcome"}},u={authorsImageUrls:[void 0]},f=[{value:"es6 flat(depth)",id:"es6-flatdepth",level:3},{value:"for \u5faa\u73af",id:"for-\u5faa\u73af",level:3},{value:"while \u5faa\u73af",id:"while-\u5faa\u73af",level:3},{value:"ES6 reduce",id:"es6-reduce",level:3},{value:"\u4f7f\u7528 stack \u65e0\u9650\u53cd\u5d4c\u5957\u591a\u5c42\u5d4c\u5957\u6570\u7ec4",id:"\u4f7f\u7528-stack-\u65e0\u9650\u53cd\u5d4c\u5957\u591a\u5c42\u5d4c\u5957\u6570\u7ec4",level:3},{value:"\u6570\u7ec4\u5168\u4e3a\u6570\u5b57\uff0c\u53ef\u4ee5\u4f7f\u7528join(), toString();",id:"\u6570\u7ec4\u5168\u4e3a\u6570\u5b57\u53ef\u4ee5\u4f7f\u7528join-tostring",level:3}],p={toc:f};function m(e){var r=e.components,t=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"es6-flatdepth"},"es6 flat(depth)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"\nlet a = [1,[2,3]]\n\na.flat() // [1,2,3]\na.flat(1) // [1,2,3]\n\n")),(0,l.kt)("h3",{id:"for-\u5faa\u73af"},"for \u5faa\u73af"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"let a = [1,[2,3]]\n\nfunction flatten(arr){\n\n  let arr = [];\n  for(var i = 0; i<a.length; i++){\n\n    if( Array.isArray(arr[i]) ){\n      arr.concat(...arr[i])\n    }else{\n      arr.push(arr[i])\n    }\n  }\n\n  return arr;\n}\n\n\n")),(0,l.kt)("h3",{id:"while-\u5faa\u73af"},"while \u5faa\u73af"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"\nlet arr = [1,[2,3],[4,5,6]];\n\nfunction flatten(arr){\n\n  while( arr.some( (item) => Array.isArray(item) )){\n\n    arr = [].concat(...arr);\n  }\n\n  return arr;\n\n}\n\nflatten(arr) // [1,2,3,4,5,6]\n\n\n")),(0,l.kt)("h3",{id:"es6-reduce"},"ES6 reduce"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"\nvar arr = [1,[2,3],[4,5,6]]\n\nfunction flatten(arr){\n\n return arr.reduce((res,current) => {\n\n    return res.concat( Array.isArray(current) ? flatten(current) : current);\n    \n  },[])\n\n}\n\nconsole.log(flatten(arr)) // Array [1, 2, 3, 4, 5, 6]\n")),(0,l.kt)("h3",{id:"\u4f7f\u7528-stack-\u65e0\u9650\u53cd\u5d4c\u5957\u591a\u5c42\u5d4c\u5957\u6570\u7ec4"},"\u4f7f\u7528 stack \u65e0\u9650\u53cd\u5d4c\u5957\u591a\u5c42\u5d4c\u5957\u6570\u7ec4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"\nvar arr = [1,[2,3],[4,5,6]]\n\nfunction flatten(arr) {\n  var stack = [...arr];\n\n  var res = [];\n  while(stack.length){\n    \n    let first = stack.shift();\n    if( Array.isArray(first) ){\n      stack.unshift(...first);\n    }else{\n      res.push(first);\n    }\n\n  }\n  return res;\n}\n\nconsole.log(flatten( arr)) //  Array [1, 2, 3, 4, 5, 6]\n")),(0,l.kt)("h3",{id:"\u6570\u7ec4\u5168\u4e3a\u6570\u5b57\u53ef\u4ee5\u4f7f\u7528join-tostring"},"\u6570\u7ec4\u5168\u4e3a\u6570\u5b57\uff0c\u53ef\u4ee5\u4f7f\u7528join(), toString();"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"var arr = [1,[2,3],[4,5,6]]\nfunction flatten(arr){\n // return arr.toString().split(',').map(item => +item)\n\n  return arr.join(',').split(',').map(item => +item)\n}\n\nconsole.log(flatten( arr))\n\n")))}m.isMDXComponent=!0}}]);
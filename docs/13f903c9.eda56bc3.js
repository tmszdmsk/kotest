(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{163:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=b(n),p=a,d=u["".concat(i,".").concat(p)]||u[p]||m[p]||o;return n?r.a.createElement(d,l(l({ref:t},c),{},{components:n})):r.a.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},71:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),o=(n(0),n(163)),i={title:"Konform Matchers",slug:"konform-matchers.html",sidebar_label:"Konform"},l={unversionedId:"assertions/konform",id:"assertions/konform",isDocsHomePage:!1,title:"Konform Matchers",description:"Kotest provides various matchers for use with Konform.",source:"@site/docs/assertions/konform.md",slug:"/assertions/konform-matchers.html",permalink:"/docs/assertions/konform-matchers.html",editUrl:"https://github.com/kotest/kotest/blob/master/documentation/docs/assertions/konform.md",version:"current",sidebar_label:"Konform",sidebar:"assertions",previous:{title:"SQL Matchers",permalink:"/docs/assertions/sql-matchers.html"},next:{title:"Klock Matchers",permalink:"/docs/assertions/klock-matchers.html"}},s=[],c={rightToc:s};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Kotest provides various matchers for use with ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/konform-kt/konform"}),"Konform"),".\nThey can be used in your tests to assert that a given object is validated or fails validation."),Object(o.b)("p",null,"To use these matchers add ",Object(o.b)("inlineCode",{parentName:"p"},"implementation 'io.kotest:kotest-assertions-konform-jvm:<version>'")," or ",Object(o.b)("inlineCode",{parentName:"p"},"implementation 'io.kotest:kotest-assertions-konform-js:<version>")," to your build."),Object(o.b)("p",null,"Let's start with a basic data class:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),"data class UserProfile(\n   val fullName: String,\n   val age: Int?\n)\n")),Object(o.b)("p",null,"Then given a ",Object(o.b)("inlineCode",{parentName:"p"},"UserProfile")," validator like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),"val validateUser = Validation<UserProfile> {\n  UserProfile::fullName {\n     minLength(4)\n     maxLength(100)\n  }\n\n  UserProfile::age ifPresent {\n     minimum(21)\n     maximum(99)\n  }\n}\n")),Object(o.b)("p",null,"We can test that instances pass validation like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),'val alice = UserProfile("Alice", 25)\nvalidateUser shouldBeValid user1\n')),Object(o.b)("p",null,"And we can test that instances fail validation with specific error messages like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),'val bob = UserProfile("bob", 18)\nvalidateUser.shouldBeInvalid(a) {\n  it.shouldContainError(UserProfile::fullName, "must have at least 4 characters")\n  it.shouldContainError(UserProfile::age, "must be at least \'21\'")\n}\n')),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Matcher"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"validation.shouldBeValid(value)")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Asserts that the validation is valid for the given value")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"validation.shouldBeInvalid(value)")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Asserts that the validation is invalid for the given value")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"validation.shouldBeInvalid(value) { block }")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Asserts that the validation is invalid for the given value, and then, runs the block with invalid value")))))}b.isMDXComponent=!0}}]);
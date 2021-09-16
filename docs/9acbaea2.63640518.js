(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{123:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return b})),a.d(e,"metadata",(function(){return i})),a.d(e,"rightToc",(function(){return o})),a.d(e,"default",(function(){return s}));var n=a(3),r=a(7),l=(a(0),a(163)),b={title:"Arrow",slug:"arrow.html",sidebar_label:"Arrow"},i={unversionedId:"assertions/arrow",id:"assertions/arrow",isDocsHomePage:!1,title:"Arrow",description:"This page lists all current matchers in the Kotest arrow matchers extension library.",source:"@site/docs/assertions/arrow.md",slug:"/assertions/arrow.html",permalink:"/docs/assertions/arrow.html",editUrl:"https://github.com/kotest/kotest/blob/master/documentation/docs/assertions/arrow.md",version:"current",sidebar_label:"Arrow",sidebar:"assertions",previous:{title:"Kotlinx Datetime Matchers",permalink:"/docs/assertions/kotlinx-datetime-matchers.html"},next:{title:"SQL Matchers",permalink:"/docs/assertions/sql-matchers.html"}},o=[],c={rightToc:o};function s(t){var e=t.components,a=Object(r.a)(t,["components"]);return Object(l.b)("wrapper",Object(n.a)({},c,a,{components:e,mdxType:"MDXLayout"}),Object(l.b)("p",null,"This page lists all current matchers in the Kotest arrow matchers extension library. "),Object(l.b)("p",null,"To use this library you need to add ",Object(l.b)("inlineCode",{parentName:"p"},"io.kotest.extensions:kotest-assertions-arrow")," to your build."),Object(l.b)("p",null,"Note: The maven group id differs from the main project as this is an optional extension module."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Option"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null})))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"option.shouldBeSome(v)")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the option is of type Some with value v")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"option.shouldBeNone()")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the option is of type None")))),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Either"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null})))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"either.shouldBeRight()")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the either is of type Right")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"either.shouldBeRight(v)")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the either is of type Right with specified value v")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"either.shouldBeLeft()")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the either is of type Left")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"either.shouldBeLeft(v)")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the either is of type Left with specific value v")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"either.shouldBeLeftOfType<A>()")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the either is of type Left with a specified type A")))),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"NonEmptyList"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null})))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"nel.shouldContain(e)")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the NonEmptyList contains the given element e")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"nel.shouldContainAll(e1,e2,...,en)")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the NonEmptyList contains all the given elements e1,e2,...,en")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"nel.shouldContainNull()")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the NonEmptyList contains at least one null")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"nel.shouldContainNoNulls()")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the NonEmptyList contains no nulls")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"nel.shouldContainOnlyNulls()")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the NonEmptyList contains only nulls or is empty")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"nel.shouldHaveDuplicates()")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the NonEmptyList has at least one duplicate")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"nel.shouldBeSingleElement(e)")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the NonEmptyList has a single element which is e")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"nel.shouldBeSorted()")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the NonEmptyList is sorted")))),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Validated"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null})))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"validated.shouldBeValid()")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the validated is of type Valid")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"validated.shouldBeValid(v)")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the validated is of type Valid with specific value v")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"validated.shouldBeInvalid()")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the validated is of type Invalid")))))}s.isMDXComponent=!0},163:function(t,e,a){"use strict";a.d(e,"a",(function(){return p})),a.d(e,"b",(function(){return m}));var n=a(0),r=a.n(n);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function b(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?b(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var c=r.a.createContext({}),s=function(t){var e=r.a.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=s(t.components);return r.a.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},O=r.a.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,b=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),p=s(a),O=n,m=p["".concat(b,".").concat(O)]||p[O]||d[O]||l;return a?r.a.createElement(m,i(i({ref:e},c),{},{components:a})):r.a.createElement(m,i({ref:e},c))}));function m(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,b=new Array(l);b[0]=O;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i.mdxType="string"==typeof t?t:n,b[1]=i;for(var c=2;c<l;c++)b[c]=a[c];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"}}]);
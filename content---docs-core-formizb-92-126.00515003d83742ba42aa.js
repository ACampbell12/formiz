(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{40:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"rightToc",(function(){return b})),t.d(n,"default",(function(){return u}));t(0);var r=t(61);function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i={id:"formiz",title:"<Formiz> component"},b=[{value:"Import",id:"import",children:[]},{value:"Props",id:"props",children:[{value:"onSubmit(values)",id:"onsubmitvalues",children:[]},{value:"onValidSubmit(values)",id:"onvalidsubmitvalues",children:[]},{value:"onInvalidSubmit(values)",id:"oninvalidsubmitvalues",children:[]},{value:"onChange(values)",id:"onchangevalues",children:[]},{value:"onValid()",id:"onvalid",children:[]},{value:"onInvalid()",id:"oninvalid",children:[]},{value:"autoForm",id:"autoform",children:[]},{value:"connect",id:"connect",children:[]}]},{value:"Handle API errors",id:"handle-api-errors",children:[]}],l={rightToc:b},c="wrapper";function u(e){var n=e.components,t=a(e,["components"]);return Object(r.b)(c,o({},l,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"import"},"Import"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-jsx"}),"import { Formiz } from '@formiz/core'\n")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"props"},"Props"),Object(r.b)("h3",{id:"onsubmitvalues"},Object(r.b)("inlineCode",{parentName:"h3"},"onSubmit(values)")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Triggered when the form is ",Object(r.b)("strong",{parentName:"p"},"submitted"),".")),Object(r.b)("h3",{id:"onvalidsubmitvalues"},Object(r.b)("inlineCode",{parentName:"h3"},"onValidSubmit(values)")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Triggered when the form is ",Object(r.b)("strong",{parentName:"p"},"valid")," and ",Object(r.b)("strong",{parentName:"p"},"submitted"),".")),Object(r.b)("h3",{id:"oninvalidsubmitvalues"},Object(r.b)("inlineCode",{parentName:"h3"},"onInvalidSubmit(values)")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Triggered when the form is ",Object(r.b)("strong",{parentName:"p"},"invalid")," and ",Object(r.b)("strong",{parentName:"p"},"submitted"),".")),Object(r.b)("h3",{id:"onchangevalues"},Object(r.b)("inlineCode",{parentName:"h3"},"onChange(values)")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Triggered every time the form changes.",Object(r.b)("br",null),"\n⚠️ This is triggered when each field is mounted.",Object(r.b)("br",null),"\nℹ️ Instead you can get ",Object(r.b)("inlineCode",{parentName:"p"},"values")," of the form with the ",Object(r.b)("a",o({parentName:"p"},{href:"/docs/core/use-form"}),"useForm()")," hook.")),Object(r.b)("h3",{id:"onvalid"},Object(r.b)("inlineCode",{parentName:"h3"},"onValid()")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Triggered when the form is ",Object(r.b)("strong",{parentName:"p"},"valid"),".",Object(r.b)("br",null),"\nℹ️ Instead you can get ",Object(r.b)("inlineCode",{parentName:"p"},"isValid")," value with the ",Object(r.b)("a",o({parentName:"p"},{href:"/docs/core/use-form"}),"useForm()")," hook.")),Object(r.b)("h3",{id:"oninvalid"},Object(r.b)("inlineCode",{parentName:"h3"},"onInvalid()")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Triggered when the form is ",Object(r.b)("strong",{parentName:"p"},"invalid"),".",Object(r.b)("br",null),"\nℹ️ Instead you can get ",Object(r.b)("inlineCode",{parentName:"p"},"isValid")," value with the ",Object(r.b)("a",o({parentName:"p"},{href:"/docs/core/use-form"}),"useForm()")," hook.")),Object(r.b)("h3",{id:"autoform"},Object(r.b)("inlineCode",{parentName:"h3"},"autoForm")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Set to ",Object(r.b)("inlineCode",{parentName:"p"},"true")," to auto add a ",Object(r.b)("inlineCode",{parentName:"p"},"<form>")," element with auto onSubmit.",Object(r.b)("br",null),"\nℹ️ Instead you can get the ",Object(r.b)("inlineCode",{parentName:"p"},"submit()")," method with the ",Object(r.b)("a",o({parentName:"p"},{href:"/docs/core/use-form"}),"useForm()")," hook and use it with your own ",Object(r.b)("inlineCode",{parentName:"p"},"<form>")," element.")),Object(r.b)("h3",{id:"connect"},Object(r.b)("inlineCode",{parentName:"h3"},"connect")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Allow you to connect your form with the ",Object(r.b)("a",o({parentName:"p"},{href:"/docs/core/use-form"}),"useForm()")," hook.",Object(r.b)("br",null),"\nSee ",Object(r.b)("a",o({parentName:"p"},{href:"/docs/core/use-form"}),"useForm() documentation")," for more details")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"handle-api-errors"},"Handle API errors"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-jsx"}),"const myForm = useForm()\n\n<Formiz\n  connect={myForm}\n  onValidSubmit={(values) => {\n    myForm.invalidateFields({\n      fieldName: 'Error message',\n    })\n  }}\n/>\n  {/* Your fields here */}\n</Formiz>\n")))}u.isMDXComponent=!0},61:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r),a=o.a.createContext({}),i=function(e){var n=o.a.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},b=function(e){var n=i(e.components);return o.a.createElement(a.Provider,{value:n},e.children)};var l="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},u=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,b=e.parentName,l=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===n.indexOf(r)&&(t[r]=e[r]);return t}(e,["components","mdxType","originalType","parentName"]),u=i(t),m=r,d=u[b+"."+m]||u[m]||c[m]||a;return t?o.a.createElement(d,Object.assign({},{ref:n},l,{components:t})):o.a.createElement(d,Object.assign({},{ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=u;var b={};for(var c in n)hasOwnProperty.call(n,c)&&(b[c]=n[c]);b.originalType=e,b[l]="string"==typeof e?e:r,i[1]=b;for(var m=2;m<a;m++)i[m]=t[m];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);
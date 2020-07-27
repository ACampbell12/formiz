(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{158:function(n,e,r){"use strict";r.r(e),r.d(e,"frontMatter",(function(){return j})),r.d(e,"metadata",(function(){return S})),r.d(e,"rightToc",(function(){return _})),r.d(e,"default",(function(){return m}));var t=r(2),i=r(9),s=(r(0),r(164)),a=r(180),o=r(176),c=r(188),u=r(177),l=r(178),p="\n// 2. Create a form with multi steps & fields\nconst MyForm = () => {\n  const myForm = useForm()\n  const [isLoading, setIsLoading] = React.useState(false)\n  const submitForm = (values) => {\n    setIsLoading(true)\n\n    setTimeout(() => {\n      setIsLoading(false)\n      alert(JSON.stringify(values))\n      myForm.invalidateFields({\n        email: 'You can display an error after an API call',\n      })\n    }, 1000)\n  }\n  return (\n    <Formiz onValidSubmit={submitForm} connect={myForm}>\n      <form\n        noValidate\n        onSubmit={myForm.submit}\n        className=\"demo-form\"\n        style={{ minHeight: '16rem' }}\n      >\n        <div className=\"demo-form__content\">\n          "+Object(c.a)()+"\n          "+Object(u.a)()+"\n          "+Object(l.a)()+'\n        </div>\n\n        <div className="demo-form__footer">\n          <div\n            className="ml-auto"\n            style={{ minWidth: \'6rem\' }}\n          >\n            <button\n              className="demo-button is-full is-primary"\n              type="submit"\n              disabled={isLoading || (!myForm.isValid && myForm.isSubmitted)}\n            >\n              {isLoading ? \'Loading...\' : \'Submit\'}\n            </button>\n          </div>\n        </div>\n      </form>\n    </Formiz>\n  )\n}\n',d="\n"+o.a+"\n"+p+"\nrender(\n  <MyForm />\n)\n",j={id:"simple",title:"Simple Form"},S={id:"demos/simple",title:"Simple Form",source:"@site/docs/demos/simple.mdx",permalink:"/docs/demos/simple",editUrl:"https://github.com/ivan-dalmet/formiz/edit/master/documentation/docs/demos/simple.mdx",sidebar:"docs",previous:{title:"Multi Tabs Form",permalink:"/docs/demos/multi-tabs"},next:{title:"Conditional Fields & Steps",permalink:"/docs/demos/conditional"}},_=[],f={rightToc:_};function m(n){var e=n.components,r=Object(i.a)(n,["components"]);return Object(s.b)("wrapper",Object(t.a)({},f,r,{components:e,mdxType:"MDXLayout"}),Object(s.b)(a.a,{code:d,mdxType:"CodePreview"}))}m.isMDXComponent=!0},176:function(n,e,r){"use strict";r.d(e,"a",(function(){return t}));var t="\n// 1. Create a reusable field\nconst MyField = (props) => {\n  const {\n    errorMessage,\n    id,\n    isValid,\n    isPristine,\n    isSubmitted,\n    resetKey,\n    setValue,\n    value,\n  } = useField(props)\n  const { label, type, required } = props\n  const [isFocused, setIsFocused] = React.useState(false);\n  const showError = !isValid && !isFocused && (!isPristine || isSubmitted)\n\n  return (\n    <div className={`demo-form-group ${showError ? 'is-error' : ''}`}>\n      <label\n        className=\"demo-label\"\n        htmlFor={id}\n      >\n        { label }\n        {required && ' *'}\n      </label>\n      <input\n        key={resetKey}\n        id={id}\n        type={type || 'text'}\n        value={value || ''}\n        className=\"demo-input\"\n        onChange={e => setValue(e.target.value)}\n        onFocus={() => setIsFocused(true)}\n        onBlur={() => setIsFocused(false)}\n        aria-invalid={!isValid}\n        aria-describedby={!isValid ? `${id}-error` : null}\n      />\n      {showError && (\n        <div id={`${id}-error`} className=\"demo-form-feedback\">\n          { errorMessage }\n        </div>\n      )}\n    </div>\n  )\n}\n"},177:function(n,e,r){"use strict";r.d(e,"a",(function(){return t}));var t=function(n){return'\n            <MyField\n              name="email"\n              label="Email"\n              type="email"\n              required="Email is required"\n              validations={[\n                {\n                  rule: validations.isEmail(),\n                  message: \'Not a valid email\',\n                }\n              ]}\n              '+(n?'defaultValue="hailey@company.com"':"")+"\n            />\n"}},178:function(n,e,r){"use strict";r.d(e,"a",(function(){return t}));var t=function(){return'\n            <MyField\n              name="password"\n              label="Password"\n              type="password"\n            />\n            <MyField\n              name="passwordConfirm"\n              label="Confirm password"\n              type="password"\n              validations={[\n                {\n                  rule: (value) => myForm.values.password === value,\n                  deps: [myForm.values.password],\n                  message: \'Passwords do not match\',\n                }\n              ]}\n            />\n'}},180:function(n,e,r){"use strict";r.d(e,"a",(function(){return en}));var t={};r.r(t),r.d(t,"isEmail",(function(){return z})),r.d(t,"isInRangeNumber",(function(){return Y})),r.d(t,"isLength",(function(){return Z})),r.d(t,"isMaxLength",(function(){return nn})),r.d(t,"isMaxNumber",(function(){return $})),r.d(t,"isMinLength",(function(){return Q})),r.d(t,"isMinNumber",(function(){return q})),r.d(t,"isNotEmptyArray",(function(){return U})),r.d(t,"isNotEmptyString",(function(){return J})),r.d(t,"isNumber",(function(){return W})),r.d(t,"isPercentage",(function(){return X})),r.d(t,"isRequired",(function(){return H}));var i=r(0),s=r.n(i),a=r(11),o=r.n(a),c=r(613),u=r(610),l=(r(183),r(184),r(73),r(54),r(182),r(199),r(200),r(187),r(201),r(166),r(71),r(202),r(203),r(186),r(24),r(20),r(19),r(52),r(167),r(767)),p=r(768),d=r(771);function j(){return(j=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}return n}).apply(this,arguments)}function S(n,e){if(null==n)return{};var r,t,i={},s=Object.keys(n);for(t=0;t<s.length;t++)r=s[t],e.indexOf(r)>=0||(i[r]=n[r]);return i}function _(n){var e=function(n,e){if("object"!=typeof n||null===n)return n;var r=n[Symbol.toPrimitive];if(void 0!==r){var t=r.call(n,e||"default");if("object"!=typeof t)return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(n)}(n,"string");return"symbol"==typeof e?e:String(e)}var f=function(n){return n&&"object"==typeof n&&n.constructor===Object},m=function(n){return Object.keys(n).reduce((function(n,e){return y(e,n)}),n)},y=function(n,e){var r,t;if(n.indexOf(".")<0&&n.indexOf("[")<0)return e;var i=e[n],s=S(e||{},[n].map(_)),a=n.split("."),o=a[0],c=a.slice(1);if(o.match(/\[([0-9]*)\]$/g)){var u,l=o.split(/(\[|\])/g),p=l[0],d=l[2],y=e[p]||[];if(c.length){var v,g=j({},e[p]&&f(e[p][d])?e[p][d]:{},((v={})[c.join(".")]=i,v));y[d]=m(g)}else y[d]=i;return j({},s,((u={})[p]=y,u))}var E=j({},f(e[o])?e[o]:{},((r={})[c.join(".")]=i,r));return j({},s,((t={})[o]=m(E),t))},v=function(n){var e=(n||[]).filter((function(n){return n.isEnabled})).reduce((function(n,e){var r;return j({},n,((r={})[e.name]=e.value,r))}),{});return m(e)},g=function(){return"form-"+Math.random().toString(36).substr(2,9)},E=function(n){var e=Object(i.useRef)(n);return e.current=n,e},b=function(n,e){void 0===e&&(e=100);var r=Object(i.useRef)(new l.a);return{push:function(e){r.current.next(null!=e?e:n.current)},subscription:r.current.pipe(Object(d.a)(e,void 0,{leading:!0,trailing:!0}))}},h=function(n,e){void 0===e&&(e=100);var r=Object(i.useRef)(new p.a(n.current));return{push:function(e){r.current.next(null!=e?e:n.current)},subscription:r.current.pipe(Object(d.a)(e,void 0,{leading:!0,trailing:!0}))}},x={id:g(),resetKey:0,isSubmitted:!1,isValidating:!1,isValid:!0,isPristine:!0,steps:[],initialStepName:null,navigatedStepName:null},P=Object(i.createContext)({}),C=function(){return Object(i.useContext)(P)},O=function(n){var e=n.navigatedStepName||n.initialStepName;return n.steps.find((function(n){return n.name===e}))},N=function(n){var e=n.autoForm,r=void 0!==e&&e,t=n.children,s=void 0===t?"":t,a=n.connect,o=void 0===a?{}:a,c=n.id,u=void 0===c?g():c,l=n.onChange,p=void 0===l?function(){}:l,d=n.onSubmit,S=void 0===d?function(){}:d,_=n.onValidSubmit,f=void 0===_?function(){}:_,m=n.onInvalidSubmit,y=void 0===m?function(){}:m,C=n.onValid,N=void 0===C?function(){}:C,B=n.onInvalid,V=void 0===B?function(){}:B,F=Object(i.useRef)(j({},x,{id:u})),M=Object(i.useRef)([]),k=Object(i.useRef)({}),G=E(o.__connect__||function(){}),w=E(p),T=E(S),L=E(f),A=E(y),I=E(N),D=E(V),K=h(F),R=h(M),H=b(M),J=b(F),U=function(){var n=M.current.every((function(n){var e,r,t;return!(null==n||null===(e=n.errors)||void 0===e?void 0:e.length)&&!(null==n||null===(r=n.asyncErrors)||void 0===r?void 0:r.length)&&!(null==n||null===(t=n.externalErrors)||void 0===t?void 0:t.length)}));return n?I.current():D.current(),n},z=function(n){return M.current.filter((function(e){return e.stepName===n})).every((function(n){return null==n?void 0:n.isPristine}))},W=function(n){return M.current.filter((function(e){return e.stepName===n})).some((function(n){return null==n?void 0:n.isValidating}))},q=function(n){var e=j({},F.current,n);JSON.stringify(e)!==JSON.stringify(F.current)&&(F.current=e,K.push())},$=function(n){var e=F.current.steps.filter((function(n){return n.isEnabled})),r=e.findIndex((function(e){return e.name===n}));r<0||q({navigatedStepName:e[r].name})},Y=function(){var n=F.current.steps.filter((function(n){return n.isEnabled})),e=n.findIndex((function(n){var e;return n.name===(null===(e=O(F.current))||void 0===e?void 0:e.name)}));e===n.length-1||$(n[e+1].name)},X=function(n){n&&n.preventDefault();var e=F.current.steps;q({isSubmitted:!0,steps:e.map((function(n){return j({},n,{isSubmitted:!0})}))});var r=v(M.current);F.current.isValid&&!F.current.isValidating?L.current(r):A.current(r),T.current(r)},Z=function(){q({isValid:U(),isPristine:M.current.every((function(n){return null==n?void 0:n.isPristine})),isValidating:M.current.some((function(n){return null==n?void 0:n.isValidating})),steps:F.current.steps.map((function(n){return j({},n,{isValid:(e=n.name,M.current.filter((function(n){return n.stepName===e})).every((function(n){var e,r,t;return!(null==n||null===(e=n.errors)||void 0===e?void 0:e.length)&&!(null==n||null===(r=n.asyncErrors)||void 0===r?void 0:r.length)&&!(null==n||null===(t=n.externalErrors)||void 0===t?void 0:t.length)}))),isPristine:z(n.name),isValidating:W(n.name)});var e}))})},Q={submit:X,submitStep:function(n){var e,r;n&&n.preventDefault(),q({steps:F.current.steps.map((function(n){var e;return j({},n,{isSubmitted:n.name===(null===(e=O(F.current))||void 0===e?void 0:e.name)||n.isSubmitted})}))});var t=O(F.current);if((null==t?void 0:t.isValid)&&!(null==t?void 0:t.isValidating)){var i=F.current.steps.filter((function(n){return n.isEnabled})),s=null===(e=O(F.current))||void 0===e?void 0:e.name;(null===(r=i[i.length-1])||void 0===r?void 0:r.name)===s?X():Y()}},setFieldsValues:function(n){void 0===n&&(n={}),M.current=function(n,e){if(void 0===e&&(e={}),!e)return n;var r=n.map((function(n){var r;return j({},n,{value:null!==(r=e[n.name])&&void 0!==r?r:n.value})}));return[].concat(r)}(M.current,n),H.push()},invalidateFields:function(n){void 0===n&&(n={}),M.current=function(n,e){if(void 0===e&&(e={}),!e)return n;var r=n.map((function(n){return j({},n,{externalErrors:e[n.name]?[e[n.name],n.externalErrors]:n.externalErrors})}));return[].concat(r)}(M.current,n),H.push()},getFieldStepName:function(n){var e,r;return null!==(e=null===(r=M.current.find((function(e){return n===e.name})))||void 0===r?void 0:r.stepName)&&void 0!==e?e:null},goToStep:$,nextStep:Y,prevStep:function(){var n=F.current.steps.filter((function(n){return n.isEnabled})),e=n.findIndex((function(n){var e;return n.name===(null===(e=O(F.current))||void 0===e?void 0:e.name)}));0===e||$(n[e-1].name)},reset:function(){var n;q(j({},n=F.current,{resetKey:n.resetKey+1,isSubmitted:!1,isValid:!0,navigatedStepName:null,steps:n.steps.map((function(n){return j({},n,{isSubmitted:!1,isVisited:!1})}))})),k.current={},J.push()}},nn={formStateRef:F,fieldsRef:M,actions:{updateStep:function(n){q(function(n,e){if(!e||!e.name)return n;var r=n.steps.findIndex((function(n){return n.name===e.name})),t=n.steps[r],i=j({},t||{},e);if(JSON.stringify(i)===JSON.stringify(t))return n;var s=[].concat(n.steps);t?s[r]=i:s.push(i);var a=s.sort((function(n,e){return n.order-e.order})),o=a.filter((function(n){return n.isEnabled}));return j({},n,{initialStepName:o.length?o[0].name:null,steps:a})}(F.current,n)),Z()},unregisterStep:function(n){q(j({},function(n,e){return e?j({},n,{steps:n.steps.filter((function(n){return n.name!==e}))}):n}(F.current,n),{isValid:U()})),Z()},registerField:function(n){delete k.current[n.name],M.current=function(n,e){if(!e)return n;var r=n.find((function(n){return n.id===e.id})),t=n.filter((function(n){return n.id!==e.id}));return JSON.stringify(e)===JSON.stringify(r)?n:[].concat(t,[j({},e)])}(M.current,n),R.push(),w.current(v(M.current)),Z()},updateField:function(n){M.current=function(n,e){if(!e)return n;var r=n.find((function(n){return n.id===e.id})),t=n.filter((function(n){return n.id!==e.id}));return JSON.stringify(e)===JSON.stringify(r)?n:[].concat(t,[j({},e)])}(M.current,n),R.push(),w.current(v(M.current)),Z()},unregisterField:function(n,e){e&&(k.current[n.name]=n.value),M.current=function(n,e){if(!e)return n;var r=n.filter((function(n){return n.id!==e}));return[].concat(r)}(M.current,n.id),R.push(),w.current(v(M.current)),Z()}},formMethods:Q,keepValuesRef:k,subjects:{onFormUpdate:K,onFieldsUpdate:R,onExternalFieldsUpdate:H,onReset:J}};return Object(i.useEffect)((function(){G.current(nn)}),[]),Object(i.createElement)(P.Provider,{value:nn},r?Object(i.createElement)("form",{noValidate:!0,onSubmit:X},s):s)},B=new Error("A Formiz field always needs to be a children of a `<Formiz>` component."),V=new Error("A Formiz field (component using a useField hook) always needs a `name` props."),F=new Error("A <FormizStep> always needs to be a children of a `<Formiz>` component."),M=new Error("A <FormizStep> always needs a `name` props."),k=Object(i.createContext)({}),G=function(n){var e,r=n.as,t=void 0===r?"div":r,s=n.children,a=n.name,o=n.label,c=n.order,u=n.isEnabled,l=void 0===u||u,p=n.style,d=void 0===p?{}:p,_=S(n,["as","children","name","label","order","isEnabled","style"]);if(!a)throw M;var f=C(),m=f.formStateRef,y=f.actions,v=f.subjects;if(!v||!y)throw F;var g=Object(i.useState)(null!==(e=null==m?void 0:m.current)&&void 0!==e?e:x),E=g[0],b=g[1],h=Object(i.useState)({name:a,label:o,isVisited:!1,order:null!=c?c:0}),P=h[0],O=h[1],N=E.navigatedStepName?E.navigatedStepName===a:E.initialStepName===a;return Object(i.useEffect)((function(){var n=v.onFormUpdate.subscription.subscribe(b);return function(){return n.unsubscribe()}}),[]),Object(i.useEffect)((function(){E.navigatedStepName===a&&!P.isVisited&&N&&O((function(n){return j({},n,{isVisited:!0})}))})),Object(i.useEffect)((function(){y.updateStep(j({},P,{isEnabled:l}))}),[P,l]),Object(i.useEffect)((function(){return function(){y.unregisterStep(a)}}),[a]),l?Object(i.createElement)(k.Provider,{value:{name:a}},Object(i.createElement)(t,Object.assign({style:j({},d,{display:N?null:"none"})},_),l&&s)):null},w=(o.a.string.isRequired,o.a.number,o.a.any,o.a.func,o.a.func,o.a.bool,o.a.node,o.a.func,o.a.node,o.a.any,o.a.func,o.a.node,o.a.any,o.a.bool,{debounce:100,defaultValue:null,formatValue:function(n){return n},onChange:function(){},required:!1,validations:[],asyncValidations:[],keepValue:!1}),T=function(n){var e,r,t,s,a,o=n.name,c=n.debounce,u=void 0===c?w.debounce:c,l=n.defaultValue,p=void 0===l?w.defaultValue:l,d=n.formatValue,S=void 0===d?w.formatValue:d,_=n.onChange,f=void 0===_?w.onChange:_,m=n.required,y=void 0===m?w.required:m,v=n.validations,g=void 0===v?w.validations:v,b=n.asyncValidations,h=void 0===b?w.asyncValidations:b,P=n.keepValue,O=void 0===P?w.keepValue:P;if(!o)throw V;var N=C(),F=N.formStateRef,M=N.actions,G=N.subjects,T=N.keepValuesRef;if(!G||!M||!T)throw B;var L=Object(i.useRef)(!0),A=Object(i.useContext)(k),I=null==A?void 0:A.name,D=Object(i.useState)(null!==(e=null==F?void 0:F.current)&&void 0!==e?e:x),K=D[0],R=D[1],H=null!==(r=null===(t=T.current)||void 0===t?void 0:t[o])&&void 0!==r?r:p,J=Object(i.useState)({id:"field-"+Math.random().toString(36).substr(2,9),resetKey:0,value:H,valueDebounced:H,errors:[],asyncErrors:[],externalErrors:[],isValidating:!1,isPristine:!0,isEnabled:!0}),U=J[0],z=J[1],W=E(U),q=E(o),$=E(I),Y=E(function(n,e){return e||""===e?[].concat(n,[{rule:function(n){return!!n||0===n},message:!0!==e?e:""}]):n}(g||[],y)),X=E(h||[]),Z=E(u),Q=E(f),nn=E(S),en=E(p),rn=E(O),tn=K.navigatedStepName||K.initialStepName,sn=K.steps.find((function(n){return n.name===tn}))||null;Object(i.useEffect)((function(){var n=G.onFormUpdate.subscription.subscribe(R);return function(){return n.unsubscribe()}}),[]),Object(i.useEffect)((function(){var n=G.onExternalFieldsUpdate.subscription.subscribe((function(n){var e=n.find((function(n){return n.id===W.current.id}));e&&JSON.stringify(e)!==JSON.stringify(W.current)&&z(e)}));return function(){return n.unsubscribe()}}),[]),Object(i.useEffect)((function(){var n=G.onReset.subscription.subscribe((function(){z((function(n){return j({},n,{error:[],externalErrors:[],resetKey:n.resetKey+1,isPristine:!0,value:en.current})})),Q.current(nn.current(en.current),en.current)}));return function(){return n.unsubscribe()}}),[]),Object(i.useEffect)((function(){var n=function(){try{var n=(Y.current||[]).reduce((function(n,e){return e.rule(U.value)?n:[].concat(n,[e.message])}),[]),e=!n.length&&!!(X.current||[]).length;return z((function(r){return j({},r,{errors:n,asyncErrors:[],valueDebounced:r.value,isValidating:e})})),e?Promise.resolve(Promise.all((X.current||[]).map((function(n){try{return Promise.resolve(n.rule(U.value)).then((function(e){return j({},n,{isValid:e})}))}catch(e){return Promise.reject(e)}})))).then((function(n){if(L.current&&U.value===W.current.value){var e=n.reduce((function(n,e){return e.isValid?n:[].concat(n,[e.message])}),[]);z((function(n){return j({},n,{asyncErrors:e,isValidating:!1})}))}})):Promise.resolve()}catch(r){return Promise.reject(r)}};if(!Z.current)return n(),function(){};var e=setTimeout((function(){n()}),Z.current);return function(){return clearTimeout(e)}}),[JSON.stringify(U.value),JSON.stringify(null===(s=[].concat(g||[],h||[]))||void 0===s?void 0:s.reduce((function(n,e){return[].concat(n,e.deps||[],[e.message])}),[]))]),Object(i.useEffect)((function(){return M.registerField(j({},W.current,{name:q.current,stepName:$.current,value:nn.current(W.current.value)})),function(){M.unregisterField(j({},W.current,{name:q.current,stepName:$.current,value:nn.current(W.current.value)}),rn.current)}}),[]),Object(i.useEffect)((function(){M.updateField(j({},U,{name:o,stepName:I,value:nn.current(U.value)}))}),[o,I,JSON.stringify(U)]),Object(i.useEffect)((function(){return function(){L.current=!1}}),[]);var an,on,cn=I&&sn&&tn===I?sn.isSubmitted:K.isSubmitted,un=[].concat(U.externalErrors,U.asyncErrors,U.errors);return{errorMessage:un[0],errorMessages:un,id:(an=(null==F||null===(a=F.current)||void 0===a?void 0:a.id)||"",on=o,"formiz-"+an+"-field-"+on),isPristine:U.isPristine,isSubmitted:cn,isValid:!un.length,isValidating:U.isValidating,setValue:function(n){z((function(e){return j({},e,{externalErrors:[],value:n,isPristine:!1})})),Q.current(nn.current(n),n)},value:U.value,valueDebounced:U.valueDebounced,resetKey:U.resetKey}},L=function(n,e){return!0===n||(n===e||"object"==typeof n&&!!n[e])},A=function(n){var e,r,t,s,a=(void 0===n?{}:n).subscribe,o=void 0===a||a,c=C(),u=c.formStateRef,l=c.fieldsRef,p=c.formMethods,d=c.subjects,S=Object(i.useState)(p),_=S[0],f=S[1],m=Object(i.useState)(null!==(e=null==u?void 0:u.current)&&void 0!==e?e:x),y=m[0],g=m[1],b=Object(i.useState)(null!==(r=null==l?void 0:l.current)&&void 0!==r?r:[]),h=b[0],P=b[1],O=E(h),N=Object(i.useRef)([]),B=function(n){if(n&&L(o,"form")){var e=n.subscription.subscribe(g);N.current.push(e)}},V=function(n){if(n&&L(o,"fields")){var e="object"==typeof o&&"object"==typeof o.fields?o.fields:null,r=n.subscription.subscribe((function(n){var r=e?n.filter((function(n){return e.includes(n.name)})):n;JSON.stringify(O.current)!==JSON.stringify(r)&&P(r)}));N.current.push(r)}},F=Object(i.useCallback)((function(n){var e=n.formMethods,r=n.subjects;f(e),B(null==r?void 0:r.onFormUpdate),V(null==r?void 0:r.onFieldsUpdate)}),[]);Object(i.useEffect)((function(){B(null==d?void 0:d.onFormUpdate),V(null==d?void 0:d.onFieldsUpdate)}),[]),Object(i.useEffect)((function(){return function(){N.current.forEach((function(n){return null==n?void 0:n.unsubscribe()}))}}),[]);var M=y.steps.filter((function(n){return n.isEnabled})).map((function(n,e){var r=n.name,t=n.label,i=n.isSubmitted,s=n.isPristine,a=n.isValidating,o=n.isValid,c=n.isVisited;return{index:e,name:r,label:t,isPristine:null!=s&&s,isSubmitted:null!=i&&i,isValid:null!=o&&o,isValidating:null!=a&&a,isVisited:null!=c&&c}})).map((function(n,e){return j({},n,{index:e})})),k=M.find((function(n){return n.name===(y.navigatedStepName||y.initialStepName)}))||null;return j({},_,L(o,"form")?{resetKey:y.resetKey,isSubmitted:y.isSubmitted,isValid:y.isValid,isValidating:y.isValidating,isPristine:y.isPristine,steps:M,currentStep:k||{},isStepPristine:k?k.isPristine:y.isPristine,isStepValid:k?k.isValid:y.isValid,isStepValidating:k?k.isValidating:y.isValidating,isStepSubmitted:k?k.isSubmitted:y.isSubmitted,isFirstStep:(null===(t=M[0])||void 0===t?void 0:t.name)===(null==k?void 0:k.name),isLastStep:(null===(s=M[M.length-1])||void 0===s?void 0:s.name)===(null==k?void 0:k.name)}:{},L(o,"fields")?{values:v(h)}:{},{__connect__:F})},I=function(n){return"string"==typeof n||n instanceof String},D=function(n){return"number"==typeof parseFloat(n)&&!isNaN(parseFloat(n))&&!isNaN(n)},K=function(n){return""===n||function(n){return null==n}(n)},R=/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,H=function(){return function(n){return!!n||0===n}},J=function(){return function(n){return!!K(n)||!!I(n)&&!!(n||"").match(/^(?!\s*$).+/)}},U=function(){return function(n){return!!K(n)||!!Array.isArray(n)&&!!(n||[]).length}},z=function(){return function(n){return!!K(n)||!!I(n)&&(!n||R.test(n))}},W=function(){return function(n){return K(n)||D(n)}},q=function(n){return function(e){return K(e)||D(e)&&parseFloat(e)>=n}},$=function(n){return function(e){return K(e)||D(e)&&parseFloat(e)<=n}},Y=function(n,e){return function(r){return K(r)||D(r)&&parseFloat(r)>=n&&parseFloat(r)<=e}},X=function(){return function(n){return K(n)||D(n)&&parseFloat(n)>=0&&parseFloat(n)<=100}},Z=function(n){return function(e){return!!K(e)||(I(e)||Array.isArray(e))&&e.length===n}},Q=function(n){return function(e){return!!K(e)||(I(e)||Array.isArray(e))&&e.length>=n}},nn=function(n){return function(e){return K(e)||(I(e)||Array.isArray(e))&&e.length<=n}},en=function(n){var e=n.code;return s.a.createElement(c.d,{code:e.trim(),scope:{React:s.a,Formiz:N,FormizStep:G,useForm:A,useField:T,validations:t},theme:u.a,noInline:!0},s.a.createElement("div",{className:"relative mx-4 xxl:mx-0 z-20 shadow-lg rounded-lg overflow-hidden bg-white"},s.a.createElement(c.c,null)),s.a.createElement(c.b,null),s.a.createElement("div",{className:"relative z-10 xxl:-mx-20 -mt-6 px-2 pb-2 pt-10 rounded-lg overflow-hidden",style:{background:"#011627"}},s.a.createElement(c.a,null)))};en.propTypes={code:o.a.string.isRequired}},188:function(n,e,r){"use strict";r.d(e,"a",(function(){return t}));var t=function(n){return'\n            <MyField\n              name="name"\n              label="Name"\n              required="Name is required"\n              '+(n?'defaultValue="Hailey Terry"':"")+'\n            />\n\n            <MyField\n              name="nickname"\n              label="Nickname"\n              '+(n?'defaultValue="hailey"':"")+"\n            />\n"}},204:function(n,e,r){var t={"./Binary_Property/ASCII.js":205,"./Binary_Property/ASCII_Hex_Digit.js":206,"./Binary_Property/Alphabetic.js":207,"./Binary_Property/Any.js":208,"./Binary_Property/Assigned.js":209,"./Binary_Property/Bidi_Control.js":210,"./Binary_Property/Bidi_Mirrored.js":211,"./Binary_Property/Case_Ignorable.js":212,"./Binary_Property/Cased.js":213,"./Binary_Property/Changes_When_Casefolded.js":214,"./Binary_Property/Changes_When_Casemapped.js":215,"./Binary_Property/Changes_When_Lowercased.js":216,"./Binary_Property/Changes_When_NFKC_Casefolded.js":217,"./Binary_Property/Changes_When_Titlecased.js":218,"./Binary_Property/Changes_When_Uppercased.js":219,"./Binary_Property/Dash.js":220,"./Binary_Property/Default_Ignorable_Code_Point.js":221,"./Binary_Property/Deprecated.js":222,"./Binary_Property/Diacritic.js":223,"./Binary_Property/Emoji.js":224,"./Binary_Property/Emoji_Component.js":225,"./Binary_Property/Emoji_Modifier.js":226,"./Binary_Property/Emoji_Modifier_Base.js":227,"./Binary_Property/Emoji_Presentation.js":228,"./Binary_Property/Extended_Pictographic.js":229,"./Binary_Property/Extender.js":230,"./Binary_Property/Grapheme_Base.js":231,"./Binary_Property/Grapheme_Extend.js":232,"./Binary_Property/Hex_Digit.js":233,"./Binary_Property/IDS_Binary_Operator.js":234,"./Binary_Property/IDS_Trinary_Operator.js":235,"./Binary_Property/ID_Continue.js":236,"./Binary_Property/ID_Start.js":237,"./Binary_Property/Ideographic.js":238,"./Binary_Property/Join_Control.js":239,"./Binary_Property/Logical_Order_Exception.js":240,"./Binary_Property/Lowercase.js":241,"./Binary_Property/Math.js":242,"./Binary_Property/Noncharacter_Code_Point.js":243,"./Binary_Property/Pattern_Syntax.js":244,"./Binary_Property/Pattern_White_Space.js":245,"./Binary_Property/Quotation_Mark.js":246,"./Binary_Property/Radical.js":247,"./Binary_Property/Regional_Indicator.js":248,"./Binary_Property/Sentence_Terminal.js":249,"./Binary_Property/Soft_Dotted.js":250,"./Binary_Property/Terminal_Punctuation.js":251,"./Binary_Property/Unified_Ideograph.js":252,"./Binary_Property/Uppercase.js":253,"./Binary_Property/Variation_Selector.js":254,"./Binary_Property/White_Space.js":255,"./Binary_Property/XID_Continue.js":256,"./Binary_Property/XID_Start.js":257,"./General_Category/Cased_Letter.js":258,"./General_Category/Close_Punctuation.js":259,"./General_Category/Connector_Punctuation.js":260,"./General_Category/Control.js":261,"./General_Category/Currency_Symbol.js":262,"./General_Category/Dash_Punctuation.js":263,"./General_Category/Decimal_Number.js":264,"./General_Category/Enclosing_Mark.js":265,"./General_Category/Final_Punctuation.js":266,"./General_Category/Format.js":267,"./General_Category/Initial_Punctuation.js":268,"./General_Category/Letter.js":269,"./General_Category/Letter_Number.js":270,"./General_Category/Line_Separator.js":271,"./General_Category/Lowercase_Letter.js":272,"./General_Category/Mark.js":273,"./General_Category/Math_Symbol.js":274,"./General_Category/Modifier_Letter.js":275,"./General_Category/Modifier_Symbol.js":276,"./General_Category/Nonspacing_Mark.js":277,"./General_Category/Number.js":278,"./General_Category/Open_Punctuation.js":279,"./General_Category/Other.js":280,"./General_Category/Other_Letter.js":281,"./General_Category/Other_Number.js":282,"./General_Category/Other_Punctuation.js":283,"./General_Category/Other_Symbol.js":284,"./General_Category/Paragraph_Separator.js":285,"./General_Category/Private_Use.js":286,"./General_Category/Punctuation.js":287,"./General_Category/Separator.js":288,"./General_Category/Space_Separator.js":289,"./General_Category/Spacing_Mark.js":290,"./General_Category/Surrogate.js":291,"./General_Category/Symbol.js":292,"./General_Category/Titlecase_Letter.js":293,"./General_Category/Unassigned.js":294,"./General_Category/Uppercase_Letter.js":295,"./Script/Adlam.js":296,"./Script/Ahom.js":297,"./Script/Anatolian_Hieroglyphs.js":298,"./Script/Arabic.js":299,"./Script/Armenian.js":300,"./Script/Avestan.js":301,"./Script/Balinese.js":302,"./Script/Bamum.js":303,"./Script/Bassa_Vah.js":304,"./Script/Batak.js":305,"./Script/Bengali.js":306,"./Script/Bhaiksuki.js":307,"./Script/Bopomofo.js":308,"./Script/Brahmi.js":309,"./Script/Braille.js":310,"./Script/Buginese.js":311,"./Script/Buhid.js":312,"./Script/Canadian_Aboriginal.js":313,"./Script/Carian.js":314,"./Script/Caucasian_Albanian.js":315,"./Script/Chakma.js":316,"./Script/Cham.js":317,"./Script/Cherokee.js":318,"./Script/Chorasmian.js":319,"./Script/Common.js":320,"./Script/Coptic.js":321,"./Script/Cuneiform.js":322,"./Script/Cypriot.js":323,"./Script/Cyrillic.js":324,"./Script/Deseret.js":325,"./Script/Devanagari.js":326,"./Script/Dives_Akuru.js":327,"./Script/Dogra.js":328,"./Script/Duployan.js":329,"./Script/Egyptian_Hieroglyphs.js":330,"./Script/Elbasan.js":331,"./Script/Elymaic.js":332,"./Script/Ethiopic.js":333,"./Script/Georgian.js":334,"./Script/Glagolitic.js":335,"./Script/Gothic.js":336,"./Script/Grantha.js":337,"./Script/Greek.js":338,"./Script/Gujarati.js":339,"./Script/Gunjala_Gondi.js":340,"./Script/Gurmukhi.js":341,"./Script/Han.js":342,"./Script/Hangul.js":343,"./Script/Hanifi_Rohingya.js":344,"./Script/Hanunoo.js":345,"./Script/Hatran.js":346,"./Script/Hebrew.js":347,"./Script/Hiragana.js":348,"./Script/Imperial_Aramaic.js":349,"./Script/Inherited.js":350,"./Script/Inscriptional_Pahlavi.js":351,"./Script/Inscriptional_Parthian.js":352,"./Script/Javanese.js":353,"./Script/Kaithi.js":354,"./Script/Kannada.js":355,"./Script/Katakana.js":356,"./Script/Kayah_Li.js":357,"./Script/Kharoshthi.js":358,"./Script/Khitan_Small_Script.js":359,"./Script/Khmer.js":360,"./Script/Khojki.js":361,"./Script/Khudawadi.js":362,"./Script/Lao.js":363,"./Script/Latin.js":364,"./Script/Lepcha.js":365,"./Script/Limbu.js":366,"./Script/Linear_A.js":367,"./Script/Linear_B.js":368,"./Script/Lisu.js":369,"./Script/Lycian.js":370,"./Script/Lydian.js":371,"./Script/Mahajani.js":372,"./Script/Makasar.js":373,"./Script/Malayalam.js":374,"./Script/Mandaic.js":375,"./Script/Manichaean.js":376,"./Script/Marchen.js":377,"./Script/Masaram_Gondi.js":378,"./Script/Medefaidrin.js":379,"./Script/Meetei_Mayek.js":380,"./Script/Mende_Kikakui.js":381,"./Script/Meroitic_Cursive.js":382,"./Script/Meroitic_Hieroglyphs.js":383,"./Script/Miao.js":384,"./Script/Modi.js":385,"./Script/Mongolian.js":386,"./Script/Mro.js":387,"./Script/Multani.js":388,"./Script/Myanmar.js":389,"./Script/Nabataean.js":390,"./Script/Nandinagari.js":391,"./Script/New_Tai_Lue.js":392,"./Script/Newa.js":393,"./Script/Nko.js":394,"./Script/Nushu.js":395,"./Script/Nyiakeng_Puachue_Hmong.js":396,"./Script/Ogham.js":397,"./Script/Ol_Chiki.js":398,"./Script/Old_Hungarian.js":399,"./Script/Old_Italic.js":400,"./Script/Old_North_Arabian.js":401,"./Script/Old_Permic.js":402,"./Script/Old_Persian.js":403,"./Script/Old_Sogdian.js":404,"./Script/Old_South_Arabian.js":405,"./Script/Old_Turkic.js":406,"./Script/Oriya.js":407,"./Script/Osage.js":408,"./Script/Osmanya.js":409,"./Script/Pahawh_Hmong.js":410,"./Script/Palmyrene.js":411,"./Script/Pau_Cin_Hau.js":412,"./Script/Phags_Pa.js":413,"./Script/Phoenician.js":414,"./Script/Psalter_Pahlavi.js":415,"./Script/Rejang.js":416,"./Script/Runic.js":417,"./Script/Samaritan.js":418,"./Script/Saurashtra.js":419,"./Script/Sharada.js":420,"./Script/Shavian.js":421,"./Script/Siddham.js":422,"./Script/SignWriting.js":423,"./Script/Sinhala.js":424,"./Script/Sogdian.js":425,"./Script/Sora_Sompeng.js":426,"./Script/Soyombo.js":427,"./Script/Sundanese.js":428,"./Script/Syloti_Nagri.js":429,"./Script/Syriac.js":430,"./Script/Tagalog.js":431,"./Script/Tagbanwa.js":432,"./Script/Tai_Le.js":433,"./Script/Tai_Tham.js":434,"./Script/Tai_Viet.js":435,"./Script/Takri.js":436,"./Script/Tamil.js":437,"./Script/Tangut.js":438,"./Script/Telugu.js":439,"./Script/Thaana.js":440,"./Script/Thai.js":441,"./Script/Tibetan.js":442,"./Script/Tifinagh.js":443,"./Script/Tirhuta.js":444,"./Script/Ugaritic.js":445,"./Script/Vai.js":446,"./Script/Wancho.js":447,"./Script/Warang_Citi.js":448,"./Script/Yezidi.js":449,"./Script/Yi.js":450,"./Script/Zanabazar_Square.js":451,"./Script_Extensions/Adlam.js":452,"./Script_Extensions/Ahom.js":453,"./Script_Extensions/Anatolian_Hieroglyphs.js":454,"./Script_Extensions/Arabic.js":455,"./Script_Extensions/Armenian.js":456,"./Script_Extensions/Avestan.js":457,"./Script_Extensions/Balinese.js":458,"./Script_Extensions/Bamum.js":459,"./Script_Extensions/Bassa_Vah.js":460,"./Script_Extensions/Batak.js":461,"./Script_Extensions/Bengali.js":462,"./Script_Extensions/Bhaiksuki.js":463,"./Script_Extensions/Bopomofo.js":464,"./Script_Extensions/Brahmi.js":465,"./Script_Extensions/Braille.js":466,"./Script_Extensions/Buginese.js":467,"./Script_Extensions/Buhid.js":468,"./Script_Extensions/Canadian_Aboriginal.js":469,"./Script_Extensions/Carian.js":470,"./Script_Extensions/Caucasian_Albanian.js":471,"./Script_Extensions/Chakma.js":472,"./Script_Extensions/Cham.js":473,"./Script_Extensions/Cherokee.js":474,"./Script_Extensions/Chorasmian.js":475,"./Script_Extensions/Common.js":476,"./Script_Extensions/Coptic.js":477,"./Script_Extensions/Cuneiform.js":478,"./Script_Extensions/Cypriot.js":479,"./Script_Extensions/Cyrillic.js":480,"./Script_Extensions/Deseret.js":481,"./Script_Extensions/Devanagari.js":482,"./Script_Extensions/Dives_Akuru.js":483,"./Script_Extensions/Dogra.js":484,"./Script_Extensions/Duployan.js":485,"./Script_Extensions/Egyptian_Hieroglyphs.js":486,"./Script_Extensions/Elbasan.js":487,"./Script_Extensions/Elymaic.js":488,"./Script_Extensions/Ethiopic.js":489,"./Script_Extensions/Georgian.js":490,"./Script_Extensions/Glagolitic.js":491,"./Script_Extensions/Gothic.js":492,"./Script_Extensions/Grantha.js":493,"./Script_Extensions/Greek.js":494,"./Script_Extensions/Gujarati.js":495,"./Script_Extensions/Gunjala_Gondi.js":496,"./Script_Extensions/Gurmukhi.js":497,"./Script_Extensions/Han.js":498,"./Script_Extensions/Hangul.js":499,"./Script_Extensions/Hanifi_Rohingya.js":500,"./Script_Extensions/Hanunoo.js":501,"./Script_Extensions/Hatran.js":502,"./Script_Extensions/Hebrew.js":503,"./Script_Extensions/Hiragana.js":504,"./Script_Extensions/Imperial_Aramaic.js":505,"./Script_Extensions/Inherited.js":506,"./Script_Extensions/Inscriptional_Pahlavi.js":507,"./Script_Extensions/Inscriptional_Parthian.js":508,"./Script_Extensions/Javanese.js":509,"./Script_Extensions/Kaithi.js":510,"./Script_Extensions/Kannada.js":511,"./Script_Extensions/Katakana.js":512,"./Script_Extensions/Kayah_Li.js":513,"./Script_Extensions/Kharoshthi.js":514,"./Script_Extensions/Khitan_Small_Script.js":515,"./Script_Extensions/Khmer.js":516,"./Script_Extensions/Khojki.js":517,"./Script_Extensions/Khudawadi.js":518,"./Script_Extensions/Lao.js":519,"./Script_Extensions/Latin.js":520,"./Script_Extensions/Lepcha.js":521,"./Script_Extensions/Limbu.js":522,"./Script_Extensions/Linear_A.js":523,"./Script_Extensions/Linear_B.js":524,"./Script_Extensions/Lisu.js":525,"./Script_Extensions/Lycian.js":526,"./Script_Extensions/Lydian.js":527,"./Script_Extensions/Mahajani.js":528,"./Script_Extensions/Makasar.js":529,"./Script_Extensions/Malayalam.js":530,"./Script_Extensions/Mandaic.js":531,"./Script_Extensions/Manichaean.js":532,"./Script_Extensions/Marchen.js":533,"./Script_Extensions/Masaram_Gondi.js":534,"./Script_Extensions/Medefaidrin.js":535,"./Script_Extensions/Meetei_Mayek.js":536,"./Script_Extensions/Mende_Kikakui.js":537,"./Script_Extensions/Meroitic_Cursive.js":538,"./Script_Extensions/Meroitic_Hieroglyphs.js":539,"./Script_Extensions/Miao.js":540,"./Script_Extensions/Modi.js":541,"./Script_Extensions/Mongolian.js":542,"./Script_Extensions/Mro.js":543,"./Script_Extensions/Multani.js":544,"./Script_Extensions/Myanmar.js":545,"./Script_Extensions/Nabataean.js":546,"./Script_Extensions/Nandinagari.js":547,"./Script_Extensions/New_Tai_Lue.js":548,"./Script_Extensions/Newa.js":549,"./Script_Extensions/Nko.js":550,"./Script_Extensions/Nushu.js":551,"./Script_Extensions/Nyiakeng_Puachue_Hmong.js":552,"./Script_Extensions/Ogham.js":553,"./Script_Extensions/Ol_Chiki.js":554,"./Script_Extensions/Old_Hungarian.js":555,"./Script_Extensions/Old_Italic.js":556,"./Script_Extensions/Old_North_Arabian.js":557,"./Script_Extensions/Old_Permic.js":558,"./Script_Extensions/Old_Persian.js":559,"./Script_Extensions/Old_Sogdian.js":560,"./Script_Extensions/Old_South_Arabian.js":561,"./Script_Extensions/Old_Turkic.js":562,"./Script_Extensions/Oriya.js":563,"./Script_Extensions/Osage.js":564,"./Script_Extensions/Osmanya.js":565,"./Script_Extensions/Pahawh_Hmong.js":566,"./Script_Extensions/Palmyrene.js":567,"./Script_Extensions/Pau_Cin_Hau.js":568,"./Script_Extensions/Phags_Pa.js":569,"./Script_Extensions/Phoenician.js":570,"./Script_Extensions/Psalter_Pahlavi.js":571,"./Script_Extensions/Rejang.js":572,"./Script_Extensions/Runic.js":573,"./Script_Extensions/Samaritan.js":574,"./Script_Extensions/Saurashtra.js":575,"./Script_Extensions/Sharada.js":576,"./Script_Extensions/Shavian.js":577,"./Script_Extensions/Siddham.js":578,"./Script_Extensions/SignWriting.js":579,"./Script_Extensions/Sinhala.js":580,"./Script_Extensions/Sogdian.js":581,"./Script_Extensions/Sora_Sompeng.js":582,"./Script_Extensions/Soyombo.js":583,"./Script_Extensions/Sundanese.js":584,"./Script_Extensions/Syloti_Nagri.js":585,"./Script_Extensions/Syriac.js":586,"./Script_Extensions/Tagalog.js":587,"./Script_Extensions/Tagbanwa.js":588,"./Script_Extensions/Tai_Le.js":589,"./Script_Extensions/Tai_Tham.js":590,"./Script_Extensions/Tai_Viet.js":591,"./Script_Extensions/Takri.js":592,"./Script_Extensions/Tamil.js":593,"./Script_Extensions/Tangut.js":594,"./Script_Extensions/Telugu.js":595,"./Script_Extensions/Thaana.js":596,"./Script_Extensions/Thai.js":597,"./Script_Extensions/Tibetan.js":598,"./Script_Extensions/Tifinagh.js":599,"./Script_Extensions/Tirhuta.js":600,"./Script_Extensions/Ugaritic.js":601,"./Script_Extensions/Vai.js":602,"./Script_Extensions/Wancho.js":603,"./Script_Extensions/Warang_Citi.js":604,"./Script_Extensions/Yezidi.js":605,"./Script_Extensions/Yi.js":606,"./Script_Extensions/Zanabazar_Square.js":607,"./index.js":608,"./unicode-version.js":609};function i(n){var e=s(n);return r(e)}function s(n){if(!r.o(t,n)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return t[n]}i.keys=function(){return Object.keys(t)},i.resolve=s,n.exports=i,i.id=204}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{53:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return u}));t(0);var r=t(61),o=t(62);function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s={id:"getting-started",title:"Getting Started"},l=[{value:"Installation",id:"installation",children:[]},{value:"Concept",id:"concept",children:[]},{value:"Usage",id:"usage",children:[{value:"Create your first custom field",id:"create-your-first-custom-field",children:[]},{value:"Use your field in a form",id:"use-your-field-in-a-form",children:[]},{value:"🧙 Multi Steps form",id:"🧙-multi-steps-form",children:[]}]}],m={rightToc:l},c="wrapper";function u(e){var n=e.components,t=i(e,["components"]);return Object(r.b)(c,a({},m,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)(o.a,{mdxType:"Alpha"}),Object(r.b)("h2",{id:"installation"},"Installation"),Object(r.b)("p",null,"With ",Object(r.b)("a",a({parentName:"p"},{href:"https://yarnpkg.com"}),"Yarn")),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-bash"}),"yarn add @formiz/core @formiz/validations\n")),Object(r.b)("p",null,"Or with ",Object(r.b)("a",a({parentName:"p"},{href:"https://www.npmjs.com/"}),"NPM")),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-bash"}),"npm install @formiz/core @formiz/validations\n")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"concept"},"Concept"),Object(r.b)("p",null,"The idea behind ",Object(r.b)("strong",{parentName:"p"},"Formiz")," is to allow you to build advanced forms with ",Object(r.b)("strong",{parentName:"p"},"multiple steps, complex validations")," and a ",Object(r.b)("strong",{parentName:"p"},"good UX")," without pain."),Object(r.b)("p",null,"The main idea is to build fields as independent reusable components. ",Object(r.b)("strong",{parentName:"p"},"Fields can be anything"),", not just inputs. Once you have built your fields, you can use them everywhere."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Formiz")," core does not provide styles, so you can ",Object(r.b)("strong",{parentName:"p"},"use it with any UI library and style you want"),". Use it with Bootstrap, ReactStrap, Material UI or your own styles."),Object(r.b)("hr",null),Object(r.b)("h2",{id:"usage"},"Usage"),Object(r.b)("h3",{id:"create-your-first-custom-field"},"Create your first custom field"),Object(r.b)("p",null,"A custom field can be anything, not just inputs."),Object(r.b)("p",null,"Here there is an example with an input, but you can litteraly ",Object(r.b)("strong",{parentName:"p"},"turn anything into a field")," and you will ",Object(r.b)("strong",{parentName:"p"},"get validation for free"),"!"),Object(r.b)("h4",{id:"1-create-a-new-field"},"1. Create a new field"),Object(r.b)("p",null,"Create a ",Object(r.b)("inlineCode",{parentName:"p"},"MyField.js")," file, then import the ",Object(r.b)("inlineCode",{parentName:"p"},"useField")," hook from ",Object(r.b)("inlineCode",{parentName:"p"},"@formiz/core")),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-jsx"}),"import React from 'react'\nimport { useField } from '@formiz/core'\n\nexport const MyField = () => {\n  // ...\n};\n")),Object(r.b)("h4",{id:"2-pass-props-to-the-hook"},"2. Pass props to the hook"),Object(r.b)("p",null,"Get the props from the MyField component and pass it to the hook."),Object(r.b)("p",null,"Import the ",Object(r.b)("inlineCode",{parentName:"p"},"useField")," hook from ",Object(r.b)("inlineCode",{parentName:"p"},"@formiz/core")),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-jsx"}),"import React from 'react'\nimport { useField } from '@formiz/core'\n\nexport const MyField = (props) => {\n  const {} = useField(props); // Pass the props to the hook\n  // ...\n};\n")),Object(r.b)("h4",{id:"3-make-it-works"},"3. Make it works"),Object(r.b)("p",null,"Create the ",Object(r.b)("inlineCode",{parentName:"p"},"<input>")," and make it interactive like this:"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-jsx"}),"import React from 'react'\nimport { useField } from '@formiz/core'\n\nexport const MyField = (props) => {\n  const { resetKey, setValue, value } = useField(props);\n\n  return (\n    <input\n      key={resetKey} // Allow to recreate the field if the form is reset\n      defaultValue={value} // Pass the defaultValue for the input\n      onChange={e => setValue(e.target.value)} // Update the value onChange\n    />\n  );\n};\n")),Object(r.b)("h4",{id:"3-display-error"},"3. Display error"),Object(r.b)("p",null,"Display the ",Object(r.b)("inlineCode",{parentName:"p"},"errorMessage")," below the ",Object(r.b)("inlineCode",{parentName:"p"},"<input>"),"."),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-jsx"}),"import React from 'react'\nimport { useField } from '@formiz/core'\n\nexport const MyField = (props) => {\n  const { errorMessage, isValid, resetKey, setValue, value } = useField(props);\n\n  return (\n    <div>\n      <input\n        key={resetKey}\n        defaultValue={value}\n        onChange={e => setValue(e.target.value)}\n      />\n      {\n        !isValid\n        && errorMessage // Display error message\n      }\n    </div>\n  );\n};\n")),Object(r.b)("h4",{id:"4-improve-ux-and-accessibility"},"4. Improve UX and accessibility"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Add a custom label and add ",Object(r.b)("inlineCode",{parentName:"li"},"*")," if the field is required."),Object(r.b)("li",{parentName:"ul"},"Allow to change the input type."),Object(r.b)("li",{parentName:"ul"},"Add css classes for style."),Object(r.b)("li",{parentName:"ul"},"Display error only if the field changed or the form/step is submitted."),Object(r.b)("li",{parentName:"ul"},"Don't apply the ",Object(r.b)("inlineCode",{parentName:"li"},"is-error")," class if the input is focused."),Object(r.b)("li",{parentName:"ul"},"Add ",Object(r.b)("inlineCode",{parentName:"li"},"id"),", ",Object(r.b)("inlineCode",{parentName:"li"},"for")," and aria attributes for accessibility.")),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-jsx"}),"import React from 'react'\nimport { useField } from '@formiz/core'\n\nexport const MyField = (props) => {\n  const {\n    errorMessage,\n    id,\n    isValid,\n    isPristine,\n    isSubmitted,\n    resetKey,\n    setValue,\n    value,\n  } = useField(props)\n  const { label, type, isRequired } = props\n  const [isFocused, setIsFocused] = React.useState(false);\n  const showError = !isValid && (!isPristine || isSubmitted)\n\n  return (\n    <div className={`demo-form-group ${(showError && !isFocused) ? 'is-error' : ''}`}>\n      <label\n        className=\"demo-label\"\n        htmlFor={id}\n      >\n        { label }\n        {isRequired && ' *'}\n      </label>\n      <input\n        key={resetKey}\n        id={id}\n        type={type || 'text'}\n        defaultValue={value}\n        className=\"demo-input\"\n        onChange={e => setValue(e.target.value)}\n        onFocus={() => setIsFocused(true)}\n        onBlur={() => setIsFocused(false)}\n        aria-invalid={!isValid}\n        aria-required={!!isRequired}\n        aria-describedby={!isValid ? `${id}-error` : null}\n      />\n      {showError && (\n        <div id={`${id}-error`} className=\"demo-form-feedback\">\n          { errorMessage }\n        </div>\n      )}\n    </div>\n  )\n}\n")),Object(r.b)("h3",{id:"use-your-field-in-a-form"},"Use your field in a form"),Object(r.b)("h4",{id:"1-create-the-form"},"1. Create the form"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-jsx"}),"import React from 'react'\nimport { Formiz } from '@formiz/core'\n\nexport const MyForm = () => {\n  return (\n    <Formiz>\n      {/* ... */}\n    </Formiz>\n  )\n}\n")),Object(r.b)("h4",{id:"2-connect-the-form-with-the-useform-hook"},"2. Connect the form with the ",Object(r.b)("inlineCode",{parentName:"h4"},"useForm")," hook"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-jsx"}),"import React from 'react'\nimport { Formiz, useForm } from '@formiz/core'\n\nexport const MyForm = () => {\n  const myForm = useForm() // Call useForm\n\n  return (\n    <Formiz\n      connect={myForm} // Connect to your form\n    >\n      {/* ... */}\n    </Formiz>\n  )\n}\n")),Object(r.b)("h4",{id:"3-handle-submit"},"3. Handle submit"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-jsx"}),"import React from 'react'\nimport { Formiz, useForm } from '@formiz/core'\n\nexport const MyForm = () => {\n  const myForm = useForm()\n\n  const handleSubmit = (values) => {\n    console.log(values) // Retrieves values after submit\n  }\n\n  return (\n    <Formiz\n      connect={myForm}\n      onValidSubmit={handleSubmit} // Handle submit only if the form is valid\n    >\n      <form // create an html form\n        onSubmit={myForm.submit} // Pass the Formiz submit to the onSubmit\n      >\n        {/* Your fields here */}\n\n        <button\n          type=\"submit\" // Create a submit button\n          disabled={!myForm.isValid} // Disable the button if the form is not valid\n        >\n          Submit\n        </button>\n      </form>\n    </Formiz>\n  )\n}\n")),Object(r.b)("h4",{id:"4-add-fields-to-the-form"},"4. Add fields to the form"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},'Each field need a property "name"')," which will be the key in the object of values.",Object(r.b)("br",null),"\nSo, be sure this key is ",Object(r.b)("strong",{parentName:"p"},"unique by form"),"."),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-jsx"}),'import React from \'react\'\nimport { Formiz, useForm } from \'@formiz/core\'\nimport { isEmail } from \'@formiz/validations\' // Import some validations\nimport { MyField } from \'./MyField\' // Import your field\n\nexport const MyForm = () => {\n  const myForm = useForm()\n\n  const handleSubmit = (values) => {\n    console.log(values)\n  }\n\n  return (\n    <Formiz\n      connect={myForm}\n      onValidSubmit={handleSubmit}\n    >\n      <form\n        onSubmit={myForm.submit}\n      >\n\n        <MyField\n          name="firstName"\n          label="First Name"\n          isRequired="First Name is required"\n        />\n        <MyField\n          name="lastName"\n          label="Last Name"\n          isRequired="Last Name is required"\n        />\n        <MyField\n          name="email"\n          label="Email"\n          validations={[\n            {\n              rule: isEmail(),\n              message: \'This is not a valid email\',\n            },\n          ]}\n        />\n\n        <button\n          type="submit"\n          disabled={!myForm.isValid}\n        >\n          Submit\n        </button>\n      </form>\n    </Formiz>\n  )\n}\n')),Object(r.b)("h3",{id:"🧙-multi-steps-form"},"🧙 Multi Steps form"),Object(r.b)("p",null,"Oh wait... you want to ",Object(r.b)("strong",{parentName:"p"},"turn the form into a multi steps")," form?"),Object(r.b)("p",null,"Good news, that pretty easy!"),Object(r.b)("p",null,"You already have your fields so we just need to update the form to use steps."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},'Each FormizStep need a property "name"'),", be sure this key is unique by form."),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-jsx"}),'import React from \'react\'\nimport {\n  Formiz,\n  FormizStep, // Import the FormizStep component\n  useForm,\n} from \'@formiz/core\'\nimport { isEmail } from \'@formiz/validations\'\nimport { MyField } from \'./MyField\'\n\nexport const MyForm = () => {\n  const myForm = useForm()\n\n  const handleSubmit = (values) => {\n    console.log(values)\n  }\n\n  return (\n    <Formiz\n      connect={myForm}\n      onValidSubmit={handleSubmit}\n    >\n      <form\n        // Change the myForm.submit to myForm.submitStep\n        onSubmit={myForm.submitStep}\n      >\n\n        <FormizStep\n          name="step1" // Split the form with FormizStep\n        >\n          <MyField\n            name="firstName"\n            label="First Name"\n            isRequired="First Name is required"\n          />\n          <MyField\n            name="lastName"\n            label="Last Name"\n            isRequired="Last Name is required"\n          />\n        </FormizStep>\n\n        <FormizStep\n          name="step2" // Split the form with FormizStep\n        >\n          <MyField\n            name="email"\n            label="Email"\n            validations={[\n              {\n                rule: isEmail(),\n                message: \'This is not a valid email\',\n              },\n            ]}\n          />\n        </FormizStep>\n\n        {/* Update the submit button to allow navigation between steps. */}\n        {!myForm.isFirstStep && (\n          <button type="button" onClick={myForm.prevStep}>\n            Back\n          </button>\n        )}\n        {myForm.isLastStep ? (\n          <button type="submit" disabled={!myForm.isValid}>\n            Submit\n          </button>\n        ) : (\n          <button type="submit" disabled={!myForm.isStepValid}>\n            Continue\n          </button>\n        )}\n      </form>\n    </Formiz>\n  )\n}\n')),Object(r.b)("p",null,Object(r.b)("img",a({parentName:"p"},{src:"https://media2.giphy.com/media/12NUbkX6p4xOO4/giphy.gif?cid=790b76115d3f358a4832727977f39cad&rid=giphy.gif",alt:"Magic"}))),Object(r.b)("h4",{id:"thats-it-"},"That's it 🎉"))}u.isMDXComponent=!0},61:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return u}));var r=t(0),o=t.n(r),a=o.a.createContext({}),i=function(e){var n=o.a.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},s=function(e){var n=i(e.components);return o.a.createElement(a.Provider,{value:n},e.children)};var l="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},c=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,l=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===n.indexOf(r)&&(t[r]=e[r]);return t}(e,["components","mdxType","originalType","parentName"]),c=i(t),u=r,p=c[s+"."+u]||c[u]||m[u]||a;return t?o.a.createElement(p,Object.assign({},{ref:n},l,{components:t})):o.a.createElement(p,Object.assign({},{ref:n},l))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=c;var s={};for(var m in n)hasOwnProperty.call(n,m)&&(s[m]=n[m]);s.originalType=e,s[l]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=t[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},62:function(e,n,t){"use strict";var r=t(0),o=t.n(r),a=function(){return o.a.createElement("div",{className:"callout is-warning"},"This is an"," ",o.a.createElement("strong",null,"early and alpha release")," ","of Formiz."," ","API is subject to change."," ",o.a.createElement("strong",null,"Do not use in production."))},i=t(6),s=t.n(i),l=function(e){var n=e.of;return o.a.createElement("div",{className:"callout is-warning"},"Work in Progress."," ",o.a.createElement("strong",null,n)," ","is not implemented yet.")};l.propTypes={of:s.a.string},l.defaultProps={of:"This"};var m=function(e){var n=e.of;return o.a.createElement("div",{className:"callout is-warning"},"Work in Progress."," ",o.a.createElement("strong",null,"@formiz/",n)," ","is not published on NPM yet.")};m.propTypes={of:s.a.string},m.defaultProps={of:"core"};t.d(n,"a",(function(){return a})),t.d(n,"b",(function(){return l}))}}]);
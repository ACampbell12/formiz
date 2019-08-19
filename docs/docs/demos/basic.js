export const MyField = `
// 1. Create a reusable field
const MyField = (props) => {
  const {
    value, setValue, errorMessage, isValid, isPristine, isSubmitted, resetKey
  } = useField(props)
  const { label } = props
  const showError = !isValid && (!isPristine || isSubmitted)
  return (
    <div className="demo-form-group">
      <label className="demo-label">
        { label }
      </label>
      <input
        key={resetKey}
        type="text"
        defaultValue={value}
        className={\`demo-input \${showError ? 'is-error' : ''}\`}
        onChange={e => setValue(e.target.value)}
      />
      {showError && (
        <div className="demo-form-error">
          { errorMessage }
        </div>
      )}
    </div>
  )
}
`;

export const MyForm = `
// 2. Create a form with multi steps & fields
const MyForm = () => {
  const myForm = useForm()
  const [isLoading, setIsLoading] = React.useState(false)
  const submitForm = (values) => {
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      alert(JSON.stringify(values)) // { firstName: 'value', lastName: 'value' }
      myForm.invalidateFields({
        lastName: 'Error from API',
      })
    }, 1000)
  }
  return (
    <Formiz onValidSubmit={submitForm} connect={myForm}>
      <form
        onSubmit={myForm.submitStep}
        className="demo-form"
        style={{ minHeight: '16rem' }}
      >
        <div className="demo-form__content">
          <FormizStep name="step1">
            <MyField
              name="firstName"
              label="First Name"
              isRequired="First Name is required"
            />
          </FormizStep>
          <FormizStep name="step2">
            <MyField
              name="lastName"
              label="Last Name"
              isRequired="Last Name is required"
            />
          </FormizStep>
        </div>

        <div className="demo-form__footer">
          <div className="mr-auto" style={{ minWidth: '6rem' }}>
            {!myForm.isFirstStep && (
              <button
                className="demo-button"
                type="button"
                onClick={myForm.prevStep}
              >
                Previous
              </button>
            )}
          </div>
          <div className="text-sm text-gray-500 p-2 text-center w-full xs:w-auto order-first xs:order-none">
            Step
            {' '}
            {myForm.currentStep && myForm.currentStep.index + 1}
            {' '}
            of
            {' '}
            {myForm.steps.length}
          </div>
          <div
            className="ml-auto"
            style={{ minWidth: '6rem' }}
          >
            <button
              className="demo-button is-primary"
              type="submit"
              disabled={isLoading || (!myForm.isValid && myForm.isSubmitted)}
            >
              {myForm.isLastStep
                ? (isLoading ? 'Loading...' : 'Submit')
                : 'Next'
              }
            </button>
          </div>
        </div>
      </form>
    </Formiz>
  )
}
`;

export const Render = `
render(
  <MyForm />
)
`;

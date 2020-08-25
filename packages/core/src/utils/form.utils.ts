import { ExposedField, FieldState } from 'types/field.types';
import { FormFields } from '../types/form.types';

const isObject = (x: any) => x && typeof x === 'object' && x.constructor === Object;

const parseValues = (values: any) => Object.keys(values)
  .reduce(
    (acc, key) => parseValuesName(key, acc), // eslint-disable-line
    values,
  );

const parseValuesName = (name: any, values: any): any => {
  if (name.indexOf('.') < 0 && name.indexOf('[') < 0) {
    return values;
  }

  const value = values[name];
  const { [name]: deletedKey, ...nextValues } = values || {};
  const [current, ...otherNames] = name.split('.');
  const isArraySyntax = current.match(/\[([0-9]*)\]$/g);

  if (isArraySyntax) {
    const [currentName,, currentIndex] = current.split(/(\[|\])/g);
    const currentCollection = values[currentName] || [];

    if (otherNames.length) {
      const group = {
        ...(values[currentName] && isObject(values[currentName][currentIndex])
          ? values[currentName][currentIndex]
          : {}
        ),
        [otherNames.join('.')]: value,
      };

      currentCollection[currentIndex] = parseValues(group);
    } else {
      currentCollection[currentIndex] = value;
    }

    return {
      ...nextValues,
      [currentName]: currentCollection,
    };
  }

  const group = {
    ...(isObject(values[current]) ? values[current] : {}),
    [otherNames.join('.')]: value,
  };

  return {
    ...nextValues,
    [current]: parseValues(group),
  };
};

export const getFormFlatValues = (fields: FormFields) => (fields || [])
  .filter((field) => field.isEnabled)
  .reduce((obj, field) => ({
    ...obj,
    [field.name]: field.value,
  }), {});

export const getFormValues = (fields: FormFields) => {
  const values = getFormFlatValues(fields || []);
  return parseValues(values);
};

export const getExposedField = ({
  externalErrors,
  asyncErrors,
  errors,
  isPristine,
  isValidating,
  value,
  valueDebounced,
  resetKey,
}: FieldState): ExposedField => {
  const allErrors = [...externalErrors, ...asyncErrors, ...errors];
  return {
    errorMessage: allErrors[0],
    errorMessages: allErrors,
    isPristine,
    isValid: !allErrors.length,
    isValidating,
    value,
    valueDebounced,
    resetKey,
  };
};

export const getFormFields = (fields: FormFields) => {
  const exposedFields = (fields || [])
    .filter((field) => field.isEnabled)
    .reduce((obj, field) => ({
      ...obj,
      [field.name]: getExposedField(field),
    }), {});

  return parseValues(exposedFields);
};

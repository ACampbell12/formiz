import React, { useEffect, useState } from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from '@chakra-ui/core';
import { useField } from '@formiz/core';

export const FieldInput = (props) => {
  const {
    errorMessage,
    id,
    isValid,
    isSubmitted,
    resetKey,
    setValue,
    value,
  } = useField(props);
  const {
    label, type, isRequired, placeholder, helper, ...rest
  } = props;
  const [isTouched, setIsTouched] = useState(false);
  const showError = !isValid && (isTouched || isSubmitted);

  useEffect(() => {
    setIsTouched(false);
  }, [resetKey]);

  return (
    <FormControl mb="6" isInvalid={showError} isRequired={!!isRequired} {...rest}>
      <FormLabel htmlFor={id}>
        {label}
      </FormLabel>
      {!!helper && (
        <FormHelperText mt="0" mb="3">
          {helper}
        </FormHelperText>
      )}
      <Input
        key={resetKey}
        type={type || 'text'}
        id={id}
        value={value || ''}
        onChange={e => setValue(e.target.value)}
        onBlur={() => setIsTouched(true)}
        aria-invalid={showError}
        aria-describedby={!isValid ? `${id}-error` : null}
        placeholder={placeholder}
      />
      <FormErrorMessage id={`${id}-error`}>
        { errorMessage }
      </FormErrorMessage>
    </FormControl>
  );
};

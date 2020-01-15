import React from 'react';
import useFormState from '../hooks/useFormState';

export const FormSection = props => <div className="mb-6" {...props} />;

export const Error = (error, index) => (
  <p className="text-red-400 py-2" key={index}>
    {error}
  </p>
);

export const Label = ({ label, id, required }) => (
  <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor={id}>
    {label}
    {required ? ' *' : ''}
  </label>
);

export const TextInput = ({
  id,
  type,
  placeholder,
  label,
  required,
  errorMessage,
  updatePayload,
}) => {
  const [methods, values, errors] = useFormState({
    required,
    errorMessage,
    updatePayload,
    id,
  });

  return (
    <FormSection>
      {Label({ label, id, required })}
      <input
        className="appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={id}
        type={type}
        placeholder={placeholder}
        {...values}
        {...methods}
      />
      <React.Fragment>{errors.map(Error)}</React.Fragment>
    </FormSection>
  );
};

export const TextArea = ({
  id,
  type,
  placeholder,
  label,
  required,
  errorMessage,
  updatePayload,
}) => {
  const [methods, values, errors] = useFormState({
    required,
    errorMessage,
    updatePayload,
    id,
  });
  return (
    <FormSection>
      {Label({ label, id, required })}
      <textarea
        className="appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-56 resize-y"
        id={id}
        type={type}
        placeholder={placeholder}
        {...values}
        {...methods}
      />
      <React.Fragment>{errors.map(Error)}</React.Fragment>
    </FormSection>
  );
};

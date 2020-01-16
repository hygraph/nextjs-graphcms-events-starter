import React from 'react';

export const FormSection = props => <div className="mb-6" {...props} />;

export const Error = (error, index) => (
  <p className="text-red-400 py-2" key={index}>
    {error}
  </p>
);

export const Label = ({ label, id }) => (
  <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor={id}>
    {label}
  </label>
);

export const TextInput = React.forwardRef((props, ref) => {
  const { id, type, placeholder, label, errors } = props;
  return (
    <FormSection>
      {Label({ label, id })}
      <input
        className="appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        ref={ref}
      />
      {errors && <Error error={errors.message} />}
    </FormSection>
  );
});

export const TextArea = React.forwardRef((props, ref) => {
  const { id, type, placeholder, label, errors } = props;
  return (
    <FormSection>
      {Label({ label, id })}
      <textarea
        ref={ref}
        className="appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-56 resize-y"
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
      />
      {errors && <Error error={errors.message} />}
    </FormSection>
  );
});

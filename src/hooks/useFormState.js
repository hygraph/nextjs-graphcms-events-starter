import React, { useState, useRef } from 'react';

const useFormState = args => {
  const ref = useRef(null);
  const [dirty, setDirty] = useState(false);
  const [value, setValue] = useState('');
  const [errors, setError] = useState([]);

  const onFocus = () => {
    setDirty(true);
  };

  const onChange = () => {
    setValue(ref.current.value);
  };

  const onBlur = () => {
    if (args.required && dirty && value === '') {
      setError(err =>
        err.includes(args.errorMessage) ? err : [...err, args.errorMessage]
      );
    }
    args.updatePayload(previousState => {
      previousState[args.id] = value;
      return previousState;
    });
  };

  return [{ onChange, onBlur, onFocus }, { ref, value }, errors];
};

export default useFormState;

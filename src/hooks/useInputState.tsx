import {ChangeEvent, useState} from 'react';

export default (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    onChange: (event: ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    },
    reset: () => setValue('')
  };
};

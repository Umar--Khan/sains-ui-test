import { ChangeEvent } from 'react';

import { FieldOption } from 'declarations/forms';

interface SelectProps {
  className?: string;
  name: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  options: FieldOption<number>[];
  placeholder?: string;
  value: string;
  id?: string;
}

const Select = ({
  className,
  name,
  onChange,
  options,
  placeholder,
  value,
  id,
  ...rest
}: SelectProps) => (
  <select
    className={className}
    name={name}
    onChange={onChange}
    placeholder={placeholder}
    value={value}
    id={id}
    {...rest}
  >
    {options.map(({ value, label }) => (
      <option value={value} key={value}>
        {label}
      </option>
    ))}
  </select>
);

export default Select;

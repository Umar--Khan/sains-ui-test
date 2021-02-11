import { ChangeEvent, ReactNodeArray } from 'react';

interface SelectProps {
  className?: string;
  name: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  options: ReactNodeArray;
  placeholder?: string;
  value: any;
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
    {options}
  </select>
);

export default Select;

import React, { forwardRef } from 'react';

type InputFieldProps = {
  label?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  name: string;
  id?: string;
  error?: string;
};

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, value, onChange, type = 'text', name, id, error }, ref) => {
    return (
      <div className="flex w-full max-w-[350px] flex-col">
        <div className="flex items-center justify-between pb-1">
          <div className="flex items-center pt-4">
            {label && (
              <label
                className="text-start text-sm font-medium leading-[1.625em] text-[#020817]"
                htmlFor={id || name}
              >
                {label}
              </label>
            )}
          </div>
        </div>
        <input
          ref={ref}
          id={id || name}
          name={name}
          className={`rounded-md border border-[#dedfe1] bg-transparent px-3 py-2 text-sm font-medium text-gray-600 
            focus:border-[1.5px] focus:border-blue-500 focus:outline-none ${
      error ? 'border-red-500' : ''
      }`}
          value={value}
          onChange={onChange}
          type={type}
        />
        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
      </div>
    );
  },
);

InputField.displayName = 'InputField';

export default InputField;

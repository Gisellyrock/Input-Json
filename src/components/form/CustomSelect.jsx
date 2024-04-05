'use client';

import { cn } from '@/utils/cn';

export function CustomSelect({ className, label, errorMessage, ...props }) {
  return (
    <div className={cn('w-full', className)}>
      {label && (
        <label
          className="block text-md font-medium text-gray-700"
          htmlFor={props.id || props.name}
        >
          {label}
        </label>
      )}
      <div className="relative w-full">
        <select
          className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          placeholder={label}
          {...props}
        >
          {props.children}
        </select>

        {!!errorMessage && (
          <p className="text-red-600 normal-case font-normal mt-1 text-xs">
            {errorMessage}
          </p>
        )}
        <svg
          className="fill-current h-4 w-4 pointer-events-none absolute right-2 top-1/2 -translate-y-1/2"
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={20}
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
}

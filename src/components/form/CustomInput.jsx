'use client';

import { cn } from '@/utils/cn';

export function CustomInput({ label, className, errorMessage, ...props }) {
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
      <>
        <input
          className="w-full max-w-full appearance-none bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          {...props}
        />

        {!!errorMessage && (
          <p className="text-red-600 normal-case font-normal mt-1 text-xs">
            {errorMessage}
          </p>
        )}
      </>
    </div>
  );
}

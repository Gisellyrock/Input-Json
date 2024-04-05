import { cn } from '@/utils/cn';

export function CustomCheckbox({ label, errorMessage, className, ...rest }) {
  return (
    <>
      <div className={cn('w-full flex gap-3', className)}>
        <input
          type="checkbox"
          className="w-[24px] h-[24px] bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3  focus:outline-none focus:bg-white"
          {...rest}
        />
        <p className="text-md font-medium text-gray-700">{label}</p>
      </div>
      {!!errorMessage && (
        <p className="mt-2 text-red-600 normal-case font-normal text-xs">
          {errorMessage}
        </p>
      )}
    </>
  );
}

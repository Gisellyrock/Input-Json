import { Controller, useFormContext } from 'react-hook-form';
import { CustomSelect } from '../../CustomSelect';

export function RHFSelect({ name, options, rules, ...rest }) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field, fieldState }) => {
        const onBlurOverride = (event) => {
          field.onBlur();
          rest?.onBlur && rest.onBlur(event);
        };

        return (
          <CustomSelect
            {...rest}
            {...field}
            onBlur={onBlurOverride}
            errorMessage={fieldState.error && fieldState.error.message}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </CustomSelect>
        );
      }}
    />
  );
}

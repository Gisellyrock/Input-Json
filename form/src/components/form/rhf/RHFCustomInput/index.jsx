import { Controller, useFormContext } from 'react-hook-form';
import { CustomInput } from '../../CustomInput';

export function RHFCustomInput({ name, ...rest }) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => {
        const onBlurOverride = (event) => {
          field.onBlur();
          rest?.onBlur && rest.onBlur(event);
        };

        return (
          <CustomInput
            {...field}
            {...rest}
            onBlur={onBlurOverride}
            errorMessage={fieldState.error && fieldState.error.message}
          />
        );
      }}
    />
  );
}

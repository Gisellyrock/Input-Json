import { Controller, useFormContext } from 'react-hook-form';
import { CustomCheckbox } from '../../CustomCheckbox';

export function RHFCustomCheckbox({ name, ...rest }) {
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
          <CustomCheckbox
            {...rest}
            {...field}
            onBlur={onBlurOverride}
            errorMessage={fieldState.error && fieldState.error.message}
          />
        );
      }}
    />
  );
}

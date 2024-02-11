import { Input, InputProps } from "antd";
import { FormItemOptions, useFormContext } from "react-handled-forms";
import FormItem from "react-handled-forms/dist/components/form-item";
import RenderFormErrors from "../../errors/render-form-errors";

export default function TextFormItem<T extends object, K extends keyof T>(
  props: FormItemOptions<T, K, InputProps, string>
) {
  const {
    form: { formState, setValue, validationErrors },
  } = useFormContext<T>();

  return (
    <FormItem<T, K, InputProps, string> {...props}>
      <Input
        name={props.name.toString()}
        value={formState[props.name] as string}
        onChange={(e) => setValue(props.name, e.target.value as never)}
        {...props.componentProps}
      />
      <RenderFormErrors errorKeys={validationErrors?.[props.name]} />
    </FormItem>
  );
}

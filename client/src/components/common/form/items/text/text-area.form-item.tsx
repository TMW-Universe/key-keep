import { Input } from "antd";
import { TextAreaProps } from "antd/es/input";
import { FormItemOptions, useFormContext } from "react-handled-forms";
import FormItem from "react-handled-forms/dist/components/form-item";

export default function TextAreaFormItem<T extends object, K extends keyof T>(
  props: FormItemOptions<T, K, TextAreaProps, string>
) {
  const {
    form: { formState, setValue },
  } = useFormContext<T>();

  return (
    <FormItem<T, K, TextAreaProps, string> {...props}>
      <Input.TextArea
        name={props.name.toString()}
        value={formState[props.name] as string}
        onChange={(e) => setValue(props.name, e.target.value as never)}
        {...props.componentProps}
      />
    </FormItem>
  );
}
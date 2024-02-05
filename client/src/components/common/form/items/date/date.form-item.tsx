import { FormItemOptions, useFormContext } from "react-handled-forms";
import FormItem from "react-handled-forms/dist/components/form-item";
import DatePicker from "../../../../antd/date/date-picker.override";
import { PickerProps } from "antd/es/date-picker/generatePicker";

export default function DateFormItem<T extends object, K extends keyof T>(
  props: FormItemOptions<T, K, PickerProps<Date>, Date | undefined>
) {
  const {
    form: { formState, setValue },
  } = useFormContext<T>();

  return (
    <FormItem<T, K, PickerProps<Date>, Date | undefined> {...props}>
      <DatePicker
        name={props.name.toString()}
        value={formState[props.name] as Date}
        onChange={(date) => setValue(props.name, (date ?? undefined) as T[K])}
        {...props.componentProps}
      />
    </FormItem>
  );
}

import { ComponentProps } from "react";
import { Control, useController } from "react-hook-form";
import {
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlLabel,
  FormControlLabelText,
} from "@/components/ui/form-control";
import { AlertCircleIcon } from "@/components/ui/icon";
import { Input, InputField } from "@/components/ui/input";

type TextInputProps = {
  name: string;
  control: Control<any>;
  label?: string;
} & ComponentProps<typeof InputField>;

export default function TextInput({
  label,
  name,
  control,
  ...props
}: TextInputProps) {
  const { field, fieldState } = useController({ name, control });
  return (
    <FormControl isInvalid={fieldState.invalid}>
      {label && (
        <FormControlLabel className="mb-1">
          <FormControlLabelText>{label}</FormControlLabelText>
        </FormControlLabel>
      )}

      <Input>
        <InputField
          {...props}
          value={field.value}
          onChangeText={field.onChange}
        />
      </Input>

      <FormControlError>
        <FormControlErrorIcon size="sm" as={AlertCircleIcon} />
        <FormControlErrorText>
          {fieldState?.error?.message}
        </FormControlErrorText>
      </FormControlError>
    </FormControl>
  );
}

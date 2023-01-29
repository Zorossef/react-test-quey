import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { Field } from "formik";

interface InputWrapProps {
  name: string;
  type: string;
  handleValidateForm: (value: any, name: string) => void;
}

const InputWrap = ({ name, type, handleValidateForm }: InputWrapProps) => {
  function validateForm(value: any) {
    return handleValidateForm(value, name);
  }
  return (
    <Field name={name} validate={validateForm}>
      {({ field, form }: any) => {
        console.log("field", form.errors);
        return (
          <FormControl isInvalid={form.errors[name] && form.touched[name]}>
            <FormLabel textTransform={"capitalize"}>{name}</FormLabel>
            <Input {...field} type={type} placeholder={name} />
            <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
          </FormControl>
        );
      }}
    </Field>
  );
};

export default InputWrap;

import { View } from "react-native";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import TextInput from "@/components/inputs/text-input";
import { Button, ButtonText } from "@/components/ui/button";
import { HStack } from "@/components/ui/hstack";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { Toast, ToastTitle, useToast } from "@/components/ui/toast";
import { CloseIcon, Icon } from "@/components/ui/icon";
import { CheckIcon } from "lucide-react-native";
import { VStack } from "@/components/ui/vstack";
import { Pressable } from "@/components/ui/pressable";

const requiredFieldMessage = "The field is required";

export const registerSchema = z
  .object({
    email: z.string().email().trim().min(1, requiredFieldMessage),
    password: z.string().trim().min(1, requiredFieldMessage),
    confirmPassword: z.string().trim().min(1, requiredFieldMessage),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type RegisterModel = z.infer<typeof registerSchema>;

const initialValues: RegisterModel = {
  email: "",
  password: "",
  confirmPassword: "",
};

export default function FormPage() {
  const { control, handleSubmit, reset, getValues } = useForm<RegisterModel>({
    resolver: zodResolver(registerSchema),
    defaultValues: initialValues,
    mode: "onSubmit",
  });

  const toast = useToast();

  const submitForm = handleSubmit(() => {
    toast.show({
      placement: "top",
      render: ({ id }) => {
        const toastId = "toast-" + id;
        return (
          <Toast nativeID={toastId} className="bg-success-700">
            <Icon as={CheckIcon} className="mr-3 text-typography-0" />
            <VStack space="xs">
              <ToastTitle className="text-typography-50">
                User registered successfully
              </ToastTitle>
            </VStack>
            <Pressable onPress={() => toast.close(id)}>
              <Icon as={CloseIcon} className="text-typography-0" />
            </Pressable>
          </Toast>
        );
      },
    });
  });

  const resetForm = () => reset(initialValues);

  return (
    <View className="flex-1 items-center justify-center bg-background-0">
      <VStack className="w-3/4 rounded-lg border border-outline-300 p-4">
        <TextInput name="email" control={control} label="E-mail" />

        <TextInput
          name="password"
          control={control}
          label="Password"
          type="password"
        />

        <TextInput
          name="confirmPassword"
          control={control}
          label="Confirm Password"
          type="password"
        />

        <HStack space="sm" className="mt-2 justify-end">
          <Button variant="outline" onPress={resetForm}>
            <ButtonText>Reset</ButtonText>
          </Button>

          <Button onPress={submitForm}>
            <ButtonText>Save</ButtonText>
          </Button>
        </HStack>
      </VStack>

      <Box className="mt-5 rounded-lg border border-outline-300 p-5">
        <Text>{JSON.stringify(getValues(), null, 2)}</Text>
      </Box>
    </View>
  );
}

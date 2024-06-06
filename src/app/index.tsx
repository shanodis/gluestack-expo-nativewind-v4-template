import "../../global.css";
import { ScrollView } from "react-native";
import { Heading } from "@/components/ui/heading";
import { Box } from "@/components/ui/box";
import { HStack } from "@/components/ui/hstack";
import { VStack } from "@/components/ui/vstack";
import { Text } from "@/components/ui/text";
import { Center } from "@/components/ui/center";
import { Pressable } from "@/components/ui/pressable";

export default function AppPage() {
  return (
    <ScrollView className="bg-background-0">
      <Center className="py-5">
        <VStack space="2xl">
          <Heading>Box</Heading>
          <Box className="bg-info-500 p-5">
            <Text className="text-typography-0">This is the Box</Text>
          </Box>

          <Heading>Center</Heading>
          <Center className="h-[200px] w-[300px] bg-primary-500">
            <Pressable className="group flex h-20 justify-center bg-slate-300 px-3">
              <Text className="text-slate-800 group-active:text-info-500">
                Click!
              </Text>
            </Pressable>
          </Center>

          <Heading>HStack</Heading>
          <HStack space="md" reversed={false}>
            <Box className="h-20 w-20 bg-indigo-300" />
            <Box className="h-20 w-20 bg-indigo-400" />
            <Box className="h-20 w-20 bg-indigo-500" />
          </HStack>

          <Heading>VStack</Heading>
          <VStack space="md" reversed={false}>
            <Box className="h-20 w-20 bg-primary-300" />
            <Box className="h-20 w-20 bg-primary-400" />
            <Box className="h-20 w-20 bg-primary-500" />
          </VStack>
        </VStack>
      </Center>
    </ScrollView>
  );
}

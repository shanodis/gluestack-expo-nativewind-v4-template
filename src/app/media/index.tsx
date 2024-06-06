import { createIcon, Icon } from "@/components/ui/icon";
import { Path, Rect } from "react-native-svg";
import { View } from "react-native";
import { HStack } from "@/components/ui/hstack";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { CalculatorIcon } from "lucide-react-native";
import { Heading } from "@/components/ui/heading";
import { VStack } from "@/components/ui/vstack";
import { Image } from "@/components/ui/image";
import {
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarGroup,
  AvatarImage,
} from "@/components/ui/avatar";

const GluestackIcon = createIcon({
  viewBox: "0 0 32 32",
  path: (
    <>
      {/* Rect, Path is imported from 'react-native-svg' */}
      <Rect width="32" height="32" rx="2" fill="currentColor" />
      <Path
        d="M9.5 14.6642L15.9999 9.87633V12.1358L9.5 16.9236V14.6642Z"
        fill="white"
      />
      <Path
        d="M22.5 14.6642L16.0001 9.87639V12.1359L22.5 16.9237V14.6642Z"
        fill="white"
      />
      <Path
        d="M9.5 19.8641L15.9999 15.0763V17.3358L9.5 22.1236V19.8641Z"
        fill="white"
      />
      <Path
        d="M22.5 19.8642L16.0001 15.0764V17.3358L22.5 22.1237V19.8642Z"
        fill="white"
      />
    </>
  ),
});

const imageUris: string[] = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
];

export default function MediaPage() {
  return (
    <View className="flex-1 items-center justify-center bg-background-0">
      <VStack space="2xl">
        <Heading>Icons</Heading>
        <HStack space="4xl">
          <Box className="flex items-center">
            <Icon as={GluestackIcon} className="h-12 w-12" />
            <Text>Custom icon</Text>
          </Box>

          <Box className="flex items-center">
            <Icon as={CalculatorIcon} className="h-12 w-12" />
            <Text>Lucide icon</Text>
          </Box>
        </HStack>

        <Heading>Avatars</Heading>
        <AvatarGroup>
          {imageUris.map((uri, index) => (
            <Avatar size="md" key={index}>
              <AvatarFallbackText>JD</AvatarFallbackText>
              <AvatarImage source={{ uri }} />
              <AvatarBadge />
            </Avatar>
          ))}
        </AvatarGroup>

        <Heading>Images</Heading>
        <Image
          size="md"
          source={{
            uri: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          }}
          alt="image"
        />
      </VStack>
    </View>
  );
}

import { Tabs } from "expo-router";
import { Icon } from "@/components/ui/icon";
import { cn } from "@gluestack-ui/nativewind-utils/cn/index";
import { ComponentProps } from "react";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import {
  ImageIcon,
  LayoutGridIcon,
  LucideIcon,
  MoonIcon,
  SunIcon,
  TextCursorInputIcon,
} from "lucide-react-native";
import { useThemeContext } from "@/providers/theme-provider/theme-provider";
import { Box } from "@/components/ui/box";

type View = {
  name: string;
  title: string;
  icon: LucideIcon;
};

const tabScreens: View[] = [
  {
    name: "index",
    title: "Grid",
    icon: LayoutGridIcon,
  },
  {
    name: "form/index",
    title: "Form",
    icon: TextCursorInputIcon,
  },
  {
    name: "media/index",
    title: "Media",
    icon: ImageIcon,
  },
];

export default function ViewTabs() {
  const { theme, setTheme } = useThemeContext();

  const tabScreenOptions: ComponentProps<typeof Tabs>["screenOptions"] = {
    headerTitle: ({ children }) => <Heading>{children}</Heading>,
    headerBackground: () => <Box className="h-full bg-background-50" />,
    tabBarBackground: () => <Box className="h-full bg-background-50" />,
    tabBarLabel: ({ children, focused }) => (
      <Text
        className={cn(
          focused ? "font-bold text-typography-500" : "text-typography-400",
          "text-sm",
        )}
      >
        {children}
      </Text>
    ),
    headerRight: () => (
      <Button
        size="md"
        variant="link"
        className="me-5"
        onPress={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <Icon as={theme === "dark" ? SunIcon : MoonIcon} />
      </Button>
    ),
  };

  return (
    <Tabs screenOptions={tabScreenOptions}>
      {tabScreens.map(({ title, name, icon }) => (
        <Tabs.Screen
          key={name}
          name={name}
          options={{
            title,
            tabBarIcon: ({ focused }) => (
              <Icon
                as={icon}
                className={cn(
                  focused ? "text-typography-500" : "text-typography-400",
                  "h-6 w-6",
                )}
              />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}

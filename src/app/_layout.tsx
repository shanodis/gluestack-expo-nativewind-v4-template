import { useState } from "react";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import ViewTabs from "@/components/view-tabs/view-tabs";
import ThemeProvider from "@/providers/theme-provider/theme-provider";

export default function AppLayout() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  return (
    <GluestackUIProvider mode={theme}>
      <ThemeProvider theme={theme} setTheme={setTheme}>
        <ViewTabs />
      </ThemeProvider>
    </GluestackUIProvider>
  );
}

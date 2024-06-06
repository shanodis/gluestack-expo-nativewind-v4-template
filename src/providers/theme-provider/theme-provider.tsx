import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
} from "react";

type ThemeContextType = {
  theme: "light" | "dark";
  setTheme: Dispatch<SetStateAction<"light" | "dark">>;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};

type ThemeProvider = {
  children: ReactNode;
  theme: ThemeContextType["theme"];
  setTheme: Dispatch<SetStateAction<ThemeContextType["theme"]>>;
};

export default function ThemeProvider({
  theme,
  setTheme,
  children,
}: ThemeProvider) {
  return (
    <ThemeContext.Provider value={{ setTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
}

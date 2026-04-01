import { useColorScheme } from "react-native";
import { Theme, AppTheme } from "@/constants/theme";

export function useTheme(): AppTheme {
  const scheme = useColorScheme();
  return Theme[scheme ?? 'light']
}

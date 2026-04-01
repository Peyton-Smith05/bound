import { useTheme } from "@/hooks/useTheme";
import { Text, TextProps } from "react-native";

export default function HeaderText({ children, ...props }: TextProps) {
  const theme = useTheme();

  return (
    <Text
      {...props}
      style={[
        {
          fontFamily: theme.header.font,
          fontSize: theme.header.fontSize,
          color: theme.header.color,
        },
        props.style,
      ]}
    >
      {children}
    </Text>
  );
}

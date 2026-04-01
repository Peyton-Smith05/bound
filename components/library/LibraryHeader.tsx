import SearchIcon from "@/components/icons/SearchIcon";
import HeaderText from "@/components/text/HeaderText";
import { AppTheme } from "@/constants/theme";
import { useTheme } from "@/hooks/useTheme";
import { Pressable, StyleSheet, View } from "react-native";

interface LibraryHeaderProps {
  onSearchPress: () => void;
}

export default function LibraryHeader({ onSearchPress }: LibraryHeaderProps) {
  const theme = useTheme();

  return (
    <View style={styles(theme).container}>
      <View>
        <HeaderText>Library</HeaderText>
      </View>
      <Pressable
        style={styles(theme).searchButton}
        onPress={onSearchPress}
      >
        <SearchIcon color={theme.tanButton.color} />
      </Pressable>
    </View>
  );
}

const styles = (theme: AppTheme) => StyleSheet.create({
  container: {
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchButton: {
    backgroundColor: theme.tanButton.fill,
    borderRadius: theme.tanButton.borderRadius,
    paddingVertical: 12,
    alignItems: 'center',
    width: 40,
    height: 40,
  }
});


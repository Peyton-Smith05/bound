import { StyleSheet, Text, Pressable, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from 'expo-router';
import { useTheme } from "@/hooks/useTheme";
import { AppTheme } from "@/constants/theme";
import LibraryHeader from "@/components/library/LibraryHeader";
import LibraryStats from "@/components/library/LibraryStats";

export default function Index() {
  const theme = useTheme();

  return (
    <SafeAreaView style={styles(theme).safe}>
      <LibraryHeader onSearchPress={() => console.log('search Pressed')} />
      <LibraryStats />
      <Pressable
        onPress={() => router.push('/library/quotes')}
        style={styles(theme).pressable}
      >
        <Text style={styles(theme).button}>
          Quotes
        </Text>
      </Pressable>
      <Pressable
        onPress={() => router.push('/library/reviews')}
        style={styles(theme).pressable}
      >
        <Text style={styles(theme).button}>
          Reviews
        </Text>
      </Pressable>
      <Pressable
        onPress={() => router.push('/library/lists')}
        style={styles(theme).pressable}
      >
        <Text style={styles(theme).button}>
          Lists
        </Text>
      </Pressable>
      <Pressable
        onPress={() => router.push('/library/notes')}
        style={styles(theme).pressable}
      >
        <Text style={styles(theme).button}>
          Notes
        </Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = (theme: AppTheme) => StyleSheet.create({
  safe: {
    flex: 1,
  },
  text: {
    fontFamily: 'DMSerifText-Italic',
    fontSize: 48,
  },
  pressable: {
    backgroundColor: '#f5f2f8',
  },
  button: {
    fontFamily: 'Inter-Regular',
    fontSize: 24,
  },

});

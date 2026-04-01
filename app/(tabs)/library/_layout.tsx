import { Stack } from "expo-router";

export default function LibraryLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="quotes" />
      <Stack.Screen name="reviews" />
      <Stack.Screen name="lists" />
      <Stack.Screen name="notes" />
    </Stack>
  );
}


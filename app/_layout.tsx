import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  const [loaded, error] = useFonts({
    'DMSerifText-Regular': require('@/assets/fonts/DMSerifText-Regular.ttf'),
    'DMSerifText-Italic': require('@/assets/fonts/DMSerifText-Italic.ttf'),
    'Inter-Regular': require('@/assets/fonts/Inter18ptRegular.ttf'),
    'Inter-Bold': require('@/assets/fonts/Inter18ptBold.ttf'),
    'Inter-ExtraBold': require('@/assets/fonts/Inter18ptExtraBold.ttf'),
    'Inter-SemiBold': require('@/assets/fonts/Inter18ptSemiBold.ttf'),
    'Inter-Medium': require('@/assets/fonts/Inter18ptMedium.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="post/[postId]" />
      <Stack.Screen name="book/[bookId]" />
      <Stack.Screen name="quote/[quoteId]" />
      <Stack.Screen name="review/[reviewId]" />
      <Stack.Screen name="list/[listId]" />
      <Stack.Screen name="note/[noteId]" />
      <Stack.Screen name="user/[userId]" />
      <Stack.Screen name="author/[authorId]" />
    </Stack>
  )
}

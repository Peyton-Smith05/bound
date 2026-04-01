import { useFonts } from "expo-font";
import { Tabs }    from "expo-router";

export default function RootLayout() {

  return (
    <Tabs>
      <Tabs.Screen 
        name="index"
        options={{
          title: 'Feed',
          headerShown: false,
          // tabBarIcon: ({ color }) => (
          //   // icon here
          // ),
        }}
      />
      <Tabs.Screen 
        name="search"
        options={{
          title: 'Search',
          headerShown: false,
          // tabBarIcon: ({ color }) => (
          //   // icon here
          // ),
        }}
      />
      <Tabs.Screen 
        name="library"
        options={{
          title: 'Library',
          headerShown: false,
          // tabBarIcon: ({ color }) => (
          //   // icon here
          // ),
        }}
      />
      <Tabs.Screen 
        name="profile/index"
        options={{
          title: 'Profile',
          headerShown: false,
          // tabBarIcon: ({ color }) => (
          //   // icon here
          // ),
        }}
      />
    </Tabs>
  );
}

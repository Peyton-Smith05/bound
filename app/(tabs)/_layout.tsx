import { useFonts } from "expo-font";
import { Tabs }    from "expo-router";

export default function RootLayout() {

  return (
    <Tabs>
      <Tabs.Screen 
        name="index"
        options={{
          title: 'Feed'
          // tabBarIcon: ({ color }) => (
          //   // icon here
          // ),
        }}
      />
      <Tabs.Screen 
        name="search"
        options={{
          title: 'Search'
          // tabBarIcon: ({ color }) => (
          //   // icon here
          // ),
        }}
      />
      <Tabs.Screen 
        name="library"
        options={{
          title: 'Library'
          // tabBarIcon: ({ color }) => (
          //   // icon here
          // ),
        }}
      />
      <Tabs.Screen 
        name="profile/index"
        options={{
          title: 'Profile'
          // tabBarIcon: ({ color }) => (
          //   // icon here
          // ),
        }}
      />
    </Tabs>
  );
}

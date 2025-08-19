import { Tabs } from "expo-router";
import { Text } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#000",
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: () => <Text>🏠</Text>,
        }}
      />
      <Tabs.Screen
        name="friends"
        options={{
          title: "Friends",
          tabBarIcon: () => <Text>👥</Text>,
        }}
      />
      <Tabs.Screen
        name="camera"
        options={{
          title: "Camera",
          tabBarIcon: () => <Text>👥</Text>,
        }}
      />{" "}
      <Tabs.Screen
        name="inbox"
        options={{
          title: "Inbox",
          tabBarIcon: () => <Text>👥</Text>,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: () => <Text>👥</Text>,
        }}
      />
    </Tabs>
  );
}

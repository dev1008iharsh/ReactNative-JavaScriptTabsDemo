import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        // Header
        headerShown: true,
        headerTitleAlign: "center",

        headerStyle: {
          backgroundColor: "#2563EB",
        },

        headerTintColor: "#FFFFFF",

        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 20,
        },

        headerShadowVisible: false,

        // Tab Bar
        tabBarActiveTintColor: "#2563EB",
        tabBarInactiveTintColor: "#8E8E93",

        tabBarStyle: {
          height: 70,
          paddingBottom: 8,
          paddingTop: 8,
        },

        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",

          tabBarLabel: "Home",

          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",

          tabBarLabel: "Profile",

          tabBarBadge: 2,

          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",

          tabBarLabel: "Settings",

          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="cog" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

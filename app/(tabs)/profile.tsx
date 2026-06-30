import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

// Profile Screen
export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      {/* Profile Icon */}
      <FontAwesome name="user-circle" size={80} color="#7C3AED" />

      {/* Title */}
      <Text style={styles.title}>Profile Screen</Text>

      {/* Subtitle */}
      <Text style={styles.subtitle}>User Information</Text>

      {/* Profile Card */}
      <View style={styles.card}>
        <Text style={styles.label}>Name</Text>

        <Text style={styles.value}>Harsh</Text>

        <Text style={styles.label}>Role</Text>

        <Text style={styles.value}>React Native Developer</Text>

        <Text style={styles.label}>Framework</Text>

        <Text style={styles.value}>Expo Router</Text>
      </View>

      <Link href="/settings" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Open Settings</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F3FF",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  title: {
    marginTop: 15,
    fontSize: 30,
    fontWeight: "bold",
  },

  subtitle: {
    marginTop: 8,
    fontSize: 18,
    color: "#666",
  },

  card: {
    width: "100%",
    backgroundColor: "#FFF",
    padding: 20,
    marginTop: 30,
    borderRadius: 15,
    elevation: 3,
  },

  label: {
    fontSize: 15,
    color: "#666",
    marginTop: 10,
  },

  value: {
    fontSize: 18,
    fontWeight: "bold",
  },

  button: {
    marginTop: 30,
    backgroundColor: "#7C3AED",
    paddingHorizontal: 35,
    paddingVertical: 14,
    borderRadius: 10,
  },

  buttonText: {
    color: "#FFF",
    fontWeight: "600",
    fontSize: 16,
  },
});

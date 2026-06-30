import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

// Settings Screen
export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      {/* Settings Icon */}
      <FontAwesome name="cog" size={80} color="#DC2626" />

      {/* Title */}
      <Text style={styles.title}>Settings Screen</Text>

      {/* Subtitle */}
      <Text style={styles.subtitle}>Configure your application settings</Text>

      {/* Settings Card */}
      <View style={styles.card}>
        <Text style={styles.option}>🔔 Notifications</Text>

        <Text style={styles.option}>🌙 Dark Mode</Text>

        <Text style={styles.option}>🔒 Privacy</Text>

        <Text style={styles.option}>🌐 Language</Text>
      </View>

      {/* Navigate Back */}
      <Link href="/" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Back To Home</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEE2E2",
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
    textAlign: "center",
  },

  card: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    marginTop: 30,
    padding: 20,
    borderRadius: 15,
    elevation: 3,
  },

  option: {
    fontSize: 18,
    marginVertical: 10,
  },

  button: {
    marginTop: 30,
    backgroundColor: "#DC2626",
    paddingHorizontal: 35,
    paddingVertical: 14,
    borderRadius: 10,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});

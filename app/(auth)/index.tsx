import { router } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const DEMO_EMAIL = "harsh@gmail.com";
const DEMO_PASSWORD = "harsh12345";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateEmail = (value: string) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    return emailRegex.test(value);
  };

  const handleLogin = () => {
    Keyboard.dismiss();

    setEmailError("");
    setPasswordError("");

    let isValid = true;

    if (email.trim() === "") {
      setEmailError("Email address is required.");
      isValid = false;
    } else if (!validateEmail(email.trim())) {
      setEmailError("Please enter a valid email address.");
      isValid = false;
    }

    if (password.trim() === "") {
      setPasswordError("Password is required.");
      isValid = false;
    }

    if (!isValid) return;

    if (
      email.trim().toLowerCase() === DEMO_EMAIL &&
      password === DEMO_PASSWORD
    ) {
      router.replace("/(tabs)");
      return;
    }

    Alert.alert("Login Failed", "Invalid email address or password.");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
          <View style={styles.card}>
            <Text style={styles.title}>Welcome Back 👋</Text>

            <Text style={styles.subtitle}>
              Login to continue using the application.
            </Text>

            <Text style={styles.label}>Email Address</Text>

            <TextInput
              style={styles.input}
              placeholder="Enter email address"
              placeholderTextColor="#999"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              value={email}
              onChangeText={setEmail}
            />

            {!!emailError && <Text style={styles.error}>{emailError}</Text>}

            <Text style={[styles.label, { marginTop: 18 }]}>Password</Text>

            <TextInput
              style={styles.input}
              placeholder="Enter password"
              placeholderTextColor="#999"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />

            {!!passwordError && (
              <Text style={styles.error}>{passwordError}</Text>
            )}

            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.8}
              onPress={handleLogin}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <View style={styles.demoContainer}>
              <Text style={styles.demoTitle}>Demo Login Credentials</Text>

              <Text style={styles.demoText}>Email: {DEMO_EMAIL}</Text>

              <Text style={styles.demoText}>Password: {DEMO_PASSWORD}</Text>

              <Text style={styles.contactText}>
                Contact Developer Now: dev.iharsh1008@gmail.com
              </Text>
            </View>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#EEF4FF",
  },

  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 24,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 8,
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#1E3A8A",
    textAlign: "center",
  },

  subtitle: {
    marginTop: 8,
    fontSize: 15,
    color: "#666",
    textAlign: "center",
    marginBottom: 30,
    lineHeight: 22,
  },

  label: {
    fontSize: 15,
    fontWeight: "600",
    color: "#222",
    marginBottom: 8,
  },

  input: {
    height: 54,
    borderWidth: 1,
    borderColor: "#D8D8D8",
    borderRadius: 12,
    paddingHorizontal: 16,
    backgroundColor: "#FAFAFA",
    fontSize: 16,
  },

  error: {
    color: "#DC2626",
    marginTop: 6,
    fontSize: 13,
  },

  button: {
    backgroundColor: "#2563EB",
    height: 56,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 28,
  },

  buttonText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 17,
  },

  demoContainer: {
    marginTop: 32,
    backgroundColor: "#F5F7FF",
    padding: 16,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#D9E4FF",
  },

  demoTitle: {
    fontWeight: "700",
    color: "#1E3A8A",
    marginBottom: 10,
    fontSize: 15,
  },

  demoText: {
    fontSize: 15,
    color: "#444",
    marginTop: 4,
  },
  contactText: {
    textAlign: "center",
    fontSize: 15,
    color: "#444",
    marginTop: 14,
    backgroundColor: "#E0F2FE",
    padding: 6,
    borderRadius: 8,
  },
});

import { useEffect } from "react";

import { router } from "expo-router";

export default function AppStart() {
  useEffect(() => {
    console.log("AppStart: Redirecting to Login Screen");
    router.replace("/(auth)");
  }, []);

  return null;
}

import { Stack } from "expo-router";

export default function RootLayout() {
  alert("asdf");
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}

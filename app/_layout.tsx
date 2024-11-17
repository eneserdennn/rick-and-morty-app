import { Slot, Stack } from "expo-router";

import "../global.css";
import TanStackQueryClientProvider from "@/providers/TanStackQueryClientProvider";

const MainLayout = () => {
  return <Slot />;
};

export default function RootLayout() {
  return (
    <TanStackQueryClientProvider>
      <MainLayout />
    </TanStackQueryClientProvider>
  );
}

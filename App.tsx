import React from 'react';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';

import { AuthProvider } from './src/hooks/auth';

import { Home } from './src/screens/Home';

export default function App() {
  const [fonts_loaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fonts_loaded) {
    return <AppLoading />;
  }

  return (
    <AuthProvider>
      <StatusBar translucent style="light" backgroundColor="transparent" />
      <Home />
    </AuthProvider>
  );
}

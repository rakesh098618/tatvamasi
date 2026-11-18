import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { COLORS } from '../constants/theme';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { LanguageProvider } from '../context/LanguageContext';
import { LanguageModal } from '../components/LanguageModal';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <LanguageProvider>
        <StatusBar style="light" />
        <Stack
          screenOptions={{
            headerStyle: {
              backgroundColor: COLORS.background,
            },
            headerTintColor: COLORS.textGold,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            contentStyle: {
              backgroundColor: COLORS.background,
            },
          }}
        >
          <Stack.Screen 
            name="index" 
            options={{ 
              headerShown: false 
            }} 
          />
          <Stack.Screen 
            name="(tabs)" 
            options={{ 
              headerShown: false,
              animation: 'none',
            }} 
          />
          <Stack.Screen 
            name="song/[id]" 
            options={{ 
              title: 'పాటలు',
              headerBackTitle: 'వెనుకకు',
            }} 
          />
          <Stack.Screen 
            name="pooja/[id]" 
            options={{ 
              title: 'పూజా విధానం',
              headerBackTitle: 'వెనుకకు',
            }} 
          />
        </Stack>
        <LanguageModal />
      </LanguageProvider>
    </SafeAreaProvider>
  );
}

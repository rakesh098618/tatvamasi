import React from 'react';
import { Platform } from 'react-native';
import { Tabs } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS } from '../../constants/theme';
import { Sparkles, HeartHandshake, UserCheck, Music } from 'lucide-react-native';
import { useLanguage } from '../../context/LanguageContext';

export default function TabLayout() {
  const insets = useSafeAreaInsets();
  const { t } = useLanguage();
  const bottomPadding = insets.bottom > 0 ? insets.bottom : (Platform.OS === 'android' ? 10 : 8);
  const tabHeight = 58 + bottomPadding;

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.surface,
          borderTopColor: COLORS.surfaceBorder,
          borderTopWidth: 1,
          height: tabHeight,
          paddingBottom: bottomPadding,
          paddingTop: 6,
        },
        tabBarActiveTintColor: COLORS.textGold,
        tabBarInactiveTintColor: COLORS.textMuted,
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '600',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: t('tabPooja'),
          tabBarIcon: ({ color, size }) => (
            <Sparkles color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="japa"
        options={{
          title: t('tabJapa'),
          tabBarIcon: ({ color, size }) => (
            <HeartHandshake color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="bhajans"
        options={{
          title: t('tabSongs'),
          tabBarIcon: ({ color, size }) => (
            <Music color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="guru"
        options={{
          title: t('tabGuru'),
          tabBarIcon: ({ color, size }) => (
            <UserCheck color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}

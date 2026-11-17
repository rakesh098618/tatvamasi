import React from 'react';
import { Platform } from 'react-native';
import { Tabs } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS } from '../../constants/theme';
import { Sparkles, HeartHandshake, UserCheck, Flame } from 'lucide-react-native';

export default function TabLayout() {
  const insets = useSafeAreaInsets();
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
          title: 'నిత్య పూజ',
          tabBarIcon: ({ color, size }) => (
            <Sparkles color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="japa"
        options={{
          title: 'శరణు ఘోష',
          tabBarIcon: ({ color, size }) => (
            <HeartHandshake color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="bhajans"
        options={{
          title: 'అష్టోత్తరాలు',
          tabBarIcon: ({ color, size }) => (
            <Flame color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="guru"
        options={{
          title: 'గురుస్వామి',
          tabBarIcon: ({ color, size }) => (
            <UserCheck color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}


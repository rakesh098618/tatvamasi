import React from 'react';
import { Platform } from 'react-native';
import { Tabs } from 'expo-router';
import { COLORS } from '../../constants/theme';
import { Sparkles, HeartHandshake, Music, UserCheck } from 'lucide-react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.surface,
          borderTopColor: COLORS.surfaceBorder,
          borderTopWidth: 1,
          height: Platform.OS === 'android' ? 70 : 64,
          paddingBottom: Platform.OS === 'android' ? 12 : 8,
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
          title: 'హరివరాసనం',
          tabBarIcon: ({ color, size }) => (
            <Music color={color} size={size} />
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


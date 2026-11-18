import { Platform } from 'react-native';

export const COLORS = {
  // Primary Spiritual Saffron & Gold
  primary: '#FF8C00', // Deep Saffron / Bhagwa
  primaryDark: '#D97706',
  primaryLight: '#FFB84D',
  gold: '#D4AF37', // Temple Gold
  goldLight: '#F3E5AB',
  goldDark: '#AA820A',

  // Divine Dark Backgrounds
  background: '#120B05', // Deep Sacred Noir
  surface: '#1E140A',
  surfaceLight: '#2D1F12',
  surfaceBorder: '#45301D',

  // Text colors
  textPrimary: '#FFF8F0',
  textSecondary: '#D6C7B7',
  textMuted: '#9B8B7D',
  textGold: '#F5C542',

  // Status & Accents
  accentGreen: '#10B981',
  accentRed: '#EF4444',
  flameOrange: '#F97316',
};

export const FONTS = {
  // Urbanist - Premium, Sophisticated & Modern Font Family for English
  heading: Platform.select({
    ios: 'Urbanist-Bold',
    android: 'Urbanist-Bold',
    default: 'Urbanist-Bold',
  }),

  subheading: Platform.select({
    ios: 'Urbanist-SemiBold',
    android: 'Urbanist-SemiBold',
    default: 'Urbanist-SemiBold',
  }),

  medium: Platform.select({
    ios: 'Urbanist-Medium',
    android: 'Urbanist-Medium',
    default: 'Urbanist-Medium',
  }),

  regular: Platform.select({
    ios: 'Urbanist-Regular',
    android: 'Urbanist-Regular',
    default: 'Urbanist-Regular',
  }),

  // Devotional verses & transliteration in Urbanist Medium
  devotionalSerif: Platform.select({
    ios: 'Urbanist-Medium',
    android: 'Urbanist-Medium',
    default: 'Urbanist-Medium',
  }),

  uiMedium: Platform.select({
    ios: 'Urbanist-SemiBold',
    android: 'Urbanist-SemiBold',
    default: 'Urbanist-SemiBold',
  }),

  uiRegular: Platform.select({
    ios: 'Urbanist-Regular',
    android: 'Urbanist-Regular',
    default: 'Urbanist-Regular',
  }),
};

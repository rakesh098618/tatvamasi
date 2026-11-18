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
  // Poppins - Premium Modern & Attractive Font Family for English
  heading: Platform.select({
    ios: 'Poppins-Bold',
    android: 'Poppins-Bold',
    default: 'Poppins-Bold',
  }),

  subheading: Platform.select({
    ios: 'Poppins-SemiBold',
    android: 'Poppins-SemiBold',
    default: 'Poppins-SemiBold',
  }),

  medium: Platform.select({
    ios: 'Poppins-Medium',
    android: 'Poppins-Medium',
    default: 'Poppins-Medium',
  }),

  regular: Platform.select({
    ios: 'Poppins-Regular',
    android: 'Poppins-Regular',
    default: 'Poppins-Regular',
  }),

  // Devotional verses & transliteration in Poppins Medium
  devotionalSerif: Platform.select({
    ios: 'Poppins-Medium',
    android: 'Poppins-Medium',
    default: 'Poppins-Medium',
  }),

  uiMedium: Platform.select({
    ios: 'Poppins-SemiBold',
    android: 'Poppins-SemiBold',
    default: 'Poppins-SemiBold',
  }),

  uiRegular: Platform.select({
    ios: 'Poppins-Regular',
    android: 'Poppins-Regular',
    default: 'Poppins-Regular',
  }),
};

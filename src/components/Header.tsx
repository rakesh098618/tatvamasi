import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { COLORS, FONTS } from '../constants/theme';
import { Sparkles, Globe } from 'lucide-react-native';
import { useLanguage } from '../context/LanguageContext';

interface HeaderProps {
  title: string;
  subtitle?: string;
  rightAction?: React.ReactNode;
  showDeities?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ 
  title, 
  subtitle, 
  rightAction, 
  showDeities = true 
}) => {
  const { language, t, openLanguageModal } = useLanguage();

  return (
    <View style={styles.container}>
      {/* 1. Divine Deities Triad Bar (Left: Vinayakudu, Center: Ayyappa Swami, Right: Subrahmanya Swami) */}
      {showDeities && (
        <View style={styles.deityBar}>
          {/* Left: Vinayakudu */}
          <View style={styles.deityItem}>
            <View style={styles.deityCircle}>
              <Image 
                source={require('../../assets/deity_ganesha.png')} 
                style={styles.deityImage}
                resizeMode="cover"
              />
            </View>
            <Text style={styles.deityLabel}>{t('ganapathi')}</Text>
          </View>

          {/* Center / Middle: Lord Ayyappa Swami */}
          <View style={[styles.deityItem, styles.deityItemCenter]}>
            <View style={[styles.deityCircle, styles.deityCircleCenter]}>
              <Image 
                source={require('../../assets/deity_ayyappa.png')} 
                style={[styles.deityImage, styles.deityImageCenter]}
                resizeMode="cover"
              />
            </View>
            <Text style={[styles.deityLabel, styles.deityLabelCenter]}>{t('ayyappa')}</Text>
          </View>

          {/* Right: Subrahmanya Swami */}
          <View style={styles.deityItem}>
            <View style={styles.deityCircle}>
              <Image 
                source={require('../../assets/deity_subrahmanya.png')} 
                style={styles.deityImage}
                resizeMode="cover"
              />
            </View>
            <Text style={styles.deityLabel}>{t('subrahmanya')}</Text>
          </View>
        </View>
      )}

      {/* 2. Main Title Row */}
      <View style={styles.mainRow}>
        <View style={styles.textContainer}>
          <View style={styles.titleRow}>
            <Text 
              style={[
                styles.title,
                { fontFamily: language === 'en' ? FONTS.heading : undefined }
              ]}
            >
              {title}
            </Text>
            <Sparkles size={16} color={COLORS.gold} style={styles.icon} />
          </View>
          {subtitle && (
            <Text 
              style={[
                styles.subtitle,
                { fontFamily: language === 'en' ? FONTS.regular : undefined }
              ]}
            >
              {subtitle}
            </Text>
          )}
        </View>

        {/* Right Action (Custom or Quick Language Switcher) */}
        {rightAction ? (
          <View style={styles.rightAction}>{rightAction}</View>
        ) : (
          <TouchableOpacity 
            style={styles.langPill} 
            onPress={openLanguageModal}
            activeOpacity={0.7}
          >
            <Globe size={13} color={COLORS.gold} />
            <Text style={styles.langPillText}>{language === 'te' ? 'EN' : 'తెలుగు'}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 12,
    backgroundColor: COLORS.background,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.surfaceBorder,
  },
  deityBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#181008',
    borderRadius: 16,
    paddingVertical: 7,
    paddingHorizontal: 16,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'rgba(212, 175, 55, 0.28)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.35,
    shadowRadius: 4,
    elevation: 3,
  },
  deityItem: {
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 64,
  },
  deityItemCenter: {
    minWidth: 84,
  },
  deityCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: COLORS.gold,
    overflow: 'hidden',
    backgroundColor: '#0F0B06',
    shadowColor: COLORS.gold,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
  deityCircleCenter: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#FFE29A',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  deityImage: {
    width: '100%',
    height: '100%',
  },
  deityImageCenter: {
    width: '100%',
    height: '100%',
  },
  deityLabel: {
    fontSize: 10.5,
    fontWeight: '700',
    color: COLORS.textSecondary,
    marginTop: 4,
    letterSpacing: 0.2,
  },
  deityLabelCenter: {
    fontSize: 11.5,
    color: '#FFE29A',
    fontWeight: 'bold',
  },
  mainRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFE29A',
    letterSpacing: 0.5,
  },
  icon: {
    marginLeft: 7,
  },
  subtitle: {
    fontSize: 12.5,
    color: '#D4C4B2',
    marginTop: 2,
    letterSpacing: 0.2,
  },
  rightAction: {
    marginLeft: 12,
  },
  langPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(212, 175, 55, 0.12)',
    borderWidth: 1,
    borderColor: 'rgba(212, 175, 55, 0.4)',
    borderRadius: 14,
    paddingHorizontal: 9,
    paddingVertical: 5,
    gap: 5,
    marginLeft: 10,
  },
  langPillText: {
    color: COLORS.gold,
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 0.3,
  },
});

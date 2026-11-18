import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Modal, 
  TouchableOpacity 
} from 'react-native';
import { useLanguage } from '../context/LanguageContext';
import { COLORS } from '../constants/theme';
import { Globe, Check, Sparkles, X } from 'lucide-react-native';

export const LanguageModal: React.FC = () => {
  const { 
    language, 
    setLanguage, 
    showLanguageModal, 
    closeLanguageModal, 
    isFirstLaunch,
    completeFirstLaunch,
    t 
  } = useLanguage();

  const handleSelect = async (selected: 'te' | 'en') => {
    if (isFirstLaunch) {
      await completeFirstLaunch(selected);
    } else {
      await setLanguage(selected);
      closeLanguageModal();
    }
  };

  return (
    <Modal
      visible={showLanguageModal}
      transparent={true}
      animationType="fade"
      onRequestClose={() => {
        if (!isFirstLaunch) closeLanguageModal();
      }}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.headerTitleRow}>
              <Globe size={20} color={COLORS.gold} />
              <Text style={styles.title}>{t('selectLanguage')}</Text>
            </View>
            {!isFirstLaunch && (
              <TouchableOpacity 
                style={styles.closeBtn} 
                onPress={closeLanguageModal}
                hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
              >
                <X size={20} color={COLORS.textMuted} />
              </TouchableOpacity>
            )}
          </View>

          <Text style={styles.subtitle}>
            {isFirstLaunch ? t('firstLaunchPrompt') : t('selectLanguageSubtitle')}
          </Text>

          {/* Language Options */}
          <View style={styles.optionsList}>
            {/* 1. Telugu */}
            <TouchableOpacity
              style={[
                styles.optionCard,
                language === 'te' && styles.optionCardActive
              ]}
              onPress={() => handleSelect('te')}
              activeOpacity={0.8}
            >
              <View style={styles.optionLeft}>
                <View style={[styles.checkCircle, language === 'te' && styles.checkCircleActive]}>
                  {language === 'te' ? (
                    <Check size={16} color="#000" strokeWidth={3} />
                  ) : (
                    <View style={styles.uncheckDot} />
                  )}
                </View>
                <View style={styles.optionTextCol}>
                  <Text style={[styles.langName, language === 'te' && styles.langNameActive]}>
                    తెలుగు (Telugu)
                  </Text>
                  <Text style={styles.langDesc}>
                    {t('teluguDesc')}
                  </Text>
                </View>
              </View>
              <View style={[styles.badge, language === 'te' ? styles.badgeActive : styles.badgeInactive]}>
                <Text style={[styles.badgeText, language === 'te' ? styles.badgeTextActive : styles.badgeTextInactive]}>
                  {language === 'te' ? t('active') : t('select')}
                </Text>
              </View>
            </TouchableOpacity>

            {/* 2. English */}
            <TouchableOpacity
              style={[
                styles.optionCard,
                language === 'en' && styles.optionCardActive
              ]}
              onPress={() => handleSelect('en')}
              activeOpacity={0.8}
            >
              <View style={styles.optionLeft}>
                <View style={[styles.checkCircle, language === 'en' && styles.checkCircleActive]}>
                  {language === 'en' ? (
                    <Check size={16} color="#000" strokeWidth={3} />
                  ) : (
                    <View style={styles.uncheckDot} />
                  )}
                </View>
                <View style={styles.optionTextCol}>
                  <Text style={[styles.langName, language === 'en' && styles.langNameActive]}>
                    English (English)
                  </Text>
                  <Text style={styles.langDesc}>
                    {t('englishDesc')}
                  </Text>
                </View>
              </View>
              <View style={[styles.badge, language === 'en' ? styles.badgeActive : styles.badgeInactive]}>
                <Text style={[styles.badgeText, language === 'en' ? styles.badgeTextActive : styles.badgeTextInactive]}>
                  {language === 'en' ? t('active') : t('select')}
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* Footer note */}
          <View style={styles.footerNoteRow}>
            <Sparkles size={12} color={COLORS.gold} />
            <Text style={styles.footerNoteText}>
              {t('changeLanguageAnytime')}
            </Text>
          </View>

          {!isFirstLaunch && (
            <TouchableOpacity 
              style={styles.doneBtn} 
              onPress={closeLanguageModal}
              activeOpacity={0.8}
            >
              <Text style={styles.doneBtnText}>{t('close')}</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.82)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  modalContent: {
    width: '100%',
    maxWidth: 440,
    backgroundColor: COLORS.surface,
    borderRadius: 22,
    borderWidth: 1.5,
    borderColor: COLORS.gold,
    padding: 20,
    shadowColor: COLORS.gold,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  headerTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.textGold,
    letterSpacing: 0.3,
  },
  closeBtn: {
    padding: 4,
  },
  subtitle: {
    fontSize: 12.5,
    color: COLORS.textSecondary,
    marginBottom: 18,
    lineHeight: 18,
  },
  optionsList: {
    gap: 12,
    marginBottom: 16,
  },
  optionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
    paddingHorizontal: 14,
    backgroundColor: COLORS.background,
    borderRadius: 14,
    borderWidth: 1.2,
    borderColor: COLORS.surfaceBorder,
  },
  optionCardActive: {
    borderColor: COLORS.gold,
    backgroundColor: 'rgba(212, 175, 55, 0.12)',
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
    paddingRight: 8,
  },
  checkCircle: {
    width: 26,
    height: 26,
    borderRadius: 13,
    borderWidth: 1.5,
    borderColor: COLORS.surfaceBorder,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkCircleActive: {
    borderColor: COLORS.gold,
    backgroundColor: COLORS.gold,
  },
  uncheckDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'transparent',
  },
  optionTextCol: {
    flex: 1,
  },
  langName: {
    fontSize: 15,
    fontWeight: '700',
    color: COLORS.textPrimary,
    marginBottom: 2,
  },
  langNameActive: {
    color: '#FFE29A',
  },
  langDesc: {
    fontSize: 11.5,
    color: COLORS.textMuted,
    lineHeight: 16,
  },
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  badgeActive: {
    backgroundColor: 'rgba(34, 197, 94, 0.2)',
    borderWidth: 1,
    borderColor: '#22C55E',
  },
  badgeInactive: {
    backgroundColor: 'rgba(212, 175, 55, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(212, 175, 55, 0.25)',
  },
  badgeText: {
    fontSize: 11,
    fontWeight: '700',
  },
  badgeTextActive: {
    color: '#4ADE80',
  },
  badgeTextInactive: {
    color: COLORS.textGold,
  },
  footerNoteRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    marginBottom: 14,
    paddingHorizontal: 8,
  },
  footerNoteText: {
    fontSize: 11,
    color: COLORS.textMuted,
    textAlign: 'center',
  },
  doneBtn: {
    backgroundColor: COLORS.primaryDark,
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.gold,
  },
  doneBtnText: {
    color: '#FFF',
    fontSize: 14.5,
    fontWeight: 'bold',
  },
});

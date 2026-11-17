import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList, 
  TouchableOpacity, 
  Modal
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { POOJA_CATEGORIES } from '../../data/poojaData';
import { PoojaCard } from '../../components/PoojaCard';
import { Header } from '../../components/Header';
import { COLORS } from '../../constants/theme';
import { Sparkles, Globe, Check } from 'lucide-react-native';

const APP_LANGUAGES = [
  { id: 'te', name: 'తెలుగు (Telugu)' },
  { id: 'en', name: 'English' },
];

export default function HomeScreen() {
  const [selectedLang, setSelectedLang] = useState<'te' | 'en'>('te');
  const [showLangModal, setShowLangModal] = useState(false);

  const handleOpenPooja = (id: string) => {
    router.push({
      pathname: '/pooja/[id]',
      params: { id }
    });
  };

  const renderHeader = () => (
    <View style={styles.topSection}>
      <View style={styles.sectionTitleRow}>
        <Sparkles size={16} color={COLORS.gold} />
        <Text style={styles.sectionTitle}>
          {selectedLang === 'en' ? 'Complete Nithya Pooja Order' : 'సంపూర్ణ నిత్య పూజా క్రమం'}
        </Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <Header 
        title="తత్త్వమసి" 
        subtitle={selectedLang === 'en' ? "Sri Ayyappa Nitya Pooja Vidhanam" : "శ్రీ అయ్యప్ప నిత్య పూజా విధానం"}
        rightAction={
          <TouchableOpacity 
            style={styles.langPill}
            onPress={() => setShowLangModal(true)}
            activeOpacity={0.7}
          >
            <Globe size={13} color={COLORS.gold} />
            <Text style={styles.langPillText}>
              {selectedLang === 'te' ? 'తెలుగు ▾' : 'English ▾'}
            </Text>
          </TouchableOpacity>
        }
      />
      <FlatList
        data={POOJA_CATEGORIES}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <PoojaCard 
            item={item} 
            onPress={() => handleOpenPooja(item.id)} 
            lang={selectedLang}
          />
        )}
        ListHeaderComponent={renderHeader}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />

      {/* Language Selection Modal */}
      <Modal
        visible={showLangModal}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowLangModal(false)}
      >
        <TouchableOpacity 
          style={styles.modalOverlay} 
          activeOpacity={1} 
          onPress={() => setShowLangModal(false)}
        >
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <View style={styles.modalHeaderTitleRow}>
                <Globe size={18} color={COLORS.gold} />
                <Text style={styles.modalTitle}>
                  {selectedLang === 'en' ? 'Select Language' : 'భాషను ఎంచుకోండి'}
                </Text>
              </View>
              <TouchableOpacity onPress={() => setShowLangModal(false)}>
                <Text style={styles.modalCloseText}>✕</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.modalSubtitle}>
              {selectedLang === 'en' 
                ? 'Choose your preferred language for the pooja order.' 
                : 'మీకు కావలసిన భాషను ఎంచుకోండి.'}
            </Text>

            <View style={styles.langList}>
              {APP_LANGUAGES.map((lang) => {
                const isSelected = selectedLang === lang.id;
                return (
                  <TouchableOpacity 
                    key={lang.id} 
                    style={[styles.langItem, isSelected && styles.langItemActive]}
                    onPress={() => {
                      setSelectedLang(lang.id as 'te' | 'en');
                      setShowLangModal(false);
                    }}
                    activeOpacity={0.7}
                  >
                    <View style={styles.langItemLeft}>
                      {isSelected && <Check size={16} color={COLORS.gold} style={{ marginRight: 6 }} />}
                      <Text style={[styles.langName, isSelected && styles.langNameActive]}>
                        {lang.name}
                      </Text>
                    </View>
                    <View style={[styles.statusBadge, isSelected ? styles.statusBadgeActive : styles.statusBadgeNormal]}>
                      <Text style={[styles.statusText, isSelected ? styles.statusTextActive : styles.statusTextNormal]}>
                        {isSelected 
                          ? (selectedLang === 'en' ? 'Active' : 'యాక్టివ్') 
                          : (selectedLang === 'en' ? 'Select' : 'ఎంచుకోండి')}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>

            <TouchableOpacity 
              style={styles.doneBtn} 
              onPress={() => setShowLangModal(false)}
            >
              <Text style={styles.doneBtnText}>
                {selectedLang === 'en' ? 'Done' : 'సరే'}
              </Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  topSection: {
    marginTop: 14,
    marginBottom: 8,
  },
  sectionTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 10,
    marginTop: 4,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.textGold,
  },
  langPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#1E1408',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.gold,
  },
  langPillText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: COLORS.textGold,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  modalContent: {
    width: '100%',
    backgroundColor: COLORS.surface,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: COLORS.gold,
    padding: 20,
    shadowColor: COLORS.gold,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 8,
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  modalHeaderTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  modalTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: COLORS.textGold,
  },
  modalCloseText: {
    fontSize: 18,
    color: COLORS.textMuted,
    fontWeight: 'bold',
    paddingHorizontal: 4,
  },
  modalSubtitle: {
    fontSize: 12,
    color: COLORS.textSecondary,
    marginBottom: 16,
    lineHeight: 18,
  },
  langList: {
    gap: 10,
    marginBottom: 18,
  },
  langItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 14,
    backgroundColor: COLORS.background,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.surfaceBorder,
  },
  langItemActive: {
    borderColor: COLORS.gold,
    backgroundColor: 'rgba(212, 175, 55, 0.12)',
  },
  langItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  langName: {
    fontSize: 14,
    color: COLORS.textSecondary,
    fontWeight: '600',
  },
  langNameActive: {
    color: COLORS.textGold,
    fontWeight: 'bold',
  },
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  statusBadgeActive: {
    backgroundColor: 'rgba(34, 197, 94, 0.2)',
    borderWidth: 1,
    borderColor: '#22C55E',
  },
  statusBadgeNormal: {
    backgroundColor: 'rgba(212, 175, 55, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(212, 175, 55, 0.3)',
  },
  statusText: {
    fontSize: 11,
    fontWeight: '700',
  },
  statusTextActive: {
    color: '#4ADE80',
  },
  statusTextNormal: {
    color: COLORS.textGold,
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
    fontSize: 15,
    fontWeight: 'bold',
  },
});

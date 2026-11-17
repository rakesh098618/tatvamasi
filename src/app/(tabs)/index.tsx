import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList, 
  TextInput, 
  TouchableOpacity, 
  Modal
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { POOJA_CATEGORIES } from '../../data/poojaData';
import { PoojaCard } from '../../components/PoojaCard';
import { Header } from '../../components/Header';
import { COLORS } from '../../constants/theme';
import { Search, Flame, Bell, Sparkles, Globe, Check } from 'lucide-react-native';

const APP_LANGUAGES = [
  { id: 'te', name: 'తెలుగు (Telugu)', active: true },
  { id: 'en', name: 'English', active: false },
  { id: 'hi', name: 'हिन्दी (Hindi)', active: false },
  { id: 'kn', name: 'ಕನ್ನಡ (Kannada)', active: false },
  { id: 'ta', name: 'தமிழ் (Tamil)', active: false },
  { id: 'ml', name: 'മലയാളം (Malayalam)', active: false },
];

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'ayyappa' | 'ammavaru' | 'stotras'>('all');
  const [showLangModal, setShowLangModal] = useState(false);

  const ammavariIds = [
    'lakshmi-ashtottaram', 
    'mahalakshmi-ashtakam', 
    'malikapurathamma-pooja', 
    'ammavari-harathi', 
    'kanakadhara-stotram', 
    'durga-ashtottaram',
    'saraswati-ashtottaram'
  ];

  const stotrasIds = [
    'harivarasanam', 
    'bhuthanatha-pancharatnam', 
    'sharanu-gosha', 
    'kanakadhara-stotram', 
    'mahalakshmi-ashtakam', 
    'mangala-harathi',
    'ammavari-harathi',
    'padi-paatalu',
    'shiva-ashtottaram'
  ];

  const filteredCategories = POOJA_CATEGORIES.filter(cat => {
    const matchesSearch = 
      cat.titleTelugu.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.titleEnglish.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.subtitle.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;

    if (activeFilter === 'ammavaru') {
      return ammavariIds.includes(cat.id);
    }
    if (activeFilter === 'stotras') {
      return stotrasIds.includes(cat.id);
    }
    if (activeFilter === 'ayyappa') {
      return !ammavariIds.includes(cat.id);
    }
    return true;
  });

  const handleOpenPooja = (id: string) => {
    router.push({
      pathname: '/pooja/[id]',
      params: { id }
    });
  };

  const renderHeader = () => (
    <View style={styles.topSection}>
      {/* Search Bar */}
      <View style={styles.searchBarContainer}>
        <Search size={18} color={COLORS.textMuted} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="మంత్రం లేదా పూజ కోసం వెతకండి..."
          placeholderTextColor={COLORS.textMuted}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Category Filter Pills */}
      <View style={styles.filterPillsRow}>
        <TouchableOpacity 
          style={[styles.filterPill, activeFilter === 'all' && styles.filterPillActive]}
          onPress={() => setActiveFilter('all')}
        >
          <Text style={[styles.filterPillText, activeFilter === 'all' && styles.filterPillTextActive]}>
            అన్నీ ({POOJA_CATEGORIES.length})
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.filterPill, activeFilter === 'ammavaru' && styles.filterPillActiveAmmavaru]}
          onPress={() => setActiveFilter('ammavaru')}
        >
          <Text style={[styles.filterPillText, activeFilter === 'ammavaru' && styles.filterPillTextActive]}>
            అమ్మవారి పూజలు 🌺 (6)
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.filterPill, activeFilter === 'ayyappa' && styles.filterPillActive]}
          onPress={() => setActiveFilter('ayyappa')}
        >
          <Text style={[styles.filterPillText, activeFilter === 'ayyappa' && styles.filterPillTextActive]}>
            అయ్యప్ప స్వామి 🪔
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.filterPill, activeFilter === 'stotras' && styles.filterPillActive]}
          onPress={() => setActiveFilter('stotras')}
        >
          <Text style={[styles.filterPillText, activeFilter === 'stotras' && styles.filterPillTextActive]}>
            స్తోత్రములు 🎵
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.sectionTitleRow}>
        <Sparkles size={16} color={COLORS.gold} />
        <Text style={styles.sectionTitle}>
          {activeFilter === 'ammavaru' ? 'శ్రీ అమ్మవారి పూజలు & అష్టోత్తరాలు' : 'సంపూర్ణ నిత్య పూజా క్రమం'}
        </Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <Header 
        title="తత్త్వమసి" 
        subtitle="శ్రీ అయ్యప్ప నిత్య పూజా విధానం"
        rightAction={
          <TouchableOpacity 
            style={styles.langPill}
            onPress={() => setShowLangModal(true)}
            activeOpacity={0.7}
          >
            <Globe size={13} color={COLORS.gold} />
            <Text style={styles.langPillText}>తెలుగు ▾</Text>
          </TouchableOpacity>
        }
      />
      <FlatList
        data={filteredCategories}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <PoojaCard item={item} onPress={() => handleOpenPooja(item.id)} />
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
                <Text style={styles.modalTitle}>భాషను ఎంచుకోండి</Text>
              </View>
              <TouchableOpacity onPress={() => setShowLangModal(false)}>
                <Text style={styles.modalCloseText}>✕</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.modalSubtitle}>
              తదుపరి వెర్షన్‌లో అన్ని భాషలు పూర్తి స్థాయిలో అందుబాటులోకి వస్తాయి.
            </Text>

            <View style={styles.langList}>
              {APP_LANGUAGES.map((lang) => (
                <View 
                  key={lang.id} 
                  style={[styles.langItem, lang.active && styles.langItemActive]}
                >
                  <View style={styles.langItemLeft}>
                    {lang.active && <Check size={16} color={COLORS.gold} style={{ marginRight: 6 }} />}
                    <Text style={[styles.langName, lang.active && styles.langNameActive]}>
                      {lang.name}
                    </Text>
                  </View>
                  <View style={[styles.statusBadge, lang.active ? styles.statusBadgeActive : styles.statusBadgeComing]}>
                    <Text style={[styles.statusText, lang.active ? styles.statusTextActive : styles.statusTextComing]}>
                      {lang.active ? 'యాక్టివ్' : 'త్వరలో'}
                    </Text>
                  </View>
                </View>
              ))}
            </View>

            <TouchableOpacity 
              style={styles.doneBtn} 
              onPress={() => setShowLangModal(false)}
            >
              <Text style={styles.doneBtnText}>సరే</Text>
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
  bannerCard: {
    backgroundColor: COLORS.surface,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: COLORS.surfaceBorder,
    marginBottom: 16,
  },
  bannerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 6,
  },
  bannerTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: COLORS.primaryLight,
  },
  bannerQuote: {
    fontSize: 12,
    color: COLORS.textSecondary,
    lineHeight: 18,
    marginBottom: 12,
  },
  fastActionRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  fastBtn: {
    backgroundColor: COLORS.surfaceLight,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.surfaceBorder,
  },
  fastBtnText: {
    color: COLORS.textGold,
    fontSize: 12,
    fontWeight: '600',
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.surface,
    borderRadius: 12,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: COLORS.surfaceBorder,
    marginBottom: 12,
    height: 44,
  },
  filterPillsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 16,
  },
  filterPill: {
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 20,
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.surfaceBorder,
  },
  filterPillActive: {
    backgroundColor: COLORS.primaryDark,
    borderColor: COLORS.gold,
  },
  filterPillActiveAmmavaru: {
    backgroundColor: '#991B1B', // Deep Sacred Kumkum Crimson
    borderColor: COLORS.gold,
  },
  filterPillText: {
    fontSize: 12,
    color: COLORS.textSecondary,
    fontWeight: '600',
  },
  filterPillTextActive: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    color: COLORS.textPrimary,
    fontSize: 13,
  },
  sectionTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: COLORS.textGold,
  },
  headerBadge: {
    backgroundColor: 'rgba(212, 175, 55, 0.15)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.goldDark,
  },
  headerBadgeText: {
    color: COLORS.goldLight,
    fontSize: 11,
    fontWeight: '700',
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
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: COLORS.background,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.surfaceBorder,
  },
  langItemActive: {
    borderColor: COLORS.gold,
    backgroundColor: 'rgba(212, 175, 55, 0.1)',
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
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
  },
  statusBadgeActive: {
    backgroundColor: 'rgba(34, 197, 94, 0.2)',
    borderWidth: 1,
    borderColor: '#22C55E',
  },
  statusBadgeComing: {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
  },
  statusText: {
    fontSize: 11,
    fontWeight: '700',
  },
  statusTextActive: {
    color: '#4ADE80',
  },
  statusTextComing: {
    color: COLORS.textMuted,
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


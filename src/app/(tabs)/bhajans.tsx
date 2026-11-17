import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList, 
  SafeAreaView 
} from 'react-native';
import { router } from 'expo-router';
import { Header } from '../../components/Header';
import { PoojaCard } from '../../components/PoojaCard';
import { POOJA_CATEGORIES } from '../../data/poojaData';
import { COLORS } from '../../constants/theme';
import { Music, Sparkles } from 'lucide-react-native';

export default function BhajansScreen() {
  // Filter devotional songs, stotrams & harathulu
  const devotionalItems = POOJA_CATEGORIES.filter(cat => 
    ['harivarasanam', 'mangala-harathi', 'ammavari-harathi', 'mahalakshmi-ashtakam', 'kshamapana-mantram', 'sharanu-gosha'].includes(cat.id)
  );

  const handleOpenItem = (id: string) => {
    router.push({
      pathname: '/pooja/[id]',
      params: { id }
    });
  };

  const renderHeader = () => (
    <View style={styles.headerBox}>
      <View style={styles.bannerRow}>
        <Music size={20} color={COLORS.gold} />
        <Text style={styles.bannerTitle}>దివ్య సంకీర్తనలు & హారతులు</Text>
      </View>
      <Text style={styles.bannerDesc}>
        శబరిమల సన్నిధానంలో ప్రతిరోజూ రాత్రి స్వామివారి పవళింపు సేవలో ఆలపించే "హరివరాసనం" విశ్వమోహన దివ్య స్తోత్రం మరియు మంగళ హారతులు.
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header 
        title="హరివరాసనం & భజనలు" 
        subtitle="శబరిమల భజన కీర్తనలు" 
      />
      <FlatList
        data={devotionalItems}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <PoojaCard item={item} onPress={() => handleOpenItem(item.id)} />
        )}
        ListHeaderComponent={renderHeader}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
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
    paddingTop: 16,
    paddingBottom: 24,
  },
  headerBox: {
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
    marginBottom: 8,
  },
  bannerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.textGold,
  },
  bannerDesc: {
    fontSize: 12,
    color: COLORS.textSecondary,
    lineHeight: 18,
  },
});


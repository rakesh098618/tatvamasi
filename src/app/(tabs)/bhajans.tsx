import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Header } from '../../components/Header';
import { PoojaCard } from '../../components/PoojaCard';
import { POOJA_CATEGORIES } from '../../data/poojaData';
import { COLORS } from '../../constants/theme';
import { Flame, Sparkles } from 'lucide-react-native';

export default function AshtottaramScreen() {
  // Sacred 108 Ashtottarams of all gods
  const ashtottaramOrder = [
    'ashtottaram',           // 1. అయ్యప్ప అష్టోత్తర శత నామావళి (108)
    'ganapathi-pooja',       // 2. వినాయక అష్టోత్తర శత నామావళి (108)
    'subrahmanya-pooja',     // 3. సుబ్రహ్మణ్య స్వామి అష్టోత్తర శత నామావళి (108)
    'lakshmi-ashtottaram',   // 4. శ్రీ మహాలక్ష్మి అష్టోత్తర శత నామావళి (108)
    'durga-ashtottaram',     // 5. శ్రీ దుర్గా అష్టోత్తర శత నామావళి (108)
    'saraswati-ashtottaram', // 6. శ్రీ సరస్వతీ అష్టోత్తర శత నామావళి (108)
    'shiva-ashtottaram',     // 7. శ్రీ శివ అష్టోత్తర శత నామావళి (108)
    'sharanu-gosha'          // 8. 108 శరణు ఘోష
  ];

  const ashtottaramItems = ashtottaramOrder
    .map(id => POOJA_CATEGORIES.find(cat => cat.id === id))
    .filter((cat): cat is typeof POOJA_CATEGORIES[0] => cat !== undefined);

  const handleOpenItem = (id: string) => {
    router.push({
      pathname: '/pooja/[id]',
      params: { id }
    });
  };

  const renderHeader = () => (
    <View style={styles.headerBox}>
      <View style={styles.bannerRow}>
        <Flame size={20} color={COLORS.flameOrange} />
        <Text style={styles.bannerTitle}>సర్వదేవతా 108 అష్టోత్తర శత నామావళులు</Text>
      </View>
      <Text style={styles.bannerDesc}>
        శ్రీ అయ్యప్ప స్వామి, వినాయకుడు, సుబ్రహ్మణ్య స్వామి, శివుడు మరియు లక్ష్మీ, దుర్గా, సరస్వతీ అమ్మవార్ల సంపూర్ణ 108 దివ్య అష్టోత్తర శత నామావళులు.
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <Header 
        title="సర్వదేవతా అష్టోత్తరాలు" 
        subtitle="108 దివ్య నామావళులు & శరణు ఘోష" 
      />
      <FlatList
        data={ashtottaramItems}
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

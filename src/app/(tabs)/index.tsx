import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { POOJA_CATEGORIES } from '../../data/poojaData';
import { PoojaCard } from '../../components/PoojaCard';
import { Header } from '../../components/Header';
import { COLORS } from '../../constants/theme';
import { Sparkles } from 'lucide-react-native';

export default function HomeScreen() {
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
        <Text style={styles.sectionTitle}>సంపూర్ణ నిత్య పూజా క్రమం</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <Header 
        title="తత్త్వమసి" 
        subtitle="శ్రీ అయ్యప్ప నిత్య పూజా విధానం"
      />
      <FlatList
        data={POOJA_CATEGORIES}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <PoojaCard 
            item={item} 
            onPress={() => handleOpenPooja(item.id)} 
          />
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
});

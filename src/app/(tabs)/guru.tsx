import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity, 
  Image 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Header } from '../../components/Header';
import { COLORS } from '../../constants/theme';
import { GURU_SWAMI_DETAILS } from '../../data/poojaData';
import { Sparkles, Shield, HeartHandshake, CheckCircle2, ChevronRight, User, MapPin } from 'lucide-react-native';

export default function GuruScreen() {
  const handleOpenGuruPooja = () => {
    router.push({
      pathname: '/pooja/[id]',
      params: { id: 'guru-vandanam' }
    });
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <Header 
        title="శ్రీ గురుస్వామి సన్నిధి" 
        subtitle="దీక్షా గురువుల మార్గదర్శనం & నియమాలు"
      />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Guru Swami Profile Banner */}
        <View style={styles.profileCard}>
          <View style={styles.avatarWrapper}>
            <View style={styles.avatar}>
              <Image 
                source={require('../../../assets/guruswami_round.png')} 
                style={styles.avatarImage}
                resizeMode="cover"
              />
            </View>
          </View>

          {/* Guru Swami Name */}
          <Text style={styles.guruName}>{GURU_SWAMI_DETAILS.name}</Text>

          {/* Location directly under Name */}
          {GURU_SWAMI_DETAILS.location && (
            <View style={styles.locationRow}>
              <MapPin size={14} color={COLORS.gold} />
              <Text style={styles.locationText}>{GURU_SWAMI_DETAILS.location}</Text>
            </View>
          )}

          {/* Guru Title */}
          <Text style={styles.guruTitle}>{GURU_SWAMI_DETAILS.title}</Text>

          <View style={styles.shlokaBox}>
            <Text style={styles.shlokaText}>
              {GURU_SWAMI_DETAILS.mantram}
            </Text>
          </View>

          <Text style={styles.guruDescription}>
            {GURU_SWAMI_DETAILS.description}
          </Text>

          {/* Action button to Guru Pooja */}
          <TouchableOpacity 
            style={styles.guruPoojaBtn} 
            onPress={handleOpenGuruPooja}
            activeOpacity={0.8}
          >
            <Text style={styles.guruPoojaBtnText}>గురు వందన పూజ ప్రారంభించండి</Text>
            <ChevronRight size={18} color="#FFF" />
          </TouchableOpacity>
        </View>

        {/* 41 Days Mandala Deeksha Rules */}
        <View style={styles.sectionCard}>
          <View style={styles.sectionHeader}>
            <Shield size={20} color={COLORS.gold} />
            <Text style={styles.sectionTitle}>మండల దీక్షా నియమావళి (41 రోజులు)</Text>
          </View>
          <Text style={styles.sectionSubtitle}>
            గురుస్వామి ఆజ్ఞానుసారం ప్రతి స్వామి తప్పక ఆచరించవలసిన పవిత్ర నియమాలు:
          </Text>

          <View style={styles.rulesList}>
            {GURU_SWAMI_DETAILS.deekshaRules.map((rule, idx) => (
              <View key={idx} style={styles.ruleItem}>
                <CheckCircle2 size={16} color={COLORS.accentGreen} style={styles.checkIcon} />
                <Text style={styles.ruleText}>{rule}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Guru Teachings / Upadesham */}
        <View style={styles.sectionCard}>
          <View style={styles.sectionHeader}>
            <Sparkles size={20} color={COLORS.primaryLight} />
            <Text style={styles.sectionTitle}>గురు ముఖోపదేశం (సత్య వచనాలు)</Text>
          </View>

          <View style={styles.rulesList}>
            {GURU_SWAMI_DETAILS.teachings.map((teaching, idx) => (
              <View key={idx} style={styles.ruleItem}>
                <HeartHandshake size={16} color={COLORS.gold} style={styles.checkIcon} />
                <Text style={styles.ruleText}>{teaching}</Text>
              </View>
            ))}
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 30,
  },
  profileCard: {
    backgroundColor: COLORS.surface,
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: COLORS.goldDark,
    marginBottom: 16,
  },
  avatarWrapper: {
    position: 'relative',
    marginBottom: 12,
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: COLORS.surfaceLight,
    borderWidth: 3,
    borderColor: COLORS.gold,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  avatarImage: {
    width: 96,
    height: 96,
    borderRadius: 48,
  },
  activeDot: {
    position: 'absolute',
    bottom: 2,
    right: 4,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: COLORS.accentGreen,
    borderWidth: 2,
    borderColor: COLORS.surface,
  },
  guruName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFE29A',
    marginBottom: 6,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    backgroundColor: 'rgba(212, 175, 55, 0.12)',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 12,
    marginBottom: 10,
  },
  locationText: {
    fontSize: 13,
    color: COLORS.goldLight,
    fontWeight: '600',
  },
  guruTitle: {
    fontSize: 13,
    color: COLORS.textSecondary,
    marginBottom: 12,
    textAlign: 'center',
  },
  shlokaBox: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(212, 175, 55, 0.2)',
    width: '100%',
    marginBottom: 14,
  },
  shlokaText: {
    fontSize: 13,
    color: COLORS.goldLight,
    textAlign: 'center',
    lineHeight: 20,
    fontWeight: '600',
  },
  guruDescription: {
    fontSize: 12,
    color: COLORS.textSecondary,
    textAlign: 'center',
    lineHeight: 18,
    marginBottom: 16,
  },
  guruPoojaBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    backgroundColor: COLORS.primaryDark,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    width: '100%',
  },
  guruPoojaBtnText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
  sectionCard: {
    backgroundColor: COLORS.surface,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: COLORS.surfaceBorder,
    marginBottom: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 6,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.textGold,
  },
  sectionSubtitle: {
    fontSize: 12,
    color: COLORS.textSecondary,
    marginBottom: 12,
  },
  rulesList: {
    gap: 10,
  },
  ruleItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
  },
  checkIcon: {
    marginTop: 2,
  },
  ruleText: {
    fontSize: 13,
    color: COLORS.textPrimary,
    flex: 1,
    lineHeight: 18,
  },
});

import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import { Audio, AVPlaybackStatus } from 'expo-av';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  FastForward, 
  Rewind, 
  Volume2, 
  Sparkles,
  Flame
} from 'lucide-react-native';
import { COLORS, FONTS } from '../constants/theme';
import { useLanguage } from '../context/LanguageContext';

export const AyyappaAudioPlayer: React.FC = () => {
  const { language } = useLanguage();
  const isEnglish = language === 'en';

  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [positionMillis, setPositionMillis] = useState<number>(0);
  const [durationMillis, setDurationMillis] = useState<number>(2405000); // ~40:05 default
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const soundRef = useRef<Audio.Sound | null>(null);

  useEffect(() => {
    // Configure audio mode for smooth background playback
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      staysActiveInBackground: true,
      playsInSilentModeIOS: true,
      shouldDuckAndroid: true,
      playThroughEarpieceAndroid: false,
    }).catch(err => console.log('Audio mode error:', err));

    return () => {
      if (soundRef.current) {
        soundRef.current.unloadAsync().catch(() => {});
      }
    };
  }, []);

  const onPlaybackStatusUpdate = (status: AVPlaybackStatus) => {
    if (status.isLoaded) {
      setPositionMillis(status.positionMillis);
      if (status.durationMillis) {
        setDurationMillis(status.durationMillis);
      }
      setIsPlaying(status.isPlaying);
      setIsLoading(status.isBuffering);
      if (status.didJustFinish) {
        setIsPlaying(false);
        setPositionMillis(0);
      }
    } else if (status.error) {
      console.log('Playback status error:', status.error);
    }
  };

  const loadAudio = async (): Promise<Audio.Sound | null> => {
    if (soundRef.current) return soundRef.current;

    setIsLoading(true);
    try {
      const audioSource = require('../../assets/audio/ayyappa_suprabhatham_yesudas.m4a');
      const { sound: newSound } = await Audio.Sound.createAsync(
        audioSource,
        { shouldPlay: false, progressUpdateIntervalMillis: 500 },
        onPlaybackStatusUpdate
      );
      soundRef.current = newSound;
      setSound(newSound);
      setIsLoaded(true);
      return newSound;
    } catch (error) {
      console.error('Error loading Ayyappa Suprabhatham audio:', error);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const handleTogglePlay = async () => {
    try {
      let activeSound = soundRef.current;
      if (!activeSound) {
        activeSound = await loadAudio();
        if (!activeSound) return;
      }

      if (isPlaying) {
        await activeSound.pauseAsync();
      } else {
        await activeSound.playAsync();
      }
    } catch (e) {
      console.error('Playback error:', e);
    }
  };

  const handleSeekRelative = async (offsetMillis: number) => {
    if (!soundRef.current) return;
    try {
      const newPos = Math.max(0, Math.min(durationMillis, positionMillis + offsetMillis));
      await soundRef.current.setPositionAsync(newPos);
    } catch (e) {
      console.error('Seek error:', e);
    }
  };

  const handleReset = async () => {
    if (!soundRef.current) return;
    try {
      await soundRef.current.setPositionAsync(0);
    } catch (e) {
      console.error('Reset error:', e);
    }
  };

  const handleProgressBarPress = async (event: any) => {
    if (!soundRef.current || durationMillis <= 0) return;
    const { locationX } = event.nativeEvent;
    // Assume progress bar width approx 280-320
    const progressBarWidth = 280; 
    const ratio = Math.max(0, Math.min(1, locationX / progressBarWidth));
    const targetPos = ratio * durationMillis;
    try {
      await soundRef.current.setPositionAsync(targetPos);
    } catch (e) {
      console.error('Seek error:', e);
    }
  };

  const formatTime = (millis: number): string => {
    const totalSeconds = Math.floor(millis / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const pad = (n: number) => (n < 10 ? `0${n}` : `${n}`);
    return `${pad(minutes)}:${pad(seconds)}`;
  };

  const progressPercent = durationMillis > 0 
    ? Math.min(100, (positionMillis / durationMillis) * 100) 
    : 0;

  return (
    <View style={styles.cardContainer}>
      {/* 1. Header Banner Badge */}
      <View style={styles.badgeRow}>
        <View style={styles.badgeLeft}>
          <Flame size={12} color={COLORS.flameOrange} />
          <Text style={[styles.badgeText, { fontFamily: isEnglish ? FONTS.subheading : undefined }]}>
            {isEnglish ? 'Special Devotional Audio • 40 Mins' : 'ప్రత్యేక భక్తి గానం • 40 నిమిషాలు'}
          </Text>
        </View>
        <View style={[styles.statusPill, isPlaying && styles.statusPillActive]}>
          <Volume2 size={11} color={isPlaying ? '#FFE29A' : COLORS.textMuted} />
          <Text style={[styles.statusText, isPlaying && styles.statusTextActive]}>
            {isPlaying 
              ? (isEnglish ? 'Playing' : 'ప్లే అవుతోంది') 
              : (isEnglish ? 'Ready' : 'సిద్ధంగా ఉంది')}
          </Text>
        </View>
      </View>

      {/* 2. Track Info with Deity Art */}
      <View style={styles.trackInfoRow}>
        <View style={styles.artFrame}>
          <Image 
            source={require('../../assets/deity_ayyappa.png')} 
            style={styles.artImage}
            resizeMode="cover"
          />
        </View>
        <View style={styles.titleCol}>
          <Text 
            style={[
              styles.trackTitle, 
              { 
                fontFamily: isEnglish ? FONTS.heading : undefined,
                letterSpacing: isEnglish ? 0.35 : 0.2 
              }
            ]} 
            numberOfLines={2}
          >
            {isEnglish 
              ? 'Sri Ayyappa Suprabhatham (Full 40 Mins)' 
              : 'శ్రీ అయ్యప్ప సుప్రభాతం (సంపూర్ణ 40 నిమిషాలు)'}
          </Text>
          <Text 
            style={[
              styles.trackArtist, 
              { fontFamily: isEnglish ? FONTS.medium : undefined }
            ]} 
            numberOfLines={1}
          >
            {isEnglish 
              ? 'Dr. K. J. Yesudas (తరంగిణి Tharangini)' 
              : 'గాన గంధర్వ డా. కె. జె. ఏసుదాస్ (తరంగిణి)'}
          </Text>
        </View>
      </View>

      {/* 3. Progress Bar & Timestamps */}
      <View style={styles.progressSection}>
        <TouchableOpacity 
          style={styles.progressBarTrack} 
          onPress={handleProgressBarPress}
          activeOpacity={0.8}
        >
          <View style={[styles.progressBarFill, { width: `${progressPercent}%` }]} />
          <View style={[styles.progressThumb, { left: `${Math.max(0, progressPercent - 2)}%` }]} />
        </TouchableOpacity>
        <View style={styles.timeRow}>
          <Text style={styles.timeText}>{formatTime(positionMillis)}</Text>
          <Text style={styles.timeText}>{formatTime(durationMillis)}</Text>
        </View>
      </View>

      {/* 4. Controls Row (-15s, Play/Pause, +15s, Reset) */}
      <View style={styles.controlsRow}>
        {/* Reset / Replay */}
        <TouchableOpacity 
          style={styles.secondaryBtn} 
          onPress={handleReset}
          activeOpacity={0.7}
        >
          <RotateCcw size={18} color={COLORS.textGold} />
        </TouchableOpacity>

        {/* Backward 15s */}
        <TouchableOpacity 
          style={styles.seekBtn} 
          onPress={() => handleSeekRelative(-15000)}
          activeOpacity={0.7}
        >
          <Rewind size={18} color={COLORS.textGold} />
          <Text style={styles.seekBtnText}>-15s</Text>
        </TouchableOpacity>

        {/* Primary Play / Pause Button */}
        <TouchableOpacity 
          style={[styles.playBtn, isPlaying && styles.playBtnActive]} 
          onPress={handleTogglePlay}
          activeOpacity={0.8}
        >
          {isLoading ? (
            <ActivityIndicator size="small" color="#000" />
          ) : isPlaying ? (
            <Pause size={24} color="#180F05" />
          ) : (
            <Play size={24} color="#180F05" style={{ marginLeft: 3 }} />
          )}
        </TouchableOpacity>

        {/* Forward 15s */}
        <TouchableOpacity 
          style={styles.seekBtn} 
          onPress={() => handleSeekRelative(15000)}
          activeOpacity={0.7}
        >
          <Text style={styles.seekBtnText}>+15s</Text>
          <FastForward size={18} color={COLORS.textGold} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#1C1209',
    borderRadius: 18,
    padding: 16,
    borderWidth: 1.5,
    borderColor: 'rgba(212, 175, 55, 0.45)',
    marginBottom: 16,
    shadowColor: COLORS.gold,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  badgeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  badgeLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: 'rgba(249, 115, 22, 0.15)',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(249, 115, 22, 0.35)',
  },
  badgeText: {
    color: '#FFB84D',
    fontSize: 11,
    fontWeight: '700',
  },
  statusPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  statusPillActive: {
    backgroundColor: 'rgba(212, 175, 55, 0.15)',
    borderColor: 'rgba(212, 175, 55, 0.4)',
  },
  statusText: {
    fontSize: 10.5,
    color: COLORS.textMuted,
    fontWeight: '600',
  },
  statusTextActive: {
    color: '#FFE29A',
  },
  trackInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  artFrame: {
    width: 52,
    height: 52,
    borderRadius: 26,
    borderWidth: 2,
    borderColor: COLORS.gold,
    overflow: 'hidden',
    backgroundColor: '#0F0B06',
    marginRight: 12,
    shadowColor: COLORS.gold,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 4,
  },
  artImage: {
    width: '100%',
    height: '100%',
  },
  titleCol: {
    flex: 1,
  },
  trackTitle: {
    fontSize: 15.5,
    fontWeight: '700',
    color: '#FFE29A',
    lineHeight: 21,
    marginBottom: 2,
  },
  trackArtist: {
    fontSize: 12,
    color: '#D4C4B2',
  },
  progressSection: {
    marginBottom: 12,
  },
  progressBarTrack: {
    height: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 3,
    position: 'relative',
    justifyContent: 'center',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: COLORS.gold,
    borderRadius: 3,
  },
  progressThumb: {
    position: 'absolute',
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#FFE29A',
    top: -3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  timeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 6,
  },
  timeText: {
    fontSize: 11,
    color: COLORS.textMuted,
    fontWeight: '600',
  },
  controlsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 4,
  },
  secondaryBtn: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: 'rgba(212, 175, 55, 0.12)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(212, 175, 55, 0.25)',
  },
  seekBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    backgroundColor: 'rgba(212, 175, 55, 0.12)',
    paddingVertical: 7,
    paddingHorizontal: 12,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: 'rgba(212, 175, 55, 0.25)',
  },
  seekBtnText: {
    fontSize: 11,
    fontWeight: '700',
    color: COLORS.textGold,
  },
  playBtn: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: '#FFE29A',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: COLORS.gold,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 10,
    elevation: 8,
  },
  playBtnActive: {
    backgroundColor: '#D4AF37',
  },
});

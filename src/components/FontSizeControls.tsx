import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../constants/theme';

interface FontSizeControlsProps {
  fontSize: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onReset?: () => void;
  minSize?: number;
  maxSize?: number;
}

export const FontSizeControls: React.FC<FontSizeControlsProps> = ({
  fontSize,
  onIncrease,
  onDecrease,
  minSize = 14,
  maxSize = 30,
}) => {
  return (
    <View style={styles.floatingContainer}>
      <TouchableOpacity 
        style={styles.btn} 
        onPress={onDecrease}
        activeOpacity={0.7}
        disabled={fontSize <= minSize}
      >
        <Text style={[styles.btnText, fontSize <= minSize && styles.btnDisabled]}>A -</Text>
      </TouchableOpacity>

      <View style={styles.indicator}>
        <Text style={styles.indicatorText}>{fontSize}</Text>
      </View>

      <TouchableOpacity 
        style={styles.btn} 
        onPress={onIncrease}
        activeOpacity={0.7}
        disabled={fontSize >= maxSize}
      >
        <Text style={[styles.btnText, fontSize >= maxSize && styles.btnDisabled]}>A +</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  floatingContainer: {
    position: 'absolute',
    right: 16,
    bottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1C120A',
    borderRadius: 22,
    borderWidth: 1.2,
    borderColor: COLORS.gold,
    paddingHorizontal: 8,
    paddingVertical: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.45,
    shadowRadius: 6,
    elevation: 8,
    gap: 4,
    zIndex: 999,
  },
  btn: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 14,
    backgroundColor: 'rgba(212, 175, 55, 0.16)',
  },
  btnText: {
    color: '#FFE29A',
    fontWeight: 'bold',
    fontSize: 13,
  },
  btnDisabled: {
    color: COLORS.textMuted,
  },
  indicator: {
    paddingHorizontal: 6,
    minWidth: 26,
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicatorText: {
    color: COLORS.textPrimary,
    fontSize: 12.5,
    fontWeight: 'bold',
  },
});

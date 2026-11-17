import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../constants/theme';

interface FontSizeControlsProps {
  fontSize: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onReset: () => void;
}

export const FontSizeControls: React.FC<FontSizeControlsProps> = ({
  fontSize,
  onIncrease,
  onDecrease,
  onReset,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>అక్షరాల పరిమాణం:</Text>
      <View style={styles.buttonRow}>
        <TouchableOpacity 
          style={styles.btn} 
          onPress={onDecrease}
          disabled={fontSize <= 14}
        >
          <Text style={[styles.btnText, fontSize <= 14 && styles.btnDisabled]}>A -</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.resetBtn} onPress={onReset}>
          <Text style={styles.resetText}>{fontSize}px</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.btn} 
          onPress={onIncrease}
          disabled={fontSize >= 30}
        >
          <Text style={[styles.btnText, fontSize >= 30 && styles.btnDisabled]}>A +</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.surface,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 12,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: COLORS.surfaceBorder,
  },
  label: {
    fontSize: 13,
    color: COLORS.textSecondary,
    fontWeight: '500',
  },
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  btn: {
    backgroundColor: COLORS.surfaceLight,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.goldDark,
  },
  btnText: {
    color: COLORS.textGold,
    fontWeight: 'bold',
    fontSize: 13,
  },
  btnDisabled: {
    color: COLORS.textMuted,
  },
  resetBtn: {
    paddingHorizontal: 6,
  },
  resetText: {
    color: COLORS.textPrimary,
    fontSize: 12,
    fontWeight: '600',
  },
});


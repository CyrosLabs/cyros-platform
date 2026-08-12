import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../theme/colors';

interface XPProgressProps {
  currentXP: number;
  nextLevelXP: number;
}

export function XPProgress({ currentXP, nextLevelXP }: XPProgressProps) {
  const progress = nextLevelXP > 0 ? Math.min(currentXP / nextLevelXP, 1) : 0;
  const progressLabel = `${currentXP.toLocaleString()} / ${nextLevelXP.toLocaleString()} XP`;

  return (
    <View style={styles.container}>
      <View style={styles.barBackground}>
        <View style={[styles.barFill, { width: `${progress * 100}%` }]} />
      </View>
      <Text style={styles.progressText}>{progressLabel}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
  },
  barBackground: {
    width: '100%',
    height: 10,
    borderRadius: 999,
    backgroundColor: colors.surfaceSoft,
    overflow: 'hidden',
  },
  barFill: {
    height: '100%',
    borderRadius: 999,
    backgroundColor: colors.primary,
  },
  progressText: {
    marginTop: 8,
    color: colors.textDim,
    fontSize: 12,
    fontWeight: '600',
  },
});

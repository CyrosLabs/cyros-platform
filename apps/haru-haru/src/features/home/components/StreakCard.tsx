import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../theme/colors';
import { Streak } from '../types/home.types';

interface StreakCardProps {
  streak: Streak;
  onPress?: () => void;
}

const dayLabels = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

export function StreakCard({ streak, onPress }: StreakCardProps) {
  const todayIndex = new Date().getDay() === 0 ? 6 : new Date().getDay() - 1;

  return (
    <Pressable style={styles.card} onPress={onPress} accessibilityLabel="Streak indicator">
      <View style={styles.row}>
        <Text style={styles.streakValue}>🔥 {streak.current}</Text>
        <Text style={styles.streakLabel}>Days</Text>
      </View>
      <View style={styles.weekRow}>
        {dayLabels.map((letter, index) => {
          const active = streak.weeklyActivity[index];
          const isToday = index === todayIndex;
          return (
            <View key={letter + index} style={styles.dayCell}>
              <Text style={[styles.dayInitial, isToday && styles.todayText]}>{letter}</Text>
              <View style={[styles.dot, active ? styles.dotActive : styles.dotInactive]} />
            </View>
          );
        })}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    padding: 16,
    borderRadius: 24,
    backgroundColor: colors.surfaceSoft,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 18,
    elevation: 4,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  streakValue: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.primary,
  },
  streakLabel: {
    fontSize: 12,
    color: colors.textDim,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  weekRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dayCell: {
    alignItems: 'center',
  },
  dayInitial: {
    fontSize: 11,
    color: colors.textDim,
    marginBottom: 6,
    fontWeight: '600',
  },
  todayText: {
    color: colors.primary,
    fontWeight: '700',
  },
  dot: {
    width: 16,
    height: 16,
    borderRadius: 8,
  },
  dotActive: {
    backgroundColor: colors.primary,
  },
  dotInactive: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
  },
});

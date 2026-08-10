import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../theme/colors';
import { Streak } from '../types/home.types';

interface StreakCardProps {
  streak: Streak;
}

const dayLabels = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

export function StreakCard({ streak }: StreakCardProps) {
  const todayIndex = new Date().getDay() === 0 ? 6 : new Date().getDay() - 1;

  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Text style={styles.streakValue}>🔥 {streak.current}</Text>
        <Text style={styles.streakLabel}>Day Streak</Text>
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
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    padding: 18,
    borderRadius: 24,
    backgroundColor: colors.surface,
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
    marginBottom: 14,
  },
  streakValue: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.primary,
  },
  streakLabel: {
    fontSize: 14,
    color: colors.textDim,
  },
  weekRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dayCell: {
    alignItems: 'center',
  },
  dayInitial: {
    fontSize: 12,
    color: colors.textDim,
    marginBottom: 6,
  },
  todayText: {
    color: colors.primary,
    fontWeight: '700',
  },
  dot: {
    width: 18,
    height: 18,
    borderRadius: 9,
  },
  dotActive: {
    backgroundColor: colors.primary,
  },
  dotInactive: {
    backgroundColor: colors.surfaceSoft,
    borderWidth: 1,
    borderColor: colors.border,
  },
});

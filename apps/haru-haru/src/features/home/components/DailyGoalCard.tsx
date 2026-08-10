import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../theme/colors';
import { DailyGoal } from '../types/home.types';

interface DailyGoalCardProps {
  goal: DailyGoal;
}

export function DailyGoalCard({ goal }: DailyGoalCardProps) {
  const progress = Math.min(Math.max(goal.current / goal.target, 0), 1);

  return (
    <View style={styles.card}>
      <Text style={styles.title}>🚩 Daily Goal</Text>
      <Text style={styles.challengeText}>{goal.title}</Text>
      <View style={styles.progressSection}>
        <View style={styles.track}>
          <View style={[styles.fill, { width: `${progress * 100}%` }]} />
        </View>
        <Text style={styles.challengeMeta}>{goal.current} / {goal.target}</Text>
      </View>
      <Text style={styles.motivation}>{goal.reward ?? 'Keep going! 👏'}</Text>
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
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.09,
    shadowRadius: 20,
    elevation: 4,
  },
  title: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 10,
  },
  challengeText: {
    fontSize: 14,
    color: colors.text,
    marginBottom: 16,
  },
  progressSection: {
    marginBottom: 16,
  },
  track: {
    width: '100%',
    height: 10,
    borderRadius: 999,
    backgroundColor: colors.surfaceSoft,
    overflow: 'hidden',
    marginBottom: 8,
  },
  fill: {
    height: '100%',
    backgroundColor: colors.secondary,
  },
  challengeMeta: {
    fontSize: 12,
    color: colors.textDim,
    fontWeight: '700',
  },
  motivation: {
    fontSize: 14,
    color: colors.text,
    fontWeight: '700',
  },
});

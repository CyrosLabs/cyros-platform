import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../theme/colors';
import { DailyChallenge } from '../types/home.types';

interface DailyChallengeCardProps {
  challenge: DailyChallenge;
}

export function DailyChallengeCard({ challenge }: DailyChallengeCardProps) {
  const progress = Math.min(Math.max(challenge.current / challenge.target, 0), 1);

  return (
    <View style={styles.card}>
      <Text style={styles.title}>🎯 Today's Challenge</Text>
      <Text style={styles.challengeText}>{challenge.title}</Text>
      <View style={styles.progressSection}>
        <View style={styles.track}>
          <View style={[styles.fill, { width: `${progress * 100}%` }]} />
        </View>
        <Text style={styles.challengeMeta}>{challenge.current} / {challenge.target}</Text>
      </View>
      <View style={styles.rewardRow}>
        <Text style={styles.rewardIcon}>🎁</Text>
        <Text style={styles.rewardLabel}>Reward</Text>
        <Text style={styles.rewardValue}>⭐ {challenge.rewardXP} XP</Text>
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
    backgroundColor: colors.primary,
  },
  challengeMeta: {
    fontSize: 12,
    color: colors.textDim,
    fontWeight: '700',
  },
  rewardRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rewardIcon: {
    fontSize: 18,
  },
  rewardLabel: {
    marginLeft: 6,
    fontSize: 14,
    color: colors.textDim,
  },
  rewardValue: {
    marginLeft: 'auto',
    fontSize: 14,
    fontWeight: '700',
    color: colors.text,
  },
});

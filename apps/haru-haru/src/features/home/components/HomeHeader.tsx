import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../theme/colors';
import { Hearts, Streak, UserProfile } from '../types/home.types';
import { HeartsCard } from './HeartsCard';
import { StreakCard } from './StreakCard';

interface HomeHeaderProps {
  user: UserProfile;
  streak: Streak;
  hearts: Hearts;
  onNotificationPress: () => void;
  onSettingsPress: () => void;
  onStreakPress: () => void;
}

export function HomeHeader({ user, streak, hearts, onNotificationPress, onSettingsPress, onStreakPress }: HomeHeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <View style={styles.identityRow}>
          <View style={styles.avatarCircle}>
            <Text style={styles.avatarInitial}>{user.name.charAt(0)}</Text>
          </View>
          <View style={styles.levelInfo}>
            <Text style={styles.levelLabel}>TOPIK I</Text>
            <Text style={styles.levelValue}>Level {user.level}</Text>
          </View>
        </View>

        <View style={styles.actionRow}>
          <Pressable style={styles.iconButton} onPress={onNotificationPress} accessibilityLabel="Notifications">
            <Text style={styles.iconText}>🔔</Text>
          </Pressable>
          <Pressable style={styles.iconButton} onPress={onSettingsPress} accessibilityLabel="Settings">
            <Text style={styles.iconText}>⚙</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.statusRow}>
        <StreakCard streak={streak} onPress={onStreakPress} />
        <HeartsCard hearts={hearts} />
      </View>

      <View style={styles.premiumRow}>
        <View style={styles.premiumBadge}>
          <Text style={styles.premiumLabel}>Premium</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.surface,
    borderRadius: 28,
    padding: 18,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.12,
    shadowRadius: 20,
    elevation: 6,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  identityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  avatarCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarInitial: {
    color: colors.surface,
    fontSize: 18,
    fontWeight: '700',
  },
  levelInfo: {
    justifyContent: 'center',
  },
  levelLabel: {
    color: colors.textDim,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
  levelValue: {
    color: colors.text,
    fontSize: 22,
    fontWeight: '800',
    marginTop: 2,
  },
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.surfaceSoft,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  iconText: {
    fontSize: 16,
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'stretch',
    gap: 12,
  },
  premiumRow: {
    marginTop: 14,
    alignItems: 'flex-end',
  },
  premiumBadge: {
    backgroundColor: colors.reward,
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  premiumLabel: {
    color: colors.text,
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
});

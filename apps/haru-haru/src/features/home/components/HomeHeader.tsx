import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../theme/colors';
import { NotificationButton } from './NotificationButton';
import { SettingsButton } from './SettingsButton';
import { XPProgress } from './XPProgress';
import { UserProfile } from '../types/home.types';

interface HomeHeaderProps {
  user: UserProfile;
  onNotificationPress: () => void;
  onSettingsPress: () => void;
}

const greetingForHour = (hour: number) => {
  if (hour < 12) return 'Good morning';
  if (hour < 18) return 'Good afternoon';
  return 'Good evening';
};

export function HomeHeader({ user, onNotificationPress, onSettingsPress }: HomeHeaderProps) {
  const greeting = greetingForHour(new Date().getHours());

  return (
    <View style={styles.container}>
      <View style={styles.leftColumn}>
        <View style={styles.avatarCircle}>
          <Text style={styles.avatarInitial}>{user.name.charAt(0)}</Text>
        </View>
        <View style={styles.heading}>
          <Text style={styles.greeting}>{`${greeting}, ${user.name}!`}</Text>
          <Text style={styles.subtitle}>Ready for a new chapter?</Text>
        </View>
      </View>
      <View style={styles.actionsRow}>
        <NotificationButton count={user.unreadNotifications} onPress={onNotificationPress} />
        <SettingsButton onPress={onSettingsPress} />
      </View>
      <View style={styles.levelCard}>
        <Text style={styles.levelLabel}>👑 Level {user.level}</Text>
        <XPProgress currentXP={user.currentXP} nextLevelXP={user.nextLevelXP} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    backgroundColor: colors.surface,
    borderRadius: 28,
    padding: 20,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 20,
    elevation: 5,
  },
  leftColumn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarCircle: {
    width: 58,
    height: 58,
    borderRadius: 28,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarInitial: {
    color: colors.surface,
    fontSize: 24,
    fontWeight: '700',
  },
  heading: {
    marginLeft: 14,
    flex: 1,
  },
  greeting: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
  },
  subtitle: {
    marginTop: 4,
    fontSize: 13,
    color: colors.textDim,
  },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 18,
  },
  levelCard: {
    marginTop: 18,
    padding: 18,
    borderRadius: 22,
    backgroundColor: colors.surfaceSoft,
  },
  levelLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 10,
  },
});

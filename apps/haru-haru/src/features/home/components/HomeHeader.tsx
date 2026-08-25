import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../../../theme/colors';
import { Hearts, Streak, UserProfile } from '../types/home.types';
import streakIcon from '../assets/streak_icon.png';
import levelIcon from '../assets/level_icon.png';
import lifeIcon from '../assets/life_icon.png';
import AvatarIcon from '../assets/avatar_icon.svg';

interface HomeHeaderProps {
  user: UserProfile;
  streak: Streak;
  hearts: Hearts;
  onPremiumPress?: () => void;
  onStreakPress?: () => void;
}

export function HomeHeader({ user, streak, hearts, onPremiumPress, onStreakPress }: HomeHeaderProps) {
  const insets = useSafeAreaInsets();
  const levelProgress = Math.min((user.currentXP / Math.max(user.nextLevelXP, 1)) * 100, 100);
  const lifeProgress = Math.min((hearts.current / Math.max(hearts.maximum, 1)) * 100, 100);

  return (
    <View style={[styles.container, { paddingTop: insets.top + 12 }]}>
      <View style={styles.headerRow}>
        <Pressable accessibilityLabel="Streak indicator" onPress={onStreakPress} style={styles.streakChip}>
          <Image source={streakIcon} style={styles.icon} />
          <Text style={styles.streakText}>{streak.current} DAYS</Text>
        </Pressable>

        <View style={styles.levelChip}>
          <View style={styles.statIconWrap}>
            <Image source={levelIcon} style={styles.statIcon} />
            <Text style={styles.levelNumber}>{user.level}</Text>
          </View>

          <View style={styles.statMeta}>
            <Text style={styles.statLabel}>TOPIK I</Text>
            <Text style={styles.statValue}>Level {user.level}</Text>
            <View style={styles.progressTrack}>
              <View style={[styles.progressFill, { width: `${levelProgress}%` }]} />
            </View>
          </View>
        </View>

        <View accessibilityLabel="Lives indicator" style={styles.lifeChip}>
          <Image source={lifeIcon} style={styles.icon} />
          <View style={styles.progressTrack}>
            <View style={[styles.lifeFill, { width: `${lifeProgress}%` }]} />
          </View>
        </View>

        <Pressable accessibilityLabel="Premium user indicator" onPress={onPremiumPress} style={styles.premiumChip}>
          <AvatarIcon width={22} height={22} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingBottom: 8,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 6,
  },
  streakChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF6E7',
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderWidth: 2,
    borderColor: '#F4D177',
    shadowColor: colors.shadow,
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    flexShrink: 1,
  },
  streakText: {
    color: '#E66B2B',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.5,
    flexShrink: 1,
  },
  levelChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F1FF',
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 6,
    flex: 1.35,
    minWidth: 0,
    maxWidth: 190,
  },
  statIconWrap: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#E8E0FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 6,
    flexShrink: 0,
  },
  levelNumber: {
    position: 'absolute',
    color: colors.text,
    fontSize: 9,
    fontWeight: '800',
  },
  statIcon: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
  },
  statMeta: {
    flex: 1,
    minWidth: 0,
  },
  statLabel: {
    color: colors.textDim,
    fontSize: 7,
    fontWeight: '700',
    letterSpacing: 0.6,
    textTransform: 'uppercase',
  },
  statValue: {
    color: colors.text,
    fontSize: 10,
    fontWeight: '800',
    marginBottom: 4,
  },
  progressTrack: {
    height: 6,
    backgroundColor: '#E7E1F5',
    borderRadius: 999,
    overflow: 'hidden',
    flex: 1,
    minWidth: 38,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#7B5BFF',
    borderRadius: 999,
  },
  lifeFill: {
    height: '100%',
    backgroundColor: '#FF7A8A',
    borderRadius: 999,
  },
  lifeChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF1F5',
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 6,
    flex: 1,
    minWidth: 0,
    maxWidth: 180,
  },
  premiumChip: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#FFF7D1',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.shadow,
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    flexShrink: 0,
  },
  icon: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
    marginRight: 6,
    flexShrink: 0,
  },
});

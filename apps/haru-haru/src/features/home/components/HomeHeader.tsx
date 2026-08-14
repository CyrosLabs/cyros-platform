import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../theme/colors';
import { Hearts, Streak, UserProfile } from '../types/home.types';
import streakIcon from '../assets/streak_icon.png';
import levelIcon from '../assets/level_icon.png';
import lifeIcon from '../assets/life_icon.png';
import premiumUserIcon from '../assets/premium_user_icon.png';
import lifeBarIcon from '../assets/life_bar_icon.jpg';
import lifeBarsIcon from '../assets/life_bars_icon.png';

interface HomeHeaderProps {
  user: UserProfile;
  streak: Streak;
  hearts: Hearts;
  onNotificationPress?: () => void;
  onSettingsPress?: () => void;
  onStreakPress?: () => void;
}

export function HomeHeader({ user, streak, hearts, onStreakPress }: HomeHeaderProps) {
  const lifeSlots = Array.from({ length: 5 }, (_, index) => index < hearts.current);

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Pressable accessibilityLabel="Streak indicator" onPress={onStreakPress} style={styles.streakBadge}>
          <Image source={streakIcon} style={styles.assetIcon} />
          <Text style={styles.streakText}>{streak.current} DAYS</Text>
        </Pressable>

        <View style={styles.levelBadge}>
          <Image source={levelIcon} style={styles.assetIconSmall} />
          <View style={styles.levelTextWrap}>
            <Text style={styles.levelLabel}>TOPIK I</Text>
            <Text style={styles.levelValue}>Level {user.level}</Text>
          </View>
        </View>

        <View accessibilityLabel="Lives indicator" style={styles.lifeBadge}>
          <Image source={lifeIcon} style={styles.assetIconSmall} />
          <View style={styles.lifeBars}>
            {lifeSlots.map((isFilled, index) => (
              <Image
                key={`life-${index}`}
                source={isFilled ? lifeBarsIcon : lifeBarIcon}
                style={[styles.lifeBarIcon, !isFilled && styles.lifeBarMuted]}
              />
            ))}
          </View>
        </View>

        <View accessibilityLabel="Premium user indicator" style={styles.premiumBadge}>
          <Image source={premiumUserIcon} style={styles.premiumIcon} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  streakBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFBF0',
    borderWidth: 2,
    borderColor: '#F7D57C',
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 6,
    minWidth: 92,
  },
  streakText: {
    fontSize: 12,
    fontWeight: '800',
    color: '#E86B2D',
    letterSpacing: 0.5,
  },
  levelBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F4FF',
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 6,
    flexShrink: 1,
    maxWidth: '34%',
  },
  levelTextWrap: {
    marginLeft: 6,
  },
  levelLabel: {
    color: colors.textDim,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
  levelValue: {
    color: colors.text,
    fontSize: 12,
    fontWeight: '800',
  },
  lifeBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FCEEF5',
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 6,
    flexShrink: 1,
    maxWidth: '32%',
  },
  lifeBars: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 6,
    gap: 2,
  },
  lifeBarIcon: {
    width: 10,
    height: 10,
    resizeMode: 'contain',
  },
  lifeBarMuted: {
    opacity: 0.45,
  },
  premiumBadge: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#FFF6D1',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.14,
    shadowRadius: 6,
  },
  premiumIcon: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
  },
  assetIcon: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
    marginRight: 6,
  },
  assetIconSmall: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
  },
  onPressable: {
    opacity: 1,
  },
});

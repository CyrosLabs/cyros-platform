import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../theme/colors';

export type HomeNavigationRoute =
  | 'home'
  | 'course'
  | 'favorites'
  | 'user'
  | 'profile'
  | 'notifications'
  | 'settings'
  | 'lesson'
  | 'grammar'
  | 'test'
  | 'hangeul'
  | 'video'
  | 'song'
  | 'story';

interface HomeBottomNavigationProps {
  selectedRoute: HomeNavigationRoute;
  onChangeRoute: (route: HomeNavigationRoute) => void;
}

const tabs: Array<{ key: HomeNavigationRoute; label: string }> = [
  { key: 'home', label: 'Home' },
  { key: 'course', label: 'Course' },
  { key: 'favorites', label: 'Favorites' },
  { key: 'user', label: 'User' },
];

function TabIcon({ active, label }: { active: boolean; label: string }) {
  const style = [styles.iconBase, active && styles.iconActive];

  if (label === 'Home') {
    return <View style={[style, styles.homeIcon]}><View style={styles.homeRoof} /><View style={styles.homeBody} /></View>;
  }

  if (label === 'Course') {
    return <View style={[style, styles.courseIcon]}><View style={styles.bookSpine} /><View style={styles.bookPage} /></View>;
  }

  if (label === 'Favorites') {
    return <View style={[style, styles.favoriteIcon]}><View style={styles.favoriteHeart} /></View>;
  }

  return <View style={[style, styles.userIcon]}><View style={styles.userHead} /><View style={styles.userBody} /></View>;
}

export function HomeBottomNavigation({ selectedRoute, onChangeRoute }: HomeBottomNavigationProps) {
  return (
    <View style={styles.container}>
      {tabs.map((tab) => {
        const active = selectedRoute === tab.key || (tab.key === 'user' && selectedRoute === 'profile');
        return (
          <Pressable
            key={tab.key}
            onPress={() => onChangeRoute(tab.key)}
            style={styles.tabButton}
            accessibilityLabel={`${tab.label} tab`}
          >
            <TabIcon active={active} label={tab.label} />
            <Text style={[styles.label, active && styles.active]}>{tab.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12,
    paddingBottom: 18,
    paddingHorizontal: 18,
    backgroundColor: colors.surface,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    shadowColor: colors.shadow,
    shadowOpacity: 0.12,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: -4 },
    elevation: 10,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 56,
  },
  iconBase: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
    position: 'relative',
  },
  homeIcon: {
    width: 25,
    height: 25,
  },
  homeRoof: {
    position: 'absolute',
    top: 5,
    left: 4,
    width: 16,
    height: 10,
    borderLeftWidth: 2,
    borderTopWidth: 2,
    borderColor: colors.textDim,
    transform: [{ rotate: '45deg' }],
  },
  homeBody: {
    position: 'absolute',
    bottom: 3,
    left: 5,
    width: 14,
    height: 12,
    borderRadius: 2,
    borderWidth: 2,
    borderColor: colors.textDim,
  },
  iconActive: {
    opacity: 1,
  },
  courseIcon: {
    width: 24,
    height: 24,
  },
  bookSpine: {
    position: 'absolute',
    left: 7,
    width: 4,
    height: 18,
    borderRadius: 2,
    backgroundColor: colors.textDim,
  },
  bookPage: {
    position: 'absolute',
    left: 9,
    width: 10,
    height: 18,
    borderRadius: 2,
    borderWidth: 2,
    borderColor: colors.textDim,
  },
  favoriteIcon: {
    width: 24,
    height: 24,
  },
  favoriteHeart: {
    width: 16,
    height: 16,
    backgroundColor: colors.textDim,
    transform: [{ rotate: '45deg' }],
    borderRadius: 2,
    position: 'absolute',
    top: 4,
    left: 4,
  },
  userIcon: {
    width: 24,
    height: 24,
  },
  userHead: {
    position: 'absolute',
    top: 2,
    left: 8,
    width: 8,
    height: 8,
    borderRadius: 6,
    backgroundColor: colors.textDim,
  },
  userBody: {
    position: 'absolute',
    bottom: 2,
    left: 5,
    width: 14,
    height: 10,
    borderRadius: 8,
    backgroundColor: colors.textDim,
  },
  label: {
    fontSize: 10,
    color: colors.textDim,
    fontWeight: '600',
  },
  active: {
    color: colors.primary,
    fontWeight: '700',
  },
});

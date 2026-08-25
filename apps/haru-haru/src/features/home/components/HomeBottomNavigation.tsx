import React from 'react';
import { Image, ImageSourcePropType, Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../../../theme/colors';
import homeIcon from '../assets/home_icon.png';
import courseIcon from '../assets/course_icon.png';
import favoritesIcon from '../assets/favorites_icon.png';
import userIcon from '../assets/user_icon.png';

export type HomeNavigationRoute =
  | 'home'
  | 'course'
  | 'favorites'
  | 'user'
  | 'profile'
  | 'notifications'
  | 'settings'
  | 'premium'
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

const tabs: Array<{ key: HomeNavigationRoute; label: string; icon: ImageSourcePropType }> = [
  { key: 'home', label: 'Home', icon: homeIcon },
  { key: 'course', label: 'Course', icon: courseIcon },
  { key: 'favorites', label: 'Favorites', icon: favoritesIcon },
  { key: 'user', label: 'User', icon: userIcon },
];

function TabIcon({ active, icon }: { active: boolean; icon: ImageSourcePropType }) {
  return <Image source={icon} style={[styles.iconBase, active && styles.iconActive]} />;
}

export function HomeBottomNavigation({ selectedRoute, onChangeRoute }: HomeBottomNavigationProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom + 18 }]}>
      {tabs.map((tab) => {
        const active = selectedRoute === tab.key || (tab.key === 'user' && selectedRoute === 'profile');
        return (
          <Pressable
            key={tab.key}
            onPress={() => onChangeRoute(tab.key)}
            style={styles.tabButton}
            accessibilityLabel={`${tab.label} tab`}
          >
            <TabIcon active={active} icon={tab.icon} />
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
    resizeMode: 'contain',
    marginBottom: 4,
    opacity: 0.7,
  },
  iconActive: {
    opacity: 1,
    tintColor: colors.primary,
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

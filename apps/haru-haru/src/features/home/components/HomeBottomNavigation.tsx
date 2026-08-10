import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../theme/colors';

export type HomeNavigationRoute = 'home' | 'course' | 'review' | 'favorites' | 'profile' | 'notifications' | 'settings';

interface HomeBottomNavigationProps {
  selectedRoute: HomeNavigationRoute;
  onChangeRoute: (route: HomeNavigationRoute) => void;
}

const tabs: Array<{ key: HomeNavigationRoute; label: string; icon: string }> = [
  { key: 'home', label: 'Home', icon: '🏠' },
  { key: 'course', label: 'Course', icon: '📖' },
  { key: 'review', label: 'Review', icon: '▣' },
  { key: 'favorites', label: 'Favorites', icon: '♡' },
  { key: 'profile', label: 'Profile', icon: '♙' },
];

export function HomeBottomNavigation({ selectedRoute, onChangeRoute }: HomeBottomNavigationProps) {
  return (
    <View style={styles.container}>
      {tabs.map((tab) => {
        const active = selectedRoute === tab.key;
        return (
          <Pressable
            key={tab.key}
            onPress={() => onChangeRoute(tab.key)}
            style={styles.tabButton}
            accessibilityLabel={`${tab.label} tab`}
          >
            <Text style={[styles.icon, active && styles.active]}>{tab.icon}</Text>
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
    paddingVertical: 10,
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
  },
  icon: {
    fontSize: 18,
    color: colors.textDim,
  },
  label: {
    marginTop: 2,
    fontSize: 10,
    color: colors.textDim,
  },
  active: {
    color: colors.primary,
    fontWeight: '700',
  },
});

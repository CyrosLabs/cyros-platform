import React, { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import { HomeBottomNavigation, HomeNavigationRoute } from './src/features/home/components/HomeBottomNavigation';
import { homeData } from './src/features/home/data/mockHomeData';
import { HomeScreen } from './src/features/home/screens/HomeScreen';
import { PlaceholderScreen } from './src/features/home/screens/PlaceholderScreen';
import { colors } from './src/theme/colors';

export type AppRoute = HomeNavigationRoute;

const routeTitles: Record<AppRoute, string> = {
  home: 'Home',
  course: 'Course',
  favorites: 'Favorites',
  user: 'User',
  profile: 'User',
  notifications: 'Notifications',
  settings: 'Settings',
  premium: 'Premium',
  lesson: 'Lesson',
  grammar: 'Grammar',
  test: 'Test',
  hangeul: 'Hangeul',
  video: 'Video',
  song: 'Song',
  story: 'Story',
};

export default function App() {
  const [route, setRoute] = useState<AppRoute>('home');

  const renderContent = () => {
    if (route === 'home') {
      return (
        <HomeScreen
          data={homeData}
          onNavigate={(nextRoute) => setRoute(nextRoute)}
          onOpenNotifications={() => setRoute('notifications')}
          onOpenSettings={() => setRoute('settings')}
        />
      );
    }

    const title = routeTitles[route] ?? 'Haru Haru';

    const isPremium = route === 'premium';

    return (
      <PlaceholderScreen
        title={title}
        subtitle={
          isPremium
            ? 'Premium subscription screen coming soon.'
            : 'This MVP destination is intentionally minimal while the full learning experience is developed later.'
        }
        onBack={() => setRoute('home')}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
      <View style={styles.content}>{renderContent()}</View>
      <HomeBottomNavigation selectedRoute={route} onChangeRoute={(value) => setRoute(value)} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
  },
});

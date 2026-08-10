import React, { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import { HomeScreen } from './src/features/home/screens/HomeScreen';
import { homeData } from './src/features/home/data/mockHomeData';
import { colors } from './src/theme/colors';
import { HomeBottomNavigation } from './src/features/home/components/HomeBottomNavigation';
import { PlaceholderScreen } from './src/features/home/screens/PlaceholderScreen';

export type AppRoute =
  | 'home'
  | 'course'
  | 'review'
  | 'favorites'
  | 'profile'
  | 'notifications'
  | 'settings';

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

    const title =
      route === 'notifications'
        ? 'Notifications'
        : route === 'settings'
        ? 'Settings'
        : route.charAt(0).toUpperCase() + route.slice(1);

    return <PlaceholderScreen title={title} subtitle="This screen is a placeholder for the current Haru Haru flow." />;
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

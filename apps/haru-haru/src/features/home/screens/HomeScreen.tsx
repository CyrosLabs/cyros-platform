import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../../../theme/colors';
import { CourseMap } from '../components/CourseMap';
import { HomeHeader } from '../components/HomeHeader';
import { HomeNavigationRoute } from '../components/HomeBottomNavigation';
import { HomePageData } from '../types/home.types';

interface HomeScreenProps {
  data: HomePageData;
  onNavigate: (route: HomeNavigationRoute) => void;
  onOpenNotifications?: () => void;
  onOpenSettings?: () => void;
}

export function HomeScreen({ data, onNavigate }: HomeScreenProps) {
  return (
    <View style={styles.screen}>
      <HomeHeader user={data.user} streak={data.streak} hearts={data.hearts} onStreakPress={() => onNavigate('lesson')} />

      <View style={styles.roadmapWrapper}>
        <CourseMap
          title="TOPIK I Path"
          lessons={data.courseMap}
          onNodePress={(route) => onNavigate(route as HomeNavigationRoute)}
          onStartPress={() => onNavigate('lesson')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  roadmapWrapper: {
    flex: 1,
    marginTop: 8,
  },
});

import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../theme/colors';
import { CompanionSection } from '../components/CompanionSection';
import { CourseMap } from '../components/CourseMap';
import { HomeHeader } from '../components/HomeHeader';
import { HomeNavigationRoute } from '../components/HomeBottomNavigation';
import { HomePageData } from '../types/home.types';

interface HomeScreenProps {
  data: HomePageData;
  onNavigate: (route: HomeNavigationRoute) => void;
  onOpenNotifications: () => void;
  onOpenSettings: () => void;
}

export function HomeScreen({ data, onNavigate, onOpenNotifications, onOpenSettings }: HomeScreenProps) {
  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <HomeHeader
          user={data.user}
          streak={data.streak}
          hearts={data.hearts}
          onNotificationPress={onOpenNotifications}
          onSettingsPress={onOpenSettings}
          onStreakPress={() => onNavigate('lesson')}
        />

        <View style={styles.bannerRow}>
          <CompanionSection companion={data.companion} />
          <View style={styles.ctaPanel}>
            <Text style={styles.ctaTitle}>Today’s path</Text>
            <Text style={styles.ctaText}>Lesson • Grammar • Quiz</Text>
            <Text style={styles.ctaHint}>Continue your current streak.</Text>
          </View>
        </View>

        <CourseMap
          title="TOPIK I Path"
          lessons={data.courseMap}
          onNodePress={(route) => onNavigate(route as HomeNavigationRoute)}
          onStartPress={() => onNavigate('lesson')}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 18,
    paddingBottom: 100,
  },
  bannerRow: {
    marginTop: 18,
    flexDirection: 'row',
    alignItems: 'stretch',
    gap: 12,
  },
  ctaPanel: {
    flex: 1,
    backgroundColor: colors.surface,
    borderRadius: 24,
    padding: 16,
    justifyContent: 'center',
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 4,
  },
  ctaTitle: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '800',
  },
  ctaText: {
    marginTop: 8,
    color: colors.primary,
    fontWeight: '700',
  },
  ctaHint: {
    marginTop: 6,
    color: colors.textDim,
    fontSize: 12,
    lineHeight: 18,
  },
});

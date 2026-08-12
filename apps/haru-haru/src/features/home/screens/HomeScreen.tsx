import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { CourseMap } from '../components/CourseMap';
import { ContinueLearningCard } from '../components/ContinueLearningCard';
import { DailyChallengeCard } from '../components/DailyChallengeCard';
import { DailyGoalCard } from '../components/DailyGoalCard';
import { HomeHeader } from '../components/HomeHeader';
import { HeartsCard } from '../components/HeartsCard';
import { ProgressSummary } from '../components/ProgressSummary';
import { StreakCard } from '../components/StreakCard';
import { CompanionSection } from '../components/CompanionSection';
import { HomePageData } from '../types/home.types';
import { colors } from '../../../theme/colors';

interface HomeScreenProps {
  data: HomePageData;
  onNavigate: (route: 'course' | 'review' | 'favorites' | 'profile' | 'home') => void;
  onOpenNotifications: () => void;
  onOpenSettings: () => void;
}

export function HomeScreen({ data, onNavigate, onOpenNotifications, onOpenSettings }: HomeScreenProps) {
  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <HomeHeader
          user={data.user}
          onNotificationPress={onOpenNotifications}
          onSettingsPress={onOpenSettings}
        />
        <View style={styles.sectionRow}>
          <StreakCard streak={data.streak} />
          <HeartsCard hearts={data.hearts} />
        </View>
        <CompanionSection companion={data.companion} />
        <ContinueLearningCard
          lesson={data.continueLearning}
          onContinue={() => onNavigate('course')}
        />
        <View style={styles.activitiesRow}>
          <DailyChallengeCard challenge={data.dailyChallenge} />
          <DailyGoalCard goal={data.dailyGoal} />
        </View>
        <CourseMap
          title="TOPIK I Course Map"
          lessons={data.courseMap}
          onViewAll={() => onNavigate('course')}
        />
        <ProgressSummary metrics={data.progressSummary} />
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
    paddingHorizontal: 20,
    paddingBottom: 96,
  },
  sectionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  activitiesRow: {
    flexDirection: 'column',
  },
});

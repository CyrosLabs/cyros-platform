import { HomePageData } from '../types/home.types';

export const homeData: HomePageData = {
  user: {
    name: 'Cynthia',
    level: 3,
    currentXP: 1230,
    nextLevelXP: 2000,
    unreadNotifications: 3,
  },
  streak: {
    current: 18,
    weeklyActivity: [true, true, true, true, false, false, false],
  },
  hearts: {
    current: 5,
    maximum: 5,
  },
  companion: {
    type: 'pomeranian',
    message: {
      korean: '화이팅!',
      english: 'Fighting!',
    },
  },
  continueLearning: {
    lessonId: '4',
    course: 'TOPIK I',
    title: 'Grammar',
    type: 'grammar',
    durationMinutes: 15,
    itemCount: 40,
    progress: 65,
  },
  dailyChallenge: {
    title: 'Learn 10 new words',
    current: 6,
    target: 10,
    rewardXP: 50,
  },
  dailyGoal: {
    title: 'Earn 100 XP',
    current: 60,
    target: 100,
    reward: 'Keep going! 👏',
  },
  courseMap: [
    { id: '1', number: 1, title: 'Vocab', type: 'vocabulary', status: 'completed', stars: 3 },
    { id: '2', number: 2, title: 'Vocab', type: 'vocabulary', status: 'completed', stars: 2 },
    { id: '3', number: 3, title: 'Vocab', type: 'vocabulary', status: 'completed', stars: 3 },
    { id: '4', number: 4, title: 'Grammar', type: 'grammar', status: 'in_progress' },
    { id: '5', number: 5, title: 'Vocab', type: 'vocabulary', status: 'locked' },
    { id: '6', number: 6, title: 'Vocab', type: 'vocabulary', status: 'locked' },
  ],
  progressSummary: [
    { label: 'Words Learned', value: '124', subtitle: 'Words' },
    { label: 'Favorites', value: '23', subtitle: 'Favorites' },
    { label: 'Achievements', value: '8', subtitle: 'Achievements' },
    { label: 'Study Time', value: '3.2h', subtitle: 'Study Time' },
  ],
};

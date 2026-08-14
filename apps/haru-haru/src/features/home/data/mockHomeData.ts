import { HomePageData } from '../types/home.types';

export const homeData: HomePageData = {
  user: {
    name: 'Cynthia',
    level: 1,
    currentXP: 340,
    nextLevelXP: 600,
    unreadNotifications: 3,
  },
  streak: {
    current: 3,
    weeklyActivity: [true, true, false, true, false, true, false],
  },
  hearts: {
    current: 4,
    maximum: 5,
  },
  companion: {
    type: 'pomeranian',
    message: {
      korean: '화이팅!',
      english: 'You’ve got this!',
    },
  },
  continueLearning: {
    lessonId: '2',
    course: 'TOPIK I',
    title: 'Lesson 2',
    type: 'lesson',
    durationMinutes: 12,
    itemCount: 24,
    progress: 58,
  },
  dailyChallenge: {
    title: 'Practice vocabulary',
    current: 5,
    target: 10,
    rewardXP: 50,
  },
  dailyGoal: {
    title: 'Learn 10 new words',
    current: 7,
    target: 10,
    reward: 'Keep going! 👏',
  },
  courseMap: [
    { id: 'start', number: 0, title: 'Start', type: 'start', status: 'current', destination: 'lesson' },
    { id: 'lesson-1', number: 1, title: 'Lesson', type: 'lesson', status: 'completed', destination: 'lesson' },
    { id: 'grammar-1', number: 2, title: 'Grammar', type: 'grammar', status: 'completed', destination: 'grammar' },
    { id: 'test-1', number: 3, title: 'Test', type: 'test', status: 'current', destination: 'test' },
    { id: 'hangeul-1', number: 4, title: 'Hangeul', type: 'hangul', status: 'available', destination: 'hangeul' },
    { id: 'video-1', number: 5, title: 'Video', type: 'video', status: 'available', destination: 'video' },
    { id: 'song-1', number: 6, title: 'Song', type: 'song', status: 'available', destination: 'song' },
    { id: 'story-1', number: 7, title: 'Story', type: 'story', status: 'locked', destination: 'story' },
  ],
  progressSummary: [
    { label: 'Words Learned', value: '124', subtitle: 'Words' },
    { label: 'Favorites', value: '23', subtitle: 'Favorites' },
    { label: 'Achievements', value: '8', subtitle: 'Achievements' },
    { label: 'Study Time', value: '3.2h', subtitle: 'Study Time' },
  ],
};

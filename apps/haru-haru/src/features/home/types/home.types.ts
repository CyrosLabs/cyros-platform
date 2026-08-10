export type LessonType = 'hangul' | 'vocabulary' | 'grammar';
export type LessonStatus = 'locked' | 'available' | 'in_progress' | 'completed';

export interface UserProfile {
  name: string;
  level: number;
  currentXP: number;
  nextLevelXP: number;
  unreadNotifications: number;
}

export interface Streak {
  current: number;
  weeklyActivity: boolean[];
}

export interface Hearts {
  current: number;
  maximum: number;
}

export interface CompanionMessage {
  korean: string;
  english: string;
}

export interface Companion {
  type: 'pomeranian';
  message: CompanionMessage;
}

export interface LessonProgress {
  lessonId: string;
  course: string;
  title: string;
  type: LessonType;
  durationMinutes: number;
  itemCount: number;
  progress: number;
}

export interface DailyChallenge {
  title: string;
  current: number;
  target: number;
  rewardXP: number;
}

export interface DailyGoal {
  title: string;
  current: number;
  target: number;
  reward?: string;
}

export interface CourseLesson {
  id: string;
  number: number;
  title: string;
  type: LessonType;
  status: LessonStatus;
  stars?: number;
}

export interface ProgressMetric {
  label: string;
  value: string;
  subtitle: string;
}

export interface HomePageData {
  user: UserProfile;
  streak: Streak;
  hearts: Hearts;
  companion: Companion;
  continueLearning: LessonProgress;
  dailyChallenge: DailyChallenge;
  dailyGoal: DailyGoal;
  courseMap: CourseLesson[];
  progressSummary: ProgressMetric[];
}

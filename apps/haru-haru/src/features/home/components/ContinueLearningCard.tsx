import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../theme/colors';
import { LessonProgress } from '../types/home.types';

interface ContinueLearningCardProps {
  lesson: LessonProgress;
  onContinue: () => void;
}

export function ContinueLearningCard({ lesson, onContinue }: ContinueLearningCardProps) {
  const progress = Math.min(Math.max(lesson.progress, 0), 100);

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.sectionLabel}>🧩 Continue Learning</Text>
      </View>
      <View style={styles.row}>
        <View style={styles.thumbnail}>
          <Text style={styles.thumbnailText}>{lesson.course}</Text>
        </View>
        <View style={styles.lessonDetails}>
          <Text style={styles.lessonTitle}>Lesson {lesson.lessonId}</Text>
          <Text style={styles.lessonSubtitle}>{lesson.title}</Text>
          <Text style={styles.lessonMeta}>~{lesson.durationMinutes} min • {lesson.itemCount} words</Text>
        </View>
      </View>
      <View style={styles.progressRow}>
        <View style={styles.progressTrack}>
          <View style={[styles.progressFill, { width: `${progress}%` }]} />
        </View>
        <Text style={styles.progressLabel}>{progress}%</Text>
      </View>
      <Pressable onPress={onContinue} style={styles.continueButton} accessibilityLabel="Continue lesson">
        <Text style={styles.continueText}>Continue →</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: 18,
    padding: 20,
    borderRadius: 28,
    backgroundColor: colors.surface,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.12,
    shadowRadius: 20,
    elevation: 7,
  },
  header: {
    marginBottom: 16,
  },
  sectionLabel: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: '700',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  thumbnail: {
    width: 78,
    height: 78,
    borderRadius: 20,
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  thumbnailText: {
    color: colors.text,
    fontSize: 12,
    fontWeight: '700',
    textAlign: 'center',
  },
  lessonDetails: {
    flex: 1,
  },
  lessonTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
  },
  lessonSubtitle: {
    marginTop: 6,
    fontSize: 14,
    color: colors.textDim,
  },
  lessonMeta: {
    marginTop: 8,
    fontSize: 12,
    color: colors.textDim,
  },
  progressRow: {
    marginTop: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  progressTrack: {
    flex: 1,
    height: 10,
    borderRadius: 999,
    backgroundColor: colors.surfaceSoft,
    marginRight: 12,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.primary,
  },
  progressLabel: {
    fontSize: 12,
    color: colors.textDim,
    minWidth: 35,
    textAlign: 'right',
  },
  continueButton: {
    marginTop: 18,
    alignSelf: 'flex-end',
  },
  continueText: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: '700',
  },
});

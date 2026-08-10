import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../theme/colors';
import { CourseLesson } from '../types/home.types';
import { CourseLessonNode } from './CourseLessonNode';

interface CourseMapProps {
  title: string;
  lessons: CourseLesson[];
  onViewAll: () => void;
}

export function CourseMap({ title, lessons, onViewAll }: CourseMapProps) {
  const currentIndex = lessons.findIndex((lesson) => lesson.status === 'in_progress');

  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>{title}</Text>
        <Pressable onPress={onViewAll} accessibilityLabel="View all course map">
          <Text style={styles.viewAll}>View all &gt;</Text>
        </Pressable>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {lessons.map((lesson, index) => (
          <CourseLessonNode key={lesson.id} lesson={lesson} isCurrent={index === currentIndex} />
        ))}
      </ScrollView>
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
    shadowRadius: 24,
    elevation: 6,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
  },
  title: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '700',
  },
  viewAll: {
    color: colors.primary,
    fontSize: 12,
    fontWeight: '700',
  },
  scrollContent: {
    alignItems: 'center',
  },
});

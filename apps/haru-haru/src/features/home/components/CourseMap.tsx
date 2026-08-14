import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../theme/colors';
import { CourseLesson } from '../types/home.types';
import { CourseLessonNode } from './CourseLessonNode';

interface CourseMapProps {
  title: string;
  lessons: CourseLesson[];
  onNodePress: (route: string) => void;
  onStartPress: () => void;
}

const optionalActivityTypes = new Set(['hangul', 'video', 'song', 'story']);

export function CourseMap({ title, lessons, onNodePress, onStartPress }: CourseMapProps) {
  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>Learning path</Text>
        </View>
        <Pressable onPress={onStartPress} accessibilityLabel="Start learning" style={styles.startButton}>
          <Text style={styles.startText}>Start</Text>
        </Pressable>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView} contentContainerStyle={styles.mapScrollContent}>
        <View style={styles.mapCanvas}>
          <View style={styles.pathLine} />

          {lessons.map((lesson) => {
            const isOptional = optionalActivityTypes.has(lesson.type);
            const isCurrent = lesson.status === 'current' || lesson.status === 'in_progress';

            return (
              <View
                key={lesson.id}
                style={[styles.nodeRow, isOptional && styles.optionalNodeRow]}
              >
                <CourseLessonNode
                  lesson={lesson}
                  isCurrent={isCurrent}
                  compact={isOptional}
                  onPress={() => onNodePress(lesson.destination ?? 'course')}
                />
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: 18,
    padding: 18,
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
    marginBottom: 16,
  },
  title: {
    color: colors.text,
    fontSize: 20,
    fontWeight: '800',
  },
  subtitle: {
    marginTop: 4,
    color: colors.textDim,
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
  startButton: {
    backgroundColor: colors.primary,
    borderRadius: 999,
    paddingHorizontal: 18,
    paddingVertical: 10,
  },
  startText: {
    color: colors.surface,
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
  scrollView: {
    maxHeight: 460,
  },
  mapScrollContent: {
    paddingBottom: 8,
  },
  mapCanvas: {
    position: 'relative',
    paddingVertical: 10,
    minHeight: 420,
  },
  pathLine: {
    position: 'absolute',
    left: '50%',
    top: 18,
    bottom: 14,
    width: 4,
    marginLeft: -2,
    borderRadius: 4,
    backgroundColor: colors.border,
  },
  nodeRow: {
    alignItems: 'center',
    width: '100%',
    zIndex: 1,
  },
  optionalNodeRow: {
    alignItems: 'flex-end',
    paddingRight: 18,
  },
});

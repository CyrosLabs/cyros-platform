import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../theme/colors';
import { CourseLesson } from '../types/home.types';

interface CourseLessonNodeProps {
  lesson: CourseLesson;
  isCurrent: boolean;
}

export function CourseLessonNode({ lesson, isCurrent }: CourseLessonNodeProps) {
  const isLocked = lesson.status === 'locked';
  const isCompleted = lesson.status === 'completed';
  const title = isLocked ? '🔒' : isCompleted ? '✓' : lesson.number.toString();

  return (
    <View style={styles.container}>
      <View style={[styles.node, isCurrent && styles.currentNode, isCompleted && styles.completedNode, isLocked && styles.lockedNode]}>
        <Text style={[styles.nodeText, isCompleted && styles.nodeTextCompleted, isLocked && styles.nodeTextLocked]}>{title}</Text>
      </View>
      <Text style={styles.typeText}>{lesson.title}</Text>
      {lesson.stars != null && lesson.stars > 0 && (
        <View style={styles.starRow}>
          {Array.from({ length: lesson.stars }).map((_, index) => (
            <Text key={index} style={styles.star}>⭐</Text>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: 74,
    marginRight: 16,
  },
  node: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.surfaceSoft,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.border,
  },
  currentNode: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  completedNode: {
    backgroundColor: colors.success,
    borderColor: colors.success,
  },
  lockedNode: {
    backgroundColor: colors.surfaceSoft,
    borderColor: colors.locked,
  },
  nodeText: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '700',
  },
  nodeTextCompleted: {
    color: colors.surface,
  },
  nodeTextLocked: {
    color: colors.textDim,
  },
  typeText: {
    marginTop: 10,
    fontSize: 11,
    color: colors.textDim,
    textAlign: 'center',
  },
  starRow: {
    flexDirection: 'row',
    marginTop: 8,
  },
  star: {
    fontSize: 12,
    marginHorizontal: 1,
  },
});

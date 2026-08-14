import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../theme/colors';
import { CourseLesson } from '../types/home.types';

interface CourseLessonNodeProps {
  lesson: CourseLesson;
  isCurrent: boolean;
  onPress?: () => void;
  compact?: boolean;
}

const getActivityGlyph = (type: CourseLesson['type']) => {
  switch (type) {
    case 'start':
      return '▶';
    case 'lesson':
      return 'L';
    case 'grammar':
      return '문';
    case 'test':
      return 'T';
    case 'hangul':
      return '한';
    case 'video':
      return 'V';
    case 'song':
      return '♪';
    case 'story':
      return '✦';
    default:
      return '•';
  }
};

export function CourseLessonNode({ lesson, isCurrent, onPress, compact = false }: CourseLessonNodeProps) {
  const isLocked = lesson.status === 'locked';
  const isCompleted = lesson.status === 'completed';
  const isCurrentState = isCurrent || lesson.status === 'current';
  const iconLabel = isLocked ? '•' : isCompleted ? '✓' : getActivityGlyph(lesson.type);
  const nodeSize = compact ? 42 : 54;

  return (
    <Pressable
      accessibilityLabel={lesson.title}
      onPress={onPress}
      style={[styles.container, compact && styles.compactContainer]}
    >
      <View
        style={[
          styles.node,
          { width: nodeSize, height: nodeSize, borderRadius: nodeSize / 2 },
          isCurrentState && styles.currentNode,
          isCompleted && styles.completedNode,
          isLocked && styles.lockedNode,
        ]}
      >
        <Text
          style={[
            styles.nodeText,
            isCompleted && styles.nodeTextCompleted,
            isLocked && styles.nodeTextLocked,
            compact && styles.compactNodeText,
          ]}
        >
          {iconLabel}
        </Text>
      </View>
      <Text style={[styles.typeText, compact && styles.compactType]}>{lesson.title}</Text>
      {lesson.stars != null && lesson.stars > 0 && (
        <View style={styles.starRow}>
          {Array.from({ length: lesson.stars }).map((_, index) => (
            <Text key={index} style={styles.star}>★</Text>
          ))}
        </View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 96,
    marginHorizontal: 8,
    marginBottom: 18,
  },
  compactContainer: {
    width: 78,
    marginHorizontal: 4,
    marginBottom: 8,
  },
  node: {
    backgroundColor: colors.surfaceSoft,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.border,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
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
    fontSize: 18,
    fontWeight: '700',
    includeFontPadding: false,
  },
  compactNodeText: {
    fontSize: 14,
  },
  nodeTextCompleted: {
    color: colors.surface,
  },
  nodeTextLocked: {
    color: colors.textDim,
  },
  typeText: {
    marginTop: 8,
    fontSize: 11,
    textAlign: 'center',
    color: colors.textDim,
    fontWeight: '600',
  },
  compactType: {
    fontSize: 10,
  },
  starRow: {
    flexDirection: 'row',
    marginTop: 6,
  },
  star: {
    fontSize: 12,
    color: colors.reward,
    marginHorizontal: 1,
  },
});

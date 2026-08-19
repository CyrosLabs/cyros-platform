import React from 'react';
import { Image, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';
import { CourseLesson } from '../types/home.types';
import roadMapBackground from '../assets/road_map_level_1.png';
import startIcon from '../assets/start_icon.png';
import grammarIcon from '../assets/grammar_icon.png';
import testIcon from '../assets/test_icon.png';
import hangeulIcon from '../assets/hangeul_icon.jpg';
import videoIcon from '../assets/video_icon.png';
import songIcon from '../assets/song_icon.png';
import storyIcon from '../assets/story_icon.png';
import completeLevelIcon from '../assets/complete_level_icon.png';
import incompleteLevelIcon from '../assets/incomplete_level_icon.png';
import AvatarIcon from '../assets/avatar_icon.svg';

interface CourseMapProps {
  lessons: CourseLesson[];
  onNodePress: (route: string) => void;
  onStartPress: () => void;
}

const ROADMAP_NODE_SIZE = 64;
const optionalTypes = new Set(['hangul', 'video', 'song', 'story']);
const layouts: Record<string, { left: string; top: string }> = {
  test: { left: '50%', top: '11%' },
  story: { left: '27%', top: '24%' },
  lesson: { left: '50%', top: '34%' },
  song: { left: '75%', top: '46%' },
  grammar: { left: '50%', top: '58%' },
  video: { left: '20%', top: '68%' },
  hangul: { left: '50%', top: '76%' },
  start: { left: '50%', top: '90%' },
};

function getNodeImage(type: CourseLesson['type'], status: CourseLesson['status']) {
  if (type === 'start') return startIcon;
  if (type === 'grammar') return grammarIcon;
  if (type === 'test') return testIcon;
  if (type === 'hangul') return hangeulIcon;
  if (type === 'video') return videoIcon;
  if (type === 'song') return songIcon;
  if (type === 'story') return storyIcon;
  if (status === 'completed') return completeLevelIcon;
  return incompleteLevelIcon;
}

function RoadmapNode({
  lesson,
  onPress,
  isCurrent,
}: {
  lesson: CourseLesson;
  onPress: () => void;
  isCurrent: boolean;
}) {
  const optional = optionalTypes.has(lesson.type);
  const completed = lesson.status === 'completed';
  const locked = lesson.status === 'locked';
  const current = lesson.status === 'current' || isCurrent;
  const label = lesson.type === 'start' ? 'Start' : lesson.title;

  return (
    <Pressable
      accessibilityLabel={lesson.type === 'start' ? 'Start learning' : lesson.title}
      onPress={onPress}
      style={[
        styles.nodeButton,
        optional && styles.optionalNode,
        locked && styles.lockedNode,
        completed && styles.completedNode,
        current && styles.currentNode,
      ]}
    >
      {current && (
        <View style={styles.companion}>
          <AvatarIcon width={31} height={31} />
        </View>
      )}

      <View style={[styles.nodeBody, optional && styles.optionalBody, completed && styles.completedBody, locked && styles.lockedBody, current && styles.activeBody]}>
        <Image source={getNodeImage(lesson.type, lesson.status)} style={styles.icon} />
      </View>

      <Text style={[styles.nodeLabel, optional && styles.optionalLabel]}>{label}</Text>
    </Pressable>
  );
}

export function CourseMap({ lessons, onNodePress, onStartPress }: CourseMapProps) {
  return (
    <View style={styles.mapContainer}>
      <ImageBackground source={roadMapBackground} style={styles.background} imageStyle={styles.backgroundImage}>
        <View pointerEvents="none" style={styles.pathLayer}>
          <View style={[styles.requiredPath, { left: '50%', top: '11%', height: '80%' }]} />
          <View style={[styles.optionalPath, { left: '23%', top: '20%', width: '16%', borderBottomWidth: 2 }]} />
          <View style={[styles.optionalPath, { left: '18%', top: '62%', width: '16%', borderBottomWidth: 2 }]} />
          <View style={[styles.optionalPath, { left: '63%', top: '47%', width: '18%', borderBottomWidth: 2 }]} />
          <View style={[styles.optionalPath, { left: '64%', top: '47%', height: '16%', borderLeftWidth: 2 }]} />
          <View style={[styles.optionalPath, { left: '20%', top: '25%', height: '15%', borderLeftWidth: 2 }]} />
        </View>

        {lessons.map((lesson) => {
          const layout = layouts[lesson.type] ?? { left: '50%', top: '50%' };
          const isCurrent = lesson.status === 'current' || lesson.status === 'in_progress';
          const route = lesson.type === 'start' ? 'lesson' : lesson.destination ?? 'course';

          const placementStyle = {
            left: layout.left as unknown as number,
            top: layout.top as unknown as number,
          };

          return (
            <View key={lesson.id} style={[styles.nodePlacement, placementStyle]}>
              <RoadmapNode
                lesson={lesson}
                isCurrent={isCurrent}
                onPress={() => (lesson.type === 'start' ? onStartPress() : onNodePress(route))}
              />
            </View>
          );
        })}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
    borderRadius: 28,
    overflow: 'hidden',
    marginHorizontal: 10,
    marginTop: 8,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.12,
    shadowRadius: 18,
    elevation: 6,
  },
  background: {
    width: '100%',
    height: '100%',
    minHeight: 620,
  },
  backgroundImage: {
    resizeMode: 'cover',
  },
  pathLayer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 0,
  },
  requiredPath: {
    position: 'absolute',
    width: 4,
    borderRadius: 999,
    backgroundColor: '#8B6CEB',
    opacity: 0.9,
    shadowColor: '#7A5EF5',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.35,
    shadowRadius: 6,
    elevation: 2,
  },
  optionalPath: {
    position: 'absolute',
    borderStyle: 'dashed',
    borderColor: '#B99AEF',
    borderRadius: 999,
    opacity: 0.9,
  },
  nodePlacement: {
    position: 'absolute',
    transform: [{ translateX: -ROADMAP_NODE_SIZE / 2 }, { translateY: -ROADMAP_NODE_SIZE / 2 }],
    zIndex: 2,
  },
  nodeButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: ROADMAP_NODE_SIZE,
    minHeight: ROADMAP_NODE_SIZE + 24,
    zIndex: 2,
  },
  currentNode: {
    zIndex: 3,
  },
  optionalNode: {
    opacity: 1,
  },
  lockedNode: {
    opacity: 0.62,
  },
  completedNode: {
    opacity: 1,
  },
  nodeBody: {
    width: ROADMAP_NODE_SIZE,
    height: ROADMAP_NODE_SIZE,
    borderRadius: ROADMAP_NODE_SIZE / 2,
    backgroundColor: '#F3EEFF',
    borderWidth: 2,
    borderColor: '#E5DFFF',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  activeBody: {
    backgroundColor: '#F6F0FF',
    borderColor: '#A28AF7',
    shadowColor: '#7C5CEF',
    shadowOpacity: 0.18,
    shadowRadius: 10,
  },
  optionalBody: {
    backgroundColor: '#F5F1FF',
    borderColor: '#DCCAFD',
  },
  completedBody: {
    backgroundColor: '#EAFBEF',
    borderColor: '#9FD9AE',
  },
  lockedBody: {
    backgroundColor: '#EEE8FF',
    borderColor: '#D7C9F7',
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  nodeLabel: {
    marginTop: 8,
    fontSize: 9,
    color: '#2F2640',
    fontWeight: '800',
    letterSpacing: 0.8,
    textAlign: 'center',
    textTransform: 'uppercase',
    maxWidth: 72,
  },
  optionalLabel: {
    color: '#3E3556',
  },
  companion: {
    position: 'absolute',
    right: -6,
    top: -18,
    zIndex: 4,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FFFDF5',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#7B5BFF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.22,
    shadowRadius: 8,
    elevation: 4,
  },
});

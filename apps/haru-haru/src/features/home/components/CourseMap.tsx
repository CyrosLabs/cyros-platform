import React from 'react';
import { Image, ImageBackground, ImageSourcePropType, Pressable, StyleSheet, Text, View } from 'react-native';
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

interface CourseMapProps {
  title: string;
  lessons: CourseLesson[];
  onNodePress: (route: string) => void;
  onStartPress: () => void;
}

const activityImageMap: Record<string, ImageSourcePropType | null> = {
  lesson: null,
  grammar: grammarIcon,
  test: testIcon,
  hangul: hangeulIcon,
  video: videoIcon,
  song: songIcon,
  story: storyIcon,
};

const nodeLayout: Record<string, { left: string; top: string }> = {
  start: { left: '49%', top: '83%' },
  lesson: { left: '51%', top: '55%' },
  grammar: { left: '61%', top: '58%' },
  test: { left: '50%', top: '14%' },
  hangul: { left: '41%', top: '76%' },
  video: { left: '17%', top: '68%' },
  song: { left: '73%', top: '52%' },
  story: { left: '20%', top: '32%' },
};

function getNodeSource(lesson: CourseLesson): ImageSourcePropType {
  if (lesson.type === 'start') {
    return startIcon;
  }

  if (lesson.type === 'lesson' || lesson.type === 'grammar' || lesson.type === 'test') {
    return lesson.status === 'completed' ? completeLevelIcon : incompleteLevelIcon;
  }

  return activityImageMap[lesson.type] ?? incompleteLevelIcon;
}

export function CourseMap({ lessons, onNodePress, onStartPress }: CourseMapProps) {
  return (
    <View style={styles.mapContainer}>
      <ImageBackground source={roadMapBackground} style={styles.mapBackground} imageStyle={styles.mapImage}>
        {lessons.map((lesson) => {
          const isStart = lesson.type === 'start';
          const layout = nodeLayout[lesson.type] ?? { left: '50%', top: '50%' };
          const isStatusNode = ['lesson', 'grammar', 'test'].includes(lesson.type);
          const label = isStart ? 'Start' : lesson.title;

          return (
            <Pressable
              key={lesson.id}
              accessibilityLabel={isStart ? 'Start learning' : label}
              onPress={() => (isStart ? onStartPress() : onNodePress(lesson.destination ?? 'course'))}
              style={[
                styles.nodeButton,
                { left: layout.left as unknown as number, top: layout.top as unknown as number },
                isStatusNode && styles.statusNode,
              ]}
            >
              {isStart ? (
                <Image source={startIcon} style={styles.startButton} />
              ) : (
                <>
                  {lesson.type === 'grammar' ? (
                    <Image source={grammarIcon} style={styles.activityIcon} />
                  ) : lesson.type === 'test' ? (
                    <Image source={testIcon} style={styles.activityIcon} />
                  ) : lesson.type === 'hangul' ? (
                    <Image source={hangeulIcon} style={styles.activityIcon} />
                  ) : lesson.type === 'video' ? (
                    <Image source={videoIcon} style={styles.activityIcon} />
                  ) : lesson.type === 'song' ? (
                    <Image source={songIcon} style={styles.activityIcon} />
                  ) : lesson.type === 'story' ? (
                    <Image source={storyIcon} style={styles.activityIcon} />
                  ) : (
                    <Image source={getNodeSource(lesson)} style={styles.statusIcon} />
                  )}

                  {!isStart && (
                    <Text style={styles.nodeLabel}>{lesson.title}</Text>
                  )}
                </>
              )}
            </Pressable>
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
    marginHorizontal: 8,
    marginBottom: 10,
  },
  mapBackground: {
    width: '100%',
    height: '100%',
    minHeight: 520,
  },
  mapImage: {
    resizeMode: 'cover',
  },
  nodeButton: {
    position: 'absolute',
    transform: [{ translateX: -30 }, { translateY: -30 }],
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusNode: {
    transform: [{ translateX: -26 }, { translateY: -26 }],
  },
  startButton: {
    width: 100,
    height: 42,
    resizeMode: 'contain',
  },
  activityIcon: {
    width: 54,
    height: 54,
    resizeMode: 'contain',
  },
  statusIcon: {
    width: 46,
    height: 46,
    resizeMode: 'contain',
  },
  nodeLabel: {
    marginTop: 6,
    fontSize: 10,
    fontWeight: '800',
    color: '#2F2640',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
});

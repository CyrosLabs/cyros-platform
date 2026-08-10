import React from 'react';
import { StyleSheet, View } from 'react-native';

interface CompanionAvatarProps {
  size?: 'small' | 'medium' | 'large';
}

const sizeMap = {
  small: 90,
  medium: 120,
  large: 160,
};

export function CompanionAvatar({ size = 'large' }: CompanionAvatarProps) {
  const dimension = sizeMap[size];
  return (
    <View style={[styles.container, { width: dimension, height: dimension }]}>      
      <View style={[styles.ear, styles.leftEar]} />
      <View style={[styles.ear, styles.rightEar]} />
      <View style={styles.head}>
        <View style={styles.eye} />
        <View style={styles.eye} />
        <View style={styles.nose} />
      </View>
      <View style={styles.body} />
      <View style={styles.tail} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  head: {
    width: 120,
    height: 110,
    borderRadius: 60,
    backgroundColor: '#fff0ef',
    borderWidth: 2,
    borderColor: '#ffd1dc',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  ear: {
    width: 40,
    height: 58,
    borderRadius: 24,
    backgroundColor: '#ffe2ea',
    position: 'absolute',
    top: 10,
    zIndex: 0,
  },
  leftEar: {
    left: 18,
    transform: [{ rotate: '-25deg' }],
  },
  rightEar: {
    right: 18,
    transform: [{ rotate: '25deg' }],
  },
  eye: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#5d3b50',
    marginHorizontal: 12,
  },
  nose: {
    width: 18,
    height: 14,
    borderRadius: 10,
    backgroundColor: '#ce7a8a',
    marginTop: 8,
  },
  body: {
    width: 140,
    height: 80,
    borderRadius: 70,
    backgroundColor: '#fff1f4',
    borderWidth: 2,
    borderColor: '#ffd1dc',
    position: 'absolute',
    bottom: 10,
  },
  tail: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ffe2ea',
    position: 'absolute',
    bottom: 6,
    right: 6,
    transform: [{ rotate: '35deg' }],
  },
});

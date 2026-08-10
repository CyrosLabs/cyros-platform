import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Companion } from '../types/home.types';
import { CompanionAvatar } from './CompanionAvatar';
import { colors } from '../../../theme/colors';

interface CompanionSectionProps {
  companion: Companion;
}

export function CompanionSection({ companion }: CompanionSectionProps) {
  return (
    <View style={styles.container}>
      <View style={styles.illustrationCard}>
        <View style={styles.wordBubble}>
          <Text style={styles.bubbleText}>{companion.message.korean}</Text>
          <Text style={styles.bubbleSubText}>{companion.message.english}</Text>
        </View>
        <CompanionAvatar size="large" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 18,
    backgroundColor: colors.surface,
    borderRadius: 28,
    padding: 18,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.12,
    shadowRadius: 22,
    elevation: 6,
  },
  illustrationCard: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  wordBubble: {
    position: 'absolute',
    top: 12,
    right: 20,
    backgroundColor: colors.secondary,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 22,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
    zIndex: 2,
  },
  bubbleText: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '700',
  },
  bubbleSubText: {
    marginTop: 4,
    color: colors.textDim,
    fontSize: 13,
  },
});

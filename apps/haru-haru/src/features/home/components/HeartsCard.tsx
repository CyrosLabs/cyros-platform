import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../theme/colors';
import { Hearts } from '../types/home.types';

interface HeartsCardProps {
  hearts: Hearts;
}

export function HeartsCard({ hearts }: HeartsCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Text style={styles.title}>Hearts</Text>
        <Pressable style={styles.addButton} onPress={() => {}} accessibilityLabel="Recharge hearts">
          <Text style={styles.addText}>+</Text>
        </Pressable>
      </View>
      <View style={styles.heartRow}>
        {Array.from({ length: hearts.maximum }).map((_, index) => {
          const filled = index < hearts.current;
          return (
            <Text key={index} style={[styles.heart, filled ? styles.heartFilled : styles.heartEmpty]}>
              ❤️
            </Text>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    padding: 18,
    borderRadius: 24,
    backgroundColor: colors.surface,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 18,
    elevation: 4,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  title: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.text,
  },
  addButton: {
    width: 34,
    height: 34,
    borderRadius: 12,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addText: {
    color: colors.surface,
    fontSize: 20,
    fontWeight: '700',
  },
  heartRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  heart: {
    fontSize: 24,
    marginRight: 6,
  },
  heartFilled: {
    opacity: 1,
  },
  heartEmpty: {
    opacity: 0.3,
  },
});

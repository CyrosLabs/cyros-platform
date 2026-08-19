import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../theme/colors';

interface PlaceholderScreenProps {
  title: string;
  subtitle: string;
  onBack?: () => void;
}

export function PlaceholderScreen({ title, subtitle, onBack }: PlaceholderScreenProps) {
  return (
    <View style={styles.container}>
      {onBack && (
        <Pressable onPress={onBack} style={styles.backButton} accessibilityLabel="Back">
          <Text style={styles.backText}>Back</Text>
        </Pressable>
      )}

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  backButton: {
    position: 'absolute',
    top: 24,
    left: 24,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: colors.surface,
    shadowColor: colors.shadow,
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  backText: {
    color: colors.text,
    fontWeight: '700',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: colors.textDim,
    textAlign: 'center',
    maxWidth: 320,
    lineHeight: 22,
  },
});

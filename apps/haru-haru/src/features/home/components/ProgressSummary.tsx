import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../theme/colors';
import { ProgressMetric } from '../types/home.types';

interface ProgressSummaryProps {
  metrics: ProgressMetric[];
}

export function ProgressSummary({ metrics }: ProgressSummaryProps) {
  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>Your Progress</Text>
        <Text style={styles.viewAll}>View stats &gt;</Text>
      </View>
      <View style={styles.metricsRow}>
        {metrics.map((metric) => (
          <View key={metric.label} style={styles.metricItem}>
            <Text style={styles.metricValue}>{metric.value}</Text>
            <Text style={styles.metricLabel}>{metric.subtitle}</Text>
          </View>
        ))}
      </View>
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
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
  },
  viewAll: {
    fontSize: 12,
    color: colors.primary,
    fontWeight: '700',
  },
  metricsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  metricItem: {
    flex: 1,
    minWidth: 80,
    padding: 14,
    borderRadius: 20,
    backgroundColor: colors.surfaceSoft,
    marginBottom: 14,
  },
  metricValue: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 6,
  },
  metricLabel: {
    fontSize: 12,
    color: colors.textDim,
  },
});

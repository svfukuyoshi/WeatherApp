import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { styles } from './DetailItem.styles';

interface DetailItemProps {
  label: string;
  value: string | number;
}

export const DetailItem: React.FC<DetailItemProps> = ({ label, value }) => (
  <View style={styles.detailItem}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);
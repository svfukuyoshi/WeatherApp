import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { styles } from './DetailsScreen.styles';
import { DetailItem } from './components/DetailItem';

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;

export const DetailsScreen: React.FC<Props> = ({ route }) => {
  const { weather } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{weather.name} Weather Details</Text>

      <View style={styles.detailCard}>
        <DetailItem label="Temperature" value={`${weather.main.temp}°C`} />
        <DetailItem label="Min Temp" value={`${weather.main.temp_min}°C`} />
        <DetailItem label="Max Temp" value={`${weather.main.temp_max}°C`} />
        <DetailItem label="Humidity" value={`${weather.main.humidity}%`} />
        <DetailItem label="Wind Speed" value={`${weather.wind.speed} m/s`} />
        <DetailItem label="Weather" value={weather.weather[0].description} />
      </View>
    </ScrollView>
  );
};

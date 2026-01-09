import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { WeatherModel } from '../../model/Weather';
import { getTempColor, getTempBackground } from '../../utils/weather';
import { styles } from './WeatherCard.styles';

interface Props {
  weather: WeatherModel;
  onPress: () => void;
}

export const WeatherCard: React.FC<Props> = ({ weather, onPress }) => (
  <View style={[styles.card, { backgroundColor: getTempBackground(weather.main.temp) }]}>
    <Text style={styles.city}>{weather.name}</Text>
    <Text style={[styles.temp, { color: getTempColor(weather.main.temp) }]}>
      {weather.main.temp}°C
    </Text>
    <Text style={styles.description}>{weather.weather[0].description}</Text>

    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>View Details</Text>
    </TouchableOpacity>
  </View>
);

import React, { useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import { useWeatherViewModel } from '../viewmodel/useWeather';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { styles } from './SearchScreen.styles';
import { CityStorage } from '../storage/city';
import { WeatherCard } from './components/WeatherCard';

export const SearchScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { city, setCity, weather, setWeather, loading, error, searchWeather } =
    useWeatherViewModel();

  // Load last saved weather on startup
  useEffect(() => {
    (async () => {
      const savedWeather = await CityStorage.getLastWeather();
      if (savedWeather) {
        setWeather(savedWeather);
        setCity(savedWeather.name); // update input field
      }
    })();
  }, []);

  const goToDetails = () => {
    if (weather) {
      navigation.navigate('Details', { weather });
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Enter city"
          value={city}
          onChangeText={setCity}
          style={styles.input}
          returnKeyType="search"
          onSubmitEditing={searchWeather}
        />
        <TouchableOpacity onPress={searchWeather} style={styles.searchButton}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>

      {/* Loading */}
      {loading && (
        <ActivityIndicator size="large" color="#1E90FF" style={{ marginTop: 20 }} />
      )}

      {/* Error */}
      {error && <Text style={styles.error}>{error}</Text>}

      {/* Weather Result */}
      {weather && !loading && (
        <WeatherCard weather={weather} onPress={goToDetails} />
      )}
    </ScrollView>
  );
};

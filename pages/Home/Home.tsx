import { Alert, Text, View } from 'react-native';
import { styles } from './Home.style';
import { Coordinates } from '../../interfaces/weather';
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from 'expo-location';
import { useEffect, useState } from 'react';
import { WeatherAPI } from '../../api/weather';
import { Txt } from '../../components/Txt/Txt';
import { WeatherBasic } from '../../components/WeatherBasic/WeatherBasic';
import { getWeatherInterpretation } from '../../services/weather_service';
import { WeatherAdvanced } from '../../components/WeatherAdvanced/WeatherAdvanced';
import { useNavigation } from '@react-navigation/native';
import { Container } from '../../components/Container/Container';
import { SearchBar } from '../../components/SearchBar/SearchBar';

export function Home() {
  const [coords, setCoords] = useState<Coordinates>();
  const [weather, setWeather] = useState<any>();
  const [city, setCity] = useState();
  const currentWeather = weather?.current_weather;
  const nav = useNavigation();

  useEffect(() => {
    getUsersCoords();
  }, []);

  useEffect(() => {
    if (coords) {
      FetchWeather(coords);
      fetchchCity(coords);
    }
  }, [coords]);

  async function getUsersCoords() {
    let { status } = await requestForegroundPermissionsAsync();
    if (status === 'granted') {
      const location = await getCurrentPositionAsync();
      const lat = location.coords.latitude;
      const lng = location.coords.longitude;
      setCoords({ lat: lat, lng: lng });
    } else {
      setCoords({ lat: '48.85', lng: '2.35' });
    }
  }

  async function FetchWeather(coordinates: Coordinates) {
    const weatherResponse = await WeatherAPI.fetchWeather(coordinates);
    setWeather(weatherResponse);
  }

  async function fetchchCity(coordinates: Coordinates) {
    const cityResponse = await WeatherAPI.fetchCityFromCoords(coordinates);
    setCity(cityResponse);
  }

  async function fetchchCoordsByCity(city: string) {
    try {
      const coords = await WeatherAPI.fetchCoordsFromCity(city);
      setCoords(coords);
    } catch (error: any) {
      Alert.alert('Oups !', error);
    }
  }

  function goToForecastPage() {
    nav.navigate('Forecast', { city, ...weather?.daily });
  }
  return currentWeather ? (
    <Container>
      <View style={styles.weather_basic}>
        <WeatherBasic
          temperature={Math.round(currentWeather?.temperature)}
          city={city || ''}
          interpretation={getWeatherInterpretation(currentWeather?.weathercode)}
          onPress={goToForecastPage}
        />
      </View>
      <View style={styles.searchbar_container}>
        <SearchBar onSubmit={(e) => fetchchCoordsByCity(e)} />
      </View>
      <View style={styles.weather_advanced}>
        <WeatherAdvanced
          dusk={weather?.daily?.sunrise[0].split('T')[1]}
          dawn={weather?.daily?.sunset[0].split('T')[1]}
          wind={currentWeather?.windspeed}
        />
      </View>
    </Container>
  ) : null;
}

import axios from 'axios';
import { Coordinates } from '../interfaces/weather';
export class WeatherAPI {
  static async fetchWeather(coords: Coordinates) {
    return (
      await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lng}&daily=weathercode,temperature_2m_max,sunrise,sunset,wind_speed_10m_max&timezone=auto&current_weather=true`
      )
    ).data;
  }
  static async fetchCityFromCoords(coords: Coordinates) {
    const {
      address: { city, village, town },
    } = (
      await axios.get(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${coords.lat}&lon=${coords.lng}`
      )
    ).data;
    return city || village || town;
  }

  static async fetchCoordsFromCity(city: string) {
    try {
      const { latitude: lat, longitude: lng } = (
        await axios.get(
          `https://geocoding-api.open-meteo.com/v1/search?name=${city}&language=fr&count=1`
        )
      ).data.results[0];
      return { lat, lng };
    } catch (error) {
      throw 'pas de coordonnées pour la recherche: **' + city + '**';
    }
  }
}

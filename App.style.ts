import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImg: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20,
  },
  img: {
    opacity: 0.75,
  },
});

// ('https://api.open-meteo.com/v1/forecast?latitude=48.85&longitude=2.35&daily=weathercode,temperature_2m_max,sunrise,sunset,wind_speed_10m_max&timezone=auto&current_weather=true');

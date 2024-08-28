import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  clock: {
    alignItems: 'flex-end',
    color: 'white',
  },
  label: {
    alignSelf: 'flex-end',
    transform: [{ rotate: '-90deg' }],
    fontSize: 20,
  },
  image: {
    height: 90,
    width: 90,
  },
  temperature_box: {
    alignItems: 'baseline',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  temperature: {
    fontSize: 150,
  },
});

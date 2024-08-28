import { View } from 'react-native';
import { Txt } from '../Txt/Txt';
import { styles } from './WeatherAdvanced.style';

interface WeatherAdvancedProps {
  dusk: string;
  dawn: string;
  wind: number;
}

export function WeatherAdvanced({ dusk, dawn, wind }: WeatherAdvancedProps) {
  return (
    <View style={styles.container}>
      <View style={styles.container_information}>
        <Txt style={styles.value}>{dusk}</Txt>
        <Txt style={styles.label}>Aube</Txt>
      </View>
      <View style={styles.container_information}>
        <Txt style={styles.value}>{dawn}</Txt>
        <Txt style={styles.label}>Crépuscule</Txt>
      </View>
      <View style={styles.container_information}>
        <Txt style={styles.value}>{wind} km/h</Txt>
        <Txt style={styles.label}>Vent</Txt>
      </View>
    </View>
  );
}

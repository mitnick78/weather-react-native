import { Image, TouchableOpacity, View } from 'react-native';
import { styles } from './WeatherBasic.style';
import { Txt } from '../Txt/Txt';
import { Clock } from '../Clock/Clock';

interface WeatherBasicProps {
  temperature: number;
  city: string;
  interpretation: any;
  onPress: () => void;
}

export function WeatherBasic({
  temperature,
  city,
  interpretation,
  onPress,
}: WeatherBasicProps) {
  return (
    <>
      <View style={styles.clock}>
        <Clock />
      </View>

      <Txt>{city}</Txt>
      <Txt style={styles.label}>{interpretation?.label}</Txt>

      <View style={styles.temperature_box}>
        <TouchableOpacity onPress={onPress}>
          <Txt style={styles.temperature}>{temperature}°</Txt>
        </TouchableOpacity>
        <Image style={styles.image} source={interpretation?.image} />
      </View>
    </>
  );
}

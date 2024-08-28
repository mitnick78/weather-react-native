import { Image, ImageSourcePropType, View } from 'react-native';
import { Txt } from '../Txt/Txt';
import { styles } from './ForecastListItem.style';

interface ForecastListItemProps {
  image: ImageSourcePropType;
  day: string;
  date: string;
  temperature: any;
}

export function ForecastListItem({
  image,
  day,
  date,
  temperature,
}: ForecastListItemProps) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <Txt style={styles.day}>{day}</Txt>
      <Txt style={styles.date}>{date}</Txt>
      <Txt style={styles.temperature}>{temperature}°</Txt>
    </View>
  );
}

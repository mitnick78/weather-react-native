import { Txt } from '../../components/Txt/Txt';
import { styles } from './Forecast.style';
import { Container } from '../../components/Container/Container';
import { useNavigation, useRoute } from '@react-navigation/native';
import { TouchableOpacity, View } from 'react-native';
import { ForecastListItem } from '../../components/ForecastListItem/ForecastListItem';
import cloud from '../../assets/clouds.png';
import { getWeatherInterpretation } from '../../services/weather_service';
import { dateToDDMM, DAYS } from '../../services/date-service';

export function Forecast() {
  const { params } = useRoute<any>();
  const nav = useNavigation();
  const backButton = (
    <TouchableOpacity style={styles.btn_back} onPress={() => nav.goBack()}>
      <Txt> {'<'}</Txt>
    </TouchableOpacity>
  );
  const header = (
    <View style={styles.header}>
      {backButton}
      <View style={styles.header_texts}>
        <Txt> {params?.city}</Txt>
        <Txt style={styles.subtitle}>Prévison de 7 jours</Txt>
      </View>
    </View>
  );

  const forecastList = (
    <View style={styles.forecastList}>
      {params?.time.map((time: any, index: number) => {
        const code = params.weathercode[index];
        const image = getWeatherInterpretation(code)?.image;
        const date = new Date(time);
        const day = DAYS[date.getDay()];
        const d = dateToDDMM(date);
        const temperature = params.temperature_2m_max[index];
        return (
          <ForecastListItem
            key={time}
            image={image}
            day={day}
            date={d}
            temperature={temperature.toFixed(0)}
          />
        );
      })}
    </View>
  );
  return (
    <Container>
      {header}
      {forecastList}
    </Container>
  );
}

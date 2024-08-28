import { styles } from './clock.style';
import { NowDate } from '../../services/date-service';
import { Txt } from '../Txt/Txt';
import { useEffect, useState } from 'react';

export function Clock() {
  const [time, setTime] = useState(NowDate());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(NowDate());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <>
      <Txt style={styles.time}>{time}</Txt>
    </>
  );
}

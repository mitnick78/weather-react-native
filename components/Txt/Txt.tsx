import { Text, useWindowDimensions } from 'react-native';
import { styles } from './Txt.style';

interface TxtProps {
  children: React.ReactNode;
  style?: any;
}
export function Txt({ children, style }: TxtProps) {
  const { height } = useWindowDimensions();
  const fontSize = style?.fontSize || styles.text.fontSize;
  return (
    <Text
      style={[styles.text, style, { fontSize: fontSize * 0.00118 * height }]}
    >
      {children}
    </Text>
  );
}

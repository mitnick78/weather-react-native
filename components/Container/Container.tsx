import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../../App.style';
import { ImageBackground } from 'react-native';
import bg from '../../assets/background.png';

interface ContainerProps {
  children: React.ReactNode;
}
export function Container({ children }: ContainerProps) {
  return (
    <ImageBackground
      source={bg}
      style={styles.backgroundImg}
      imageStyle={styles.img}
    >
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>{children}</SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}

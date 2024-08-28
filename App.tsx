import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './App.style';
import { Home } from './pages/Home/Home';
import { ImageBackground } from 'react-native';
import AlataRegular from './assets/font/Alata-Regular.ttf';
import { useFonts } from 'expo-font';
import { ExtendedTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Forecast } from './pages/Forecast/Forecast';
import { Container } from './components/Container/Container.js';

const Stack = createNativeStackNavigator();
const navTheme: ExtendedTheme = {
  dark: false,
  colors: {
    background: 'transparent',
  },
};
export default function App() {
  const [isFontLoader] = useFonts({ 'Alata-regular': AlataRegular });
  return (
    <NavigationContainer theme={navTheme}>
      {isFontLoader ? (
        <Stack.Navigator
          screenOptions={{ animation: 'fade', headerShown: false }}
          initialRouteName="Home"
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Forecast" component={Forecast} />
        </Stack.Navigator>
      ) : null}
    </NavigationContainer>
  );
}

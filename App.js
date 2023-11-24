import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import { StatusBar } from 'expo-status-bar';
import Splash from './screens/Splash';
import MovieDetailsScreen from './screens/MovieDetailsScreen';
import SearchScreen from './screens/SearchScreen';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash"
          options={{ headerShown: false }} >
          <Stack.Screen options={{ headerShown: false }} name='Splash' component={Splash} />
          <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={MovieDetailsScreen} />
          <Stack.Screen name="Search" component={SearchScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar hidden={true} />
    </>
  );
};

import { StatusBar } from 'react-native';
import Home from './src/screen/Home';

export default function App(){
  return (
    <>
      <StatusBar 
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
      />
      <Home />
    </>
  );
}


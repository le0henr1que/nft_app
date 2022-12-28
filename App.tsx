import { StatusBar } from 'expo-status-bar';
import { Background } from './src/Components/Background'
import { Login } from './src/screens/Login'

export default function App() {
  return (
    <Background>
        <StatusBar
          // barStyle="light-content"
          backgroundColor='transparent'
          translucent
        />
        <Login/>
    </Background>
  );
}


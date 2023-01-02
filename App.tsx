import { StatusBar } from 'expo-status-bar';
import { Background } from './src/Components/Background'

import { TabNavigation } from "./src/Navigation/TabNavigation"



export default function App() {
  return (
    <TabNavigation>
      
      <Background>
          <StatusBar
            backgroundColor='transparent'
            translucent
          />
        
      </Background>
    </TabNavigation>
  );
}


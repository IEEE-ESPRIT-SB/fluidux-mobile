# FLUIDUX-Mobile-App
## Description

## Installation
```bash
npm install # Install dependencies
```

## Usage
```bash
npm start # Start the app
```

## Documentation
* #### Loading Custom Fonts (App.js)
```js
import {Text} from "react-native";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
    useFonts,
} from '@expo-google-fonts/inter';

// ... other imports

export default function App() {
    let [fontsLoaded] = useFonts({
        'Inter-100': Inter_100Thin,
        'Inter-200': Inter_200ExtraLight,
        'Inter-300': Inter_300Light,
        'Inter-400': Inter_400Regular,
        'Inter-500': Inter_500Medium,
        'Inter-600': Inter_600SemiBold,
        'Inter-700': Inter_700Bold,
        'Inter-800': Inter_800ExtraBold,
        'Inter-900': Inter_900Black,
    });

    if (!fontsLoaded)
        return <Text>Loading ...</Text>;
    
    return (
        <SafeAreaProvider>
            ...
        </SafeAreaProvider>
    );
}
```
* #### Navigation Stack (App.js)
```js
import {SafeAreaProvider} from "react-native-safe-area-context";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import AuthStack from "./stacks/AuthStack";
import MainStack from "./stacks/MainStack";
import {Text} from "react-native";

// ... other imports

export default function App() {
    const Stack = createStackNavigator();
    // ... other code
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator
                    //initial Route to Load
                    initialRouteName="AuthStack"
                    screenOptions={{
                        //header Visibility
                        headerShown: false
                    }}
                >
                    {/*Auth Stack Contains Get Started - Login - Register Pages*/}
                    <Stack.Screen name="AuthStack" component={AuthStack}/>
                    {/*Auth Stack Contains Main Pages*/}
                    <Stack.Screen name="MainStack" component={MainStack}/>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}

```


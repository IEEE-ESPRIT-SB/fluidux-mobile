import {createNativeStackNavigator} from "@react-navigation/native-stack";
import GetStarted from "../screens/GetStarted";
import Auth from "../screens/Auth";


const AuthStack = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            initialRouteName="GetStarted"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="GetStarted" component={GetStarted}/>
            <Stack.Screen name="Auth" component={Auth}/>
        </Stack.Navigator>
    );
}

export default AuthStack;
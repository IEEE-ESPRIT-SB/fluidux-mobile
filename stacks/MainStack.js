import {createStackNavigator} from "@react-navigation/stack";
import Home from "../screens/Home";
import Profile from "../screens/Profile";

const MainStack = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    );
}

export default MainStack;
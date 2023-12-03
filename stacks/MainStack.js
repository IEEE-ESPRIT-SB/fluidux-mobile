import {createDrawerNavigator, DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import {View, Image} from "react-native";
import LogoW from "../assets/Logo_W.png";
import colors from "../assets/colors.json";
import AddValve from "../screens/AddValve";
import Notifications from "../screens/Notifications";

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
    return (
        <DrawerContentScrollView {...props} style={{backgroundColor: colors.primary}}>
            <View style={{alignItems: 'center', padding: 16}}>
                <Image
                    source={LogoW}
                    style={{width: 100, height: 100, borderRadius: 50}}
                />
            </View>
            <DrawerItemList {...props}/>
        </DrawerContentScrollView>
    );
};


const MainDrawer = () => {
    return (
        <Drawer.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                drawerLabelStyle: {
                    color: colors.white,
                    fontFamily: "Inter-700",
                },
                drawerActiveBackgroundColor: colors.secondary,
            }}
            drawerContent={(props) => <CustomDrawerContent {...props} />}


        >
            <Drawer.Screen name="Home" component={Home}/>
            <Drawer.Screen name="AddValve" component={AddValve}/>
            <Drawer.Screen name="Notifications" component={Notifications}/>
            <Drawer.Screen name="Profile" component={Profile}/>
        </Drawer.Navigator>
    );
};

export default MainDrawer;

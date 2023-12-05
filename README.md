# FluiDux-mobile

## Description

High water and electricity bills ? No worries !
FluiDux is an application that allows you to monitor your consumption while calculating the flow rate of your valve and
generate some energy !

## Features

- **Chat Interface:** Engage in natural language conversations with ChatGPT.
- **User Authentication:** Securely log in to personalize your chat experience.
- **Intuitive Design:** A clean and intuitive user interface for a seamless user experience.
- **Customizable Settings:** Tailor the app to your preferences with adjustable settings.

# Frontend (React Native)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- [Expo CLI](https://docs.expo.dev/get-started/installation/) installed

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/GitHackerz/fluidux-mobile.git
    ```

2. Install dependencies:
   ```bash
    npm install
    ```

### Usage

1. Start the Expo server:
   ```bash
   expo start
   ```
2. Open the Expo app on your mobile device and scan the QR code to run the app.
3. Alternatively, you can run the app on an iOS simulator or Android emulator.
4. Enjoy!

## Documentation (App.js)

- [React Native](https://reactnative.dev/docs/getting-started)

1. Import the necessary components and dependencies at the beginning of the App.js file.

```javascript
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
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import AuthStack from "./stacks/AuthStack";
import MainStack from "./stacks/MainStack";
import {Text} from "react-native";
```

2. Initialize the stack navigator and load fonts using the useFonts hook.

```jsx
    const Stack = createStackNavigator();
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
```
3. Set up the navigation container and stack navigator with the desired initial route and screen options.
```jsx
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="GetStarted"
                    screenOptions={{
                        headerShown: false,
                    }}
                >
                    <Stack.Screen name="AuthStack" component={AuthStack}/>
                    <Stack.Screen name="MainStack" component={MainStack}/>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
```

### Fonts Loading
The useFonts hook is used to load the Inter font family. If fonts are not loaded, a simple "Loading ..." text is displayed until the fonts are loaded.

### Navigation
The react-navigation library is employed for navigation. Two stacks, AuthStack and MainStack, are defined and configured within the navigator.

## Documentation (AuthStack.js)

The `AuthStack` in the FluiDux application manages the authentication flow, providing users with a seamless and secure way to log in and access personalized features.

### Screens

- **GetStarted:** The initial screen where users get started with the authentication process.
- **Auth:** The main authentication screen where users can log in or sign up.

### Navigation

The `AuthStack` utilizes the `react-navigation` library with a native stack navigator for smooth navigation between authentication screens.

### Usage

The `AuthStack` is automatically navigated to based on the app's configuration in `App.js`.

```javascript
import AuthStack from "./stacks/AuthStack";

<Stack.Navigator
    initialRouteName="GetStarted"
    screenOptions={{
        headerShown: false,
    }}
>
    <Stack.Screen name="AuthStack" component={AuthStack}/>
    {/* ... other screens */}
</Stack.Navigator>

```

## Documentation (MainStack.js)

`MainStack.js` defines the main stack for navigation in the FluiDux application. It includes a drawer navigator (`MainDrawer`) that allows users to navigate between different screens.

### Screens

- **Home:** Main screen displaying important information and insights.
- **AddValve:** Screen for adding a new valve to monitor consumption.
- **Notifications:** Screen for viewing and managing notifications.
- **Profile:** User profile screen with basic information.
- **EditProfile:** Screen for editing user profile details.
- **Shop:** Screen for accessing the in-app shop.

### Navigation

The `MainStack` uses the `createDrawerNavigator` from the `@react-navigation/drawer` library for the navigation drawer.

### Custom Drawer Content

A custom drawer content component (`CustomDrawerContent`) is implemented to provide a personalized and branded experience for users.

### Usage

The `MainStack` is automatically navigated to based on the app's configuration in `App.js`.

```javascript
import MainDrawer from "./stacks/MainStack";

<Stack.Navigator
    initialRouteName="GetStarted"
    screenOptions={{
        headerShown: false,
    }}
>
    <Stack.Screen name="MainStack" component={MainDrawer}/>
    {/* ... other screens */}
</Stack.Navigator>
```
## Documentation (Home.js)

`Home.js` is a screen in the FluiDux application that provides users with essential information and insights related to their water and electricity consumption.

### Features

- **Energy Creation Overview:** Display of energy creation metrics, including percentage changes from the previous day.
- **Chart Visualization:** Visual representation of consumption and energy creation trends over time.

### Usage

Access the "Home" screen through the drawer menu to get a quick overview of your water and electricity consumption.

- **Energy Creation Cards:** Two cards display key metrics related to energy creation, including the percentage change from the previous day.

- **Energy Creation Circle Cards:** Circular cards provide a visual representation of the energy creation percentage.

- **Chart Visualization:** The bottom section of the screen includes a chart that visually represents consumption and energy creation trends over time.

### Technologies Used

- **React Native Components:** Utilized for building the user interface.
- **Feather Icons:** Used for displaying menu and arrow icons.
- **Chart Component:** Integrated for visualizing consumption and energy creation trends.

### Components

- **Chart Component:** The `Chart` component is imported and used to display the consumption and energy creation trends.

### Acknowledgments

- Special thanks to [Acknowledged Person/Team] for their contributions or inspiration.
- [Any Additional Acknowledgments]

## Documentation (Profile.js)

`Profile.js` is a screen in the FluiDux application that displays the user's profile information, including their name, location, contact details, and an option to edit the profile or add a new valve.

### Features

- **User Information:** Display of the user's profile picture, name, location, phone number, and email.
- **Edit Profile Button:** Allows users to navigate to the "EditProfile" screen for modifying their profile information.
- **Add Valve Button:** Enables users to add a new valve for monitoring consumption.
- **Statistics Table:** Placeholder for displaying statistics such as status, device, and consumption rate.

### Usage

Access the "Profile" screen through the drawer menu to view and manage your profile information.

- **User Information:** The top section of the screen displays the user's profile picture, name, location, phone number, and email.

- **Edit Profile Button:** Clicking the "Edit Profile" button navigates to the "EditProfile" screen, where users can modify their profile details.

- **Add Valve Button:** The "+ Add Valve" button allows users to add a new valve to monitor consumption.

- **Statistics Table:** The bottom section of the screen is reserved for displaying statistical information related to consumption, device status, and other relevant metrics.

### Technologies Used

- **React Native Components:** Utilized for building the user interface.
- **Feather Icons:** Used for displaying menu icons.

### Acknowledgments

- Special thanks to [Acknowledged Person/Team] for their contributions or inspiration.
- [Any Additional Acknowledgments]


## Documentation (Notifications.js)

`Notifications.js` is a screen in the FluiDux application that allows users to view and manage notifications related to their water and electricity consumption.

### Features

- **Real-time Notifications:** Receive immediate updates on consumption-related events.
- **Notification Management:** View, dismiss, or mark notifications as read.
- **Clear All Notifications:** Clear all notifications with a single tap.

### Usage

Access the "Notifications" screen through the drawer menu to stay informed about consumption events and manage your notifications.

- **Notification Display:** Notifications are displayed in a scrollable list, providing details such as type, message, valve ID, location, and date/time.

- **Clear All Button:** The "Clear" button at the bottom of the screen allows users to clear all notifications at once.

- **Individual Notification Actions:** Each notification item can be deleted individually by swiping or tapping the delete icon.

### Technologies Used

- **React Native Components:** Utilized for building the user interface.
- **State Management (useState):** Used to manage and update the list of notifications.
- **ScrollView:** Implemented for smooth scrolling through notifications.

### Functions

- **handleClear:** Clears all notifications when the "Clear" button is pressed.

- **deleteNotification:** Removes an individual notification from the list.

### Component Structure

- **NotificationItem Component:** Reusable component for displaying individual notifications.


### Acknowledgments

- Special thanks to [Acknowledged Person/Team] for their contributions or inspiration.
- [Any Additional Acknowledgments]

## Documentation (AddValve.js)

`AddValve.js` is a screen in the FluiDux application that allows users to add a new valve by providing a valve ID and location.

### Features

- **Valve ID Input:** Users can input the valve ID associated with the valve they want to add.
- **Location Input:** Users can input the location where the valve is installed.
- **Add Valve Button:** Submits the entered information and adds the new valve. Navigates back to the "Home" screen in the "MainStack."

### Usage

Access the "Add Valve" screen through the drawer menu to input valve information and add a new valve.

- **Valve ID Input:** Enter the unique identifier for the valve.

- **Location Input:** Specify the location where the valve is installed.

- **Add Valve Button:** Click the "Add Valve" button to submit the entered information and add the new valve. After successful addition, the application navigates back to the "Home" screen.

### Technologies Used

- **React Native Components:** Utilized for building the user interface.
- **Feather Icons:** Used for displaying menu icons.

### Acknowledgments

- Special thanks to [Acknowledged Person/Team] for their contributions or inspiration.
- [Any Additional Acknowledgments]

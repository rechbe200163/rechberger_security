import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { StatusBar } from "expo-status-bar";

import Home from "./screens/homeScreen";
import Videos from "./screens/videosCaptured";
import Profile from "./screens/usrProfile";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const homeName = "Home";
const videosName = "Videos";
const profileName = "Profile";

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === homeName) {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === videosName) {
              iconName = focused ? "videocam" : "videocam-outline";
            } else if (route.name === profileName) {
              iconName = focused ? "person" : "person-outline";
            }
            return <Ionicons name={iconName} size={size} color={"#96665a"} />;
          },
        })}
      >
        <Tab.Screen name={homeName} component={Home} />
        <Tab.Screen name={videosName} component={Videos} />
        <Tab.Screen name={profileName} component={Profile} />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

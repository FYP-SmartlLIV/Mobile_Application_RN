import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./screens/HomeScreen";
import MaintananceScreen from "./screens/MaintananceScreen";
import VisitorAccess from "./screens/VisitorAccessScreen";
import EmergencyAid from "./screens/EmergencyAidScreen";
import EventManagement from "./screens/EventManagementScreen";
import FireAlarm from "./screens/FireAlarmScreen";
import QrCodeScreen from "./screens/QrCodeScreen";
import ComplainDetails from "./screens/ComplainDetails";
import Profile from "./screens/Profile";
import "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/Ionicons";
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
function DrawerNavigator(){
  return (
    <Drawer.Navigator
    screenOptions={{
        drawerPosition:"right" ,
        backgroundColor: "#0b8793",
        headerStyle: { backgroundColor: "#0b8793" },
        headerTintColor: "black",
        sceneContainerStyle: { backgroundColor: "#0b8793" },
        drawerContentStyle: { backgroundColor: "#ffffff" },
        drawerActiveTintColor: "#fff",
        drawerActiveBackgroundColor: "#0b8793",
        drawerInactiveTintColor: "black",

    }}
    >
      <Drawer.Screen
      name="Home" component={HomeScreen}

     />
    <Drawer.Screen
    name="History"
      component={ComplainDetails}
      options={{
        backgroundColor: "#ffffff",
        title: "History",
        headerShown:false,
        drawerIcon: ({ focused, size }) => (
          <Ionicons
            name="md-list"
            size={size}
            color={focused ? "#fff" : "black"}
          />
        ),
      }}


     />

    </Drawer.Navigator>
  )
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Drawer' component={DrawerNavigator} options={{headerShown:false}}/>
        
        <Stack.Screen name="Maintanance" component={MaintananceScreen} />
        <Stack.Screen name="Visitor Access" component={VisitorAccess} />
        <Stack.Screen name="Event Management" component={EventManagement} />
        <Stack.Screen
          name="QrCode-Screen"
          component={QrCodeScreen}
          options={{ presentation: "transparentModal", headerShown: true }}
        />
        <Stack.Screen name="Emergency Aid" component={EmergencyAid} />
        <Stack.Screen name="Fire Alarm" component={FireAlarm} />
        <Stack.Screen name="Profile" component={Profile}  options={{presentation:"fullScreenModal", headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Test from "../components/Test";
import Create from "../components/Create";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Platform } from "react-native";

const Tab = createBottomTabNavigator()
const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarStyle: {
                  height: Platform.OS === 'ios' ? 90 : 70,
                  position:"relative",
                  backgroundColor: '#31374A',
                },
                headerShown: false,
                tabBarShowLabel: true,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    
                    if (route.name === 'Create') {
                      size+=10
                      iconName = focused
                        ? 'add-circle'
                        : 'add-circle-outline';
                
                    }
                    else if (route.name === 'Test') {
                        iconName = focused ?'clipboard' : 'clipboard-outline'
                    }
                    
        
                    return <Ionicons name={iconName} size={size} color={color}/>;
                  },
                  tabBarActiveTintColor: 'white',
                  tabBarInactiveTintColor: 'gray',
                  
                })}>
            <Tab.Screen name="Create" component={Create}></Tab.Screen>
            <Tab.Screen name="Test" component={Test}></Tab.Screen>
        </Tab.Navigator>
    )
}
export default Tabs
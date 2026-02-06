import { Tabs } from "expo-router";
import  {Ionicons} from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "#55878A" }}>
      <Tabs.Screen 
        name="index" 
        options={{ 
            title: "Home", 
            tabBarIcon: ({color}) => <Ionicons name="home" size={24}  color={color} />
        }} />
      <Tabs.Screen 
        name="movies" 
        options={{ 
            title: "Movies", 
            tabBarIcon: ({color}) => <Ionicons name="film" size={24}  color={color} />
        }} />
        <Tabs.Screen 
        name="tvshows" 
        options={{
            title: "TV Shows",
            tabBarIcon: ({color}) => <Ionicons name="tv" size={24}  color={color} />
        }} />
        <Tabs.Screen 
        name="user" 
        options={{
            title: "Profile",
            tabBarIcon: ({color}) => <Ionicons name="person" size={24}  color={color} />
        }} />
    </Tabs>
  );
}

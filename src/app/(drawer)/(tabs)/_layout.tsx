import { colors } from '@/styles/colors';
import { MaterialIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function LayoutTabs() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.orange[500],
        tabBarInactiveTintColor: colors.gray[400],
        tabBarStyle: {
          backgroundColor: colors.gray[600],
          borderTopWidth: 0,
          minHeight: 104,
        },
        tabBarIconStyle: {
          paddingBottom: 4,
          paddingTop: 14,
          alignItems: 'center',
          justifyContent: 'center',
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, size }) => <MaterialIcons name="email" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          tabBarIcon: ({ color, size }) => <MaterialIcons name="chat-bubble" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="meeting"
        options={{
          tabBarIcon: ({ color, size }) => <MaterialIcons name="videocam" size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}

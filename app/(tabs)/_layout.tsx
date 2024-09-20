import colors from "@/content/colors";
import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { View } from "react-native";


const Page = () => {
    return (
        <Tabs screenOptions={{
            tabBarStyle: {
                backgroundColor: colors.bgColor,
                borderTopWidth: 0,
                padding: 0
            },
            tabBarShowLabel: false,
            tabBarActiveTintColor: colors.black,
            tabBarInactiveTintColor: '#999'
        }}>
            <Tabs.Screen
                name="index"
                options={{
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="compass" size={28} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="category"
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name='space-dashboard' size={28} color={color} />
                    ),
                }}
            /><Tabs.Screen
                name="search"
                options={{
                    tabBarIcon: ({ color }) => (
                        <View style={{ backgroundColor: colors.primaryColor, paddingHorizontal: 16, paddingVertical: 12, borderRadius: 10, height: 50 }}>
                            <Ionicons name="search-outline" size={24} color={colors.white} />
                        </View>
                    ),
                }}
            /><Tabs.Screen
                name="bookmarks"
                options={{
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="bookmark" size={28} color={color} />
                    ),
                }}
            /><Tabs.Screen
                name="profile"
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="user" size={28} color={color} />
                    ),
                }}
            />

        </Tabs>
    )
}

export default Page;
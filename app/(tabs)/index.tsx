import { Image, StyleSheet } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { GestureHandlerRootView, TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
import colors from '@/content/colors'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const headder = {
    headerTransparent: true,
    headerTitle: '',
    headerLeft: () => (
        <GestureHandlerRootView>
            <TouchableOpacity onPress={() => { }} style={{ marginLeft: 20 }}>
                <Image source={{
                    uri: "https://xsgames.co/randomusers/avatar.php?g=male"
                }}
                    style={{ width: 40, height: 40, borderRadius: 10 }}
                />
            </TouchableOpacity>
        </GestureHandlerRootView>
    ),
    headerRight: () => (
        <GestureHandlerRootView>
            <TouchableOpacity onPress={() => { }} style={{
                marginRight: 20,
                backgroundColor: colors.white,
                padding: 10,
                borderRadius: 10
            }}>
                <Ionicons name='notifications' size={20} color={colors.black} />
            </TouchableOpacity>
        </GestureHandlerRootView>
    )

}

const Page = () => {
    return (
        <Stack.Screen options={headder} >
        </Stack.Screen >
    )
}

export default Page;



{/* <TouchableOpacity onPress={() => { }} style={{ marginLeft: 20 }}>
    <Image source={{
        uri: "https://xsgames.co/randomusers/avatar.php?g=male"
    }}
        style={{ width: 40, height: 40, borderRadius: 10 }}
    />

</TouchableOpacity>
            ),
headerRight: () => (
    <TouchableOpacity onPress={() => { }} style={{
        marginRight: 20,
        backgroundColor: colors.white,
        padding: 10,
        borderRadius: 10
    }}>
        <Ionicons name='notifications' size={20} color={colors.black} />
    </TouchableOpacity>
) */}
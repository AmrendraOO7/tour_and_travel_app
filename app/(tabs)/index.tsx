import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Stack } from 'expo-router'
import { GestureHandlerRootView, TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
import colors from '@/content/colors'
import { useHeaderHeight } from '@react-navigation/elements'
import CategoryButtons from '../../components/CategoryButtons'
import Listing from '@/components/Listing'
import listingData from '@/data/destinations.json';
import GroupListings from '@/components/GroupListing';
import groupData from '@/data/groups.json'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: colors.bgColor,
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    headdingText: {
        fontSize: 20,
        fontWeight: '800',
        color: colors.black,
        marginTop: 10
    },
    searchSectionWrapper: {
        flexDirection: 'row',
        marginVertical: 20
    },
    searchBar: {
        flex: 4,
        flexDirection: 'row',
        backgroundColor: colors.white,
        padding: 12,
        borderRadius: 10
    },
    filterButton: {
        backgroundColor: colors.primaryColor,
        padding: 10,
        borderRadius: 10,
        marginLeft: 20
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
    //use of headder hook
    const headerHeight = useHeaderHeight();

    const headderStyles = [
        styles.container,
        {
            paddingTop: headerHeight
        }
    ]

    const [category, setCategory] = useState('All');

    const onCatChanged = (category: string) => {
        console.log('Category:', category)
        setCategory(category);
    }

    return (
        <>
            <Stack.Screen options={headder} />
            <View style={headderStyles}>
                <ScrollView showsHorizontalScrollIndicator={false}>
                    <Text style={styles.headdingText}>Explore the Beautiful world!</Text>

                    {/* Search area and menu button */}
                    <View style={styles.searchSectionWrapper}>
                        <View style={styles.searchBar}>
                            <Ionicons name='search' size={18} style={{ marginRight: 5 }} color={colors.black} />
                            <TextInput placeholder='Search...'></TextInput>
                        </View>
                        <GestureHandlerRootView>
                            <TouchableOpacity onPress={() => { }} style={styles.filterButton}>
                                <Ionicons name='options' size={28} color={colors.white} />
                            </TouchableOpacity>
                        </GestureHandlerRootView>
                    </View>

                    {/* Category section */}
                    <CategoryButtons onCategoryChanged={onCatChanged} />

                    {/* listing categories */}
                    <Listing listings={listingData} category={category} />

                    {/* Group listings */}
                    <GroupListings listings={groupData} />
                </ScrollView>
            </View>


        </>
    )
}

export default Page;
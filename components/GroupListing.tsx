import { View, Text, FlatList, ListRenderItem, Image, StyleSheet } from 'react-native'
import React from 'react'
import { GroupType } from '@/types/groupTypes'
import colors from '@/content/colors'
import { Ionicons } from '@expo/vector-icons'

export default function GroupListings({ listings }: { listings: GroupType[] }) {
    const renderItems: ListRenderItem<GroupType> = ({ item }) => {
        return (
            <View style={styles.item}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <View>
                    <Text style={styles.itemText}>{item.name}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Ionicons name='star' size={20} color={colors.primaryColor} />
                        <Text style={styles.itemRating}>{item.rating}</Text>
                        <Text style={styles.itemReviews}>({item.reviews})</Text>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <View >
            <Text style={styles.title}>Top Travel List</Text>
            <FlatList data={listings} renderItem={renderItems} horizontal showsHorizontalScrollIndicator={false} />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        fontWeight: '600',
        color: colors.black,
        marginBottom: 10
    },
    item: {
        backgroundColor: colors.white,
        padding: 10,
        borderRadius: 10,
        marginRight: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        width: 80,
        height: 100,
        borderRadius: 10,
        marginRight: 10
    },
    itemText: {
        fontSize: 14,
        fontWeight: '600',
        color: colors.black,
        marginBottom: 8
    },
    itemRating: {
        fontSize: 14,
        fontWeight: '600',
        color: colors.black,
        marginLeft: 5
    },
    itemReviews: {
        fontSize: 14,
        color: '#999',

    }
})
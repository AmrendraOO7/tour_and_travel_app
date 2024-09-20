// rnf
import { View, Text, FlatList, ListRenderItem, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { listingTypes } from '@/types/listingTypes'
import colors from '@/content/colors'
import { FontAwesome5, Ionicons } from '@expo/vector-icons'
import { Link } from 'expo-router'

type Props = {
    listings: any[],
    category: string
}

export default function Listing({ listings, category }: Props) {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        console.log('update listing')
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 200);
    }, [category])

    const renderItems: ListRenderItem<listingTypes> = ({ item }) => {
        return (
            <Link href={`/listing/${item.id}` as any} asChild>
                <TouchableOpacity>
                    <View style={styles.item}>
                        <Image
                            source={{ uri: item.image }}
                            style={styles.image} />
                        <View style={styles.bookmark}>
                            <Ionicons name='bookmarks-outline' size={20} color={colors.white} />
                        </View>
                        <View style={styles.itemText}>
                            <Text numberOfLines={1} ellipsizeMode='tail'>{item.name}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <FontAwesome5 name="map-marker-alt" size={18} color={colors.primaryColor} />
                                <Text style={styles.itemLocationText}>{item.location}</Text>
                            </View>
                            <Text style={styles.itemPriceText}>${item.price}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </Link>
        )
    }

    return (
        <View>
            <FlatList data={loading ? [] : listings} renderItem={renderItems} horizontal showsHorizontalScrollIndicator={false} />
        </View>
    )
}


const styles = StyleSheet.create({
    item: {
        backgroundColor: colors.white,
        padding: 10,
        borderRadius: 10,
        marginRight: 20,
        width: 220
    },
    image: {
        height: 200,
        width: 200,
        borderRadius: 10,
        marginBottom: 30
    },
    bookmark: {
        position: 'absolute',
        top: 185,
        right: 30,
        backgroundColor: colors.primaryColor,
        padding: 10,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: colors.white
    },
    itemText: {
        fontSize: 16,
        fontWeight: '800',
        color: colors.black,
        marginBottom: 10
    },
    itemLocationText: {
        fontSize: 12,
        marginLeft: 5
    },
    itemPriceText: {
        fontSize: 12,
        fontWeight: '600',
        color: colors.primaryColor
    }
})
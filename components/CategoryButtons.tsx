import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useRef, useState } from 'react'
import colors from '@/content/colors'
import destinationCategories from '@/data/data'
import { MaterialCommunityIcons } from '@expo/vector-icons'

type Props = {
    onCategoryChanged: (category: string) => void;
}

export default function CategoryButtons({ onCategoryChanged }: Props) {

    const scrollRef = useRef<ScrollView>(null);

    const itemRef = useRef<TouchableOpacity[] | null[]>([]);

    const [activeIndex, setActiveIndex] = useState(0);

    const handleSelectCategory = (index: number) => {

        const selected = itemRef.current[index];
        setActiveIndex(index);
        selected?.measure((x) => {
            // console.log({ x: x })
            scrollRef.current?.scrollTo({ x: x, y: 0, animated: true });
        });

        onCategoryChanged(destinationCategories[index].title)

    }
    return (
        <View>
            <Text style={styles.title}>Categories</Text>

            <ScrollView ref={scrollRef} horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{
                gap: 20,
                paddingVertical: 10,
                marginBottom: 10
            }}>
                {destinationCategories.map((items, index) => (
                    //TouchableOpacity to be imported from 'react-native'
                    <TouchableOpacity
                        key={index}
                        ref={(el) => itemRef.current[index] = el}
                        onPress={() => handleSelectCategory(index)}
                        style={activeIndex === index ? styles.categoryBtnActiveStyle : styles.categoryBtn} >
                        <MaterialCommunityIcons name={items.iconName as any} size={20} color={activeIndex === index ? colors.white : colors.black} />
                        <Text style={activeIndex === index ? styles.categoryBtnTextActive : styles.categoryBtnTxt} >{items.title}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

        </View>
    )
}


const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: '700',
        color: colors.black
    },
    categoryBtn: {
        flexDirection: 'row',
        textAlign: 'center',
        backgroundColor: colors.white,
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 10,
        shadowColor: '#333333',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3
    },
    categoryBtnTxt: {
        marginLeft: 5,
        color: colors.black
    },
    categoryBtnTextActive: {
        marginLeft: 5,
        color: colors.white
    },
    categoryBtnActiveStyle: {
        flexDirection: 'row',
        textAlign: 'center',
        backgroundColor: colors.primaryColor,
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 10,
        shadowColor: '#333333',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3
    }
})


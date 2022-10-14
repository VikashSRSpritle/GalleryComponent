import React, { Component } from 'react';
import { StyleSheet, Text, View, SectionList, Image, Dimensions, SafeAreaView, TouchableWithoutFeedback, StatusBar } from 'react-native';
import dayjs from 'dayjs';
import { useNavigation } from '@react-navigation/native';

const JSON_DATA = [
    {
        "iconblob": `https://cdn.pixabay.com/photo/2012/06/19/10/32/owl-50267_1280.jpg`,
        "addedtime": 1665394399,
    },
    {
        "iconblob": `https://cdn.pixabay.com/photo/2020/04/17/12/28/cloud-5055011_1280.jpg`,
        "addedtime": 1665394399,
    },
    {
        "iconblob": `https://cdn.pixabay.com/photo/2020/04/17/12/28/cloud-5055011_1280.jpg`,
        "addedtime": 1665394399,
    },
    {
        "iconblob": `https://cdn.pixabay.com/photo/2020/04/17/12/28/cloud-5055011_1280.jpg`,
        "addedtime": 1665394399,
    },
    {
        "iconblob": `https://cdn.pixabay.com/photo/2020/04/17/12/28/cloud-5055011_1280.jpg`,
        "addedtime": 1665394399,
    },
    {
        "iconblob": `https://cdn.pixabay.com/photo/2020/04/17/12/28/cloud-5055011_1280.jpg`,
        "addedtime": 1576590342000,
    },
    {
        "iconblob": `https://cdn.pixabay.com/photo/2016/06/20/16/37/rope-1469244_1280.jpg`,
        "addedtime": 1576590342000,
    },
    {
        "iconblob": `https://cdn.pixabay.com/photo/2022/09/11/14/52/bee-7446944_1280.jpg`,
        "addedtime": 1576590342000,
    },
    {
        "iconblob": `https://cdn.pixabay.com/photo/2022/09/28/21/07/woman-7486045_1280.jpg`,
        "addedtime": 1576590342000,
    },
    {
        "iconblob": `https://cdn.pixabay.com/photo/2022/09/07/21/23/ferris-wheel-7439636_1280.jpg`,
        "addedtime": 1576590342000,
    },
    {
        "iconblob": `https://cdn.pixabay.com/photo/2017/03/23/20/57/girl-2169467_1280.jpg`,
        "addedtime": 1576590342000,
    },
    {
        "iconblob": `https://cdn.pixabay.com/photo/2017/07/24/12/43/schrecksee-2534484_1280.jpg`,
        "addedtime": 1576590342000,
    },
    {
        "iconblob": `https://cdn.pixabay.com/photo/2012/03/04/01/01/father-22194_1280.jpg`,
        "addedtime": 1576590342000,
    },
    {
        "iconblob": `https://cdn.pixabay.com/photo/2017/08/16/00/59/panorama-2646143_1280.jpg`,
        "addedtime": 1576590342000,
    },
    {
        "iconblob": `https://cdn.pixabay.com/photo/2019/06/05/08/37/dog-4253238_1280.jpg`,
        "addedtime": 1576590342000,
    },
    {
        "iconblob": "https://is1-ssl.mzstatic.com/image/thumb/Purple114/v4/cb/cf/bb/cbcfbb61-4d03-4f4e-ecf7-b7582688435f/source/512x512bb.jpg",
        "addedtime": 1575554709000,
    },
    {
        "iconblob": "https://cdn.pixabay.com/photo/2022/08/28/17/37/flower-7417160_1280.jpg",
        "addedtime": 1575554709000,
    },
    {
        "iconblob": "https://pbs.twimg.com/profile_images/568401882444349441/KDWvUHCJ_400x400.jpeg",
        "addedtime": 1575554709000,
    },
]

const DATA = Object.values(JSON_DATA.reduce((acc, item) => {
    if (!acc[item.addedtime]) acc[item.addedtime] = {
        title: item.addedtime,
        data: []
    };
    acc[item.addedtime].data.push(item);
    return acc;
}, {}))

export default function Gallary() {
    var localizedFormat = require('dayjs/plugin/localizedFormat')
    dayjs.extend(localizedFormat)
    dayjs().format('L LT')
    const navigation = useNavigation()

    const imagePressHandler = (data, index, created) => {
        navigation.navigate("ImageViewer", { data, index, created })
    }

    const renderItems = ({ item, section, index }) => {
        return (
            <>
                <TouchableWithoutFeedback onPress={() => imagePressHandler(DATA, index, section.title)}>
                    <Image
                        style={{
                            height: 85,
                            width: 85,
                            margin: 2,
                        }}
                        source={{ uri: item.iconblob }}
                    />
                </TouchableWithoutFeedback>
            </>
        )
    }

    const renderHeader = ({ section }) => {
        return (
            <View style={styles.headerStyle}>
                <Text>{dayjs(section.title).format('LLL')}</Text>
            </View>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <SectionList
                sections={DATA}
                keyExtractor={(item, index) => item + index}
                renderItem={renderItems}
                contentContainerStyle={{
                    flexGrow: 1,
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                }}
                renderSectionHeader={renderHeader}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
    },
    itemStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,

    },
    headerStyle: {
        width: Dimensions.get("window").width,
    },
});

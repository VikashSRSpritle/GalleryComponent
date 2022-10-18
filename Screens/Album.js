import React, { useEffect, useState } from 'react';
import * as MediaLibrary from 'expo-media-library';
import { StyleSheet, SafeAreaView, StatusBar, FlatList, View, Image } from 'react-native';

var imageArray;
export const Album = () => {
    const [status, requestPermission] = MediaLibrary.usePermissions();
    const [imageData, setImageData] = useState([]);
    const [limit, setLimit] = useState(20);
    const [after, setAfter] = useState("");


    const getPermissions = async () => {
        var res = await requestPermission()
        if (res.granted) {
            const getPhotos = await MediaLibrary.getAlbumAsync("All photos")
            const getAllPhotos = await MediaLibrary.getAssetsAsync({
                first: limit,
                album: getPhotos,
                sortBy: ['creationTime'],
                mediaType: ['photo']
            })
            imageArray = getAllPhotos.assets;
            if (imageArray.length) {
                var afterId = imageArray[imageArray.length - 1].id;
                setAfter(afterId)
                setImageData(imageArray)
            }

        }
    }

    const loadMoreData = async () => {
        console.log("LOAD MORE")
        const getPhotos = await MediaLibrary.getAlbumAsync("All photos")
        const getAllPhotos = await MediaLibrary.getAssetsAsync({
            first: limit,
            album: getPhotos,
            after: after,
            sortBy: ['creationTime'],
            mediaType: ['photo']
        })
        imageArray = getAllPhotos.assets;
        if (imageArray.length) {
            var afterId = imageArray[imageArray.length - 1].id;
            setAfter(afterId)
            setImageData(imageArray)
        }
        else {
            console.log(imageArray, "EMPTY");
        }
    }
    useEffect(() => {
        getPermissions()
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            {
                imageData ?
                    <FlatList
                        data={imageData}
                        renderItem={({ item }) => {
                            return ((
                                <View
                                    style={{
                                        flex: 1,
                                        flexDirection: 'column',
                                        margin: 1,
                                    }}>
                                    <Image
                                        style={styles.imageThumbnail}
                                        source={{ uri: item.uri }}
                                    />
                                </View>
                            ))
                        }
                        }
                        //Setting the number of column
                        numColumns={3}
                        keyExtractor={(item, index) => index}
                        onEndReached={loadMoreData}

                    />
                    : null
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
    },
    imageThumbnail: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
    },
});

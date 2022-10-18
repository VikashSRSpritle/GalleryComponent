import { View } from 'react-native'
import React from 'react'
import Gallery from 'react-native-awesome-gallery';

export default function ImageViewer(props) {
  const imageData = props.route.params.data;
  const id = props.route.params.imageData;

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Gallery
        initialIndex={imageData.findIndex(e => e.iconblob == id)}
        data={imageData.map((item) => {
          return item.iconblob
        })}
        onIndexChange={(newIndex) => {
          console.log(newIndex);
        }}
        keyExtractor={((item, index) => { item + index })}
      />
    </View>
  )
}
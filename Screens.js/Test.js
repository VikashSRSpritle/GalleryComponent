import { View, Text } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { Button, Image } from 'react-native';
import Gallery from 'react-native-awesome-gallery';

export default function ImageViewer(props) {
  const imageData = props.route.params.data;
  const id = props.route.params.created;
  // const imageList = imageData.find(e => e.title == id);
  // const dataIndex = imageData.findIndex(e => e.title == id);
  const [dataIndex, setDataIndex] = React.useState(imageData.findIndex(e => e.title == id))
  const [imageList, setimageList] = React.useState(imageData.find(e => e.title == id))
  const [index, setIndex] = React.useState(props.route.params.index)
  

  const onClickNext = () => {
    if (index < imageList.data.length - 1) {
      setIndex(index + 1)
    }
    else if (imageData[dataIndex + 1]) {
      setIndex(0)
      setDataIndex(dataIndex + 1)
      setimageList(imageData[dataIndex + 1])
    }
  }

  const onPreviousClick = () => {
    if (index > 0) {
      setIndex(index - 1)
    }
    else if (imageData[dataIndex - 1]) {
      setDataIndex(dataIndex - 1)
      setimageList(imageData[dataIndex - 1])
      setIndex(imageData[dataIndex - 1].data.length - 1)
    }
  }

  console.log(imageList.data.map((element) => {
    return element.iconblob
  }), "DATA")

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      {/* <Image source={{ uri: imageList.data[index].iconblob }} style={{ flex: 0.5 }} /> */}
      {/* <Gallery
        data={imageList.data.map((element) => element.iconblob)}
        onIndexChange={(newIndex) => {
          console.log(newIndex);
        }}
      /> */}
      <View style={{ flexDirection: 'row', flex: 0.1, justifyContent: 'space-around' }}>
        <Button title='Previous' onPress={() => onPreviousClick()} />
        <Button title='Next' onPress={() => onClickNext()} />
      </View>
    </View>
  )
}
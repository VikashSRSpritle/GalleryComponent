import { View, Text } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { Button, Image } from 'react-native';
// import Gallery from 'react-native-image-gallery';
import Gallery from 'react-native-awesome-gallery';

export default function ImageViewer(props) {
  const imageData = props.route.params.data;
  const id = props.route.params.created;
  // const imageList = imageData.find(e => e.title == id);
  // const dataIndex = imageData.findIndex(e => e.title == id);
  const [dataIndex, setDataIndex] = React.useState(imageData.findIndex(e => e.title == id))
  const [imageList, setimageList] = React.useState(imageData.find(e => e.title == id))
  const [index, setIndex] = React.useState(props.route.params.index)


  // const onClickNext = () => {
  //   if (index < imageList.data.length - 1) {
  //     setIndex(index + 1)
  //   }
  //   else if (imageData[dataIndex + 1]) {
  //     setIndex(0)
  //     setDataIndex(dataIndex + 1)
  //     setimageList(imageData[dataIndex + 1])
  //   }
  // }

  // const onPreviousClick = () => {
  //   if (index > 0) {
  //     setIndex(index - 1)
  //   }
  //   else if (imageData[dataIndex - 1]) {
  //     setDataIndex(dataIndex - 1)
  //     setimageList(imageData[dataIndex - 1])
  //     setIndex(imageData[dataIndex - 1].data.length - 1)
  //   }
  // }

  // let boo = imageList.data.map((ele) => {
  //   return ele.iconblob
  // })

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Gallery
        initialIndex={index}
        data={imageList.data.map((ele) => {
          return ele.iconblob
        })}
        onIndexChange={(newIndex) => {
          console.log(newIndex);

        }}
      />
    </View>
  )
}
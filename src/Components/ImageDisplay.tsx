import React from 'react'
import {ActivityIndicator, Image, View} from 'react-native'

type ImageDisplayPropsType = {
    isLoading: boolean
    imageData: Array<string>
}

export const ImageDisplay: React.FC<ImageDisplayPropsType> = ({isLoading, imageData}) => {
    return (
        <View
            style={{
                display: 'flex',
                alignItems: 'center',
                paddingTop: 16,
                paddingBottom: 16,
            }}>
            {isLoading ? <ActivityIndicator size="large" /> : null}
            {imageData.length > 0 && !isLoading
                ? imageData.map((imgData, idx) => (
                      <View key={idx} style={{marginTop: 8, marginBottom: 8}}>
                          <Image
                              resizeMethod="scale"
                              resizeMode="contain"
                              style={{height: 300, width: 300}}
                              source={{
                                  uri: imgData,
                              }}
                          />
                      </View>
                  ))
                : null}
        </View>
    )
}

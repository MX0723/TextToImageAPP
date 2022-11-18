import React, {useState} from 'react'
import {ScrollView, Text, TextInput, View} from 'react-native'
import {sendMessage} from './Utils/SendMessage'
import {mainStyleSheet} from './Style/MainStyleSheet'
import {BatchSizeButtonGroup} from './Components/BatchSizeButtonGroup'
import {GenerateButton} from './Components/GenerateButton'
import {SizeSlider} from './Components/SizeSlider'
import {StyleTypeButtonGroup} from './Components/StyleTypeButtonGroup'
import {styleType} from './Utils/StyleType'
import {ImageDisplay} from './Components/ImageDisplay'
import {MessageData} from './Utils/MessageData'

export function HomeScreen() {
    const [content, setContent] = useState<string>('')
    const [imageStyle, setImageStyle] = useState<styleType>(styleType.general)
    const [imageHeight, setImageHeight] = useState<number>(512)
    const [imageWidth, setImageWidth] = useState<number>(512)
    const [batchSize, setBatchSize] = useState<number>(1)
    const [imageData, setImageData] = useState<Array<string>>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const onPressGenerate = () => {
        if (isLoading) {
            return
        }
        setIsLoading(true)
        sendMessage({
            text: content,
            styleType: imageStyle,
            num: batchSize,
            w: imageWidth,
            h: imageHeight,
        })
            .then((response: any) => {
                const res = JSON.parse(response) as MessageData
                setIsLoading(false)
                setImageData(res.data[0])
            })
            .catch(err => {
                console.log(err)
                setIsLoading(false)
            })
    }

    return (
        <View style={{height: '100%', width: '100%', display: 'flex'}}>
            <Text style={{width: '100%', fontSize: 32, textAlign: 'center'}}>Text2Image</Text>
            <ScrollView style={{flex: 1, paddingLeft: '10%', paddingRight: '10%'}}>
                <Text style={{fontSize: 16}}>请输入文字内容</Text>
                <ScrollView>
                    <TextInput
                        multiline
                        numberOfLines={5}
                        style={mainStyleSheet.textInput}
                        onChangeText={text => setContent(text)}
                        value={content}
                    />
                </ScrollView>
                <StyleTypeButtonGroup imageStyle={imageStyle} setImageStyle={setImageStyle} />
                <BatchSizeButtonGroup batchSize={batchSize} setBatchSize={setBatchSize} />
                <SizeSlider label={'图片高度'} size={imageHeight} setSize={setImageHeight} />
                <SizeSlider label={'图片宽度'} size={imageWidth} setSize={setImageWidth} />
                <ImageDisplay isLoading={isLoading} imageData={imageData} />
            </ScrollView>
            <View style={mainStyleSheet.generateButton}>
                <GenerateButton onPress={onPressGenerate} disabled={isLoading} />
            </View>
        </View>
    )
}

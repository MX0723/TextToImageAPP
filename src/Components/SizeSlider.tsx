import React from 'react'
import {Text, View} from 'react-native'
import Slider from '@react-native-community/slider'

type sizeSliderPropsType = {
    label: string
    size: number
    setSize: (payload: number) => void
}

export const SizeSlider: React.FC<sizeSliderPropsType> = ({label, size, setSize}) => {
    return (
        <View
            style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                height: 40,
            }}>
            <Text>{label}</Text>
            <Slider
                style={{width: 200, height: 40}}
                value={size}
                onValueChange={value => setSize(value)}
                minimumValue={512}
                maximumValue={1024}
                minimumTrackTintColor="#925FF0"
                maximumTrackTintColor="#000000"
            />
            <Text style={{color: '#925FF0'}}>{size}</Text>
        </View>
    )
}

import React from 'react'
import {Text, TouchableHighlight, View} from 'react-native'
import {componentsStyleSheet} from '../Style/ComponentsStyleSheet'

type GenerateButtonPropsType = {
    onPress: () => void
    disabled: boolean
}

export const GenerateButton: React.FC<GenerateButtonPropsType> = ({onPress, disabled}) => {
    return (
        <TouchableHighlight
            onPress={onPress}
            style={{borderRadius: 40}}
            underlayColor={disabled ? '#F4EFFE' : '#5E3A9E'}>
            <View style={[componentsStyleSheet.generateButton, {backgroundColor: disabled ? '#F4EFFE' : '#925FF0'}]}>
                <Text style={[componentsStyleSheet.generateButtonText, {color: disabled ? '#737373' : '#FFFFFF'}]}>
                    生成图片
                </Text>
            </View>
        </TouchableHighlight>
    )
}

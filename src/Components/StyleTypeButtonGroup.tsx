import React from 'react'
import {Text, TextStyle, TouchableHighlight, View} from 'react-native'
import {componentsStyleSheet} from '../Style/ComponentsStyleSheet'
import {styleType} from '../Utils/StyleType'

type styleButtonGroupPropsType = {
    imageStyle: styleType
    setImageStyle: React.Dispatch<React.SetStateAction<styleType>>
}

export const StyleTypeButtonGroup: React.FC<styleButtonGroupPropsType> = ({imageStyle, setImageStyle}) => {
    return (
        <View
            style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 16,
                marginBottom: 16,
            }}>
            <Text style={{fontSize: 16, marginRight: 16}}>生成数量</Text>
            <StyleTypeButton
                label={styleType.general}
                style={{marginRight: 16}}
                onPress={() => setImageStyle(styleType.general)}
                isCurSelected={imageStyle === styleType.general}
            />
            <StyleTypeButton
                label={styleType.traditional}
                onPress={() => setImageStyle(styleType.traditional)}
                isCurSelected={imageStyle === styleType.traditional}
            />
        </View>
    )
}

type StyleTypeButtonPropsType = {
    label: styleType
    isCurSelected: boolean
    onPress: () => void
    style?: TextStyle
}

const StyleTypeButton: React.FC<StyleTypeButtonPropsType> = ({label, isCurSelected, onPress, style}) => {
    return (
        <TouchableHighlight onPress={onPress} underlayColor="#5E3A9E" style={{...style}}>
            <View
                style={[
                    componentsStyleSheet.styleTypeButton,
                    {backgroundColor: isCurSelected ? '#925FF0' : '#E9DFFC'},
                ]}>
                <Text
                    style={[componentsStyleSheet.styleTypeButtonText, {color: isCurSelected ? '#FFFFFF' : '#784DC7'}]}>
                    {label}
                </Text>
            </View>
        </TouchableHighlight>
    )
}

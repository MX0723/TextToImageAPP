import React from 'react'
import {Text, TextStyle, TouchableHighlight, View} from 'react-native'
import {componentsStyleSheet} from '../Style/ComponentsStyleSheet'

type BatchSizeButtonGroupPropsType = {
    batchSize: number
    setBatchSize: React.Dispatch<React.SetStateAction<number>>
}

export const BatchSizeButtonGroup: React.FC<BatchSizeButtonGroupPropsType> = ({batchSize, setBatchSize}) => {
    return (
        <View
            style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 16,
            }}>
            <Text style={{fontSize: 16, marginRight: 16}}>生成数量</Text>
            {[1, 2, 3, 4].map(value => (
                <BatchSizeButton
                    key={value}
                    isCurSelected={value === batchSize}
                    label={value.toString()}
                    style={{marginRight: 16, borderRadius: 4}}
                    onPress={() => {
                        setBatchSize(value)
                    }}
                />
            ))}
        </View>
    )
}

type StyledButtonPropsType = {
    label: string
    isCurSelected: boolean
    onPress: () => void
    style?: TextStyle
}

const BatchSizeButton: React.FC<StyledButtonPropsType> = ({label, isCurSelected, onPress, style}) => {
    return (
        <TouchableHighlight onPress={onPress} underlayColor="#5E3A9E" style={{...style}}>
            <View
                style={[
                    componentsStyleSheet.batchSizeButton,
                    {backgroundColor: isCurSelected ? '#925FF0' : '#E9DFFC'},
                ]}>
                <Text
                    style={[componentsStyleSheet.batchSizeButtonText, {color: isCurSelected ? '#FFFFFF' : '#784DC7'}]}>
                    {label}
                </Text>
            </View>
        </TouchableHighlight>
    )
}

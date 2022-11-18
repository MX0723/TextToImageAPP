import {StyleSheet} from 'react-native'

export const componentsStyleSheet = StyleSheet.create({
    styleTypeButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 30,
        width: 50,
        borderRadius: 4,
    },
    styleTypeButtonText: {
        fontSize: 16,
        fontWeight: '400',
    },
    batchSizeButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 40,
        borderRadius: 4,
    },
    batchSizeButtonText: {
        fontSize: 20,
        fontWeight: '400',
    },
    generateButton: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 130,
        borderRadius: 40,
    },
    generateButtonText: {
        fontSize: 20,
        fontWeight: '300',
    },
})

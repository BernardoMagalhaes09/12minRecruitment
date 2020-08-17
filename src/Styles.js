import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    containerPlayer: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        flexDirection: 'column',
        width: '100%'
    },
    upImage: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%'
    },
    icon: {
        height: 60,
        width: 60
    },
    list: {
        flex: 8
    },
    imageContainer: {
        flex: 3,
        alignItems: 'center',
    },
    containerSounds: {
        flexDirection: 'row',
        borderColor: '#3f51b5',
        borderBottomWidth: 2,
        alignItems: 'center',
        width: '100%',
        height: 100
    },
    textList: {
        flex: 6,
        alignItems: 'stretch',
        justifyContent: 'center'
    },
    iconPlay: {
        flex: 2
    },
    textTitle: {
        fontSize: 16,
        margin: 15,
        fontFamily: 'serif'
    },
    imageSound: {
        height: 93,
        width: 108,
        borderRadius: 12
    },
    headerImage: {
        height: '100%',
        width: '100%',
        opacity: 0.85
    },
    textLight: {
        color: '#B6B7BF'
    },
    text: {
        color: '#8E97A6'
    },
    textDark: {
        color: '#3D425C'
    },
    coverContainer: {
        marginTop: 20,
        width: 250,
        height: 250,
        shadowColor: '#5D3F6A',
        shadowOffset: { height: 15 },
        shadowRadius: 8,
        shadowOpacity: 0.3
    },
    cover: {
        width: 250,
        height: 250,
        borderRadius: 125
    },
    timeStamp: {
        fontSize: 11,
        fontWeight: '500'
    },
    playButtonContainer: {
        backgroundColor: '#FFF',
        borderColor: 'rgba(93, 63, 106, 0.2)',
        borderWidth: 16,
        width: 128,
        height: 128,
        borderRadius: 64,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 32,
        shadowColor: '#5D3F6A',
        shadowRadius: 30,
        shadowOpacity: 0.5
    },
    playButtonContainer2: {
        backgroundColor: '#FFF',
        borderColor: 'rgba(63, 81, 181, 0.7)',
        borderWidth: 5,
        width: 50,
        height: 50,
        borderRadius: 64,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#3f51b5',
        shadowRadius: 30,
        shadowOpacity: 0.5
    },
    backButton:{
        margin: 10
    }
})

export default styles
import React, { Component } from 'react'
import {
    View,
    Image,
} from 'react-native'
import styles from '../Styles'

class Icon extends Component {
    render() {
        return (
            <View>
                <Image style={styles.icon} source={{ uri: 'https://findicons.com/files/icons/772/token_light/256/sound.png' }} />
            </View>
        )
    }
}

export default Icon



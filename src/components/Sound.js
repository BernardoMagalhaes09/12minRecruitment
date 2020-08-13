import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    Alert
} from 'react-native'
import styles from '../Styles'
import { Icon } from 'react-native-elements'
import 'react-native-gesture-handler';



class Sound extends Component {
    constructor(props) {
        super(props)
        this.state = {
            database: [],
        }
    }

    render() {
        return (
            <View style={styles.containerSounds}>
                <View style={styles.imageContainer}>
                    <Image style={styles.imageSound} source={{ uri: `${this.props.sound.thumb_image_url}` }} />
                </View>
                <View style={styles.textList}>
                    <Text onPress={() => { Alert.alert(`${this.props.sound.title}`, `${this.props.sound.description}`) }} style={styles.textTitle}>{this.props.sound.title}</Text>
                </View>
                <View style={styles.iconPlay}>
                    <Icon name='play' type='font-awesome' color='#3f51b5' onPress={() => {}} />
                </View>
            </View>
        )
    }
}

export default Sound
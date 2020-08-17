import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    Alert,
    TouchableOpacity
} from 'react-native'
import styles from '../Styles'
import 'react-native-gesture-handler'
import { FontAwesome5 } from "@expo/vector-icons"


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
                        <Image style={styles.imageSound}
                            source={{ uri: `${this.props.sound.thumb_image_url}` }} />
                    </View>
                    <View style={styles.textList}>
                        <Text onPress={() => {
                            Alert.alert(`${this.props.sound.title}`,
                                `${this.props.sound.description}`)
                        }}
                            style={styles.textTitle}>{this.props.sound.title}</Text>
                    </View>
                    <View style={styles.iconPlay}>
                        <TouchableOpacity style={styles.playButtonContainer2} onPress={() => { this.props.onSoundPress(this.props.sound)}}>
                            <FontAwesome5
                                name="play"
                                size={22}
                                color="#3D425C"
                                style={styles.playButton}
                            ></FontAwesome5>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }
    }

    export default Sound
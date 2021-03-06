
import React, { Component } from "react"
import { Text, View, Image, SafeAreaView, TouchableOpacity } from "react-native"
import Slider from "react-native-slider";
import { FontAwesome5, AntDesign } from "@expo/vector-icons"
import styles from '../Styles'
import { Audio } from 'expo-av'
import 'react-native-gesture-handler'

const soundObject = new Audio.Sound()

class SoundPlayer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            trackLength: 9999,
            timeElapsed: '0:00',
            timeRemaining: null,
            isPlay: true,
            value: 0,
            status: {},
            seconds: 0,
        }
    }

    async playSound() {
        try {
            await soundObject.loadAsync({ uri: `${this.props.route.params.sound.audio_url}` })
            await soundObject.playAsync()
            setTimeout(async () => {
                const soundStatus = await soundObject.getStatusAsync()
                this.setState({ status: soundStatus })
                this.setState({ timeRemaining: this.time_convert(soundStatus.durationMillis / 1000) })
            }, 300)
        } catch (err) {
            console.log('err: ', err);
        }
    } catch(err) {
        console.log('err: ', err);
    }

    time_convert(num) {
        var minutes = Math.floor(num / 60);
        var seconds = num % 60;
        if (seconds < 10) {
            seconds = 0 + `${seconds.toFixed(0)}`
            return minutes + ":" + seconds;
        }
        return minutes + ":" + seconds.toFixed(0);
    }

    playPause = () => {
        if (this.state.isPlay === true) {
            soundObject.pauseAsync()
            this.setState({ isPlay: !this.state.isPlay })
        } else if (this.state.isPlay === false) {
            soundObject.playAsync()
            this.setState({ isPlay: !this.state.isPlay })
        }
    }

    chanceButton = () => {
        this.setState({ isPlay: !this.state.isPlay })
        this.playPause()
    }

    render() {
        { this.playSound() }
        return (
            <SafeAreaView style={styles.containerPlayer}>
                <View>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('ListSounds'), soundObject.unloadAsync() }}>
                        <AntDesign style={styles.backButton} name="leftcircleo" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ alignItems: 'center', marginTop: 10 }}>
                        <Text style={[styles.textLight, { fontSize: 12 }]}>Processo Seletivo</Text>
                        <Text style={[styles.text, { fontSize: 15, fontWeight: '500', marginTop: 8 }]}>
                            App 12 min
                            </Text>
                    </View>
                    <View style={styles.coverContainer}>
                        <Image style={styles.cover} source={{ uri: `${this.props.route.params.sound.medium_image_url}` }} />
                    </View>
                    <View style={{ alignItems: 'center', marginTop: 5, justifyContent: 'center' }}>
                        <Text style={[styles.textDark, { fontSize: 20, fontWeight: '500' }]}>{this.props.route.params.sound.title}</Text>
                        <Text style={[styles.text, { fontSize: 16, marginTop: 8 }]}>{this.props.route.params.sound.author}</Text>
                    </View>
                </View>
                <View style={{ marginBottom: 32 }}>
                    <Slider
                        minimumValue={0}
                        maximumValue={this.state.trackLength}
                        trackStyle={styles.track}
                        thumbStyle={styles.thumb}
                        minimumTrackTintColor="#93A8B3"
                    ></Slider>
                    <View style={{ marginTop: -12, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={[styles.textLight, styles.timeStamp]}>{this.state.timeElapsed}</Text>
                        <Text style={[styles.textLight, styles.timeStamp]}>{this.state.timeRemaining}</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: -20 }}>
                    <TouchableOpacity style={styles.playButtonContainer} onPress={this.chanceButton}>
                        {this.state.isPlay ? (
                            <FontAwesome5
                                name='pause'
                                size={32}
                                color='#3D425C'
                                style={[styles.playButton, { marginLeft: 5 }]}>
                            </FontAwesome5>
                        ) : (
                                <FontAwesome5
                                    name='play'
                                    size={32}
                                    color='#3D425C'
                                    style={[styles.playButton, { marginLeft: 5 }]}>
                                </FontAwesome5>
                            )}
                    </TouchableOpacity>
                </View>
            </SafeAreaView >
        );
    }
}

export default SoundPlayer

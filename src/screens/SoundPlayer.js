
import React, { Component } from "react"
import { Text, View, Image, SafeAreaView, TouchableOpacity } from "react-native"
import Slider from '@react-native-community/slider'
import Moment from "moment"
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
                this.setState({status: soundStatus})
                }, 300)
        } catch (err) {
            console.log('err: ', err);
        }
    } catch(err) {
        console.log('err: ', err);
    }

    changeTime = () => {
        this.setState({ timeElapsed: Moment.utc(this.state.seconds * 1000).format('m:ss') })
        this.setState({ timeRemaining: Moment.utc((this.state.trackLength - this.state.seconds) * 1000).format('m:ss') })
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
                <View style={{ alignItems: 'center' }}>
                    <View style={{ alignItems: 'center', marginTop: 30 }}>
                        <Text style={[styles.textLight, { fontSize: 12 }]}>Processo Seletivo</Text>
                        <Text style={[styles.text, { fontSize: 15, fontWeight: '500', marginTop: 8 }]}>
                            App 12 min
                            </Text>
                    </View>
                    <View style={styles.coverContainer}>
                        <Image style={styles.cover} source={{ uri: `${this.props.route.params.sound.medium_image_url}` }} />
                    </View>
                    <View style={{ alignItems: 'center', marginTop: 10 }}>
                        <Text style={[styles.textDark, { fontSize: 20, fontWeight: '500' }]}>{this.props.route.params.sound.title}</Text>
                        <Text style={[styles.text, { fontSize: 16, marginTop: 8 }]}>{this.props.route.params.sound.author}</Text>
                    </View>
                </View>

                <View style={{ margin: 15 }}>
                    < Slider
                        style={{ width: '100%', height: 40 }}
                        onValueChange={0}
                        onSlidingComplete={0}
                        minimumValue={0}
                        maximumValue={this.state.trackLength}
                        minimumTrackTintColor='#3f51b5'
                        maximumTrackTintColor="#93A8B3"
                    ></Slider>
                <View style={{ marginTop: -12, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={[styles.textLight, styles.timeStamp]}>{this.state.timeElapsed}</Text>
                    <Text style={[styles.textLight, styles.timeStamp]}>{this.state.timeRemaining}</Text>
                </View>
                </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 16 }}>
                <TouchableOpacity style={styles.playButtonContainer} onPress={this.chanceButton}>
                    {this.state.isPlay ? (
                        <FontAwesome5
                            name='pause'
                            size={32}
                            color='#3D425C'
                            style={[styles.playButton, { marginLeft: 8 }]}>
                        </FontAwesome5>
                    ) : (
                            <FontAwesome5
                                name='play'
                                size={32}
                                color='#3D425C'
                                style={[styles.playButton, { marginLeft: 8 }]}>
                            </FontAwesome5>
                        )}
                </TouchableOpacity>
            </View>
            </SafeAreaView >
        );
    }
}

export default SoundPlayer

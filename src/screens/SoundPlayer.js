
import React, {Component} from "react";
import {Text, View, Image, SafeAreaView, TouchableOpacity } from "react-native";
import Slider from "react-native-slider";
import Moment from "moment";
import { FontAwesome5 } from "@expo/vector-icons";
import styles from '../Styles'
import axios from 'axios'

class SoundPlayer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            database: {},
            trackLength: 300,
            timeElapsed: "0:00",
            timeRemaining: "5:00"
        }
    }

    async componentDidMount() {
        await axios.get('https://run.mocky.io/v3/96f0177a-118f-43b8-9c99-e84e3dc3fa81')
            .then(res => this.setState({ database: Object.assign({}, res.data.data)}))
            .catch(err => { console.log(err); })
    }

    changeTime = seconds => {
        this.setState({ timeElapsed: Moment.utc(seconds * 1000).format("m:ss") });
        this.setState({ timeRemaining: Moment.utc((this.state.trackLength - seconds) * 1000).format("m:ss") });
    };

    render() {
        return (
            <SafeAreaView style={styles.containerPlayer}>
                <View style={{ alignItems: "center" }}>
                    <View style={{ alignItems: "center", marginTop: 30 }}>
                        <Text style={[styles.textLight, { fontSize: 12 }]}>PLAYLIST</Text>
                        <Text style={[styles.text, { fontSize: 15, fontWeight: "500", marginTop: 8 }]}>
                            Subscribe to DesignIntoCode
                            {console.log(this.state.database)}
                        </Text>
                    </View>
                    <View style = {styles.coverContainer}>
                        <Image style={styles.cover} source={{ uri: 'https://cdn.12min.com/books/books_background/163_chief_customer.site_thumb.jpg?1497471445' }} />
                    </View>
                    <View style={{ alignItems: "center", marginTop: 10 }}>
                        <Text style={[styles.textDark, { fontSize: 20, fontWeight: "500" }]}>Exhale</Text>
                        <Text style={[styles.text, { fontSize: 16, marginTop: 8 }]}>Jeremy Blake</Text>
                    </View>
                </View>

                <View style={{ margin: 15 }}>
                    <Slider
                        minimumValue={0}
                        maximumValue={this.state.trackLength}
                        trackStyle={styles.track}
                        thumbStyle={styles.thumb}
                        minimumTrackTintColor="#93A8B3"
                        onValueChange={seconds => this.changeTime(seconds)}
                    ></Slider>
                    <View style={{ marginTop: -12, flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={[styles.textLight, styles.timeStamp]}>{this.state.timeElapsed}</Text>
                        <Text style={[styles.textLight, styles.timeStamp]}>{this.state.timeRemaining}</Text>
                    </View>
                </View>

                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 16 }}>
                    <TouchableOpacity>
                        <FontAwesome5 name="backward" size={32} color="#93A8B3"></FontAwesome5>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.playButtonContainer}>
                        <FontAwesome5
                            name="play"
                            size={32}
                            color="#3D425C"
                            style={[styles.playButton, { marginLeft: 8 }]}
                        ></FontAwesome5>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <FontAwesome5 name="forward" size={32} color="#93A8B3"></FontAwesome5>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}

export default SoundPlayer

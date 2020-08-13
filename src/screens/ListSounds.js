import React, { Component } from 'react'
import {
    View,
    Image
} from 'react-native'
import styles from '../Styles'
import axios from 'axios'
import Sound from '../components/Sound'
import { ScrollView } from 'react-native-gesture-handler'


class ListSounds extends Component {
    constructor(props) {
        super(props)
        this.state = {
            database: [],
        }
    }

    async componentDidMount() {
        await axios.get('https://run.mocky.io/v3/96f0177a-118f-43b8-9c99-e84e3dc3fa81')
            .then(res => this.setState({ database: res.data.data }))
            .catch(err => { console.log(err); })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.upImage}>
                    <Image style={styles.headerImage}
                        source={{ uri: 'https://image.freepik.com/vetores-gratis/fundo-de-tecnologia-mini-digital-sound-wave_34926-187.jpg' }}>
                    </Image>
                </View>
                <View style = {{flex: 8}}>
                <ScrollView style={styles.list}>
                    {this.state.database.map(res =>
                        <Sound sound={res} />)}
                </ScrollView>
                </View>
            </View>
        )
    }
}

export default ListSounds


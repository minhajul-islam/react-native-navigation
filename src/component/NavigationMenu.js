import React, {Component} from 'react';
import drawerCover from '../assets/image/nav_header.png';
import {
    ScrollView,
    StyleSheet,
    Platform,
    Image,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';


class NavigationMenu extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Image source={drawerCover} style={styles.drawerCover}/>
                </View>
                <ScrollView>
                    <TouchableOpacity onPress={() => {
                        this.props.navigation.navigate('SCREEN_ONE', {});
                    }}>
                        <View style={styles.item}>
                            <Image source={require('../assets/icon/ic_contact.png')} style={styles.icon}/>
                            <Text style={styles.text}>Screen One</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        this.props.navigation.navigate('SCREEN_TWO', {});
                    }}>
                        <View style={styles.item}>
                            <Image source={require('../assets/icon/ic_contact.png')} style={styles.icon}/>
                            <Text style={styles.text}>Screen Two</Text>
                        </View>
                    </TouchableOpacity>


                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    drawerCover: {
        alignSelf: "stretch",
        height: 100,
        width: 220,
        marginTop: 70,
        position: "relative",
        marginBottom: 20
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        resizeMode: 'contain',
        marginLeft: 20,
        width: 24,
        height: 24,
    },
    text: {
        fontWeight: "400",
        alignItems: 'center',
        fontSize: 16,
        marginLeft: 16,
        paddingTop: Platform.OS === 'ios' ? 15 : 0,
        height: 50,
        textAlignVertical: "center",
    },
});

export default NavigationMenu;
import React, {Component} from 'react';
import {Image, Platform, TouchableOpacity, View,Dimensions} from "react-native";
const { width, height } = Dimensions.get('window');

export default class ScreenOne extends Component {

    constructor(props) {
        super(props);

    }


    static navigationOptions = ({navigation}) => ({

        title:'ScreenOne',
        headerStyle: {
            backgroundColor: '#FF6347',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
        },
        headerTitleStyle: {
            flex: 1,
            textAlign: 'center',
            marginRight: Platform.OS === 'ios' ? 0 : 56
        },
        headerLeft: (
            <View>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Image
                        source={require('../assets/icon/ic_menu.png')}
                        style={{tintColor: 'white',
                            width: 24,
                            height: 24,
                            marginLeft: 16,
                            resizeMode: 'contain',}}
                    />
                </TouchableOpacity>
            </View>
        ),

        headerTintColor: '#FFFFFF',
        noShadow: true,
        hasTabs: true
    });


    render() {
        return (

            <View >

                <Image
                    source={require('../assets/image/image_1.png')}
                    style={{height:height-250,width:width}}

                />
            </View>
        );
    }
}


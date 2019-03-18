import React from "react";
import {createStackNavigator, createDrawerNavigator, createAppContainer} from "react-navigation";

import NavigationMenu from "./component/NavigationMenu";
import ScreenOne from '../src/screen1/ScreenOne';
import ScreenTwo from "./screen2/ScreenTwo";


const Main = createStackNavigator({
    SCREEN_ONE: ScreenOne,
    SCREEN_TWO: ScreenTwo,
});


const Launcher = createDrawerNavigator({
    Home: Main,

}, {
    contentComponent: props =>
        < NavigationMenu
            {...
                props
            }
        />,

});


export default createAppContainer(Launcher);


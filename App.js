import React from 'react';
import {createAppContainer,} from 'react-navigation';

import HomeDrawerNav from './src/Route'

const AppContainer = createAppContainer(HomeDrawerNav);

export default class App extends React.Component {
    render() {
        return <AppContainer/>;
    }
}



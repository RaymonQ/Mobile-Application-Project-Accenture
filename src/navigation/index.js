import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Homescreen from '../screens/Homescreen';
import Signup from '../screens/Signup'; 
import Cardview from '../screens/Cardview';
import Walletview from '../screens/Walletview';
import Login from '../screens/Login test';

import SCREEN_NAMES from './screen-names';

import { useNavigation } from '@react-navigation/native';

const StackNavigator = createStackNavigator({
    
    [SCREEN_NAMES.home]: {
        screen: Homescreen
    },
    [SCREEN_NAMES.signup]: {
        screen: Signup
    },
    [SCREEN_NAMES.card]: {
        screen: Cardview
    },
    [SCREEN_NAMES.wallet]: {
        screen: Walletview,
        headerShown: false
        
    },
    [SCREEN_NAMES.login]: {
        screen: Login
        
    }
    
});

export default createAppContainer(StackNavigator);
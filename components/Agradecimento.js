import React from 'react';
import {View, Text} from 'react-native';
import strings from './../strings/strings';

const Agradecimento =({pessoa}) => {
    return <View>
        <Text>{strings.pt.welcome}! {pessoa}</Text>
    </View>
}

export default Agradecimento
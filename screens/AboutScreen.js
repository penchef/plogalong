import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';


export default class AboutScreen extends React.Component {
    static navigationOptions = {
        title: 'About Plogalong'
    };

    render() {
        return (
            <Text>
              More information about this app
            </Text>
        );
    }
}


const styles = StyleSheet.create({

});

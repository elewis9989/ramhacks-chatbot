import React from 'react'

import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native'

import {
    Actions,
} from 'react-native-router-flux';

export default class Home extends React.Component{
    state = {
        name: '',
    };
    render(){
        return(
            <View>
                <Text style={styles.title}>
                    Enter your name:
                </Text>
                <TextInput
                    style={styles.nameInput}
                    placeholder='Jon B'
                    onChangeText={(text) => {
                        this.setState({
                            name:text,
                        });
                    }}
                    value={this.state.name}
                />
                <TouchableOpacity
                    onPress={() => {
                        Actions.chat({
                            name:this.state.name,
                        })
                    }}
                >
                    <Text style={styles.label}>
                        Next
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    label: {
      fontSize: 20,
      marginLeft: 15,
    },
    textInput: {
      height: 40,
      marginLeft: 15,
    },
});

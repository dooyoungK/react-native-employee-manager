import React from 'react';
import {
    Text,
    View
} from 'react-native';

/*
Functional Component
 - Used for presenting static data.
 - Can't handle fetching data.
 - Easy to write.
*/
const Header = (props) => {
    const { viewStyle, textStyle } = styles; //destructing

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        height: 60,
        paddingTop: 15,
        alignItems: 'center',  //horizontally
        justifyContent: 'center', //vertically
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};


export { Header };

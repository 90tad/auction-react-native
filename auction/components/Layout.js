import {View, StyleSheet} from 'react-native';
import React from 'react';

function Layout({horizontal, style, center, matchParent,...props}) {
    const layoutStyle = [
        horizontal && styles.horizontal,
        center && styles.center,
        matchParent && styles.matchParent,
    ];
    return (
        <View style={[layoutStyle, style]} {...props}>
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    horizontal: {
        flexDirection: 'row',
    },
    matchParent: {
        flex: 1,
    },
    center: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
});

export default Layout;

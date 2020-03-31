import React from 'react';
import {Card} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import {Dimension} from '../const/Dimension';

function CardView({userDetail, ...props}) {

    const cardStyle = [
        userDetail && styles.card,
    ];

    return (
        <Card style={cardStyle}>{props.children}</Card>
    );
}

const styles = StyleSheet.create({
    card: {
        paddingBottom: 8,
        marginVertical: 8,
        alignSelf: 'center',
        width: Dimension.DEVICE_WIDTH - 16,
    },
});

export default CardView;

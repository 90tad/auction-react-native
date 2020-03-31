import React from 'react';
import {AirbnbRating} from 'react-native-ratings';
import {StyleSheet} from 'react-native';

function RatingBar({...props}) {
    return (
        <AirbnbRating
            {...props}
            isDisabled={true}
            size={12}
            showRating={false}
            starStyle={styles.starStyle}
        />
    );
}

const styles = StyleSheet.create({
    starStyle: {
        margin: 1,
    },
});

export default RatingBar

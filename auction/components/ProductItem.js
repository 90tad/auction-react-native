import React, { Component } from 'react';
import { Avatar, Button, Card, Title, Paragraph, IconButton, Headline, Subheading } from 'react-native-paper';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Rating, AirbnbRating } from 'react-native-ratings'

const ProcuctItem = () => {
    return (
        <Card style={{ margin: 8 }}>
            <Card.Cover source={require('../assets/koi_image.png')} />
            <Card.Content style={{ marginTop: 16 }}>
                <Title>Doitsu Koihaku</Title>
                <View style={styles.ratingView}>
                    <AirbnbRating size={12} showRating={false} starStyle={{ margin: 1 }} />
                    <Paragraph style={{ marginLeft: 8 }}>(43 đánh giá)</Paragraph>
                </View>
            </Card.Content>
            <Card.Actions>
            </Card.Actions>
        </Card>
    )
}

const styles = StyleSheet.create({
    ratingView: {
        flexDirection: "row"
    },
    ratingBar: {
        height: 24
    }
})

export default ProcuctItem
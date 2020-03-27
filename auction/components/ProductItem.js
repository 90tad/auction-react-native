import React, {Component} from 'react';
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  IconButton,
  Headline,
  Subheading,
} from 'react-native-paper';
import {View, Image, Text, StyleSheet} from 'react-native';
import {Rating, AirbnbRating} from 'react-native-ratings';
import {Dimens} from '../const/Dimens';

const ProcuctItem = props => {
  const {name, rate_count} = props.item;
  return (
    <Card style={styles.cardContainer} onPress={props.onItemPress}>
      <Card.Cover source={require('../assets/koi_image.png')} />
      <Card.Content style={styles.itemContent}>
        <Title>{name}</Title>
        <View style={styles.ratingView}>
          <AirbnbRating
            size={12}
            showRating={false}
            starStyle={styles.starStyle}
          />
          <Paragraph
            style={styles.paragraph}>{`${rate_count} lượt đánh giá`}</Paragraph>
        </View>
      </Card.Content>
      <Card.Actions></Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: Dimens.DIMEN_8,
    marginHorizontal: Dimens.DIMEN_8,
  },
  ratingView: {
    flexDirection: 'row',
  },
  ratingBar: {
    height: 24,
  },
  itemContent: {
    marginTop: 16,
  },
  starStyle: {
    margin: 1,
  },
  paragraph: {
    marginLeft: Dimens.DIMEN_8,
  },
});

export default ProcuctItem;

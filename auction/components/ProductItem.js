import React, { Component, useState } from 'react';
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  IconButton,
  Headline,
  Subheading,
  TextInput,
} from 'react-native-paper';
import { View, Image, Text, StyleSheet, LayoutAnimation, UIManager, Animated } from 'react-native';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { Dimens } from '../const/Dimens';

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const ProcuctItem = props => {
  const { name, rate_count, default_rating, price, time_left } = props.item;
  const [expand, setExpand] = useState(false)

  var icon = expand ? "chevron-up" : "chevron-down"

  function onExpandButtonPress() {
    setExpand(!expand)
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
  }
  return (
    <Card style={styles.cardContainer} onPress={props.onItemPress}>
      <View style={{ alignItems: "center", backgroundColor: "lightgray", height: 194 }}>
        <Image
          source={require("../assets/koi_image.png")}
          style={{ height: 194, resizeMode: "contain" }} />
      </View>
      <View style={{ padding: 16, flexDirection: "row" }}>
        <View style={{ flex: 1 }}>
          <Headline>{name}</Headline>
          <View style={styles.ratingView}>
            <AirbnbRating
              defaultRating={default_rating}
              isDisabled={true}
              size={12}
              showRating={false}
              starStyle={styles.starStyle}
            />
            <Paragraph
              style={styles.paragraph}>{`${rate_count} lượt đánh giá`}</Paragraph>
          </View>
        </View>
        <View>
          <IconButton
            icon={icon}
            onPress={onExpandButtonPress}
            style={{ alignSelf: "flex-end" }}
          />
        </View>
      </View>
      {expand &&
        <View style={{ overflow: "hidden" }} removeClippedSubviews={true} collapsable={true} style={{ paddingBottom: 16, paddingHorizontal: 16 }}>
          <Subheading>{`Gia khoi diem: ${price}`}</Subheading>
          <Subheading>{`Thoi gian: ${time_left}`}</Subheading>
        </View>
      }
      {/* <Card.Cover source={require('../assets/koi_image.png')} />
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
      <Card.Actions></Card.Actions> */}
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

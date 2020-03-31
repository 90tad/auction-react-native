import React, {Component, useState} from 'react';
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
import {
    View,
    Image,
    Text,
    StyleSheet,
    LayoutAnimation,
    UIManager,
    Animated,
    Platform,
} from 'react-native';
import {Dimension} from '../const/Dimension';
import Layout from './Layout';
import RatingBar from './RatingBar';

if (
    Platform.OS === 'android' &&
    UIManager.setLayoutAnimationEnabledExperimental
) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const ProductItem = props => {
    const {name, rate_count, default_rating, price, time_left} = props.item;
    const [expand, setExpand] = useState(false);
    let icon = expand ? 'chevron-up' : 'chevron-down';

    function onExpandButtonPress() {
        setExpand(!expand);
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    }

    return (
        <Card style={styles.cardContainer} onPress={props.onItemPress}>
            <View
                style={{
                    borderTopLeftRadius: 4,
                    borderTopRightRadius: 4,
                    alignItems: 'center',
                    backgroundColor: 'lightgray',
                    height: 194,
                }}>
                <Image
                    source={require('../assets/koi_image.png')}
                    style={{
                        height: 194,
                        resizeMode: 'contain',
                        width: Dimension.DEVICE_WIDTH - 8,
                    }}
                />
            </View>
            <Layout horizontal card>
                <Layout matchParent>
                    <Headline>{name}</Headline>
                    <Layout horizontal>
                        <RatingBar defaultRating={default_rating}/>
                        <Paragraph
                            style={
                                styles.paragraph
                            }>{`${rate_count} lượt đánh giá`}</Paragraph>
                    </Layout>
                </Layout>
                <View>
                    <IconButton
                        icon={icon}
                        onPress={onExpandButtonPress}
                        style={{alignSelf: 'flex-end', justifyContent:'center'}}
                    />
                </View>
            </Layout>
            {expand && (
                <View
                    removeClippedSubviews={true}
                    collapsable={true}
                    style={{
                        paddingBottom: 24,
                        paddingHorizontal: 16,
                        overflow: 'hidden',
                    }}>
                    <Subheading>{`Gia khoi diem: ${price}`}</Subheading>
                    <Subheading>{`Thoi gian: ${time_left}`}</Subheading>
                </View>
            )}
        </Card>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        marginTop: Dimension.DIMEN_8,
        marginHorizontal: Dimension.DIMEN_8,
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
        marginLeft: Dimension.DIMEN_8,
    },
});

export default ProductItem;

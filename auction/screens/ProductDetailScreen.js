import React, {Component, useState, useContext} from 'react';
import {Text, Image, View, StyleSheet} from 'react-native';
import {Dimens} from '../const/Dimens';
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
    Caption,
} from 'react-native-paper';
import {Colors} from '../const/Colors';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import AppContext from '../app_context/AppContext';

const image = [
    require('../assets/koi_image.png'),
    require('../assets/koi_image.png'),
    require('../assets/koi_image.png'),
    require('../assets/koi_image.png'),
    require('../assets/koi_image.png'),
    require('../assets/koi_image.png'),
];

export default function ProductDetailScreen({route}) {
    // const context = useContext(AppContext);
    // const [selectedProduct, setSelectedProduct] = useState('');
    const selectedProduct = route.params;

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={{
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Image
                source={require('../assets/koi_image.png')}
                style={styles.image}
                resizeMode="contain"
            />
            <View style={{height: 86, width: Dimens.DEVICE_WIDTH}}>
                <FlatList
                    horizontal={true}
                    data={image}
                    renderItem={item => (
                        <Image
                            source={item.item}
                            style={{width: 86, height: 86, marginHorizontal: 4}}
                            resizeMode="contain"
                        />
                    )}
                    keyExtractor={item => item.index}
                />
            </View>
            <View style={{alignSelf: 'flex-start'}}>
                <Title style={{}}>{selectedProduct.name}</Title>
                <Subheading style={{}}>{selectedProduct.price}</Subheading>
                <Subheading>Chu trai: Trai ca asdsd</Subheading>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: Dimens.DIMEN_16,
        flex: 1,
    },
    image: {
        height: Dimens.DEVICE_HEIGHT / 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

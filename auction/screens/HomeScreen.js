import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import ProductItem from '../components/ProductItem';
import {data} from '../MOCK_DATA';

function HomeScreen({navigation}) {
  return (
    <View>
      <FlatList
        data={data}
        renderItem={data => (
          <ProductItem
            item={data.item}
            onItemPress={() => navigation.navigate('ProductDetail', data.item)}
          />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

export default HomeScreen

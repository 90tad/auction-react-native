import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import ProductItem from '../components/ProductItem';
import {data} from '../MOCK_DATA';

export default class HomeScreen extends Component {
    render() {
        return (
            <View>
                <FlatList
                    data={data}
                    renderItem={data => (
                        <ProductItem
                            item={data.item}
                            onItemPress={() =>
                                this.props.navigation.navigate('ProductDetail')
                            }
                        />
                    )}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        );
    }
}

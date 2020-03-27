import React, {Component} from 'react';
import {Text, View, FlatList} from 'react-native';
import ProcuctItem from '../components/ProductItem';
import EditText from '../components/EditText';
import {data} from '../MOCK_DATA';

export default class HomeScreen extends Component {
  render() {
    return (
      <View>
        <FlatList
          data={data}
          renderItem={data => (
            <ProcuctItem
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

import React from 'react';
import Layout from './Layout';
import Icon from 'react-native-vector-icons/Ionicons';
import {Text, Caption, Paragraph} from 'react-native-paper';
import {Dimension} from '../const/Dimension';
import {TouchableNativeFeedback} from 'react-native';

function UserMenuItem({item, ...props}) {
  return (
    <TouchableNativeFeedback {...props}>
      <Layout
        horizontal
        style={{height: Dimension.MENU_ITEM_HEIGHT, padding: Dimension.DIMEN_16}}>
        <Icon
          name={item.icon}
          size={24}
          style={{justifyContent: 'center'}}
          color={'gray'}
        />
        <Paragraph
          style={{justifyContent: 'center', marginLeft: Dimension.DIMEN_32}}>
          {item.label}
        </Paragraph>
      </Layout>
    </TouchableNativeFeedback>
  );
}

export default UserMenuItem;

import React from 'react';
import Layout from './Layout';
import Icon from 'react-native-vector-icons/Ionicons';
import {Text, Caption, Paragraph} from 'react-native-paper';
import {Dimens} from '../const/Dimens';
import {TouchableNativeFeedback} from 'react-native';

function UserMenuItem({item, ...props}) {
  return (
    <TouchableNativeFeedback {...props}>
      <Layout
        horizontal
        style={{height: Dimens.MENU_ITEM_HEIGHT, padding: Dimens.DIMEN_16}}>
        <Icon
          name={item.icon}
          size={24}
          style={{justifyContent: 'center'}}
          color={'gray'}
        />
        <Paragraph
          style={{justifyContent: 'center', marginLeft: Dimens.DIMEN_32}}>
          {item.label}
        </Paragraph>
      </Layout>
    </TouchableNativeFeedback>
  );
}

export default UserMenuItem;

import String from '../const/String';
import React from 'react';
import {FlatList} from 'react-native';
import UserMenuItem from './UserMenuItem';
import {Dimens} from '../const/Dimens';

const guestMenu = [
  {
    id: 0,
    icon: 'md-home',
    label: String.MY_COMMENTS,
  },
  {
    id: 1,
    icon: 'md-home',
    label: String.SEEN_PRODUCT,
  },
  {
    id: 2,
    icon: 'md-home',
    label: String.BOUGHT_PRODUCT,
  },
];

const adminMenu = [
  {
    id: 3,
    icon: 'md-home',
    label: String.ORDER_MANAGER,
  },
  {
    id: 4,
    icon: 'md-home',
    label: String.FAVOURITE_PRODUCT_LIST,
  },
];

const partnerMenu = [
  {
    id: 6,
    label: String.ADDRESS,
    icon: 'md-home',
  },
  {
    id: 5,
    icon: 'md-home',
    label: String.ACCOUNT_DETAIL,
  },
];

const detailData = [
  {id: 0, icon: 'md-home', label: 'Ngay sinh: 12/12/1212'},
  {id: 1, icon: 'md-home', label: 'So dien thoai: 12121212'},
  {id: 2, icon: 'md-home', label: 'Gioi tinh: 1212'},
];

function UserMenu({authorities, userDetail}) {
  let specificMenu = guestMenu;
  if (authorities.findIndex(auth => auth.name === String.PARTNER) > -1) {
    specificMenu.push(...partnerMenu);
  }
  if (authorities.findIndex(auth => auth.name === String.ADMIN) > -1) {
    specificMenu.push(...adminMenu);
  }
  return (
    <FlatList
      style={{marginVertical: Dimens.DIMEN_8, backgroundColor: 'white'}}
      data={specificMenu}
      renderItem={data => <UserMenuItem item={data.item} />}
      keyExtractor={item => item.id.toString()}
    />
  );
}

export default UserMenu;

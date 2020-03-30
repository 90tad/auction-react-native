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

function UserMenu({authorities}) {
  console.log(`authorities: ${JSON.stringify(authorities)}`);
  // const guestMenu = menu.guest;
  // const adminMenu = guestMenu.concat(menu.partner).concat(menu.admin);
  // const partnerMenu = menu.partner.concat(guestMenu);

  let specificMenu = guestMenu;
  if (authorities.findIndex(auth => auth.name === String.PARTNER) > -1) {
    specificMenu.push(...partnerMenu);
  }
  if (authorities.findIndex(auth => auth.name === String.ADMIN) > -1){
    specificMenu.push(...adminMenu);
  }

  // specificMenu = authorities.map(authority => {
  //   authority.name === 'Đối Tác' && specificMenu.concat(adminMenu),
  //     console.log(`partnerMenu: ${JSON.stringify(specificMenu)}`);
  //   authority.name === 'Quản Trị' && specificMenu.concat(partnerMenu);
  //   console.log(`adminMenu: ${JSON.stringify(specificMenu)}`);
  // });
  console.log(`menu: ${JSON.stringify(specificMenu)}`);
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

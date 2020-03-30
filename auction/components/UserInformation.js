import React from 'react';
import {Subheading, Caption, Title, TouchableRipple} from 'react-native-paper';
import {View, Image, Text, TouchableNativeFeedback} from 'react-native';
import {Dimens} from '../const/Dimens';

function UserInformation({user, ...props}) {
  const userName = [user != null ? user.displayName : 'Khach'];
  const data = Array.from(user.authorities);
  return (
    <TouchableNativeFeedback
      {...props}
      style={{
        elevation: 0.5,
        borderRadius: 2,
        height: Dimens.USER_INFORMATION_HEIGHT,
        width: Dimens.DEVICE_WIDTH,
        flexDirection: 'row',
      }}>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: Dimens.DIMEN_16,
          backgroundColor: 'white',
        }}>
        <Image
          source={{uri: user.avatarUrl}}
          style={{
            width: Dimens.USER_INFORMATION_AVATAR,
            height: Dimens.USER_INFORMATION_AVATAR,
            borderRadius: Dimens.USER_INFORMATION_AVATAR / 2,
            marginVertical: Dimens.DIMEN_16,
            backgroundColor: 'lightgray',
          }}
        />
        <View style={{marginLeft: 16, justifyContent: 'center'}}>
          <Text style={{fontSize: 20}}>{userName}</Text>
          <Caption numberOfLines={1}>
            {data.map(i =>
              i.name === 'guest' ? 'Dang nhap/Dang ki' : `${i.name}/`,
            )}
          </Caption>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
}

export default UserInformation;

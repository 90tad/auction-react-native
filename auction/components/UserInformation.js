import React from 'react';
import {Subheading, Caption, Title, TouchableRipple} from 'react-native-paper';
import {View, Image, Text, TouchableNativeFeedback} from 'react-native';
import {Dimension} from '../const/Dimension';

function UserInformation({user, ...props}) {
  const userName = [user != null ? user.displayName : 'Khach'];
  const data = Array.from(user.authorities);
  return (
    <TouchableNativeFeedback
      {...props}
      style={{
        elevation: 0.5,
        borderRadius: 2,
        height: Dimension.USER_INFORMATION_HEIGHT,
        width: Dimension.DEVICE_WIDTH,
        flexDirection: 'row',
      }}>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: Dimension.DIMEN_16,
          backgroundColor: 'white',
        }}>
        <Image
          source={{uri: user.avatarUrl}}
          style={{
            width: Dimension.USER_INFORMATION_AVATAR,
            height: Dimension.USER_INFORMATION_AVATAR,
            borderRadius: Dimension.USER_INFORMATION_AVATAR / 2,
            marginVertical: Dimension.DIMEN_16,
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

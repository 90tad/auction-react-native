import {Headline, Card, Subheading, Divider} from 'react-native-paper';
import {
  Image,
  TouchableNativeFeedback,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useContext, useState} from 'react';
import Layout from '../components/Layout';
import AppContext from '../app_context/AppContext';
import {Dimens} from '../const/Dimens';
import ImagePicker from 'react-native-image-picker';
import Camera from '../components/icon/Camera';
import {Colors} from '../const/Colors';
import UserMenuItem from '../components/UserMenuItem';
import {Calendar} from 'react-native-calendars';

function UserDetail() {
  const context = useContext(AppContext);
  const {currentUser} = context;
  const [avatarSource, setAvatarSource] = useState({
    uri: currentUser.avatarUrl,
  });

  const options = {
    title: 'Cập nhật ảnh',
    takePhotoButtonTitle: 'Chọn ảnh từ máy ảnh',
    chooseFromLibraryButtonTitle: 'Chọn ảnh từ thư viện',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  useEffect(() => console.log(`useEffSrc: ${JSON.stringify(avatarSource)}`), [
    currentUser,
    avatarSource,
  ]);

  function onAvatarPress() {
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.uri};
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
        console.log(`img: ${JSON.stringify(source)}`);
        setAvatarSource(source);
      }
    });
  }

  return (
    <Layout matchParent>
      <Card
        style={{
          paddingBottom: 16,
          marginTop: 8,
          alignSelf: 'center',
          width: Dimens.DEVICE_WIDTH - 16,
        }}>
        <Image
          source={require('../assets/shark.jpg')}
          style={{
            height: 200,
            width: Dimens.DEVICE_WIDTH - 16,
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
          }}
        />
        <Layout horizontal center style={{marginTop: -126 / 2}}>
          <TouchableNativeFeedback onPress={onAvatarPress}>
            <Image
              onPress={() => console.log('img')}
              source={avatarSource}
              style={{
                width: 116,
                height: 116,
                borderRadius: 126 / 2,
                zIndex: 1,
                borderWidth: 5,
                borderColor: 'white',
              }}
            />
          </TouchableNativeFeedback>
          <TouchableOpacity
            style={{
              marginLeft: -18,
              zIndex: 1,
              width: 36,
              height: 36,
              borderRadius: 36 / 2,
              backgroundColor: Colors.PRIMARY,
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 2,
              borderColor: 'white',
            }}
            onPress={onAvatarPress}>
            <Camera width={24} height={24} />
          </TouchableOpacity>
        </Layout>
        <Headline style={{marginTop: Dimens.DIMEN_16, alignSelf: 'center'}}>
          {currentUser.displayName}
        </Headline>
        <Subheading style={{alignSelf: 'center', marginBottom: 16}}>
          Ho va ten
        </Subheading>
        <Divider style={{marginHorizontal: 8}} />
        <View>
          <UserMenuItem
            item={{icon: 'md-home', label: 'Ngay sinh: 12/12/1212'}}
            onPress={() => console.log('asd')}
          />
          <UserMenuItem
            item={{icon: 'md-home', label: 'Ngay sinh: 12/12/1212'}}
          />
          <UserMenuItem
            item={{icon: 'md-home', label: 'Ngay sinh: 12/12/1212'}}
          />
          <UserMenuItem
            item={{icon: 'md-home', label: 'Ngay sinh: 12/12/1212'}}
          />
          <Calendar
              onDayPress={(day) => {console.log('selected day', day)}}
              markedDates={{'2020-03-31': {selected: true, marked: true, selectedColor: 'blue'}}}
          />
        </View>
      </Card>
    </Layout>
  );
}

export default UserDetail;

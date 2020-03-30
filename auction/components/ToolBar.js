import React from 'react';
import {Appbar} from 'react-native-paper';
import {Colors} from '../const/Colors';
import {Dimens} from '../const/Dimens';
import {Animated} from 'react-native';

const ToolBar = ({onBackButtonPress, previous, navigation}) => {
  function handleSearch() {
  }
  function handleMore() {

  }
  return (
    <Appbar.Header style={{backgroundColor: Colors.PRIMARY}}>
        {previous ? <Appbar.BackAction onPress={onBackButtonPress} /> : null}
      <Appbar.Content title="Title" subtitle="Subtitle" />
      <Appbar.Action icon="magnify" onPress={handleSearch} />
      <Appbar.Action icon="dots-vertical" onPress={handleMore} />
    </Appbar.Header>
  );
};

export default ToolBar;

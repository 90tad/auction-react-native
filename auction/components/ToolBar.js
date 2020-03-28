import React from 'react';
import {Appbar} from 'react-native-paper';
import {Colors} from '../const/Colors';
import {Dimens} from '../const/Dimens';
import {Animated} from 'react-native';

const ToolBar = () => {
  function handleBackAction() {}
  function handleSearch() {}
  function handleMore() {}

  return (
    <Appbar.Header style={{backgroundColor: Colors.PRIMARY}}>
      <Appbar.BackAction onPress={handleBackAction} />
      <Appbar.Content title="Title" subtitle="Subtitle" />
      <Appbar.Action icon="magnify" onPress={handleSearch} />
      <Appbar.Action icon="dots-vertical" onPress={handleMore} />
    </Appbar.Header>
  );
};

export default ToolBar;

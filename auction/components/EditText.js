import React, {useState, useEffect} from 'react';
import {TextInput} from 'react-native-paper';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Dimens} from '../const/Dimens';
import {Colors} from '../const/Colors';

const EditText = ({label, icon, onChangeText}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        margin: Dimens.DIMEN_8,
      }}>
      <Icon name={icon} size={24} color="gray" style={styles.icon} />
      <TextInput
        onChangeText={text => onChangeText(text)}
        style={styles.input}
        mode="outlined"
        label={label}
        selectionColor={Colors.PRIMARY_DARK}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {alignSelf: 'center', marginRight: 16},
  input: {width: 280},
});

export default EditText;

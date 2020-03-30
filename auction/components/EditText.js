import React, {useState, useEffect} from 'react';
import {TextInput} from 'react-native-paper';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Dimens} from '../const/Dimens';
import {Colors} from '../const/Colors';

function EditText({username, password, ...props}) {

    const mLabel = [
        username && 'Tên đăng nhập' ||
        password && 'Mật khẩu',
    ];
    const mIcon = [
        username && 'person' ||
        password && 'lock',
    ];
    const {container, icon, input} = styles;

    return (
        <View
            style={container}>
            <Icon name={mIcon} size={24} color="gray" style={icon}/>
            <TextInput
                inlineImageLeft='username'
                style={input}
                mode="outlined"
                label={mLabel}
                selectionColor={Colors.PRIMARY_DARK}
                {...props}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: Dimens.DIMEN_8,
    },
    icon: {alignSelf: 'center', marginRight: 16},
    input: {width: 280},
});

export default EditText;

import React from 'react';
import {Button} from 'react-native-paper';
import {Dimens} from '../const/Dimens';
import {Colors} from '../const/Colors';

function MButton({signIn, signUp, ...props}) {

    const buttonLabel = [
        signIn && 'Đăng nhập',
        signUp && 'Đăng ký',
    ];

    return (
        <Button
            style={{margin: Dimens.DIMEN_8}}
            mode="contained"
            uppercase={false}
            color={Colors.PRIMARY}
            labelStyle={{color: Colors.WHITE}}
            {...props}>
            {buttonLabel}
        </Button>
    );
}

export default MButton;

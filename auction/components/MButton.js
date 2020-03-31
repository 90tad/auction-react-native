import React from 'react';
import {Button} from 'react-native-paper';
import {Dimension} from '../const/Dimension';
import {Colors} from '../const/Colors';

function MButton({signIn, signUp, ...props}) {

    const buttonLabel = [
        signIn && 'Đăng nhập',
        signUp && 'Đăng ký',
    ];

    return (
        <Button
            style={{margin: Dimension.DIMEN_8}}
            mode={signIn && "contained" || signUp && "text"}
            uppercase={false}
            color={Colors.PRIMARY}
            labelStyle={{color: Colors.WHITE}}
            {...props}>
            {buttonLabel}
        </Button>
    );
}

export default MButton;

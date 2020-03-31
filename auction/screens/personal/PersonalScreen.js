import React from 'react';
import {View} from 'react-native';
import UserInformation from '../../components/UserInformation';
import UserMenu from '../../components/UserMenu';
import personalPresenter from './personalPresenter';

function PersonalScreen({navigation}) {
    const [user, handleUserInformationPress] = personalPresenter({navigation});
    return (
        <View>
            <UserInformation user={user} onPress={handleUserInformationPress}/>
            <UserMenu authorities={user.authorities}/>
        </View>
    );
}

export default PersonalScreen

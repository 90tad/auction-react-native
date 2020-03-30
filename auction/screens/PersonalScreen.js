import React, {useState, useContext, useEffect} from 'react';
import {View, ActivityIndicator, SafeAreaView} from 'react-native';
import EditText from '../components/EditText';
import AppContext from '../app_context/AppContext';
import UserInformation from '../components/UserInformation';
import UserMenu from '../components/UserMenu';


export default function PersonalScreen({navigation}) {
    const urlExample =
        'https://res.cloudinary.com/techsnips/image/fetch/w_2000,f_auto,q_auto,c_fit/https://adamtheautomator.com/content/images/size/w2000/2019/10/user-1633249_1280.png';
    const context = useContext(AppContext);
    const [user, setUser] = useState({
        displayName: 'Khach',
        avatarUrl: urlExample,
        authorities: [{name: 'guest'}],
    });
    const {currentUser, isUserSignIned} = context;

    useEffect(() => {
        if (currentUser != null && isUserSignIned) {
            setUser(currentUser);
            navigation.navigate('MainTab');
        }
    }, [user, isUserSignIned, navigation]);

    function onUserInformationPress() {
        !isUserSignIned
            ? navigation.navigate('SignIn')
            : console.log('asd');
        //TODO: NAVIGATE USER DETAIL SCREEN
    }

    return (
        <View>
            <UserInformation user={user} onPress={onUserInformationPress}/>
            <UserMenu authorities={user.authorities}/>
        </View>
    );
}

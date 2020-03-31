import React, {useState, useEffect, useContext} from 'react';
import AppContext from '../../app_context/AppContext';
import {Url} from '../../api_service/Url';
import {Screen} from '../../const/Screen';

const personalPresenter = function ({navigation}) {

    const urlExample = Url.GUEST_AVATAR_URL;
    const context = useContext(AppContext);
    const {currentUser, isUserSignIned} = context;
    const initialState = {
        displayName: 'Khach',
        avatarUrl: urlExample,
        authorities: [{name: 'guest'}],
    };
    const {navigate} = navigation;
    const {MAIN, SIGN_IN, USER_DETAIL} = Screen;
    const [user, setUser] = useState(initialState);

    useEffect(() => {
        if (currentUser != null && isUserSignIned) {
            setUser(currentUser);
            navigate(MAIN);
        }
    }, [user, isUserSignIned, currentUser]);

    function handleUserInformationPress() {
        !isUserSignIned
            ? navigate(SIGN_IN)
            : navigate(USER_DETAIL);
    }

    return [user, handleUserInformationPress];
};

export default personalPresenter;

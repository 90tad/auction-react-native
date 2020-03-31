import React, {useContext, useEffect, useState} from 'react';
import AppContext from '../../app_context/AppContext';
import String from '../../const/String';
import ImagePicker from 'react-native-image-picker';

const userDetailPresenter = function () {
    const context = useContext(AppContext);

    const {currentUser} = context;
    const [avatarSource, setAvatarSource] = useState({
        uri: currentUser.avatarUrl,
    });
    const [calendarModalVisible, setCalendarModalVisible] = useState(false);
    const [selectedDay, setSelectedDay] = useState(Date());

    const options = {
        title: String.UPDATE_AVATAR,
        takePhotoButtonTitle: String.PICK_IMG_FROM_CAMERA,
        chooseFromLibraryButtonTitle: String.PICK_IMG_FROM_GALLERY,
        storageOptions: {
            skipBackup: true,
            path: 'images',
        },
    };

    useEffect(() => console.log(`selectedDayEff: ${JSON.stringify(selectedDay)}`), [
        currentUser,
        avatarSource,
        calendarModalVisible,
        selectedDay,
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

    function showCalendarModal() {
        setCalendarModalVisible(true);
    }

    function dismissCalendarModal() {
        setCalendarModalVisible(false);
    }

    async function selectDay(selectedDay) {
        await setSelectedDay(selectedDay.dateString);
        await dismissCalendarModal();
    }

    return [avatarSource, selectDay, selectedDay, dismissCalendarModal, showCalendarModal, currentUser, calendarModalVisible, onAvatarPress]

};

export default userDetailPresenter;

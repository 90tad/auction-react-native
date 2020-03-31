import {Headline, Card, Subheading, Divider} from 'react-native-paper';
import {
    Image,
    TouchableNativeFeedback,
    View,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import React, {useEffect, useContext, useState} from 'react';
import Layout from '../../components/Layout';
import AppContext from '../../app_context/AppContext';
import {Dimension} from '../../const/Dimension';
import ImagePicker from 'react-native-image-picker';
import UserMenuItem from '../../components/UserMenuItem';
import CalendarDialog from '../../components/CalendarDialog';
import {Colors} from '../../const/Colors';
import Camera from '../../components/icon/Camera';
import String from '../../const/String';
import userDetailPresenter from './userDetailPresenter';
import CardView from '../../components/CardView';

function UserDetail() {
    const [avatarSource, selectDay, selectedDay, dismissCalendarModal, showCalendarModal, currentUser, calendarModalVisible, onAvatarPress] = userDetailPresenter();
    return (
        <Layout matchParent>
            <CardView userDetail>
                <Image
                    source={require('../../assets/shark.jpg')}
                    style={{
                        height: 216,
                        width: Dimension.DEVICE_WIDTH - 16,
                        borderTopLeftRadius: 4,
                        borderTopRightRadius: 4,
                    }}
                />
                <Layout horizontal center style={{marginTop: -126 / 2}}>
                    <TouchableNativeFeedback onPress={onAvatarPress}>
                        <Image
                            onPress={() => console.log('img')}
                            source={avatarSource}
                            style={{
                                width: 126,
                                height: 126,
                                borderRadius: 126 / 2,
                                zIndex: 1,
                                borderWidth: 5,
                                borderColor: 'white',
                            }}
                        />
                    </TouchableNativeFeedback>
                    {/*<TouchableOpacity*/}
                    {/*    style={{*/}
                    {/*        marginLeft: -18,*/}
                    {/*        zIndex: 1,*/}
                    {/*        width: 36,*/}
                    {/*        height: 36,*/}
                    {/*        borderRadius: 36 / 2,*/}
                    {/*        backgroundColor: Colors.PRIMARY,*/}
                    {/*        justifyContent: 'bottom',*/}
                    {/*        alignItems: 'bottom',*/}
                    {/*        borderWidth: 3,*/}
                    {/*        borderColor: 'white',*/}
                    {/*    }}*/}
                    {/*    onPress={onAvatarPress}>*/}
                    {/*    <Camera width={24} height={24}/>*/}
                    {/*</TouchableOpacity>*/}
                </Layout>
                <Headline style={{marginTop: Dimension.DIMEN_16, alignSelf: 'center'}}>
                    {currentUser.displayName}
                </Headline>
                <Subheading style={{alignSelf: 'center', marginBottom: 16}}>
                    Ho va ten
                </Subheading>
                <Divider style={{marginHorizontal: 8}}/>
                <UserMenuItem
                    item={{icon: 'md-calendar', label: `Ngay sinh: ${[selectedDay]}`}}
                    onPress={showCalendarModal}/>
                <UserMenuItem item={{icon: 'md-home', label: `Gioi tinh: Nam`}}/>
                <UserMenuItem item={{icon: 'md-home', label: `Gioi tinh: Nam`}}/>
                <UserMenuItem item={{icon: 'md-home', label: `Gioi tinh: Nam`}}/>
                <CalendarDialog
                    onDayPress={day => selectDay(day)}
                    markedDates={{
                        selectedDay: {selected: true, selectedColor: 'deepskyblue'},
                    }}
                    current={{selectedDay}}
                    visible={calendarModalVisible}
                    onDismiss={dismissCalendarModal}/>
            </CardView>
        </Layout>
    );
}

export default UserDetail;

import React from 'react';
import {Calendar} from 'react-native-calendars';
import {Button, Modal, Portal} from 'react-native-paper';

function CalendarDialog(props) {
    return (
        <Portal>
            <Modal {...props}>
                <Calendar {...props}/>
            </Modal>
        </Portal>
    );
}

export default CalendarDialog;

import React, {Component, useState} from 'react';
import {Text, View, Image} from 'react-native';
import EditText from '../components/EditText';
import {Button} from 'react-native-paper';
import {Colors} from '../const/Colors';
import {Dimens} from '../const/Dimens';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {signIn} from '../actions/signIn';

const usernameLabel = 'Tên đăng nhập';
const passwordLabel = 'Mật khẩu';
const signInLabel = 'Đăng nhập';
class PersonalScreen extends Component {
  state = {
    username: 'admin',
    password: '12345678',
  };
  onSubmitSignIn() {
    this.props.signIn(this.state);
  }
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <EditText
          icon="person"
          label={usernameLabel}
          onChangeText={text => this.setState({username: text})}
        />
        <EditText
          icon="lock"
          label={passwordLabel}
          onChangeText={text => this.setState({password: text})}
        />
        <Button
          onPress={() => this.onSubmitSignIn()}
          style={{margin: Dimens.DIMEN_8}}
          mode="contained"
          uppercase={false}
          color={Colors.PRIMARY}
          labelStyle={{color: Colors.WHITE}}>
          {signInLabel}
        </Button>
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators({signIn}, dispatch),
  };
}

function mapStateToProps(state) {
  return {
    requesting: state.signInReducer.requesting,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalScreen);

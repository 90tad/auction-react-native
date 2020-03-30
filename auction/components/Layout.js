import {View, StyleSheet} from 'react-native';
import React from 'react';

function Layout({horizontal, style, ...props}) {
  const layoutStyle = [horizontal && styles.horizontal];
  return (
    <View style={[layoutStyle, style]} {...props}>
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  horizontal: {
    flexDirection: 'row',
  },
});

export default Layout;

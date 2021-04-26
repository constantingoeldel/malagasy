import React from 'react';
import {
  Image,
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';

import CorrectAnswer from '../../Svg/Checked';
import RightArrow from '../../Svg/RightArrow';
import WrongAnswer from '../../Svg/Wrong';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    flexBasis: 'auto',
    flexWrap: 'wrap',
  },
  text: {
    fontSize: 40,
    fontWeight: '600',
    textAlign: 'right',
  },
  iconStyle: {
    width: 16,
    marginLeft: 20,
  },
});

const ActionButton = ({textStyle, text, onPress}) => {
  let icon;

  if (text === 'Learn' || text === 'Pick') {
    icon = <RightArrow />;
  }
  if (text === 'Correct') {
    icon = <CorrectAnswer />;
  }
  if (text === 'Wrong') {
    icon = <WrongAnswer />;
  }

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Text style={(styles.text, {color: textStyle})}>{text}</Text>
        <View style={styles.iconStyle}>{icon}</View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ActionButton;

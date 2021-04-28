import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderWidth: 1,
    borderBottomWidth: 0.4,
    borderColor: '#E5E5E5',
  },
});

const ListItem = ({
  category,
  children,
}) => {
  return (
    <SafeAreaView
      style={styels.item}>
      <Text>{category}</Text>
      <View>{children}</View>
    </SafeAreaView>
  );
};

export default ListItem;
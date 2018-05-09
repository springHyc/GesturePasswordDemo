import React, { Component } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-sinoui";
import { NavigationActions } from "react-navigation";

export default class GesturePasswordPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <Text>手势密码</Text>
        <Button
          onPress={() => {
            this.props.navigation.navigate("test");
          }}
        >
          跳转
        </Button>
      </View>
    );
  }
}

GesturePasswordPage.navigationOptions = { title: "手势密码demo" };

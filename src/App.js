/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import { View, StyleSheet, StatusBar, Platform } from "react-native";
import routes from "./routes";
import { ThemeProvider } from "styled-components/native";
import { onTransitionEnd } from "react-native-sinoui/page";
import { RootSibling, createTheme } from "react-native-sinoui";
import { GesturePasswordPage } from "./gesturePassword";

const theme = createTheme();

const _App = StackNavigator(
  { Main: { screen: GesturePasswordPage }, ...routes },
  {
    headerMode: "screen",
    mode: "card",
    navigationOptions: {
      headerStyle: {
        backgroundColor: theme.palette.navigation.backgroundColor
      },
      headerBackTitle: "返回",
      headerTitleStyle: {
        color: theme.palette.navigation.titleColor
      },
      headerTintColor: theme.palette.navigation.textColor
    },
    onTransitionEnd: onTransitionEnd
  }
);

export default class App extends React.Component {
  constructor(props) {
    super(props);

    App.root = this;
    this.state = {
      theme
    };
  }

  static updateTheme(theme) {
    App.root.setState({ theme });
  }

  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <View style={styles.app}>
          <StatusBar
            backgroundColor={theme.palette.primary[400]}
            barStyle={
              Platform.OS === "android" ? "light-content" : "dark-content"
            }
          />
          <_App screenProps={{ theme: this.state.theme }} />
          <RootSibling />
        </View>
      </ThemeProvider>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    flex: 1
  }
});

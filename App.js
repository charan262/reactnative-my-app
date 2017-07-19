import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
import Header from './components/header';
import AlbumList from './components/AlbumList';
export default class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Header headerText={'Albums'}/>
        <AlbumList/>
      </View>
    );
  }
}
//adding comments
AppRegistry.registerComponent('AwesomeProject', () => LotsOfGreetings);
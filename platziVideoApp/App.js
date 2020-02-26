import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import SuggestionList from './src/videos/containers/suggestions-list';
import CategoryList from './src/videos/containers/category-list';
import API from './utils/api';
import Video from 'react-native-video';

type Props = {};

export default class App extends Component<Props> {
  state = {
    suggestionList: [],
    categoryList: [],
  };
  async componentDidMount() {
    const movies = await API.getSuggestion(10);
    const categories = await API.getMovies();
    console.log(movies);
    console.log(categories);
    this.setState({
      suggestionList: movies,
      categoryList: categories,
    });
  }

  render() {
    return (
      <Home>
        <Header />
        <View style={{flex: 1, height: 100}}>
          <Video
            source={{
              uri:
                'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
            }}
            style={{position: 'absolute', left: 0, right: 0, bottom: 0, top: 0}}
            resizeMode="cover"
          />
        </View>
        <Text>buscador</Text>
        <CategoryList list={this.state.categoryList} />
        <SuggestionList list={this.state.suggestionList} />
      </Home>
    );
  }

  styles = StyleSheet.create({});
}

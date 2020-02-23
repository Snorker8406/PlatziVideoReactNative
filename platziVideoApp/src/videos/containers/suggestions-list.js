import React, {Component} from 'react';
import {FlatList} from 'react-native';
import Layout from '../components/suggestion-list-layout';
import Empty from '../components/empty';
import Suggestion from '../components/suggestion';
import Separator from '../components/vertical-separator';

class SuggestionList extends Component {
  renderEmpty = () => <Empty text="No Hay sugerencias :(" />;
  renderItemSeparator = () => <Separator />;
  renderItem = ({item}) => <Suggestion {...item} />;

  render() {
    const list = [
      {
        title: 'Avengers',
        key: 1,
      },
      {
        title: 'Gladiador',
        key: 2,
      },
    ];
    return (
      <Layout title="Recomendado para ti">
        <FlatList
          data={list}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.renderItemSeparator}
          renderItem={this.renderItem}
        />
      </Layout>
    );
  }
}

export default SuggestionList;

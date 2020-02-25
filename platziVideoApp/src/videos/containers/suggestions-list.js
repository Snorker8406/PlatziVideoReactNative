import React, {Component} from 'react';
import {FlatList} from 'react-native';
import Layout from '../components/suggestion-list-layout';
import Empty from '../components/empty';
import Suggestion from '../components/suggestion';
import Separator from '../components/vertical-separator';

class SuggestionList extends Component {
  keyExtractor = item => item.id.toString();
  renderEmpty = () => <Empty text="No Hay sugerencias :(" />;
  renderSeparator = () => <Separator />;
  renderItem = ({item}) => <Suggestion {...item} />;

  render() {
    return (
      <Layout title="Recomendado para ti">
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.props.list}
          ListEmptyComponent={this.renderEmtpy}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderItem}
        />
      </Layout>
    );
  }
}

export default SuggestionList;

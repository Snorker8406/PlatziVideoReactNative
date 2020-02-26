import React, {Component} from 'react';
import {FlatList} from 'react-native';
import Layout from '../components/category-list-layout';
import Empty from '../components/empty';
import Category from '../components/category';
import Separator from '../../sections/components/horizontal-separator';

class CategoryList extends Component {
  keyExtractor = item => item.id.toString();
  renderEmpty = () => <Empty text="No Hay sugerencias :(" />;
  renderSeparator = () => <Separator />;
  renderItem = ({item}) => <Category {...item} />;

  render() {
    return (
      <Layout title="Categorias">
        <FlatList
          horizontal
          keyExtractor={this.keyExtractor}
          data={this.props.list}
          ListEmptyComponent={this.renderEmtpy}
          ItemSeparatorComponent={this.renderSeparator}
          renderItem={this.renderItem}
        />
      </Layout>
    );
  }
}

export default CategoryList;

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useContext} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Button from '../components/Button';
import Card from '../components/Card';
import {ProductContext} from '../context/ProductsProvider';
import {RootStackParamList} from '../types';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

function ProductCatalogue({navigation}: Props) {
  const {products, loading, updateCount} = useContext(ProductContext);
  const overallItemsCount = products.reduce((acc, curr) => {
    acc += curr.nativeCount;
    return acc;
  }, 0);

  return loading ? (
    <View style={styles.loader}>
      <ActivityIndicator color="#009688" size="large" />
      <Text>Loading products...</Text>
    </View>
  ) : (
    <View>
      <View style={styles.container}>
        <FlatList
          data={products}
          renderItem={({item}) => <Card {...item} updateCount={updateCount} />}
          keyExtractor={item => `${item.id}`}
        />
      </View>
      <View style={styles.footer}>
        <Button
          title={`Proceed to Checkout (${overallItemsCount})`}
          onPress={() => {
            navigation.navigate('Summary');
          }}
          style={styles.footerCta}
        />
      </View>
    </View>
  );
}

export default ProductCatalogue;

const styles = StyleSheet.create({
  container: {
    height: '92%',
  },
  footer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#009688',
    height: '8%',
  },
  footerCta: {
    borderColor: 'white',
    borderWidth: 1,
    padding: 6,
    borderRadius: 10,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

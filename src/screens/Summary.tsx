import React, {useContext} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {ProductContext} from '../context/ProductsProvider';

function Summary() {
  const {products} = useContext(ProductContext);
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        Cart Count -{' '}
        {products.reduce((acc, curr) => {
          return acc + curr.nativeCount;
        }, 0)}
      </Text>
      <View>
        <FlatList
          data={products.filter(product => product.nativeCount > 0)}
          renderItem={({item, index}) => (
            <>
              <View style={styles.row}>
                <Text style={styles.rowPart1}>{`${item.title}`}</Text>
                <Text>{` x ${item.nativeCount}`}</Text>
                <Text>{`${(item.nativeCount * item.price).toFixed(2)}`}</Text>
              </View>
              {index ===
              products.filter(product => product.nativeCount > 0).length - 1 ? (
                <>
                  <View style={styles.separator} />
                  <View style={styles.row}>
                    <Text style={[styles.rowPart1, styles.rowPart2]}>
                      Item total
                    </Text>
                    <Text style={styles.rowPart2}>
                      {products
                        .filter(product => product.nativeCount > 0)
                        .reduce((acc, curr) => {
                          acc += curr.nativeCount * curr.price;
                          return acc;
                        }, 0)
                        .toFixed(2)}
                    </Text>
                  </View>
                </>
              ) : null}
            </>
          )}
        />
      </View>
    </View>
  );
}

export default Summary;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    margin: 20,
  },
  separator: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  rowPart1: {
    width: '70%',
  },
  rowPart2: {
    fontWeight: '700',
  },
  headerText: {
    fontSize: 20,
    textDecorationLine: 'underline',
  },
});

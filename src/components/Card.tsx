import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DefaultContext} from '../context/ProductsProvider';
import {Product} from '../types';
import Button from './Button';

type Props = Product & Pick<DefaultContext, 'updateCount'>;

function Card({id, title, price, image, nativeCount, updateCount}: Props) {
  return (
    <View style={styles.cardContainer}>
      <Image
        source={{
          uri: image,
        }}
        style={styles.img}
      />
      <View style={styles.controls}>
        <Button
          style={styles.controlItem}
          title="+"
          onPress={() => {
            updateCount(id, 'increment');
          }}
        />
        <Text style={styles.controlItem}>{nativeCount}</Text>
        <Button
          style={styles.controlItem}
          title="-"
          onPress={() => {
            updateCount(id, 'decrement');
          }}
        />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.priceText}>{`Price: $${price} / piece`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: '700',
    margin: 10,
  },
  priceText: {
    fontWeight: '700',
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 500,
    width: 400,
    elevation: 20,
    borderWidth: 1,
  },
  controls: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 5,
  },
  controlItem: {
    margin: 2,
  },
  img: {width: 350, height: 300},
});
export default Card;

import React, {
  createContext,
  ReactElement,
  useCallback,
  useEffect,
  useState,
} from 'react';
import {getAllProducts} from '../api';
import {Operation, Product} from '../types';
import {transformData} from '../utils';

type Props = {
  children: ReactElement;
};

export type DefaultContext = {
  updateCount: (id: number, type: Operation) => void;
  products: Array<Product>;
  loading: boolean;
};

export const ProductContext = createContext<DefaultContext>({
  products: [],
  updateCount: () => {},
  loading: true,
});

const getCount = (type: Operation, prevCount: number) => {
  switch (type) {
    case 'decrement':
      return prevCount > 0 ? prevCount - 1 : prevCount;
    case 'increment':
      return prevCount + 1;
  }
};

function ProductsProvider({children}: Props) {
  const [products, setProducts] = useState<Array<Product>>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const updateCount = useCallback(
    (id: number, type: Operation) => {
      const updatedProducts = products.map((product: Product) => {
        if (id === product.id) {
          return {
            ...product,
            nativeCount: getCount(type, product.nativeCount),
          };
        } else {
          return product;
        }
      });
      setProducts(updatedProducts);
    },
    [products],
  );

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);

      const list = await getAllProducts();
      setLoading(false);
      setProducts(transformData(list).slice(0, 4));
    };

    getProducts();
  }, []);

  const store = {
    products,
    loading,
    updateCount,
  };

  return (
    <ProductContext.Provider value={store}>{children}</ProductContext.Provider>
  );
}

export default ProductsProvider;

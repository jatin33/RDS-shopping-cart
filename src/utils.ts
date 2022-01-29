import {Product} from './types';

function transformData(data: Array<Product>) {
  return data.map((item: Product) => {
    return {
      ...item,
      nativeCount: 0,
    };
  });
}

export {transformData};

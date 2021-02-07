import { BasketProduct } from 'src/views/Store/Store.d';

export const mockedLocalStorageBasketProducts = [
  {
    productDetail: {
      'productId': '5493179',
      'sku': '549/3179',
      'title': 'Russell Hobbs Pennine Illuminating S Steel Kettle 20444',
      'price': 24.99,
      'image': 'https://media.4rgos.it/s/Argos/9805244_R_SET?w=110&h=130',
    },
    quantity: 5,
  },
  {
    productDetail: {
      'productId': '4251824',
      'sku': '425/1824',
      'title': 'Challenge White Desk Fan - 12 Inch',
      'price': 14.99,
      'image': 'https://media.4rgos.it/s/Argos/4251824_R_SET?w=110&h=130',
    },
    quantity: 1,
  },
  {
    productDetail: {
      'productId': 'tuc132404445',
      'sku': 'tuc132404445',
      'title': 'Plain Vest Top 12 BLACK',
      'price': 16,
      'image': 'https://media.4rgos.it/s/Argos/tuc132404445_R_SET?w=110&h=130',
    },
    quantity: 2,
  },
] as BasketProduct[];

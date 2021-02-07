import { FieldOption } from '../../declarations/forms';

const quantityAmountOptions = [1, 2, 3, 4, 5];

export const quantityOptions = quantityAmountOptions.map<FieldOption<number>>(
  amount => ({
    value: amount,
    label: amount.toString(),
  }),
);

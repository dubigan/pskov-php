import React from 'react';
import ListOfItems from './ListOfItems';
import { TItemFunctions, TListOfItemsProps } from './ListTypes';
import { TOwnerItem } from '../Detail/DetailTypes';
import { useListFunctions } from './useListFunctions';

const Owners = (props: TListOfItemsProps<TOwnerItem>) => {
  const functions = useListFunctions('owners');

  return <ListOfItems<TOwnerItem> functions={functions as TItemFunctions<TOwnerItem>} />;
};

export default Owners;

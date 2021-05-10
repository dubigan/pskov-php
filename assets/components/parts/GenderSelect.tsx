import React from 'react';
import ToggleButtonGroup, { TToggleButtonGroupProps, TToggleButtonGroup } from '../lib/ToggleButtons';

const GenderSelect: TToggleButtonGroup = (props: TToggleButtonGroupProps) => {
  return (
    <ToggleButtonGroup
      className={props.className}
      name={props.name ? props.name : 'gender'}
      values={props.values ? props.values : GenderSelect.values}
      //type="radio"
      checkValue={props.checkValue}
      onChange={props.onChange}
    />
  );
};

GenderSelect.values = [
  { label: 'Муж', value: 'm' },
  { label: 'Жен', value: 'f' },
];

export default GenderSelect as TToggleButtonGroup;

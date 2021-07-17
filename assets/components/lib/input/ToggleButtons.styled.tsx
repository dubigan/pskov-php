import React, { ChangeEvent } from 'react';
import * as Styled from './ToggleButtons.styled.elements';

// type TToggleButton = {
//   name: string | undefined;
//   value: string;
//   checked: boolean;
//   onChange: (e: ChangeEvent<HTMLInputElement>) => void;
// };

export type TToggleValue = {
  label: string;
  value: string;
};

export type TToggleValues = Array<TToggleValue>;

export type TToggleButtonProps = {
  children?: any;
  name?: string | undefined;
  value?: string;
  checked?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export type TToggleButtonGroupProps = {
  children?: any;
  name?: string | undefined;
  values?: TToggleValues;
  checkValue?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export type TToggleButtonGroup = React.FC<TToggleButtonGroupProps> & { values: TToggleValues };

export const ToggleButton = ({ children, name, value, checked, onChange }: TToggleButtonProps) => {
  return (
    <Styled.Label>
      <Styled.Input type="radio" name={name} value={value} onChange={onChange} checked={checked} />
      {children}
    </Styled.Label>
  );
};

const ToggleButtonGroup: Partial<TToggleButtonGroup> = (props: TToggleButtonGroupProps) => {
  return (
    <Styled.Container>
      {props.values
        ? props.values.map((value: TToggleValue, index: number) => {
            //const checked = props.checkValue === value.value;
            //console.log('ToggleButtonGroup', props.checkValue, value.value, checked);

            return (
              <ToggleButton
                value={value.value}
                name={props.name}
                onChange={props.onChange}
                key={index}
                checked={props.checkValue === value.value}
              >
                {value.label}
              </ToggleButton>
            );
          })
        : ''}
    </Styled.Container>
  );
};

ToggleButtonGroup.values = [];
// ToggleButton.defaultProps = {
//   className: 'toggleButtonGroup__input',
//   value: 'on',
// };

export default ToggleButtonGroup as TToggleButtonGroup;

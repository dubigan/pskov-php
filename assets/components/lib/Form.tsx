import React, { ChangeEventHandler } from 'react';

interface IFormProps {
  children?: React.ReactNode;
  className?: string;
}

interface IFormControlProps extends IFormProps {
  name?: string;
  type?: string;
  value?: any;
  placeholder?: string;
  maxLength?: number;
  rows?: number;
  onChange?: ChangeEventHandler<HTMLInputElement> | ChangeEventHandler<HTMLTextAreaElement>;
  onClick?: any;
}

const FormLabel: React.FC<IFormProps> = ({ children, className }) => {
  return <div className={className ? className : 'form__label'}>{children}</div>;
};

const FormGroup: React.FC<IFormProps> = ({ children, className }) => {
  return <div className={className ? className : 'form__group'}>{children}</div>;
};

const FormControl: React.FC<IFormControlProps> = props => {
  let type = 'text';
  if (props.type) type = props.type;
  switch (type) {
    case 'text':
      return (
        <input
          className={props.className ? props.className : 'form__control'}
          name={props.name}
          value={props.value}
          placeholder={props.placeholder}
          maxLength={props.maxLength ? +props.maxLength : undefined}
          onChange={props.onChange as ChangeEventHandler<HTMLInputElement>}
          //onClick={props.onClick}
        />
      );
    case 'textarea':
      return (
        <textarea
          className={props.className ? props.className : 'form__control'}
          name={props.name}
          value={props.value}
          placeholder={props.placeholder}
          maxLength={props.maxLength ? +props.maxLength : undefined}
          rows={props.rows ? +props.rows : undefined}
          onChange={props.onChange as ChangeEventHandler<HTMLTextAreaElement>}
          //onClick={props.onClick}
        />
      );

    default:
      return <></>;
  }
};

export type TForm = React.FC<IFormProps> & {
  Label: typeof FormLabel;
  Control: typeof FormControl;
  Group: typeof FormGroup;
};

const Form: TForm = ({ children, className }) => {
  return <form className={className ? className : 'form'}>{children}</form>;
};

Form.Label = FormLabel;
Form.Control = FormControl;
Form.Group = FormGroup;

export default Form;

import React from 'react';

interface IButtonProps {
  tooltip?: string;
  id?: string;
  className?: string;
  name?: string;
  value?: any;
  variant?: string;
  onClick?: any;
  disabled?: boolean;
  children?: any;
  type?: string;
}

export const Button: React.FC<IButtonProps> = ({
  tooltip,
  id,
  className,
  name,
  value,
  onClick,
  disabled,
  children,
}) => {
  return (
    <button
      title={tooltip}
      id={id}
      className={className ? className : ''}
      name={name}
      value={value}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  className: 'btn-primary',
  name: 'btn',
  disabled: false,
  tooltip: '',
  id: '',
  value: '',
  children: 'button',
};

//export Button;

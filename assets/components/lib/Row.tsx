import React from 'react';

interface IRowProps {
  children?: React.ReactNode;
  className?: string;
}

export const Row: React.FC<IRowProps> = ({ children, className }) => {
  return <div className={className ? className : 'row'}>{children}</div>;
};

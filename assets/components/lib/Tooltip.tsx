import React from 'react';

interface ITooltipContentProps {
  children?: React.ReactNode;
  className?: string;
}

export const TooltipContent: React.FC<ITooltipContentProps> = ({ children, className }) => {
  return <div className={className ? className : 'tooltip__content'}>{children}</div>;
};

interface ITooltipProps {
  children?: React.ReactNode;
  tooltip: any;
}

export const Tooltip: React.FC<ITooltipProps> = ({ tooltip, children }) => {
  return (
    <div className="tooltip">
      <TooltipContent>{tooltip}</TooltipContent>
      {children}
    </div>
  );
};

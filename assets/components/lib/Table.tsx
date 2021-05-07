import React from 'react';

interface ITableProps {
  className?: string;
  children: React.ReactNode;
}

export class Table extends React.Component<ITableProps> {
  render() {
    return <table className={this.props.className ? this.props.className : 'table'}>{this.props.children}</table>;
  }
}

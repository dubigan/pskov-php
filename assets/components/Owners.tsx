import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import ListOfItems, { TSortedBy } from './ListOfItems';
import { OwnerDeleteDialog } from './OwnerDeleteDialog';
import { Table } from './lib/Table';

export type TOwnerItem = {
  id: number;
  name: string;
  patronymic: string;
  last_name: string;
  gender: 'f' | 'm';
  age: number;
};

const DEFAULT_SORTED_BY: TSortedBy = {
  name: 'last_name',
  direction: 'asc',
};
class Owners extends ListOfItems {
  url = '/api/owners/';
  tooltipPlace = 'bottom';
  nameOfItem = 'Автовладелец';
  addButton = true;

  getDefaultSortedBy() {
    return DEFAULT_SORTED_BY;
  }

  getTable = () => {
    return (
      <Table className="table table_striped table_bordered table_hover">
        <thead>
          <tr>
            {this.getThCell('last_name', 'Фамилия', 1)}
            {this.getThCell('name', 'Имя', 2)}
            <th id="patronymic">Отчество</th>
            {this.getThCell('gender', 'Пол', 3)}
            {this.getThCell('age', 'Возраст', 4)}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.state.items.map((o: TOwnerItem, index: number) => {
            return (
              <tr key={index}>
                <td>{o.last_name}</td>
                <td>{o.name}</td>
                <td>{o.patronymic}</td>
                <td>{o.gender === 'f' ? 'Жен' : 'Муж'}</td>
                <td>{o.age}</td>
                <td style={{ width: 100 + 'px' }}>{this.getButtons(String(o.id))}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  };

  getDeleteDialog = () => {
    return (
      <OwnerDeleteDialog
        show={this.state.showDeleteDialog}
        params={this.state}
        itemDelete={this.itemDelete}
      />
    );
  };
}

export default withRouter(Owners);
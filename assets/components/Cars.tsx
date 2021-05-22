import React from 'react';
import { withRouter } from 'react-router';
import ListOfItems, { TSortedBy, TListOfItemsProps, TListOfItemsState } from './ListOfItems';
import { CarDeleteDialog } from './CarDeleteDialog';
import { Table } from './lib/Table';

export type TCarItem = {
  id: number;
  manufacturer: string;
  model: string;
  production: string;
  color: string;
  power: number;
  mileage: number;
};

const DEF_SORTED_BY: TSortedBy = {
  name: 'model',
  direction: 'asc',
};
class Cars extends ListOfItems {
  url = '/api/cars/';
  tooltipPlace = 'bottom';
  nameOfItem = 'Автомобиль';

  componentDidUpdate(prevProps: TListOfItemsProps, prevState: TListOfItemsState) {
    super.componentDidUpdate(prevProps, prevState);
    if (prevProps.owner !== this.props.owner) this.getItems();
  }

  getDefaultSortedBy() {
    return DEF_SORTED_BY;
  }

  getTable = () => {
    return (
      <Table className="table table_striped table_bordered table_hover">
        <thead>
          <tr>
            {this.getThCell('manufacturer', 'Производитель', 1)}
            {this.getThCell('model', 'Модель', 2)}
            {this.getThCell('production', 'Дата выпуска', 3)}
            {this.getThCell('color', 'Цвет', 4)}
            {this.getThCell('power', 'Мощность', 5)}
            {this.getThCell('mileage', 'Пробег', 6)}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.state.items.map((o: TCarItem, index: number) => {
            return (
              <tr key={index}>
                <td>{o.manufacturer}</td>
                <td>{o.model}</td>
                <td>{o.production}</td>
                <td>{o.color}</td>
                <td>{o.power}</td>
                <td>{o.mileage}</td>
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
      <CarDeleteDialog
        show={this.state.showDeleteDialog}
        params={this.state}
        itemDelete={this.itemDelete}
      />
    );
  };
}

export default withRouter(Cars);

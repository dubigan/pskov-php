import React from 'react';
import ListOfItems from './ListOfItems';
import { CarDeleteDialog } from './CarDeleteDialog';
import PropTypes from 'prop-types';
import { Table } from './lib/Table';

const DEF_SORTED_BY = {
  name: 'model',
  direction: 'ASC',
};
export default class Cars extends ListOfItems {
  static propTypes = {
    owner: PropTypes.number,
    // withButtons: PropTypes.bool,
    // withOwnerInfo: PropTypes.bool,
    // withSearch: PropTypes.bool,
  };

  url = '/api/cars/';
  tooltipPlace = 'bottom';
  nameOfItem = 'Автомобиль';

  componentDidUpdate(prevProps, prevState) {
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
          {this.state.items.map((o, index) => {
            return (
              <tr key={index}>
                <td>{o.manufacturer}</td>
                <td>{o.model}</td>
                <td>{o.production}</td>
                <td>{o.color}</td>
                <td>{o.power}</td>
                <td>{o.mileage}</td>
                <td style={{ width: 100 + 'px' }}>{this.getButtons(o.id)}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  };

  getDeleteDialog = () => {
    return <CarDeleteDialog params={this.state} itemDelete={this.itemDelete} />;
  };
}

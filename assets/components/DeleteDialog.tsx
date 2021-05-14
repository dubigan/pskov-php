import React, { Component } from 'react';
import Modal from './lib/Modal';
import { Button } from './lib/Button';

type TDeleteDialogProps = {
  itemDelete: any;
  params: any;
  show: boolean;
};

export default class DeleteDialog extends Component<TDeleteDialogProps> {
  handleClose = (e: any) => {
    if (e) this.props.itemDelete(e.target.value);
    return this.props.itemDelete(false);
  };

  nameOfItem = '';

  itemInfo = (item: any) => {
    return '';
  };

  getItemInfo = () => {
    if (this.props.params.itemDelete) {
      return this.itemInfo(this.props.params.itemDelete);
    }
    return '';
  };

  render() {
    return (
      <Modal baseClassName="delete-dialog" show={this.props.show} onHide={this.handleClose}>
        <Modal.Header closeButton={false}>
          <Modal.Title>Удалить {this.nameOfItem}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{this.getItemInfo()}</Modal.Body>
        <Modal.Footer>
          <Button className="btn-secondary" value={false} onClick={this.handleClose}>
            Отмена
          </Button>
          <Button className="btn-danger" value={true} onClick={this.handleClose}>
            Удалить
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

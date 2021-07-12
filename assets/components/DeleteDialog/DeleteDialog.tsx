import React, { Component } from 'react';
import Modal from '../lib/Modal/Modal';
import { Button } from '../lib/Button/Button';

type TDeleteDialogProps<TItem> = {
  deleteItem: Function;
  itemToDelete: TItem;
  nameOfItem?: string;
  itemInfo?: Function;
};

const DeleteDialog = <TItem,>(props: TDeleteDialogProps<TItem>) => {
  const handleClose = (e: any) => {
    if (e) props.deleteItem(e.target.value);
    return props.deleteItem(false);
  };

  const getItemInfo = () => {
    return props.itemInfo && props.itemInfo(props.itemToDelete);
  };

  return (
    <Modal baseClassName="delete-dialog" onHide={handleClose}>
      <Modal.Header closeButton={false}>
        <Modal.Title>Удалить {props.nameOfItem}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{getItemInfo()}</Modal.Body>
      <Modal.Footer>
        <Button className="btn-secondary" value={false} onClick={handleClose}>
          Отмена
        </Button>
        <Button className="btn-danger" value={true} onClick={handleClose}>
          Удалить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteDialog;

// import React from "react";
// import { Modal, Button } from "react-bootstrap";
import DeleteDialog from './DeleteDialog';

export class OwnerDeleteDialog extends DeleteDialog {
  nameOfItem = 'автовладельца';
  itemInfo = (item: any) => {
    return [item.last_name, item.name, item.patronymic].join(' ');
  };
}

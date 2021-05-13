import React, { Component } from 'react';

type ModalPartsProps = {
  id?: string;
  className?: string;
  children?: any;
};

export const ModalHeader: React.FC<ModalPartsProps> = ({ id, className, children }) => {
  return (
    <div className={className} id={id}>
      {children}
    </div>
  );
};

export const ModalTitle: React.FC<ModalPartsProps> = ({ id, className, children }) => {
  return (
    <div className={className} id={id}>
      <h4>{children}</h4>
    </div>
  );
};

export const ModalBody: React.FC<ModalPartsProps> = ({ id, className, children }) => {
  return (
    <div className={className} id={id}>
      {children}
    </div>
  );
};

export const ModalFooter: React.FC<ModalPartsProps> = ({ id, className, children }) => {
  return (
    <div className={className} id={id}>
      {children}
    </div>
  );
};

type ModalProps = {
  show: boolean;
  id: string;
  className?: string;
};

class Modal extends Component<ModalProps> {
  changeShowStatus = () => {
    const $body = document.querySelector('body')!;
    const $modal = document.querySelector(this.props.id);
    const $modalBackdrop = document.querySelector('#oak-modal-backdrop');
    if (this.props.show) {
      $body.className = 'oak-modal-open';
      $body.style.overflow = 'hidden';
      $body.style.paddingRight = '15px';
      $modalBackdrop.style.display = 'block';
      $modal.style.display = 'block';
    } else {
      $body.className = '';
      //$body.style ;
      $modal.style.display = 'none';
      $modalBackdrop.style.display = 'none';
    }
  };
  componentDidUpdate(prevProps: ModalProps) {
    if (this.props.show != prevProps.show) {
      this.changeShowStatus();
    }
  }
  render() {
    return (
      <>
        <div id={this.props.id} className="modal-backdrop show"></div>
        <div id="oak-modal" className="oak-modal oak-show">
          <div className="oak-modal-dialog">
            <div id={this.props.id} className={this.props.className}>
              {this.props.children}
            </div>
          </div>
        </div>
      </>
    );
  }
}

// Modal.defaultProps = {
//   show: false,
//   id: 'oak-modal-content',
//   className: 'oak-modal-content',
// };
ModalHeader.defaultProps = {
  id: 'modal-header',
  className: 'modal__header',
};
ModalTitle.defaultProps = {
  id: 'modal-title',
  className: 'modal__title',
};
ModalBody.defaultProps = {
  id: 'modal-body',
  className: 'modal__body',
};
ModalFooter.defaultProps = {
  id: 'modal-footer',
  className: 'modal__footer',
};

export default Modal;

import React, { Component, useEffect } from 'react';

type TModalPartsProps = {
  id?: string;
  className?: string;
  children?: any;
};

type TModalHeaderProps = { closeButton?: boolean } & TModalPartsProps;

//type TModalPart<T> = React.FC<T> & { baseClass?: string };

function ModalHeader(baseClassName: string): React.FC<TModalHeaderProps> {
  const baseClass: string = baseClassName;
  const ModalHeader: React.FC<TModalHeaderProps> = props => {
    useEffect(() => console.log('ModalHeader.baseClass', baseClass));
    return (
      <div className={baseClass + '__header'} id={props.id}>
        {props.children}
      </div>
    );
  };
  return ModalHeader;
}

// function ModalHeader(props: TModalHeaderProps): JSX.Element & { baseClass: string } {
//   var baseClass: string = 'modal';
//   const el = (
//     <div className={baseClass + '__header'} id={props.id}>
//       {props.children}
//     </div>
//   );
//   return Object.assign(el, { baseClass: '' });
// }

function ModalTitle(baseClassName: string): React.FC {
  const baseClass: string = baseClassName;
  const ModalTitle: React.FC<TModalPartsProps> = props => {
    useEffect(() => console.log('Modal.Title', baseClass));
    return (
      <div className={baseClass + '__title'} id={props.id}>
        <h4>{props.children}</h4>
      </div>
    );
  };
  return ModalTitle;
}

function ModalBody(baseClassName: string): React.FC {
  const baseClass: string = baseClassName;
  const ModalBody: React.FC<TModalPartsProps> = props => {
    useEffect(() => console.log('Modal.Body', baseClass));
    return (
      <div className={baseClass + '__body'} id={props.id}>
        {props.children}
      </div>
    );
  };
  return ModalBody;
}

function ModalFooter(baseClassName: string): React.FC {
  const baseClass: string = baseClassName;
  const ModalFooter: React.FC<TModalPartsProps> = props => {
    useEffect(() => console.log('Modal.Footer', baseClass));
    return (
      <div className={baseClass + '__footer'} id={props.id}>
        {props.children}
      </div>
    );
  };
  return ModalFooter;
}

type TModalProps = {
  show: boolean;
  id?: string;
  baseClassName: string;
  children?: any;
  onHide: EventHandlerNonNull;
};

type TModalAddOns = {
  Header: React.FC<TModalHeaderProps>;
  Title: React.FC<TModalPartsProps>;
  Body: React.FC<TModalPartsProps>;
  Footer: React.FC<TModalPartsProps>;
};

class Modal extends Component<TModalProps, {}> {
  // public Header = ModalHeader(this.props.baseClassName);
  // public Title = ModalTitle(this.props.baseClassName);
  // public Body = ModalBody(this.props.baseClassName);
  // public Footer = ModalFooter(this.props.baseClassName);
  changeShowStatus = () => {
    const $body = document.querySelector('body')!;
    const $modal = document.querySelector('.' + this.props.baseClassName)! as HTMLElement;
    const $modalBackdrop = document.querySelector(
      '.' + this.props.baseClassName + '__backdrop'
    )! as HTMLElement;
    const $dialog = document.querySelector(
      '.' + this.props.baseClassName + '__dialog'
    ) as HTMLElement;
    //console.log('Modal.modal', $modal);
    if (this.props.show) {
      $body.classList.add('body-modal-open');
      $modalBackdrop.classList.add(this.props.baseClassName + '__backdrop_show');
      $modal.classList.add(this.props.baseClassName + '_show');
      $dialog.classList.add(this.props.baseClassName + '__dialog_show');
    } else {
      $body.classList.remove('body-modal-open');
      $modalBackdrop.classList.remove(this.props.baseClassName + '__backdrop_show');
      $modal.classList.remove(this.props.baseClassName + '_show');
      $dialog.classList.remove(this.props.baseClassName + '__dialog_show');
    }
  };
  componentDidMount(): void {
    //console.log('Modal.baseClassName', this.props.baseClassName);
    this.changeShowStatus();
  }
  componentDidUpdate(prevProps: TModalProps): void {
    console.log('Modal.baseClassName', this.props.baseClassName);
    if (this.props.show != prevProps.show) {
      this.changeShowStatus();
    }
  }
  render() {
    return (
      <>
        <div
          id={this.props.id}
          className={
            this.props.baseClassName +
            '__backdrop' +
            ' ' +
            this.props.baseClassName +
            '__backdrop_show'
          }
        ></div>
        <div id={this.props.id} className={this.props.baseClassName}>
          <div className={this.props.baseClassName + '__dialog'}>
            <div id={this.props.id} className={this.props.baseClassName + '__children'}>
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
// ModalHeader.defaultProps = {
//   id: 'modal-header',
//   className: 'modal__header',
// };
// ModalTitle.defaultProps = {
//   id: 'modal-title',
//   className: 'modal__title',
// };
// ModalBody.defaultProps = {
//   id: 'modal-body',
//   className: 'modal__body',
// };
// ModalFooter.defaultProps = {
//   id: 'modal-footer',
//   className: 'modal__footer',
// };
type TModal = typeof Modal & TModalAddOns;
const baseClass = 'delete-dialog';
Object.assign(Modal, {
  Header: ModalHeader(baseClass),
  Title: ModalTitle(baseClass),
  Body: ModalBody(baseClass),
  Footer: ModalFooter(baseClass),
});
export default Modal as TModal;

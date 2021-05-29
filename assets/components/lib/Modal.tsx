import React, { Component, useEffect, useRef } from 'react';

type TModalPartsProps = {
  id?: string;
  className?: string;
  children?: any;
};

type TModalHeaderProps = { closeButton?: boolean } & TModalPartsProps;

let baseClass = 'modal-dialog';

const ModalHeader = (props: TModalHeaderProps) => {
  const ref = useRef<HTMLDivElement>(null);
  // useEffect(() => {
  //   const classList = ref.current!.classList;
  //   console.log('ModalHeader.baseClass', baseClass);
  // });

  return (
    <div ref={ref} className={baseClass + '__header'} id={props.id}>
      {props.children}
    </div>
  );
};

const ModalTitle = (props: TModalPartsProps) => {
  //useEffect(() => console.log('Modal.Title', baseClass));
  return (
    <div className={baseClass + '__title'} id={props.id}>
      <h4>{props.children}</h4>
    </div>
  );
};

const ModalBody = (props: TModalPartsProps) => {
  //useEffect(() => console.log('Modal.Body', baseClass));
  return (
    <div className={baseClass + '__body'} id={props.id}>
      {props.children}
    </div>
  );
};

const ModalFooter = (props: TModalPartsProps) => {
  //useEffect(() => console.log('Modal.Footer', baseClass));
  return (
    <div className={baseClass + '__footer'} id={props.id}>
      {props.children}
    </div>
  );
};

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
    baseClass = this.props.baseClassName;
    //console.log('Modal.baseClassName', this.props.baseClassName);
    //this.changeShowStatus();
  }
  componentDidUpdate(prevProps: TModalProps): void {
    //console.log('Modal.baseClassName', this.props.baseClassName);
    if (this.props.show != prevProps.show) {
      this.changeShowStatus();
    }
  }
  render() {
    return (
      <>
        <div id={this.props.id} className={this.props.baseClassName + '__backdrop'}></div>
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

type TModal = typeof Modal & TModalAddOns;
Object.assign(Modal, {
  Header: ModalHeader,
  Title: ModalTitle,
  Body: ModalBody,
  Footer: ModalFooter,
});
export default Modal as TModal;

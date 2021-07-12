import React from 'react';
import * as Styled from './Styled.elements';
import { Portal } from '../Portal/Portal';

type TModalProps = {
  onClose: () => void;
  width?: number;
  zIndex?: string;
  mobMarg?: boolean;
  close?: boolean;
  nBr?: boolean;
  children?: any;
};

export const Modal = ({
  children,
  onClose,
  width,
  zIndex = '99999',
  mobMarg,
  close,
  nBr,
}: TModalProps) => {
  const handleContainerClick = (e: React.MouseEvent) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return (
    <Portal>
      <Styled.ModalContainer zIndex={zIndex}>
        <Styled.Center onClick={handleContainerClick}>
          <Styled.ModalComponent width={width} mobMarg={mobMarg}>
            <Styled.ModalComponentInner nBr={nBr}>
              {close && (
                <span className="close" onClick={onClose}>
                  &times;
                </span>
              )}
              {children}
            </Styled.ModalComponentInner>
          </Styled.ModalComponent>
        </Styled.Center>
      </Styled.ModalContainer>
    </Portal>
  );
};

import styled from 'styled-components/macro';

export const Center = styled.div`
  min-height: calc(100% - 3.5rem);
  margin: 1.75rem auto;
  display: flex;
  align-items: center;
  transition: 0.3s;
`;

// export const ModalContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   background-color: #f2f2f2;
//   width: 335px;
//   height: 410px;
//   padding: 20px;
//   border: 1px solid rgba(255, 255, 255, 0.5);
// `;

export const ModalContainer = styled.div<{ zIndex: string }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  display: block;
  transition: 0.3s;
  z-index: ${props => props.zIndex};
  overflow: auto;
`;

export const ModalComponentInner = styled.div<{ nBr?: boolean }>`
  margin: 0 20px;
  border-radius: ${props => (props.nBr ? '0' : '8px')};
  border: 1px solid #e5e7eb;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06);
  position: relative;
`;

export const ModalComponent = styled.div<{ width?: number; mobMarg?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 50px auto;
  cursor: auto;

  position: relative;
  span {
    position: absolute;
    right: 20px;
    top: 15px;
    cursor: pointer;
    z-index: 9999;
    font-size: 18px;
  }
  @media (max-width: 768px) {
    margin: ${props => (props.mobMarg ? '50px 20px' : '50px auto')};
  }
`;

export const ModalTitle = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 24.5px;
  margin-bottom: 16px;
  text-align: center;
`;

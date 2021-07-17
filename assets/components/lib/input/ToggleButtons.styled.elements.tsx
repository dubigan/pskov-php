import styled from 'styled-components';
import { RowNoWrap } from '../Row/Row.styled';

export const Container = styled(RowNoWrap)`
  padding: 0px;
  margin: 0.1rem 0rem;
  border-style: none;
  justify-content: space-between;
  position: relative;
  width: 100%;
`;

export const Label = styled.label`
    // @include buttons.btn-outline-primary;
    // @include width.size(5.9);
    text-align: center;
    //width: 100%;
    margin: 0px;
    & active {
      // @include buttons.btn-primary;
      //@include width.size(4);
      //text-align: center;
      //width: 100%;
      //margin: 0px;
    }
  }
`;

export const Input = styled.input`
  position: absolute;
  clip: rect(0, 0, 0, 0);
`;

import styled from '@emotion/styled';
import { IOpenModal } from '../../../types/CrmTypes';

export const ModalContainer = styled.div<IOpenModal>`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  background-color: rgba(3, 3, 3, 0.5);
  visibility: ${(props) => (props.isOpenModal ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.isOpenModal ? '1' : '0')};
  transition: all 0.3s ease-in-out;
  z-index: 100;
`;

export const Modal = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 450px;
  width: 100%;
  padding-top: 22px;
`;

export const H3 = styled.h3`
  margin-bottom: 11px;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  color: #333333;
`;

export const SubmitText = styled.p`
  margin-bottom: 25px;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  color: #333333;
`;

export const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  padding: 13px 35px;
  background: #9873ff;
  border: none;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  color: #ffffff;
  cursor: pointer;

  &:hover {
    outline: none;
  }
  &:focus {
    outline: none;
  }
  &:active {
    outline: none;
  }
`;

export const CancelButton = styled.button`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #333333;
  text-decoration-line: underline;
`;

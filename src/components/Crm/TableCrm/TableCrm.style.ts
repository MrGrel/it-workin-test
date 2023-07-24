import styled from '@emotion/styled';
import IMAGES from './images/IMAGES';
import { IOpacityPopup, IColorSortBtn } from '../../../types/CrmTypes';

interface ITableLoadingorError {
  isLoadingOrError: boolean;
}

export const TableContainer = styled.div<ITableLoadingorError>`
  display: ${(props) => (props.isLoadingOrError ? 'flex' : 'block')};
  width: 100%;
  background: #fff;

  justify-content: center;
  align-items: center;
  min-height: ${(props) => (props.isLoadingOrError ? '400px' : 'none')};
`;

export const TableError = styled.p`
  margin: 0;
  margin-top: 10px;
  padding: 0;
  font-weight: 500;
  font-size: 40px;
  line-height: 32px;
  color: red;
`;

export const TableList = styled.ul`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0;
  padding: 10px 20px;
  border-bottom: 1px solid #c8c5d1;
  list-style: none;
`;

export const TdItemID = styled.li`
  align-items: center;
  max-width: 70px;
  width: 100%;
  padding: 11px 10px 11px 0;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #b0b0b0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TdItemFIO = styled.li`
  align-items: center;
  max-width: 234px;
  width: 100%;
  padding-right: 14px;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #333333;
`;

export const TdItemDateTime = styled.li`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  max-width: 137px;
  padding-right: 28px;
  width: 100%;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
`;

export const TextDMY = styled.p`
  color: #333333;
`;

export const TextTime = styled.p`
  color: #b0b0b0;
`;

export const TdItemContact = styled.li`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  max-width: 150px;
  padding-right: 42px;
  width: 100%;
`;

export const ContactContainer = styled.div`
  position: relative;
`;

export const ContactPopUp = styled.div<IOpacityPopup>`
  position: absolute;
  top: -46px;
  left: -58.5px;
  display: flex;
  justify-content: center;
  width: 133px;
  padding: 8px 6px 16px;
  background-image: url(${IMAGES.popup});
  background-position: top center;
  background-size: 100% 100%;
  visibility: ${(props) => (props.active === true ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.active === true ? 1 : 0)};
  z-index: 10;
  transition: visibility 0.3s ease-in-out, opacity 0.3s ease-in-out;
`;

export const TextContactPopUp = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #ffffff;
`;

export const LinkContactPopUp = styled.a`
  max-width: 100px;
  padding-left: 1em;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #9873ff;
  text-decoration: underline;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TdItemAction = styled.li`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 189px;
  width: 100%;
`;

export const ChangeButton = styled.button`
  background: none;
  border: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #333333;
  cursor: pointer;

  svg {
    margin-right: 1em;
  }
`;

export const RemoveButton = styled.button`
  background: none;
  border: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #333333;
  cursor: pointer;

  svg {
    margin-right: 1em;
  }
`;

export const BtnSort = styled.button<IColorSortBtn>`
  padding: 0;
  background: none;
  border: none;
  color: ${(props) => (props.active === true ? '#9873ff' : '#b0b0b0')};
  cursor: pointer;
  transition: color 0.3s ease-in-out;

  svg {
    margin-right: 2px;
  }
`;

export const TextBtnSort = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  margin-right: 2px;
`;

export const TextBtnFIO = styled.span`
  font-weight: 600;
  font-size: 10px;
  line-height: 14px;
  color: #9873ff;
`;

export const TextTHead = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  margin-right: 2px;
  color: #b0b0b0;
`;

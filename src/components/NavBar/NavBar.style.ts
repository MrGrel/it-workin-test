import styled from '@emotion/styled';

export const Header = styled.header`
  margin-bottom: 20px;
  background: #ffffff;
  box-shadow: 0px 9.03012px 27.0904px rgba(176, 190, 197, 0.32), 0px 3.38629px 5.64383px rgba(176, 190, 197, 0.32);
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 23px 0;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  margin-right: 53px;
  background: #9873ff;
  border-radius: 25px;
`;

export const LogoText = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  color: #ffffff;
`;

export const Form = styled.form`
  max-width: 581px;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #000;

  &::placeholder {
    color: #b0b0b0;
  }
`;

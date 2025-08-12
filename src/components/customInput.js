import styled from "@emotion/styled";
import { COLOR } from "../config/colors";

export const CustomInput = styled.input`
  border: none;
  font-size: ${({ fontSize }) => fontSize || "18px"};
  outline: none;
  width: 100%;
  height: 100%;
  background: transparent;

  &::placeholder {
    font-weight: 400;
    font-size: ${({ plFontSize }) => plFontSize || "18px"};
    color: ${({ colorPl }) => colorPl || COLOR.primary};
  }
`;

export const IconWrapper = styled.span`
  position: absolute;
  right: ${({ right }) => right || "6px"};
  top: ${({ top }) => top || "5px"};
  width: ${({ whith }) => whith || "56px"};
  height: ${({ height }) => height || "56px"};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ borderRadius }) => borderRadius || "100%"};
  background-color: ${({ bgColors }) => bgColors || "#7eb693"};
  color: ${({ colorIcon }) => colorIcon || COLOR.white};
`;

import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { COLOR } from "../config/colors";

export const CustomNavLink = styled(NavLink)`
  color: ${COLOR.yellow};
  text-decoration: none;
  display: flex;
  align-items: center;
  font-weight: 700;
`;

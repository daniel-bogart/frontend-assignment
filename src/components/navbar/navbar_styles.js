import styled from "styled-components";

export const SearchContainer = styled.div`
  
`;

export const NavContainer = styled.div`
  z-index: 12;
  position: -webkit-sticky;
  position: sticky;
  top: 0px;
  background: white;
  /* justify-content: space-between; */
`;

export const NavWrapper = styled.div`
  align-items: center;
  height: 85px;
  display: flex;
  justify-content: center;
`;

export const Logo = styled.img`
  position: relative;
  right: 18%;
  margin:0 auto;
  &:hover {
    cursor: pointer;
  };
`;

export const SearchWrapper = styled.div`
  position: relative;
  left: 14%;
  margin:0 auto;
`;

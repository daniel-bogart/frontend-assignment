import styled from "styled-components";

export const SearchContainer = styled.div`
  position: relative;
  left: 13.4%;
  margin:0 auto;
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
  right: 16%;
  margin:0 auto;
  &:hover {
    cursor: pointer;
  };
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 16rem;
  border: solid 2px rgb(189, 189, 189);
  justify-content: center;
  &:focus-within {
    border: solid 2px rgb(0, 85, 255);
  }
`;

export const SearchIcon = styled.img`
  width: 28px;
  margin: 0px 12px;
`;

export const SearchInput = styled.input`
  border: none;
  height: 40px;
  width: 12rem;
  font-size: 18px;
  color: rgb(98, 98, 98);
  &:focus {
    outline: none;
  }
`;

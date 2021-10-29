import styled from 'styled-components';

export const MovieContainer = styled.div`
  min-height: 100vh;
  overflow-x: hidden;
  justify-content: center;
  align-items: center;
`;

export const Poster = styled.img`
  width: 300px;
  height: 340px;
  object-fit: cover;
  object-position: center;
  transition: all .5s ease;
  border-radius: 12px 12px 0px 0px;
`;

export const MovieIndexList = styled.ul`
  position: absolute;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  width: 98.8vw;
  max-width: 100vw;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 320px));
  column-gap: 0.5em;
  row-gap: 1.5em;
  column-count: 4;
`;

export const MovieIndexListItem = styled.li`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border-radius: 12px;
  transition: all 0.5s ease;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  &:hover {
    cursor: zoom-in;
    filter: brightness(80%);
  }
`;

export const Title = styled.div`
  text-align: center;
  margin-right: 20px;
`;
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
  border-radius: 8px 8px 0px 0px;
`;

export const MovieIndexList = styled.ul`
  position: absolute;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  width: 98.8vw;
  max-width: 100vw;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 300px));
  column-gap: 1.5em;
  row-gap: 1.5em;
  column-count: 4;
`;

export const MovieIndexListItem = styled.li`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border-radius: 8px;
  transition: all 0.5s ease;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  &:hover {
    cursor: zoom-in;
    filter: brightness(80%);
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-right: 20px;
  padding: 16px;
  font-weight: 500;
  font-size: 18px;
  height: 22px;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: absolute;
  padding: 12px;
  background-color: white;
  border-radius: 50px;
  width: 16px;
  height: 16px;
  margin: 12px;
  border: solid 1px black;
`;

export const Border = styled.div`
  border-bottom: 3px solid rgb(219, 219, 219);
  margin-right: 80px;
  margin-left: 80px;
`;

export const Header = styled.div`
  padding-top: 20px;
  font-size: 28px;
  font-weight: 600;
  position: relative;
  left: 10%;
  margin:0 auto;
`
import styled from 'styled-components';

export const MovieContainer = styled.div`
  min-height: 100vh;
  overflow-x: hidden;
  justify-content: center;
  align-items: center;
  /* width: 100%; */
  max-width: calc(1200px + 4rem);
  margin: 0 auto;
`;

export const MovieWrapper = styled.div`
  /* max-width: 1200px; */
  /* padding: 0 2rem; */
  width: 100%;
  /* margin: 0 auto; */
`;

export const Poster = styled.img`
  /* width: 300px; */
  width: 100%;
  height: 340px;
  object-fit: cover;
  object-position: center;
  transition: all .5s ease;
  border-radius: 8px 8px 0px 0px;
  @media (max-width: 568px) {
    height: 100vw;
  }
`;

export const MovieIndexList = styled.ul`
  /* position: absolute; */
  /* justify-content: center; */
  /* align-items: center; */
  /* width: 98.8vw; */
  /* max-width: 100vw; */
  margin: 24px 2rem 0 2rem;
  display: grid;
  /* grid-template-columns: repeat(auto-fill, minmax(18.75rem, 18.75rem)); */
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  column-gap: 1.5em;
  row-gap: 1.5em;
  /* column-count: 4; */
`;

export const MovieIndexListItem = styled.li`
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border-radius: 8px;
  transition: all 0.5s ease;
  box-shadow: 1px 2px 8px 2px rgba(0, 0, 0, 0.1);
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
  margin: 0 2rem;
`;

export const Header = styled.div`
  padding-top: 20px;
  font-size: 28px;
  font-weight: 600;
  position: relative;
  margin: 0px 2rem;
`;

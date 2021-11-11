import styled from 'styled-components'

export const PageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Content = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  justify-items: center;
  margin-top: 70px;
  row-gap: 12px;
  width: 100%;

  @media (max-width: 480px) {
    flex-direction: column;
    margin-top: 180px;
  }
`

export const Header = styled.header`
  align-items: center;
  background-color: #1b998b;
  display: flex;
  height: 70px;
  justify-content: space-between;
  padding: 10px;
  position: fixed;
  top: 0;
  width: calc(100% - 20px);
  z-index: 100;

  @media (max-width: 480px) {
    height: 180px;
    flex-direction: column;
  }
`

export const Search = styled.input`
  border-radius: 4px;
  border: none;
  color: black;
  font-size: 16px;
  font-weight: bold;
  height: 32px;
  margin-left: 16px;
  padding: 8px;
  width: 300px;

  ::placeholder {
    color: grey;
    font-weight: bold;
  }

  @media (max-width: 480px) {
    margin: 12px 0;
    width: 100%;
  }
`

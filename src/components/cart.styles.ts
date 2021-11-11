import styled from 'styled-components'

export const Content = styled.div`
  background-color: white;
  border: 1px solid gray;
  max-height: calc(100vh - 90px);
  max-width: 600px;
  overflow: auto;
  padding: 12px;

  @media (max-width: 480px) {
    max-height: calc(100vh - 210px);
    width: calc(100% - 24px);
  }
`

export const Clear = styled.button`
  background-color: #e71d36;
  border-radius: 4px;
  border: none;
  color: white;
  cursor: pointer;
  font-weight: bold;
  margin: 12px 20%;
  padding: 8px 0;
  width: 60%;
`

export const CartButton = styled.button`
  background-color: #1ba9ab;
  border-radius: 4px;
  border: 2px solid black;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 24px;
  font-weight: bold;
  margin: 0 16px;
  padding: 8px;
  white-space: nowrap;
`

export const CartOverview = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding: 12px;
  text-align: right;
  width: calc(100% - 24px);
`

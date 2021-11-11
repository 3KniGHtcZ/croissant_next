import styled from 'styled-components'

export const Remove = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`

export const Item = styled.div`
  border-bottom: 1px solid #c5c5c5;
  display: flex;
  justify-content: space-between;
  max-width: 450px;
  padding: 12px;
  width: calc(100% - 24px);
`

export const RightSide = styled.div`
  display: flex;
  padding-left: 12px;
  white-space: nowrap;
`

export const LeftSide = styled.div`
  display: flex;
`

export const ImageWrapper = styled.div`
  min-width: 80px;
  position: relative;
`

export const Price = styled.div`
  font-weight: bold;
  margin-right: 16px;
`

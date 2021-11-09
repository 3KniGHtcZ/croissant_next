import styled from "styled-components"

export const ProductWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  width: 200px;
`

export const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const ImageWrapper = styled.div`
  height: 150px;
  position: relative;
  width: 150px;
`

export const Price = styled.div`
  color: #e71d36;
  font-size: 1.3rem;
  font-weight: bold;
  text-align: center;
`

export const Name = styled.div`
  font-size: 14px;
  text-align: center;
`

export const Add = styled.button`
  background-color: #c5d86d;
  border-radius: 4px;
  border: 1px solid #acacac;
  cursor: pointer;
  padding: 8px 12px;
`

export const Remove = styled(Add)`
  background-color: #efefef;
`

export const AddNew = styled(Add)`
  padding: 8px;
  width: 100%;
`

export const Buttons = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  width: 60%;
`

export const Count = styled.span`
  font-weight: bold;
`
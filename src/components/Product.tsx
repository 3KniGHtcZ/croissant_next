import { useProductInfo } from '@api/api'
import { CartContext } from '@contexts/cart.context'
import { ProductContext } from '@contexts/product.context'
import { formatPrice } from '@utils/utils'
import Image from 'next/image'
import React, { useContext } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import {
  Add,
  AddNew,
  Count,
  Price,
  Buttons,
  Content,
  ImageWrapper,
  Name,
  ProductWrapper,
  Remove,
} from './product.styles'

interface ProductPropsType {
  id: number
}

export const Product = ({ id }: ProductPropsType) => {
  const product = useProductInfo(id)
  const { cart, addItem, removeItem } = useContext(CartContext)
  const itemsInCart = cart[id]?.count

  const handleAddItem = () => addItem(id, product.price.full)
  const handleRemoveItem = () => removeItem(id)

  return (
    <ProductContext.Provider value={product}>
      <ProductWrapper>
        <ImageWrapper>
          <Image alt="" layout="fill" objectFit="contain" src={product.image} />
        </ImageWrapper>
        <Content>
          <Name>{product.name}</Name>
          <Price>{`${formatPrice(product.price.full)} ${product.price.currency}`}</Price>
          <Buttons>
            {itemsInCart ? (
              <>
                <Remove onClick={handleRemoveItem}>
                  <FaMinus size={12} />
                </Remove>
                <Count>{itemsInCart}</Count>
                <Add onClick={handleAddItem}>
                  <FaPlus size={12} />
                </Add>
              </>
            ) : (
              <AddNew onClick={handleAddItem}>Přidat do košíku</AddNew>
            )}
          </Buttons>
        </Content>
      </ProductWrapper>
    </ProductContext.Provider>
  )
}

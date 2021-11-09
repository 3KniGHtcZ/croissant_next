import { useProductInfo } from '@api/api'
import { CartContext } from '@contexts/cart.context'
import { ProductContext } from '@contexts/product.context'
import { formatPrice } from '@utils/utils'
import Image from 'next/image'
import React, { useContext } from 'react'
import { FaTimes } from 'react-icons/fa'
import {
  ImageWrapper,
  Item,
  LeftSide,
  Price,
  RightSide,
} from './cartItem.styles'
import { Remove } from './product.styles'

interface CartItemPropsType {
  id: number
}

export function CartItem({ id }: CartItemPropsType) {
  const product = useProductInfo(id)
  const { cart, clearItems } = useContext(CartContext)

  const cartPrice = Math.round(cart[id].count * product.price.full * 100) / 100

  const handleClear = () => clearItems(id)

  return (
    <ProductContext.Provider value={product}>
      <Item>
        <LeftSide>
          <ImageWrapper>
            <Image alt="" layout="fill" objectFit="contain" src={product.image} />
          </ImageWrapper>
          <span>{`${cart[id].count}x ${product.name}`}</span>
        </LeftSide>
        <RightSide>
          <Price>{`${formatPrice(cartPrice)} ${product.price.currency}`}</Price>
          <Remove onClick={handleClear}>
            <FaTimes color="#E71D36" />
          </Remove>
        </RightSide>
      </Item>
    </ProductContext.Provider>
  )
}

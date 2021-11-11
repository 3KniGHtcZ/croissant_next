import { useProductInfo } from '@api/api'
import { CartContext } from '@contexts/cart.context'
import { formatPrice } from '@utils/utils'
import Image from 'next/image'
import { useCallback, useContext } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { FormattedMessage } from 'react-intl'
import {
  Add,
  AddNew,
  Buttons,
  Content,
  Count,
  ImageWrapper,
  Name,
  Price,
  ProductWrapper,
  Remove
} from './product.styles'

interface ProductPropsType {
  id: number
}

export const Product = ({ id }: ProductPropsType) => {
  const product = useProductInfo(id)
  const { cart, addItem, removeItem } = useContext(CartContext)
  const itemsInCart = cart[id]?.count

  const handleAddItem = useCallback(() => addItem(id, product.price.full), [addItem, id, product])
  const handleRemoveItem = useCallback(() => removeItem(id), [id, removeItem])

  return (
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
            <AddNew onClick={handleAddItem}>
              <FormattedMessage id="addToCart" />
            </AddNew>
          )}
        </Buttons>
      </Content>
    </ProductWrapper>
  )
}

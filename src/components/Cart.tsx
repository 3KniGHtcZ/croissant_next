import { CartContext } from '@contexts/cart.context'
import { formatPrice } from '@utils/utils'
import React, { useContext, useMemo, useCallback } from 'react'
import { FaShoppingCart, FaTrash } from 'react-icons/fa'
import { usePopperTooltip } from 'react-popper-tooltip'
import { CartButton, CartOverview, Clear, Content } from './cart.styles'
import { CartItem } from './CartItem'

export const Cart = () => {
  const { cart, clearCart } = useContext(CartContext)
  const { finalPrice } = useContext(CartContext)
  const { getTooltipProps, setTooltipRef, setTriggerRef, visible } = usePopperTooltip({
    trigger: 'click',
  })

  const hasItems = useMemo(() => Object.keys(cart).length, [cart])
  const finalOverview = `${hasItems ? formatPrice(finalPrice) : 0} Kč`

  const handleClearCart = useCallback(() => clearCart(), [clearCart])

  return (
    <>
      <CartButton ref={setTriggerRef}>
        <FaShoppingCart size={20} style={{ marginRight: '16px' }} />
        {finalOverview}
      </CartButton>
      {visible && (
        <Content ref={setTooltipRef} {...getTooltipProps()}>
          {hasItems ? (
            <>
              {Object.keys(cart).map((key) => (
                <CartItem id={Number(key)} key={`cart_item-${key}`} />
              ))}
              <CartOverview>{`Celková cena: ${finalOverview}`}</CartOverview>
              <Clear onClick={handleClearCart}>
                <FaTrash size={16} style={{ marginRight: '8px' }} />
                Vyprázdnit košík
              </Clear>
            </>
          ) : (
            'Košík je prázdný'
          )}
        </Content>
      )}
    </>
  )
}

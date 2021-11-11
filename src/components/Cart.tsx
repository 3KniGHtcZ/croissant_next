import { CartContext } from '@contexts/cart.context'
import { formatPrice } from '@utils/utils'
import { useCallback, useContext, useMemo } from 'react'
import { FaShoppingCart, FaTrash } from 'react-icons/fa'
import { FormattedMessage } from 'react-intl'
import { usePopperTooltip } from 'react-popper-tooltip'
import { CartButton, CartOverview, Clear, Content, ShoppingCartStyle, TrashStyle } from './cart.styles'
import { CartItem } from './CartItem'

export const Cart = () => {
  const { cart, clearCart, finalPrice } = useContext(CartContext)
  const { getTooltipProps, setTooltipRef, setTriggerRef, visible } = usePopperTooltip({
    trigger: 'click'
  })

  const hasItems = useMemo(() => Object.keys(cart).length, [cart])
  const finalOverview = hasItems ? formatPrice(finalPrice) : 0

  const handleClearCart = useCallback(clearCart, [clearCart])

  return (
    <>
      <CartButton ref={setTriggerRef}>
        <FaShoppingCart size={20} style={ShoppingCartStyle} />
        <FormattedMessage id="cartButtonPrice" values={{ value: finalOverview }} />
      </CartButton>
      {visible && (
        <Content ref={setTooltipRef} {...getTooltipProps()}>
          {hasItems ? (
            <>
              {Object.keys(cart).map(key => (
                <CartItem id={Number(key)} key={`cart_item-${key}`} />
              ))}
              <CartOverview>
                <FormattedMessage id="cartFinalPrice" values={{ value: finalOverview }} />
              </CartOverview>
              <Clear onClick={handleClearCart}>
                <FaTrash size={16} style={TrashStyle} />
                <FormattedMessage id="cartEmptyCart" />
              </Clear>
            </>
          ) : (
            <FormattedMessage id="cartEmpty" />
          )}
        </Content>
      )}
    </>
  )
}

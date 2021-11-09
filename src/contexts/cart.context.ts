import { CartType } from '@hooks/cart.hook'
import { createContext } from 'react'

export type CartContextType = {
  addItem: (id: number, price: number) => void
  cart: CartType
  clearCart: () => void
  clearItems: (id: number) => void
  finalPrice: number
  removeItem: (id: number) => void
}

export const CartContext = createContext<CartContextType>({} as CartContextType)

CartContext.displayName = 'CartContext'

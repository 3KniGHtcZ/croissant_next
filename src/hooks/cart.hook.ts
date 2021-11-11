import { useEffect, useState, useMemo } from 'react'

export type CartType = {
  [key: number]: { count: number; price: number }
}

export const useCart = () => {
  const [cart, setCart] = useState<CartType>(() => {
    if (typeof window !== 'undefined') {
      const storage = localStorage.getItem('croissant_cart')
      return storage !== null ? JSON.parse(storage) : {}
    } else {
      return {}
    }
  })

  const addItem = (id: number, price: number) => {
    const newCart = { ...cart }
    const prevValue = cart[id]?.count || null

    if (prevValue) {
      newCart[id].count = prevValue + 1
    } else {
      newCart[id] = { count: 1, price }
    }

    setCart(newCart)
  }

  const removeItem = (id: number) => {
    const newCart = { ...cart }
    const prevValue = cart[id]?.count || 0

    if (prevValue > 1) {
      newCart[id].count = prevValue - 1
    } else {
      delete newCart[id]
    }

    setCart(newCart)
  }

  const clearCart = () => {
    setCart({})
  }

  const clearItems = (id: number) => {
    const newCart = { ...cart }

    delete newCart[id]
    setCart(newCart)
  }

  const finalPrice = useMemo(() => {
    let finalPrice = 0
    Object.keys(cart).forEach(key => (finalPrice += cart[Number(key)].count * cart[Number(key)].price))

    return Math.round(finalPrice * 100) / 100
  }, [cart])

  useEffect(() => {
    localStorage.setItem('croissant_cart', JSON.stringify(cart))
  }, [cart])

  return {
    addItem,
    cart,
    clearCart,
    clearItems,
    removeItem,
    finalPrice
  }
}

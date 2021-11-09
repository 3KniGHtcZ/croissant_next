import { ProductType } from '@api/api'
import { createContext } from 'react'

export const ProductContext = createContext({} as ProductType)

ProductContext.displayName = 'ProductContext'
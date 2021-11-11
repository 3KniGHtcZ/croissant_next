import { QUERY } from '@constants/query'
import { useQuery, useQueryClient } from 'react-query'

export type ProductType = {
  image: string
  price: {
    full: number
    currency: string
  }
  id: number
  name: string
}

type UseProductsType = {
  isLoading: boolean
  isError: boolean
  data: ProductType[]
}

export const useProductInfo = (id: number) => {
  const queryClient = useQueryClient()

  return queryClient.getQueryData<ProductType[]>(QUERY.PRODUCTS)?.filter(product => product.id === id)[0] as ProductType
}

export const useProducts = (): UseProductsType => {
  const { isLoading, isError, data } = useQuery(QUERY.PRODUCTS, () => fetch('./products.json').then(res => res.json()))

  return {
    isError,
    isLoading,
    data
  }
}

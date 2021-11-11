import { useProducts } from '@api/api'
import { Cart } from '@components/Cart'
import { Content, Header, Logo, PageWrapper, Search } from '@components/page.styles'
import { Product } from '@components/Product'
import { CartContext } from '@contexts/cart.context'
import { useCart } from '@hooks/cart.hook'
import { normalizeSync } from 'normalize-diacritics'
import { ChangeEvent, useMemo, useState } from 'react'
import { FaGithub } from 'react-icons/fa'

export const Page = () => {
  const cart = useCart()
  const [searchQuery, setSearchQuery] = useState('')
  const { isLoading, isError, data } = useProducts()

  const filteredData = useMemo(() => {
    if (searchQuery) {
      return data.filter(product =>
        normalizeSync(product.name.toLowerCase()).includes(normalizeSync(searchQuery).toLowerCase())
      )
    } else {
      return data
    }
  }, [searchQuery, data])

  const handleOnChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(value)
  }

  return (
    <CartContext.Provider value={cart}>
      <PageWrapper>
        <Header>
          <Logo>
            <FaGithub size={40} color="white" style={{ marginRight: '16px' }} /> Croissant Next
            <Search type="search" onChange={handleOnChange} placeholder="Vyhledat produkt" />
          </Logo>
          <Cart />
        </Header>
        {isLoading && 'Načítáni dat...'}
        {isError && 'Jejda něco se pokazilo'}
        {!isLoading && (
          <Content>
            {filteredData?.map(({ id }) => (
              <Product id={id} key={`product_${id}`} />
            ))}
          </Content>
        )}
      </PageWrapper>
    </CartContext.Provider>
  )
}

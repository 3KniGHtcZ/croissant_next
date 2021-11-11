import { useProducts } from '@api/api'
import { Cart } from '@components/Cart'
import { Content, Header, PageWrapper, Search } from '@components/page.styles'
import { Product } from '@components/Product'
import { CartContext } from '@contexts/cart.context'
import { useCart } from '@hooks/cart.hook'
import { normalizeSync } from 'normalize-diacritics'
import { ChangeEvent, useMemo, useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import { FormattedMessage, useIntl } from 'react-intl'

export const Page = () => {
  const cart = useCart()
  const [searchQuery, setSearchQuery] = useState('')
  const { isLoading, isError, data } = useProducts()
  const intl = useIntl()

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
          <FaGithub size={40} color="white" style={{ marginRight: '16px' }} />
          <Search
            type="search"
            onChange={handleOnChange}
            placeholder={intl.formatMessage({ id: 'searchPlaceholder' })}
          />
          <Cart />
        </Header>
        {isLoading && <FormattedMessage id="loading" />}
        {isError && <FormattedMessage id="error" />}
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

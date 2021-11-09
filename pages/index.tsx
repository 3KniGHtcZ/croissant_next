import { Page } from '@components/Page'
import { QueryClient, QueryClientProvider } from 'react-query'
import { createGlobalStyle } from 'styled-components'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

const GlobalStyles = createGlobalStyle`
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    padding: 0;
    margin: 0;
  }
`

const Home = () => (
  <QueryClientProvider client={queryClient}>
    <GlobalStyles />
    <Page />
  </QueryClientProvider>
)

export default Home

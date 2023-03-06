import '@/styles/globals.css'
import { AppWrapper } from '@/context'

export default function App({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  )
}

import type { AppProps } from 'next/app'
import {
  apiProvider,
  configureChains,
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme
} from '@rainbow-me/rainbowkit'
import '@rainbow-me/rainbowkit/styles.css'
import { WagmiProvider, createWagmiClient, chain } from 'wagmi'

import '../styles/globals.css'


const { chains, provider } = configureChains(
  [chain.mainnet],
  [apiProvider.fallback()]
)

const { connectors } = getDefaultWallets({
  appName: 'Portrait',
  chains
})

const wagmiClient = createWagmiClient({
  autoConnect: true,
  connectors,
  provider
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiProvider client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={darkTheme()}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiProvider>
  )
}

export default MyApp

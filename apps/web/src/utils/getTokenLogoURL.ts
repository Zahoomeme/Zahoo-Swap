import { getAddress } from '@ethersproject/address'
import memoize from 'lodash/memoize'
import { ChainId, Token } from '@pancakeswap/sdk'

const mapping = {
  [ChainId.BSC]: 'smartchain',
  [ChainId.ETHEREUM]: 'ethereum',
}

const getTokenLogoURL = memoize(
  (token?: Token) => {
    if (token && mapping[token.chainId] && getAddress(token.address) === "0x7e7E8522aB7C797df75399708AB2983f336AD2c2") {
      return "https://www.app.zahoo.io/images/tokens/0x7e7E8522aB7C797df75399708AB2983f336AD2c2.png"
    }
    if (token && mapping[token.chainId]) {
      return `https://assets-cdn.trustwallet.com/blockchains/${mapping[token.chainId]}/assets/${getAddress(
        token.address,
      )}/logo.png`
    }
    return null
  },
  (t) => `${t.chainId}#${t.address}`,
)

export const getTokenLogoURLByAddress = memoize(
  (address?: string, chainId?: number) => {
    if (address && chainId && mapping[chainId] && getAddress(address) === "0x7e7E8522aB7C797df75399708AB2983f336AD2c2") {
      return "https://www.app.zahoo.io/images/tokens/0x7e7E8522aB7C797df75399708AB2983f336AD2c2.png"
    }
    if (address && chainId && mapping[chainId]) {
      return `https://assets-cdn.trustwallet.com/blockchains/${mapping[chainId]}/assets/${getAddress(address)}/logo.png`
    }
    return null
  },
  (address, chainId) => `${chainId}#${address}`,
)

export default getTokenLogoURL

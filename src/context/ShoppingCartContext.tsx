import { createContext, ReactNode, useContext, useState } from 'react'

type ShoppingCartContextProps = {
  children: ReactNode
}

const ShoppingCartContext = createContext({})

export function ShoppingCartProvider({ children }: ShoppingCartContextProps) {
  const [cart, setCart] = useState([])

  return (
    <ShoppingCartContext.Provider value={{ cart, setCart }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}

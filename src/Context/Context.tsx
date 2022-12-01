import React from "react"

interface ContextInterface {
  ctx: {
    boop?: string
  }
  updateCtx?: React.Dispatch<any>
}

const Context = React.createContext<ContextInterface>({
  ctx: {
    boop: "no",
  },
})

interface ContextProviderProps {
  children: React.ReactNode
}

function ContextProvider({ children }: ContextProviderProps) {
  const [ctx, updateCtx] = React.useState({})
  const cowbellContext = {
    ctx,
    updateCtx,
  }
  return <Context.Provider value={cowbellContext}>{children}</Context.Provider>
}

export { Context, ContextProvider }

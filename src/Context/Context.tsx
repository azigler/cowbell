import React from "react"

interface Context {
  state: any
  dispatch: React.Dispatch<any>
}

const clientContext = React.createContext<Context>({} as Context)

function clientDispatch(state: any, action: any) {
  switch (action.type) {
    case "login_me": {
      return {
        ...state,
        me: action.me,
      }
    }
    default: {
      console.error("Unknown action: " + action.type)
    }
  }
}

const clientState: Context["state"] = {}

export function ContextProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = React.useReducer(clientDispatch, clientState)

  return (
    <clientContext.Provider value={{ state, dispatch }}>
      {children}
    </clientContext.Provider>
  )
}

export function useClientContext() {
  return {
    state: Object.assign({}, React.useContext(clientContext).state),
    dispatch: React.useContext(clientContext).dispatch,
  }
}

import { ContextProvider } from "../Context/Context"
import { Router } from "../Router/Router"
import { Socket } from "../Socket/Socket"
import "./Client.css"

export function Client() {
  return (
    <ContextProvider>
      <Router />
      <Socket />
    </ContextProvider>
  )
}

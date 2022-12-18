import { useClientContext } from "../Context/Context"

export function NotFound() {
  const { state } = useClientContext()
  return <h1>404 Not Found{JSON.stringify(state)}</h1>
}

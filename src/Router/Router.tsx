import { BrowserRouter, Routes, Route } from "react-router-dom"
import { App } from "../App/App"
import { Login } from "../Login/Login"
import { ContextProvider } from "../Context/Context"
import { NotFound } from "../NotFound/NotFound"

function Router() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Login />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  )
}

export { Router }

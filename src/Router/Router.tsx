import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HelmetProvider } from "react-helmet-async"
import { Metadata } from "../Metadata/Metadata"

import { Layout } from "../Layout/Layout"
import { NotFound } from "../NotFound/NotFound"

import { Home } from "../Home/Home"
import { Login } from "../Login/Login"

export function Router() {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <Metadata />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </HelmetProvider>
    </BrowserRouter>
  )
}

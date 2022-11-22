import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DetailPage } from "../pages/Detail";
import { HomePage } from "../pages/Home";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/users" element={<HomePage/>} />
        <Route path="/users/:userLogin" element={<DetailPage/>} />
      </Routes>
    </BrowserRouter>
  )
}
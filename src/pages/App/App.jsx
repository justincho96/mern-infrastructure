import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import NewOrderPage from "../NewOrderPage/NewOrderPage";
import OrderHistoryPage from "../OrderHistory/OrderHistoryPage";

export default function App() {
  // i'm intentionally leaving this empty (null)
  const [user, setUser] = useState("lalapalooza");
  return (
    <main className="App">
      App
      {user ? (
        <>
          <NavBar />
          <Routes>
            <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
          </Routes>
        </>
      ) : (
        <AuthPage />
      )}
    </main>
  );
}

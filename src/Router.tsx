import { Routes, Route } from "react-router-dom";


export function Router() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/checkout" element={<h1>Checkout</h1>} />
    </Routes>
  );
}

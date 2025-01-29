import React from "react";
import Header from "./layouts/Header";
import Main from "./pages/Main";
import Footer from "./layouts/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import AboutUs from "./pages/AboutUs";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:slug" element={<ProductDetails />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./assets/scss/style.scss";
import App from "./App";
import { ProductProvider } from "./contexts/ProductsContext";
import { ValuteProvider } from "./contexts/ValuteContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { CartProvider } from "react-use-cart";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <ThemeProvider>
        <ValuteProvider>
          <LanguageProvider>
            <ProductProvider>
              <App />
            </ProductProvider>
          </LanguageProvider>
        </ValuteProvider>
      </ThemeProvider>
    </CartProvider>
  </StrictMode>
);

import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { CartProvider } from "./ReusableComponent/CartContext";
import HeaderComponent from './ConstantComponent/HeaderComponent/HeaderComponent'
import HomeComponent from './UI/HomeComponent/HomeComponent'
import AboutComponent from './UI/AboutComponent/AboutComponent'
import ServiceComponent from './UI/ServicesComponent/ServiceComponent'
import ResearchComponent from './UI/ResearchComponent/ResearchComponent'
import TeamComponent from './UI/TeamComponent/TeamComponent'
import ContactComponent from './UI/ContactComponent/ContactComponent'
import ShopComponent from './UI/ShopComponent/ShopComponent'
import FAQComponent from './UI/FAQComponent/FAQComponent'
import CheckoutComponent from './UI/CheckoutComponent/CheckoutComponent'
import PricingComponent from './UI/PricingComponent/PricingComponent'
import CartComponent from "./UI/CartComponent/CartComponent";

function Lab() {
    return (
        <CartProvider>
            <BrowserRouter>
                <HeaderComponent />
                <Routes>
                    <Route path="/" element={<HomeComponent />} />
                    <Route path="/About" element={<AboutComponent />} />
                    <Route path="/Service" element={<ServiceComponent />} />
                    <Route path="/Research" element={<ResearchComponent />} />
                    <Route path="/Team" element={<TeamComponent />} />
                    <Route path="/Contact" element={<ContactComponent />} />
                    <Route path="/cart" element={<CartComponent />} />
                    <Route path="/Shop" element={<ShopComponent />} />
                    <Route path="/FAQ" element={<FAQComponent />} />
                    <Route path="/Checkout" element={<CheckoutComponent />} />
                    <Route path="/Pricing" element={<PricingComponent />} />
                </Routes>
            </BrowserRouter>
        </CartProvider>
    );
}

export default Lab;

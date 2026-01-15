import Accueil from "./components/Accueil.tsx";
import Header from "./components/Header.tsx";
import Apropos from "./components/Apropos.tsx";
import Ways from "./components/Ways.tsx";
import Packs from "./components/Packs.tsx";
import ContactUs from "./components/ContactUs.tsx";
import Footer from "./components/Footer.tsx";
import WhatsAppButton from "./components/WhatsAppButton.tsx";
import ScrollToTopButton from "./components/ScrollToTopButton.tsx";

export default function App() {
   return (
   <>
    <Header />
    <Accueil/>
    <Packs/>
    <Ways/>
    <Apropos/>
    <ContactUs/>
    <Footer/>
    <WhatsAppButton/>
    <ScrollToTopButton/>
   </>
   )
}


import './globals.css';
import Footer from '../components/Footer'; 
import Header from '../components/Header'; // Import the new Header
import { CartProvider } from '../context/CartContext';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-brand-black">
        <CartProvider>
          <Header /> {/* Header is now global */}
          {children}
          <Footer /> 
        </CartProvider>
      </body>
    </html>
  );
}
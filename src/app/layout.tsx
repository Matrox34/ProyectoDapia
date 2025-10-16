import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { UserProvider } from "@/context/UserContext";
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-green-50">
        <UserProvider>
          <CartProvider>
            <Navbar />
            {children}
          </CartProvider>
        </UserProvider>
      </body>
    </html>
  );
}

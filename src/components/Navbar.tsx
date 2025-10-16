"use client";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useUser } from "@/context/UserContext";

export default function Navbar() {
  const { cart } = useCart();
  const { user, logout } = useUser();

  return (
    <nav className="bg-green-600 text-white py-3 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
        <Link href="/" className="text-xl font-bold">
          🛍 EcoShop
        </Link>

        <div className="flex items-center gap-4">
          <Link href="/cart" className="hover:underline">
            Carrito ({cart.length})
          </Link>
          {user ? (
            <>
              <span>Hola, {user.name}</span>
              <button
                onClick={logout}
                className="bg-white text-green-700 px-3 py-1 rounded-lg hover:bg-green-100"
              >
                Cerrar sesión
              </button>
            </>
          ) : (
            <Link href="/login" className="bg-white text-green-700 px-3 py-1 rounded-lg hover:bg-green-100">
              Iniciar sesión
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

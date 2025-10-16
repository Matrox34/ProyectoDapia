"use client";
import { useEffect, useState } from "react";
import { Product } from "@/types/types";
import { useCart } from "@/context/CartContext";

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch("/products.json")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-green-600 mb-6 text-center">
        Catálogo de Productos
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(p => (
          <div
            key={p.id}
            className="border rounded-2xl shadow p-4 bg-white flex flex-col"
          >
            <img src={p.image} alt={p.name} className="rounded-lg h-48 object-cover" />
            <h2 className="text-lg font-semibold mt-2">{p.name}</h2>
            <p className="text-gray-600">{p.description}</p>
            <p className="font-bold text-green-700 mt-1">${p.price}</p>
            <button
              onClick={() => addToCart(p)}
              className="bg-green-500 text-white rounded-lg mt-3 py-2 hover:bg-green-600"
            >
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

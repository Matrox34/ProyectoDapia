"use client";
import { useCart } from "@/context/CartContext";
import { useUser } from "@/context/UserContext";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, total } = useCart();
  const { user } = useUser();

  const handlePurchase = () => {
    if (!user) {
      alert("Debes iniciar sesión para realizar la compra.");
      return;
    }
    alert(`Compra realizada por ${user.name}. Total: $${total}`);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-green-600 mb-6">Tu Carrito</h1>
      {cart.length === 0 ? (
        <p>No hay productos en tu carrito.</p>
      ) : (
        <div className="space-y-4">
          {cart.map(item => (
            <div
              key={item.product.id}
              className="flex items-center justify-between border p-4 rounded-xl bg-white shadow"
            >
              <span>{item.product.name}</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    updateQuantity(item.product.id, item.quantity - 1)
                  }
                  className="px-3 py-1 bg-gray-200 rounded-lg"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() =>
                    updateQuantity(item.product.id, item.quantity + 1)
                  }
                  className="px-3 py-1 bg-gray-200 rounded-lg"
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item.product.id)}
                  className="px-3 py-1 bg-red-500 text-white rounded-lg"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
          <h2 className="text-xl font-semibold text-right mt-4">
            Total: ${total}
          </h2>
          <button
            onClick={handlePurchase}
            className="bg-green-600 text-white w-full py-2 rounded-xl hover:bg-green-700"
          >
            Finalizar Comp
          </button>
        </div>
      )}
    </div>
  );
}

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuantity, removeFromCart, clearCart } from '../store/carritoSlice';

function Carrito() {
  const dispatch = useDispatch();
  const { list: carritoItems } = useSelector((state) => state.carrito);

  const total = carritoItems.reduce((acc, item) => {
    return acc + item.precioUnitario * item.cantidad;
  }, 0);

  const handleUpdateQuantity = (id, change) => {
    dispatch(updateQuantity({ id: id, change: change }));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };
  
  const handleClearCart = () => {
    dispatch(clearCart());
  };


  if (carritoItems.length === 0) {
    return (
      <div style={{ padding: '40px', textAlign: 'center', maxWidth: '600px', margin: '50px auto', backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <h2>Tu Carrito está Vacío 🛒</h2>
        <p>Añade algunos Pokémon desde la Tienda para empezar tu compra.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', maxWidth: '900px', margin: '0 auto', backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
      <h2>Resumen del Carrito ({carritoItems.length} ítems)</h2>

      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #ccc', backgroundColor: '#f5f5f5' }}>
            <th style={{ padding: '10px', textAlign: 'left' }}>Producto</th>
            <th style={{ padding: '10px' }}>Precio Unitario</th>
            <th style={{ padding: '10px' }}>Cantidad</th>
            <th style={{ padding: '10px' }}>Subtotal</th>
            <th style={{ padding: '10px' }}>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {carritoItems.map((item) => (
            <tr key={item.pokemon.id} style={{ borderBottom: '1px solid #eee' }}>
              
              <td style={{ padding: '10px', display: 'flex', alignItems: 'center' }}>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${item.pokemon.id}.svg`} alt={item.pokemon.name} style={{ width: '40px', marginRight: '10px' }} />
                {item.pokemon.name.toUpperCase()}
              </td>

              <td style={{ padding: '10px', textAlign: 'center' }}>
                ₽ {item.precioUnitario}.00
              </td>

              <td style={{ padding: '10px', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }}>
                <button 
                  onClick={() => handleUpdateQuantity(item.pokemon.id, -1)} 
                  style={{ padding: '5px 10px', backgroundColor: '#ddd', border: 'none', cursor: 'pointer', borderRadius: '3px' }}>
                  –
                </button>
                <span>{item.cantidad}</span>
                <button 
                  onClick={() => handleUpdateQuantity(item.pokemon.id, 1)} 
                  style={{ padding: '5px 10px', backgroundColor: '#ddd', border: 'none', cursor: 'pointer', borderRadius: '3px' }}>
                  +
                </button>
              </td>

              <td style={{ padding: '10px', textAlign: 'center', fontWeight: 'bold' }}>
                ₽ {item.precioUnitario * item.cantidad}.00
              </td>

              <td style={{ padding: '10px', textAlign: 'center' }}>
                <button 
                  onClick={() => handleRemoveItem(item.pokemon.id)}
                  style={{ color: 'red', border: 'none', background: 'none', cursor: 'pointer', fontSize: '1.2em' }}>
                  🗑️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginTop: '20px', textAlign: 'right', borderTop: '2px solid #ccc', paddingTop: '15px' }}>
        <h3 style={{ fontSize: '1.5em' }}>Total: ₽ {total}.00</h3>
        <button 
          onClick={handleClearCart} 
          style={{ padding: '10px 20px', backgroundColor: '#e74c3c', color: 'white', border: 'none', cursor: 'pointer', borderRadius: '5px', marginRight: '10px' }}>
          Vaciar Carrito
        </button>
        <button 
          style={{ padding: '10px 20px', backgroundColor: '#2ecc71', color: 'white', border: 'none', cursor: 'pointer', borderRadius: '5px' }}>
          Finalizar Compra
        </button>
      </div>
    </div>
  );
}

export default Carrito;
import React, { useState } from "react";

const ShopComponent = () => {
  const [cart, setCart] = useState([
    { id: 1, title: "Футболка", count: 1 },
    { id: 2, title: "Кепка", count: 2 },
  ]);
  const clearCart = () => {
    setCart([]);
  };
  const addItem = (id) => {
    setCart((arr) =>
      arr.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item,
      ),
    );
  };
  const deleteItem = (id) => {
    setCart((arr) => arr.filter((item) => item.id !== id));
  };
  return (
    <div className="shop">
      <h3>Корзина товаров:</h3>
      {cart.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <div className="list-task">
              <p>
                {item.title} (Кол-во: {item.count})
              </p>
              <div className="btn-wrap">
                <button onClick={() => addItem(item.id)}>+1</button>
                <button onClick={() => deleteItem(item.id)}>Удалить</button>
              </div>
            </div>
          ))}
          <button onClick={clearCart}>Очистить корзину</button>
        </ul>
      )}
    </div>
  );
};

export default ShopComponent;

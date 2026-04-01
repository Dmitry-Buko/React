import { memo } from "react";

const CartItem = ({ cart, setClearCart, setAddItem, setDeleteItem }) => {
  console.log('CartItem render');
  
  return (
    <div className="shop">
      <h3>Корзина товаров:</h3>
      {cart.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <div className="list-task" key={item.id}>
              <p>
                {item.title} (Кол-во: {item.count})
              </p>
              <div className="btn-wrap">
                <button onClick={() => setAddItem(item.id)}>+1</button>
                <button onClick={() => setDeleteItem(item.id)}>Удалить</button>
              </div>
            </div>
          ))}
          <button onClick={setClearCart}>Очистить корзину</button>
        </ul>
      )}
    </div>
  );
};

export default memo(CartItem);

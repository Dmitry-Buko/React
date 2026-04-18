import React from 'react';
import { useOptimistic } from 'react'; // Учти, что этот хук находится в экспериментальной версии React

function LikeButton() {
  // Инициализируем оптимистичное состояние лайков как 0
  const [likes, updateLikes] = useOptimistic(0, (state, action) => {
    switch (action.type) {
      case 'increment':
        return state + 1;
      case 'rollback':
        return action.payload; // возвращаем предыдущее значение
      default:
        return state;
    }
  });

  const handleLike = () => {
    const previousLikes = likes; // сохраняем текущее значение для возможного отката
    // Оптимистично увеличиваем лайки
    updateLikes({ type: 'increment' });

    // Имитация запроса к серверу
    fakeServerRequest()
      .then(() => {
        // Запрос успешен – оставляем обновлённое состояние
      })
      .catch(() => {
        // В случае ошибки откатываем состояние к предыдущему значению
        updateLikes({ type: 'rollback', payload: previousLikes });
      });
  };

  return (
    <div>
      <button onClick={handleLike}>👍 Like</button>
      <span> {likes} </span>
    </div>
  );
}

// Функция для имитации запроса к серверу
function fakeServerRequest() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Случайный исход: 50% шанс успеха или ошибки
      Math.random() > 0.5 ? resolve() : reject();
    }, 1000);
  });
}

export default LikeButton;
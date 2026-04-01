import { memo } from "react";

const UserInfo = ({ user, setChangeName, setChangeAge, setChangeActive }) => {
  console.log('UserInfo render');
  
  return (
    <div className="user">
      <h3>Профиль пользователя</h3>
      <p>Имя: {user.name}</p>
      <p>Возраст: {user.age}</p>
      <p>Активность: {user.isActive ? "да" : "нет"}</p>
      <div className="btn-flex">
        <button onClick={setChangeName}>Сменить имя</button>
        <button onClick={setChangeAge}>Увеличить возраст</button>
        <button onClick={setChangeActive}>Переключить активность</button>
      </div>
    </div>
  );
};

export default memo(UserInfo);

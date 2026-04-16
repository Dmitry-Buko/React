import {} from "react";
import { useParams, useNavigate } from "react-router";

const students = [
  { id: 1, name: "Dima", age: 29 },
  { id: 2, name: "Masha", age: 18 },
  { id: 3, name: "Masha", age: 30 },
];

const User = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const result = students.find((item) => item.id == id);

  const handleClick = () => {
    console.log("Redirect");
    navigate("/home");
  };
  return (
    <div>
      <p>
        {result.name} {result.age}, модуль - React
      </p>
      <button onClick={handleClick}>ДОМОЙ</button>
    </div>
  );
};

export default User;

import { useNavigate } from "react-router";

const MyComponent = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/about");
  };
  return (
    <>
    <button onClick={handleClick}>Click</button>
      <p>MyComponent</p>
    </>
  );
};

export default MyComponent;

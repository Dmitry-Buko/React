export const ShowArray = ({ arr }) => {
  return (
    <div>
      <p>List</p>
      <ul>
        {arr.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

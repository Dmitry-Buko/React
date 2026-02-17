export const ShowObject = (prop) => {
  return (<div>
    <p>User</p>
    <p>Name: {prop.user.name}</p>
    <p>Age: {prop.user.age}</p>
    <p>City: {prop.user.city}</p>
  </div>)
};
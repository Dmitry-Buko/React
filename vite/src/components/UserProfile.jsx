import { useParams } from 'react-router';


const students = [
  {id: 1, name: 'Dima', age: 29},
  {id: 2, name: 'Masha', age: 29},
  {id: 3, name: 'Mira', age: 1},
]


const UserProfile = () => {
  const {id} = useParams();
  const student = students.find(item => item.id === +id)
  return (
    <div>
      <h1>Профиль пользователя: {student.name}</h1>
    </div>
  );
};

export default UserProfile
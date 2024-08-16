import users from './mock/users';

type user = {
  id: number;
  name: string;
  age: number;
  isActive: boolean;
}

function transformData(users: user[]): { id: number, name: string }[] {
  return users
    .filter(user => 
    ['id', 'name', 'age', 'isActive'].every(prop => prop in user)
    )
    .filter(user => user.isActive)
    .map(({ id, name }) => ({ id, name }))
    .sort((userA, userB) => userA.name.localeCompare(userB.name));
}

const newList = transformData(users);
console.log(newList);
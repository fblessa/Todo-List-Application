import api from './services/axios';

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

async function fetchUserData() {
  try {
    const { data } = await api.get('/users');
    const filteredUsers = data.filter((user: User) => user.username.charAt(0) === 'C');
    if (filteredUsers.length > 0) {
      return filteredUsers;
    } return 'No users found';
  } catch (error) {
    console.error('Failed to fetch user data:', error.message);
  }
}

const filteredUsers = await fetchUserData();
console.log(filteredUsers);

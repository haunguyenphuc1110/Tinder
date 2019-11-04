import axios from 'axios';

export const getRandomUser = () => {
  return axios.get('https://randomuser.me/api/0.4/?randomapi')
    .then(response => response.data)
    .catch((error) => {
      return error;
    });
}
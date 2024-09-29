import axios from 'axios';

// Fetch GitHub user data by username
export const fetchUserData = async (username) => {
  const url = `https://api.github.com/users/${username}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching user data');
  }
};

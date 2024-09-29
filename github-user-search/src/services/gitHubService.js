import axios from 'axios';

// Function to fetch user data with pagination and advanced search criteria
export const fetchAdvancedUserData = async (username, location, minRepos, page = 1) => {
  try {
    // Build the query string with advanced filters
    let query = `q=${username ? `user:${username}` : ''}`;
    if (location) {
      query += `+location:${location}`;
    }
    if (minRepos) {
      query += `+repos:>${minRepos}`;
    }

    // Append pagination to the query string
    query += `&page=${page}`;

    // API call using Axios
    const response = await axios.get(`https://api.github.com/search/users?${query}`);
    return response.data;
  } catch (error) {
    throw error;  // Re-throw error for the UI to handle
  }
};

import axios from 'axios';

// Access the API key from the environment variable
const apiKey = process.env.VITE_GITHUB_API_KEY;

// Function to search for a GitHub user
export const searchGitHubUser = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`, {
    headers: {
      Authorization: `token ${apiKey}`, // Pass the API key here
    },
  });

  return response.data; // Return the user data
};

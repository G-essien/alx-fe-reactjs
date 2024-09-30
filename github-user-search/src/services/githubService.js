import axios from 'axios';

// Existing fetchUserData function (unchanged)
export const fetchUserData = async (username) => {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
};

// New advanced search function
export const fetchAdvancedUserData = async (username, location, minRepos) => {
    const query = `${username} location:${location} repos:>=${minRepos}`;
    const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
    return response.data.items;  // Returns an array of user objects
};

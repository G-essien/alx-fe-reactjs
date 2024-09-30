import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);    // Set loading to true while fetching data
    setError('');        // Clear any previous errors
    setUserData(null);   // Clear previous user data

    try {
      const data = await fetchUserData(searchTerm);
      setUserData(data); // Set user data when API call is successful
    } catch (error) {
      setError("Looks like we cant find the user");  // Handle error state
    } finally {
      setLoading(false);  // Stop loading after the API call
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSearch} className="mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search GitHub User"
          className="p-2 border border-gray-300 rounded-md"
        />
        <button type="submit" className="p-2 ml-2 bg-blue-500 text-white rounded-md">
          Search
        </button>
      </form>

      {/* Loading State */}
      {loading && <p>Loading...</p>}

      {/* Error State */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Success State: Display user data */}
      {userData && (
        <div className="flex flex-col items-center p-4 bg-white shadow-md rounded-md">
          <img src={userData.avatar_url} alt={userData.login} className="w-24 h-24 rounded-full mb-4" />
          <h2 className="text-xl font-semibold">{userData.name}</h2>
          <p>Username: {userData.login}</p>
          <p>Location: {userData.location || 'N/A'}</p>
          <p>Public Repos: {userData.public_repos}</p>
          <a
            href={userData.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline mt-2"
          >
            View Profile on GitHub
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;

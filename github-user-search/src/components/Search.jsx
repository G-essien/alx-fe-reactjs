import { useState } from 'react';
import { fetchAdvancedUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);  // Added page state for pagination

  // Improved submit handler with pagination reset
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setUserData(null);
    setPage(1); // Reset to first page on new search

    try {
      const data = await fetchAdvancedUserData(username, location, minRepos, 1);  // Start from page 1
      setUserData(data);
    } catch (err) {
      setError('Looks like we can’t find users matching your criteria');
    } finally {
      setLoading(false);
    }
  };

  // Load more results (next page)
  const handleLoadMore = async () => {
    setLoading(true);
    try {
      const data = await fetchAdvancedUserData(username, location, minRepos, page + 1); // Increment page number
      setUserData({
        ...userData,
        items: [...userData.items, ...data.items],  // Append new results
      });
      setPage(page + 1);  // Update page number
    } catch (err) {
      setError('Failed to load more results.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-8 p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Minimum Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {userData && userData.items && (
        <div className="mt-8 space-y-4">
          {userData.items.map((user) => (
            <div key={user.id} className="p-4 border rounded">
              <img src={user.avatar_url} alt={`${user.login} avatar`} className="w-16 h-16 rounded-full" />
              <p>{user.login}</p>
              <p>{user.location}</p>
              <p>Repos: {user.public_repos}</p>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                Visit GitHub Profile
              </a>
            </div>
          ))}
          <button onClick={handleLoadMore} className="w-full p-2 bg-green-500 text-white rounded">
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Search;

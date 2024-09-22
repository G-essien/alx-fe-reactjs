import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault(); // Prevents form refresh
    setLoading(true);
    setError('');
    setUserData(null);

    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError('Looks like we can\'t find the user.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-component p-6">
      <form onSubmit={handleSearch} className="flex flex-col items-center">
        <input
          type="text"
          className="p-2 mb-4 border rounded w-64"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-gray-500">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      {userData && (
        <div className="user-info mt-8 p-4 border rounded shadow-lg">
          <img
            src={userData.avatar_url}
            alt={userData.login}
            className="w-20 h-20 rounded-full"
          />
          <h2 className="text-xl font-semibold">{userData.name}</h2>
          <p>
            <a
              href={userData.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              Visit GitHub Profile
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default Search;

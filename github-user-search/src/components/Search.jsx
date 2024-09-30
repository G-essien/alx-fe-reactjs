import { useState } from 'react';
import { fetchUserData, fetchAdvancedUserData } from '../services/githubService';

const Search = () => {
    const [username, setUsername] = useState('');
    const [location, setLocation] = useState('');
    const [minRepos, setMinRepos] = useState('');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const users = await fetchAdvancedUserData(username, location, minRepos);
            setUserData(users);
        } catch (err) {
            setError("Looks like we can't find the user.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-4">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <input
                    type="text"
                    placeholder="GitHub Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="border p-2 rounded"
                    required
                />
                <input
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="border p-2 rounded"
                />
                <input
                    type="number"
                    placeholder="Minimum Repositories"
                    value={minRepos}
                    onChange={(e) => setMinRepos(e.target.value)}
                    className="border p-2 rounded"
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                    Search
                </button>
            </form>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {userData && userData.map((user) => (
                <div key={user.id} className="mt-4 border p-4 rounded">
                    <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
                    <h3 className="text-lg">{user.login}</h3>
                    <p>Location: {user.location || 'N/A'}</p>
                    <p>Repositories: {user.public_repos}</p>
                    <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600">
                        View Profile
                    </a>
                </div>
            ))}
        </div>
    );
};

export default Search;

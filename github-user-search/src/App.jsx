import { useState } from 'react';
import Search from './components/Search';

const App = () => {
  const [userData, setUserData] = useState(null);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl mb-4">GitHub User Search</h1>

      {/* Search Component */}
      <Search setUserData={setUserData} />

      {/* Display user data if available */}
      {userData && (
        <div className="user-info mt-8">
          <img
            src={userData.avatar_url}
            alt="User Avatar"
            className="rounded-full w-24 h-24"
          />
          <h2 className="text-xl mt-2">{userData.login}</h2>
          <p>
            <a
              href={userData.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              View Profile
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default App;

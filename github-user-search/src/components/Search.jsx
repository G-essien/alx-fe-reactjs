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

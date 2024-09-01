// src/components/Profile.jsx
import { Link, Outlet } from 'react-router-dom';

const Profile = () => {
  return (
    <div>
      <h2>Profile</h2>
      <nav>
        <Link to="details">Profile Details</Link>
        <Link to="settings">Profile Settings</Link>
      </nav>
      <Outlet /> {/* Renders nested routes */}
    </div>
  );
};

export default Profile;

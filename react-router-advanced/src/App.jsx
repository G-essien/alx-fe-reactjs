// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import BlogPost from './components/BlogPost';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile/*" element={<ProtectedRoute />}>
          <Route index element={<Profile />} />
        </Route>
        <Route path="post/:postId" element={<BlogPost />} />
      </Routes>
    </Router>
  );
};

export default App;

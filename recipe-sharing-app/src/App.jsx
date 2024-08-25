// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

function App() {
  return (
    <Router>
      <div style={{ padding: '20px' }}>
        <h1>Recipe Sharing App</h1>
        <SearchBar />
        <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
          {/* Main Content */}
          <div style={{ flex: 2 }}>
            <Routes>
              <Route path="/" element={<RecipeList />} />
              <Route path="/add" element={<AddRecipeForm />} />
              <Route path="/recipe/:id" element={<RecipeDetails />} />
            </Routes>
          </div>
          
          {/* Sidebar */}
          <div style={{ flex: 1 }}>
            <FavoritesList />
            <RecommendationsList />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

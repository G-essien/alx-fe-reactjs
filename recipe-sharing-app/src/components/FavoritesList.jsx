// src/components/FavoritesList.jsx
import { Link } from 'react-router-dom';
import useRecipeStore from '../store/recipeStore';

const FavoritesList = () => {
  const favorites = useRecipeStore((state) => state.favorites);
  const recipes = useRecipeStore((state) => state.recipes);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  // Retrieve favorite recipes based on IDs
  const favoriteRecipes = favorites.map((id) =>
    recipes.find((recipe) => recipe.id === id)
  ).filter(Boolean); // Filter out undefined if any ID doesn't match

  if (favoriteRecipes.length === 0) {
    return (
      <div>
        <h2>My Favorites</h2>
        <p>You have no favorite recipes yet.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>My Favorites</h2>
      {favoriteRecipes.map((recipe) => (
        <div key={recipe.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
          <h3>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p>{recipe.description}</p>
          <button onClick={() => removeFavorite(recipe.id)}>Remove from Favorites</button>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;

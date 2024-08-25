// src/components/RecipeList.jsx
import { Link } from 'react-router-dom';
import useRecipeStore from '../store/recipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  if (filteredRecipes.length === 0) {
    return <div>No recipes found.</div>;
  }

  return (
    <div>
      {filteredRecipes.map((recipe) => {
        const isFavorite = favorites.includes(recipe.id);

        const handleFavoriteToggle = () => {
          if (isFavorite) {
            removeFavorite(recipe.id);
          } else {
            addFavorite(recipe.id);
          }
        };

        return (
          <div key={recipe.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
            <h3>
              <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
            </h3>
            <p>{recipe.description}</p>
            <button onClick={handleFavoriteToggle}>
              {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default RecipeList;

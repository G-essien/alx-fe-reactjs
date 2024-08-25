// src/components/RecommendationsList.jsx
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from '../store/recipeStore';

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore((state) => state.generateRecommendations);

  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  if (recommendations.length === 0) {
    return (
      <div>
        <h2>Recommendations</h2>
        <p>No recommendations available at this time.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Recommended for You</h2>
      {recommendations.map((recipe) => (
        <div key={recipe.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
          <h3>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecommendationsList;

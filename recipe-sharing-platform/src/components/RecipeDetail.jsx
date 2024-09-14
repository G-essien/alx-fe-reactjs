import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import data from '../data.json'; 

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const selectedRecipe = data.find(r => r.id === parseInt(id));
    setRecipe(selectedRecipe);
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold mb-6">{recipe.title}</h1>
        <img src={recipe.image} alt={recipe.title} className="w-full h-60 object-cover rounded-lg mb-6" />
        
        <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
        <ul className="list-disc pl-5 mb-6">
          {recipe.ingredients && recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="text-gray-700">{ingredient}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
        <ol className="list-decimal pl-5 space-y-4 text-gray-700">
          {recipe.instructions && recipe.instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetail;

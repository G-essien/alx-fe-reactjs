import { useState } from 'react';

const AddRecipeForm = () => {
  // State for form fields
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');

  // State for error messages
  const [errors, setErrors] = useState({});

  // Validation logic
  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    if (!title.trim()) {
      tempErrors.title = 'Title is required';
      isValid = false;
    }

    if (!ingredients.trim()) {
      tempErrors.ingredients = 'At least one ingredient is required';
      isValid = false;
    } else if (ingredients.split(',').length < 2) {
      tempErrors.ingredients = 'Please list at least two ingredients';
      isValid = false;
    }

    if (!steps.trim()) {
      tempErrors.steps = 'Preparation steps are required';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (isValid) {
      console.log('Form submitted:', { title, ingredients, steps });

      // Clear form
      setTitle('');
      setIngredients('');
      setSteps('');
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Add New Recipe</h2>

      {/* Recipe Title */}
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">
          Recipe Title
        </label>
        <input
          type="text"
          id="title"
          className={`w-full p-2 border rounded ${
            errors.title ? 'border-red-500' : 'border-gray-300'
          }`}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
      </div>

      {/* Ingredients */}
      <div className="mb-4">
        <label htmlFor="ingredients" className="block text-gray-700 font-semibold mb-2">
          Ingredients (comma-separated)
        </label>
        <textarea
          id="ingredients"
          rows="4"
          className={`w-full p-2 border rounded ${
            errors.ingredients ? 'border-red-500' : 'border-gray-300'
          }`}
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        ></textarea>
        {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
      </div>

      {/* Preparation Steps */}
      <div className="mb-4">
        <label htmlFor="steps" className="block text-gray-700 font-semibold mb-2">
          Preparation Steps
        </label>
        <textarea
          id="steps"
          rows="6"
          className={`w-full p-2 border rounded ${
            errors.steps ? 'border-red-500' : 'border-gray-300'
          }`}
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
        ></textarea>
        {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
      >
        Submit Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;

import { useState } from 'react';

const AddRecipeForm = () => {
  const [formValues, setFormValues] = useState({
    title: '',
    ingredients: '',
    steps: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = () => {
    let validationErrors = {};
    if (!formValues.title) validationErrors.title = 'Title is required';
    if (!formValues.ingredients || formValues.ingredients.split(',').length < 2)
      validationErrors.ingredients = 'At least 2 ingredients required';
    if (!formValues.steps) validationErrors.steps = 'Steps are required';
    return validationErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // You can submit the form here
      console.log('Form Submitted:', formValues);
      setFormValues({ title: '', ingredients: '', steps: '' });
      setErrors({});
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Add New Recipe</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2 text-gray-700">Recipe Title</label>
          <input
            type="text"
            name="title"
            value={formValues.title}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />
          {errors.title && <p className="text-red-500 mt-2">{errors.title}</p>}
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-gray-700">Ingredients (comma-separated)</label>
          <textarea
            name="ingredients"
            value={formValues.ingredients}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />
          {errors.ingredients && <p className="text-red-500 mt-2">{errors.ingredients}</p>}
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-gray-700">Preparation Steps</label>
          <textarea
            name="steps"
            value={formValues.steps}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />
          {errors.steps && <p className="text-red-500 mt-2">{errors.steps}</p>}
        </div>
        <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition">
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;

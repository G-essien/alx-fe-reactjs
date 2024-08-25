// src/store/recipeStore.js
import create from 'zustand';

const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  
  // Favorites state and actions
  favorites: [],
  addFavorite: (recipeId) => {
    const { favorites } = get();
    if (!favorites.includes(recipeId)) {
      set({ favorites: [...favorites, recipeId] });
    }
  },
  removeFavorite: (recipeId) => {
    const { favorites } = get();
    set({ favorites: favorites.filter((id) => id !== recipeId) });
  },
  
  addFavorite: (recipeId) => {
  const { favorites } = get();
  if (!favorites.includes(recipeId)) {
    set({ favorites: [...favorites, recipeId] });
  }
},

  // Recommendations state and actions
  recommendations: [],
  generateRecommendations: () => {
    const { recipes, favorites } = get();
    // Mock implementation: Recommend recipes that share ingredients with favorites
    // For simplicity, this example randomly selects recipes not in favorites
    const recommended = recipes.filter(
      (recipe) => !favorites.includes(recipe.id)
    ).sort(() => 0.5 - Math.random()).slice(0, 5); // Select 5 random recipes
    set({ recommendations: recommended });
  },

  // Existing search and filter actions
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      ),
    }));
  },
  addRecipe: (newRecipe) => set((state) => ({
    recipes: [...state.recipes, newRecipe],
    filteredRecipes: [...state.filteredRecipes, newRecipe].filter((recipe) =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    ),
  })),
}));

export default useRecipeStore;

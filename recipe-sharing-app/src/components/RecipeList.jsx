import useRecipeStore from "./recipeStore"
import DeleteRecipeButton from "./DeleteRecipeButton";
// import RecipeDetails from "./RecipeDetails";
import { useState } from "react";
import EditRecipeForm from "./EditRecipeForm";

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const [editingRecipe, setEditingRecipe] = useState(null);

  const handleEdit = (recipe) => {
    setEditingRecipe(recipe);
  }

  const handleEditFormClose = () => {
    setEditingRecipe(null);
  }

  return (
    <div>
      <ul>
        {recipes.map(recipe => (
            <div key={recipe.id}>
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
              <button onClick={() => handleEdit(recipe)}>Edit</button>
              <DeleteRecipeButton recipeId={recipe.id} />
            </div>
        ))}
        {editingRecipe && (
          <EditRecipeForm recipe={editingRecipe} onClose={handleEditFormClose}/>
        )}
      </ul>
    </div>
  );
};

export default RecipeList;
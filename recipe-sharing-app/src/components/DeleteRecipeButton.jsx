import React, {useState} from 'react'
import useRecipeStore from '../store/recipeStore';

const DeleteRecipeButton = () => {
    const { recipes, deleteRecipe} = useRecipeStore();

    return (
      <div>
          {recipes.map(recipe => (
            <div key={recipe.id}>
              <button
                onClick={() => deleteRecipe(recipe.id)}
              >
                Delete
              </button>
            </div>
          ))}
      </div>
    );
}

export default DeleteRecipeButton;
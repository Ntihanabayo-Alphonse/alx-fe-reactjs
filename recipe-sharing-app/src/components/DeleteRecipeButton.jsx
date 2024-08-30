import React, {useState} from 'react'
import useRecipeStore from './recipeStore';

const DeleteRecipeButton = ({recipeId}) => {
    const deleteRecipe = useRecipeStore(state => state.deleteRecipe);

    const handleDelete = () => {
      deleteRecipe(recipeId);
    }

    return (
      <div>
              <button onClick={handleDelete}>Delete</button>
      </div>
    );
}

export default DeleteRecipeButton;
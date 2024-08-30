import React, {useState} from 'react'
import useRecipeStore from './recipeStore';

const EditRecipeForm = ({recipe, onClose}) => {

    const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedRecipe = {
      ...recipe,
      title,
      description,
    };

    if (recipe) {
      updateRecipe(updatedRecipe);
    }

    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
      </div>
      <div>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          required
        />
      </div>
      <button type="submit">Update Recipe</button>
      <button type="button" onClick={onClose}>Cancel</button>
    </form>
  );
}

export default EditRecipeForm;
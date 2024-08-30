import './App.css'
import React from 'react'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeDetails from './components/RecipeDetails'
import RecipeList from './components/RecipeList'

function App() {

  return (
    <>
      <AddRecipeForm />
      <RecipeList />
      {/* <RecipeDetails /> */}
    </>
  )
}

export default App

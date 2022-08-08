import React from 'react';
import './recipe.css';

function Recipe() {
  const testRecipe = {
    recipeName: "Cole's Roasted Salsa",
    description: 'A delicious spicy salsa made with roasted tomatoes and serrano peppers',
    servings: 10,
    prepTime: '20 minutes',
    cookTime: '10 minutes',
    sproutyPie: false,
    lollysPantry: true,
  };
  return (

    <div className="recipe">
      <hr />
      <header className="recipe-header">
        <h1>{testRecipe.recipeName}</h1>
      </header>
      <section>
        <p>{testRecipe.description}</p>
        <p>
          Servings:&nbsp;
          {testRecipe.servings}
        </p>
        <p>
          Prep Time:&nbsp;
          {testRecipe.prepTime}
        </p>
        <p>
          Cooking Time:&nbsp;
          {testRecipe.cookTime}
        </p>
        {testRecipe.sproutyPie ? <p>Official Sprouty Pie recipe</p> : ''}
        {testRecipe.lollysPantry ? <p>Official Lolly&apos;s Pantry recipe</p> : ''}
      </section>
    </div>
  );
}

export default Recipe;

/* eslint-disable react/prop-types */
import { recipes } from "./data.js";

// Challenge 3 of 4: Extracting a list item component
// This RecipeList component contains two nested map calls. To simplify it, extract a Recipe component from it which will accept id, name, and ingredients props. Where do you place the outer key and why?

//The key should be always withing the context of the surrounding array.
export function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map((recipe) => (
        <Recipe {...recipe} key={`recipe-${recipe.id}`} />
      ))}
    </div>
  );
}

function Recipe({ id, name, ingredients }) {
  return (
    <div id={id}>
      <h2>{name}</h2>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}

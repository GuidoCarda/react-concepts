/* eslint-disable react/prop-types */
import { recipes } from "./data";

// Challenge 2 of 4: Nested lists in one component
// Make a list of recipes from this array! For each recipe in the array, display its name as an <h2> and list its ingredients in a <ul>.

//First draft
// export default function RecipeList() {
//   return (
//     <div>
//       <h1>Recipes</h1>
//       {recipes.map((recipe) => (
//         <article key={recipe.id}>
//           <h2>{recipe.name}</h2>
//           <ul>
//             {recipe.ingredients.map((ingredient) => (
//               <li key={ingredient}>{ingredient}</li>
//             ))}
//           </ul>
//         </article>
//       ))}
//     </div>
//   );
// }

//Second draft
export function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map((recipe) => (
        <Recipe recipe={recipe} key={recipe.id} />
      ))}
    </div>
  );
}

function Recipe({ recipe }) {
  const { name, ingredients } = recipe;

  const ingredientsListItems = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  return (
    <article>
      <h2>{name}</h2>
      <ul>{ingredientsListItems}</ul>
    </article>
  );
}

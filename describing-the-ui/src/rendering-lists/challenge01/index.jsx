/* eslint-disable react/prop-types */
import { people } from "./data.js";
import { getImageUrl } from "./utils.js";

// Challenge 1 of 4: Splitting a list in two
// This example shows a list of all people.

// Change it to show two separate lists one after another: Chemists and Everyone Else. Like previously, you can determine whether a person is a chemist by checking if person.profession === 'chemist'.

//if people never changes, we can extract the logic of filtering outside of react. Because
// react only cares that you give it an array of jsx nodes, it doesn't care how
// you produce it.

//The other way is to use .filter() but in that case you will be iterating trough the hole array. In this case the computation isn't expensive, because we are only checking by one property, but the condition could be larger and by consecuense it's computation more expensive
const chemists = [];
const everyoneElse = [];

people.forEach((person) => {
  if (person.profession === "chemist") {
    return chemists.push(person);
  }
  everyoneElse.push(person);
});

export function List() {
  return (
    <article>
      <h1>Scientists</h1>
      <ListSection title="Chemists" people={chemists} />
      <ListSection title="Everyone else" people={everyoneElse} />
    </article>
  );
}

function ListSection({ title, people }) {
  return (
    <>
      <h2>{title}</h2>
      <ul>
        {people.map((person) => (
          <ListItem person={person} key={person.id} />
        ))}
      </ul>
    </>
  );
}

function ListItem({ person }) {
  return (
    <li>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  );
}

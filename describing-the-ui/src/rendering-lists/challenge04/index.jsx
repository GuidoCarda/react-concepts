// Challenge 4 of 4: List with a separator
// This example renders a famous haiku by Katsushika Hokusai, with each line wrapped in a <p> tag. Your job is to insert an <hr /> separator between each paragraph. Your resulting structure should look like this:

// <article>
//   <p>I write, erase, rewrite</p>
//   <hr />
//   <p>Erase again, and then</p>
//   <hr />
//   <p>A poppy blooms.</p>
// </article>
// A haiku only contains three lines, but your solution should work with any number of lines. Note that <hr /> elements only appear between the <p> elements, not in the beginning or the end!

import { Fragment } from "react";

const poem = {
  lines: [
    "I write, erase, rewrite",
    "Erase again, and then",
    "A poppy blooms.",
    "A poppy blooms.",
    "A poppy blooms.",
    "A poppy blooms.",
  ],
};

// First solution. it works but it adds unnecesary markup
// export function Poem() {
//   const poemLines = poem.lines.map((line, index) => {
//     if (index + 1 === poem.lines.length) {
//       return <p key={index}>{line}</p>;
//     }
//     return (
//       <div key={index}>
//         <p>{line}</p>
//         <hr />
//       </div>
//     );
//   });

//   return <article>{poemLines}</article>;
// }

// Second solution. It also works, but I'm missing the key
// export function Poem() {
//   return (
//     <article>
//       {poem.lines.map((line, index) => (
//         <>
//           <p key={index}>{line}</p>
//           {index + 1 !== poem.lines.length && <hr />}
//         </>
//       ))}
//     </article>
//   );
// }

//Third solution. Now we solved the key problem
// export function Poem() {
//   return (
//     <article>
//       {poem.lines.map((line, index) => (
//         <PoemLine
//           key={`line-${index}`}
//           line={line}
//           isLastLine={index + 1 === poem.lines.length}
//         />
//       ))}
//     </article>
//   );
// }

// function PoemLine({ line, isLastLine }) {
//   return (
//     <>
//       <p>{line}</p>
//       {isLastLine || <hr />}
//     </>
//   );
// }

//Fourt solution. Using a fragment with a key. You can set a key to a fragment using the React.Fragment syntax. Based on hint of using a fragment with a key
// export function Poem() {
//   return (
//     <article>
//       {poem.lines.map((line, index) => (
//         <React.Fragment key={index}>
//           <p>{line}</p>
//           {index + 1 === poem.lines.length || <hr />}
//         </React.Fragment>
//       ))}
//     </article>
//   );
// }

// fifth solution. Using manual loop. It works but doesn't feel right .

// const poemLines = [];

// poem.lines.forEach((line, idx) => {
//   if (idx < poem.lines.length - 1) {
//     return poemLines.push(
//       <React.Fragment key={idx}>
//         <p>{line}</p>
//         <hr />
//       </React.Fragment>
//     );
//   }
//   poemLines.push(<p key={idx}>{line}</p>);
// });

// console.log(poemLines);

// export function Poem() {
//   return <article>{poemLines}</article>;
// }

// last solution. After looking at react.dev solution. Sheesh

export function Poem() {
  const output = [];

  poem.lines.forEach((line, i) => {
    output.push(<hr key={`${i}-separator`} />);
    output.push(<p key={`${i}-line`}>{line}</p>);
  });

  // Remove the first <hr/>
  output.shift();

  return <article>{output}</article>;
}

export function Poem2() {
  return (
    <article>
      {poem.lines.map((line, i) => (
        <Fragment key={i}>
          {i > 0 && <hr />}
          <p>{line}</p>
        </Fragment>
      ))}
    </article>
  );
}

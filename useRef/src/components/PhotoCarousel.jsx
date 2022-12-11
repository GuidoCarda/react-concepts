import { useState, useRef } from "react";
import { flushSync } from "react-dom";

export default function PhotoCarousel() {
  const [index, setIndex] = useState(0);
  const selectedRef = useRef(null);
  return (
    <div className="photo-carousel-container">
      <nav className="photo-carousel-nav">
        <button
          onClick={() => {
            flushSync(() => {
              if (index < catList.length - 1) {
                setIndex(index + 1);
              } else {
                setIndex(0);
              }
            });
            selectedRef.current.scrollIntoView({
              behaviour: "smooth",
              block: "nearest",
              inline: "center",
            });
          }}
        >
          Next
        </button>
      </nav>
      <div>
        <ul className="photo-carousel">
          {catList.map((cat, i) => (
            <li key={cat.id} ref={index === i ? selectedRef : null}>
              <img
                className={index === i ? "active" : ""}
                src={cat.imageUrl}
                alt={"Cat #" + cat.id}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const catList = [];
for (let i = 0; i < 10; i++) {
  catList.push({
    id: i,
    imageUrl: "https://placekitten.com/250/200?image=" + i,
  });
}

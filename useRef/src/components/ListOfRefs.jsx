import React, { useRef } from "react";

const boxes = ["red", "green", "black", "white", "purple", "red", "white"];

const ListOfRefs = () => {
  const itemsRef = useRef(null);

  function scrollToId(itemId) {
    const map = getMap();
    const node = map.get(itemId);

    node.scrollIntoView({
      behaviour: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  function getMap() {
    if (!itemsRef.current) {
      itemsRef.current = new Map();
    }
    return itemsRef.current;
  }

  return (
    <>
      <nav className="nav-buttons-list">
        {boxes.map((clr, idx) => (
          <button
            onClick={() => {
              scrollToId(idx);
            }}
            key={idx}
          >
            {clr}
          </button>
        ))}
      </nav>

      <ul className="box-list">
        {boxes.map((box, id) => (
          <li
            ref={(node) => {
              const map = getMap();
              if (node) {
                map.set(id, node);
              } else {
                map.delete(id);
              }
            }}
            key={id}
            className={`box ${box}`}
          >
            {box}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListOfRefs;

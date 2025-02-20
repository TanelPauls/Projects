//import { Fragment } from "react/jsx-runtime";

import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  //(item: string)=>void
  onSelectItem: (item: string) => void; // onClick
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //items = [];
  /*   if (items.length === 0)
    return (
      <>
        <h1>List</h1>
        <p>No item found</p>
      </>
    ); */
  const getMessage = () => {
    return items.length === 0 && <p>No item found</p>;
  };
  // event handler

  return (
    <>
      <h1>{heading}</h1>
      {getMessage()}
      <ul className="list-group">
        {
          items.map((item, index) => (
            <li
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={item}
              onClick={() => {
                setSelectedIndex(index);
                onSelectItem(item);
              }} //"Clicked on " + item, index)}
            >
              {item}
            </li>
          ))
          /* <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li> */
        }
      </ul>
    </>
  );
}

export default ListGroup;

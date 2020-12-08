import React, { useState } from "react";
import ToDoList from "./ToDoList";
import "./styles.css";
export default function App() {
  const [listItem, setListItem] = useState([]);
  const [duplistItem, setDupListItem] = useState([]);
  const [input, setinput] = useState("");
  const [searchinput, setSearchinput] = useState("");

  const handleDelete = (id) => {
    const filtervalue = listItem.filter((item, index) => index !== id);
    setListItem(filtervalue);
    setDupListItem(filtervalue);
    console.log(id);
  };

  const handleSearch = (event) => {
    setSearchinput(event.target.value);
    if (event.target.value.length === 0) {
      setListItem(duplistItem);
      return;
    }
    const filtervalue = duplistItem.filter((item) =>
      item.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setListItem(filtervalue);
  };
  const handleChange = (event) => {
    setinput(event.target.value);
    console.log("clicked");
  };

  const additem = () => {
    const addItem = [input, ...listItem];
    setListItem(addItem);
    setDupListItem(addItem);
    setinput("");
  };

  const handleEdit = (id, item) => {
    const copyItem = [...listItem];
    copyItem[id] = item;
    console.log(id + " " + item);
    setListItem(copyItem);
    setDupListItem(copyItem);
  };

  return (
    <div className="container ">
      <div className="header">
        <h1>ToDo-List</h1>
      </div>
      <div>
        <input
          type="input"
          placeholder="AddItem"
          value={input}
          onChange={handleChange}
        />
        <button onClick={additem}>
          <span>➕</span>
        </button>
        <div>
          <input
            type="input"
            placeholder="search"
            value={searchinput}
            onChange={handleSearch}
          />
        </div>
      </div>
      <br />
      <div className="list">
        <ol>
          {listItem.map((itemval, index) => {
            return (
              <ToDoList
                item={itemval}
                key={index}
                id={index}
                onDelete={handleDelete}
                onEdit={handleEdit}
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
}

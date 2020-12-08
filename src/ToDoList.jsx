import React, { useState } from "react";
const ToDoList = (props) => {
  const { item, onDelete, id, onEdit } = props;
  const [editvalue, seteditvalue] = useState("");
  const [editFiled, seteditFiled] = useState(false);
  const [saveFiled, setsaveFiled] = useState(false);
  if (item === "") return null;
  return (
    <>
      <div className="row">
        <li>{item}</li>
        <button onClick={() => onDelete(id)}>
          <span>Delete</span>
        </button>
        <button
          onClick={() => {
            seteditFiled(true);
          }}
        >
          <span>edit</span>
        </button>
      </div>
      <div className="edit">
        {editFiled ? (
          <>
            <input
              type="input"
              placeholder="editItem"
              onChange={(event) => {
                if (event.target.value.length >= 1) setsaveFiled(true);
                else setsaveFiled(false);
                seteditFiled(event.target.value);
              }}
            />
            <button
              onClick={() => {
                setsaveFiled(false);
                seteditFiled(false);
              }}
            >
              Cancle
            </button>
          </>
        ) : (
          ""
        )}
        {saveFiled ? (
          <button
            onClick={() => {
              onEdit(id, editFiled);
              seteditFiled("");
              seteditvalue(false);
              setsaveFiled(false);
            }}
          >
            save
          </button>
        ) : (
          ""
        )}
      </div>
      <br />
    </>
  );
};
export default ToDoList;

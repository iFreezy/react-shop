import React, { useState } from "react";
import Item from "./Item.js";
import uuid from "react-uuid";

export default function Shop() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  function NoItems() {
    if (items.length === 0) {
      return (
        <div>
          <p className="ui-title">Добавьте первый товар</p>
        </div>
      );
    }
    return null;
  }

  function handleDeleteAction(item) {
    setItems(items.filter((it) => it.id !== item.id));
  }

  function handleSubmitAction(e) {
    e.preventDefault();
    if (name.trim() !== "" && desc.trim() !== "") {
      const id = uuid();
      console.log(id);
      setItems([...items, { id, name, desc }]);
      setName("");
      setDesc("");
    } else {
      alert("Заполните все поля!");
    }
  }

  return (
    <>
      <form onSubmit={handleSubmitAction}>
        <div>
          <input
            id="name"
            type="text"
            placeholder="Название товара"
            className="ui-textfield"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            id="desc"
            type="text"
            placeholder="Описание товара"
            className="ui-textfield"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className="form-footer">
          <div className="validation"></div>
          <input type="submit" className="ui-button" value="Добавить" />
        </div>
      </form>
      <NoItems />

      <ul className="ui-list">
        {items.map((item) => {
          return (
            <li className="ui-item-list" key={item.id}>
              <Item info={item} />
              <button
                onClick={() => handleDeleteAction(item)}
                type="button"
                className="item-button"
                key={item.id}
              >
                Удалить
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

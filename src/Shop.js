import React, {useState} from "react";
import uuid from "react-uuid";
import AddItem from "./AddItem";
import ItemList from "./ItemList";

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
            setItems([...items, {id, name, desc}]);
            setName("");
            setDesc("");
        } else {
            alert("Заполните все поля!");
        }
    }

    return (
        <>
            <AddItem onFromSubmit={handleSubmitAction} name={name} desc={desc} onChangeName={setName} onChangeDesc={setDesc}/>
            <NoItems/>
            <ItemList items={items} onDeleteAction={handleDeleteAction}/>
        </>
    );
}

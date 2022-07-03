import React from "react";

export default function AddItem(props) {
    return <form onSubmit={props.onFromSubmit}>
        <div>
            <input
                id="name"
                type="text"
                placeholder="Название товара"
                className="ui-textfield"
                value={props.name}
                onChange={(e) => props.onChangeName(e.target.value)}
            />
        </div>
        <div>
            <input
                id="desc"
                type="text"
                placeholder="Описание товара"
                className="ui-textfield"
                value={props.desc}
                onChange={(e) => props.onChangeDesc(e.target.value)}
            />
        </div>
        <div className="form-footer">
            <div className="validation"></div>
            <input type="submit" className="ui-button" value="Добавить"/>
        </div>
    </form>
}

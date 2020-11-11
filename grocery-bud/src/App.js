import React, { useEffect, useState } from "react";
import Alert from "./Alert";
import List from "./List";
const getList = () => {
  const storageList = JSON.parse(localStorage.getItem("list"));
  if (storageList) {
    return storageList;
  } else {
    return [];
  }
};

function App() {
  const [name, setName] = useState("");
  const [alert, setAlert] = useState({ value: false, type: "", text: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [list, setList] = useState(getList());
  const [editID, setEditID] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "danger", "please enter value");
    } else if (name && isEditing) {
      const newList = list.map((data) => {
        if (data.id === editID) {
          return { ...data, item: name };
        }
        return data;
      });
      setList(newList);
      setName("");
      showAlert(true, "success", "item updated");
      setIsEditing(false);
    } else {
      const newList = [
        ...list,
        { id: new Date().getTime().toString(), item: name },
      ];
      showAlert(true, "success", "item added to the list");
      setList(newList);
      setName("");
    }
  };
  const deleteItem = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
    showAlert(true, "danger", "item deleted");
  };
  const editItem = (id) => {
    setIsEditing(true);
    setEditID(id);
    const editItem = list.find((item) => item.id === id);
    setName(editItem.item);
  };
  const clearItems = () => {
    setList([]);
    showAlert(true, "danger", "all items cleared");
  };
  const showAlert = (value = false, type = "", text = "") => {
    setAlert({ value, type, text });
  };
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);
  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.value && <Alert {...alert} />}

        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g. eggs"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <List
          showAlert={showAlert}
          list={list}
          clearItems={clearItems}
          deleteItem={deleteItem}
          editItem={editItem}
        />
      )}
    </section>
  );
}

export default App;

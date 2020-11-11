import React, { useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
const List = ({ list, clearItems, showAlert, deleteItem, editItem }) => {
  useEffect(() => {
    const alert = setTimeout(() => {
      showAlert();
    }, 3000);
    return () => clearTimeout(alert);
  }, [list]);
  return (
    <div className="grocery-container">
      <div className="grocery-list">
        {list.map((data) => {
          return (
            <article className="grocery-item" key={data.id}>
              <p className="title">{data.item}</p>
              <div className="btn-container">
                <button
                  type="button"
                  className="edit-btn"
                  onClick={() => editItem(data.id)}
                >
                  <FaEdit />
                </button>
                <button
                  type="button"
                  className="delete-btn"
                  onClick={() => deleteItem(data.id)}
                >
                  <FaTrash />
                </button>
              </div>
            </article>
          );
        })}
        <button className="clear-btn" onClick={clearItems}>
          clear items
        </button>
      </div>
    </div>
  );
};
export default List;

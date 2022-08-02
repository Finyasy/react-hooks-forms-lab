import React,{useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {
  const [newItem, setNewItem] = useState({
    id: null,
    name: "",
    category: "Produce"
  })

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNewItem({
      ...newItem,
      id: uuid(),
      [name]:value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault ();
    props.onItemFormSubmit(newItem)}

  return (
    <form className="NewItem" onSubmit={handleSubmit} >
      <label>
        Name:
        <input onChange={handleChange} type="text" name="name" />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleChange} value="Produce">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;

import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";


function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [list, setList] = useState(items);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event) {
    setSearch(event.target.value);
  }

  function updateList(newList){
    setList([...list,newList]);
  }

  const itemsToDisplay = list.filter((item) => {
    if (selectedCategory === "All" && search==="") return true;

    return item.category === selectedCategory || item.name.includes(search) > -1;
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemForSubmit={updateList}/>
      <Filter
        onCategoryChange={handleCategoryChange}
        onSearchChange={handleSearchChange}
        search={search}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

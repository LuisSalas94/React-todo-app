import React, { useState } from "react";
import "./App.css";
import AddItem from "./components/AddItem";
import Content from "./components/Content";

function App() {
	const [items, setItems] = useState([
		{
			id: 1,
			checked: true,
			item: "play videogames",
		},
		{
			id: 2,
			checked: false,
			item: "read a book",
		},
		{
			id: 3,
			checked: false,
			item: "walk the dog",
		},
	]);

	const [newItem, setNewItem] = useState("");

	const handleDelete = (id) => {
		const listItems = items.filter((item) => item.id !== id);
		setItems(listItems);
		localStorage.setItem("todolist", JSON.stringify(listItems));
	};

	const handleChange = (id) => {
		const listItems = items.map((item) =>
			item.id === id ? { ...item, checked: !item.checked } : item
		);
		setItems(listItems);
		localStorage.setItem("todolist", JSON.stringify(listItems));
	};

	const addNewItem = (item) => {
		const id = items.length ? items[items.length - 1].id + 1 : item;
		const newItem = { id, checked: false, item };
		const listItems = [...items, newItem];
		setItems(listItems);
		localStorage.setItem("todolist", JSON.stringify(listItems));
	};

	const handleNewItem = (e) => {
		e.preventDefault();
		addNewItem(newItem);
		setNewItem("");
	};

	return (
		<div className="App">
			<AddItem
				newItem={newItem}
				setNewItem={setNewItem}
				handleNewItem={handleNewItem}
			/>
			<Content
				items={items}
				handleDelete={handleDelete}
				handleChange={handleChange}
			/>
		</div>
	);
}

export default App;

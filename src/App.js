import React, { useState } from "react";
import "./App.css";
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

	const handleDelete = (id) => {
		const listItems = items.filter((item) => item.id !== id);
		setItems(listItems);
		localStorage.setItem("todolist", JSON.stringify(listItems));
	};

	return (
		<div className="App">
			<Content items={items} handleDelete={handleDelete} />
		</div>
	);
}

export default App;

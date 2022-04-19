import React from "react";
import { FaPlus } from "react-icons/fa";

const AddItem = ({ newItem, setNewItem, handleNewItem }) => {
	return (
		<form className="addForm" onSubmit={handleNewItem}>
			<label>Add a new todo</label>
			<input
				type="text"
				placeholder="Add a new todo"
				required
				value={newItem}
				onChange={(e) => setNewItem(e.target.value)}
			/>
			<button type="submit">
				<FaPlus />
			</button>
		</form>
	);
};

export default AddItem;

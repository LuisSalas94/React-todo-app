import React from "react";
import { FaTrashAlt } from "react-icons/fa";
const SingleItem = ({ item, handleDelete, handleChange }) => {
	return (
		<li className="item">
			<input
				type="checkbox"
				checked={item.checked}
				value={item}
				onChange={() => handleChange(item.id)}
			/>
			<label style={item.checked ? { textDecoration: "line-through" } : null}>
				{item.item}
			</label>
			<FaTrashAlt onClick={(id) => handleDelete(item.id)} role="button" />
		</li>
	);
};

export default SingleItem;

import React from "react";
import { FaTrashAlt } from "react-icons/fa";
const SingleItem = ({ item, handleDelete }) => {
	return (
		<li className="item">
			<input type="checkbox" checked={item.checked} value={item} />
			<label style={item.checked ? { textDecoration: "line-through" } : null}>
				{item.item}
			</label>
			<FaTrashAlt onClick={(id) => handleDelete(item.id)} />
		</li>
	);
};

export default SingleItem;

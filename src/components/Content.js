import React from "react";
import ItemLists from "./ItemLists";

const Content = ({ items, handleDelete, handleChange }) => {
	return (
		<main>
			{items.length ? (
				<ItemLists
					items={items}
					handleDelete={handleDelete}
					handleChange={handleChange}
				/>
			) : (
				<p>Your list is empty</p>
			)}
		</main>
	);
};

export default Content;

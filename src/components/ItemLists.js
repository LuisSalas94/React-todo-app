import React from "react";
import SingleItem from "./SingleItem";
const ItemLists = ({ items, handleDelete, handleChange }) => {
	return (
		<main>
			<ul>
				{items.map((item) => (
					<SingleItem
						key={item.id}
						item={item}
						handleDelete={handleDelete}
						handleChange={handleChange}
					/>
				))}
			</ul>
		</main>
	);
};

export default ItemLists;

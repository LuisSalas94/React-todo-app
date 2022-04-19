import React from "react";
import SingleItem from "./SingleItem";
const ItemLists = ({ items, handleDelete }) => {
	return (
		<main>
			<ul>
				{items.map((item) => (
					<SingleItem key={item.id} item={item} handleDelete={handleDelete} />
				))}
			</ul>
		</main>
	);
};

export default ItemLists;

import React from "react";
import ItemLists from "./ItemLists";

const Content = ({ items, handleDelete }) => {
	return (
		<main>
			<ItemLists items={items} handleDelete={handleDelete} />
		</main>
	);
};

export default Content;

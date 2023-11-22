import React from "react";
import { Link } from "react-router-dom";

function FormatName({name, displayTitle, userDetails, url}) {

    return (
		<h2 className={userDetails ? "ds_contact-details__title" : "ds_category-item__title"}>
			{/* <Link to={url} className="ds_category-item__link"> */}
				{displayTitle && name.title} {name.first} {name.last}
			{/* </Link> */}
		</h2>
	);
}

export default FormatName;
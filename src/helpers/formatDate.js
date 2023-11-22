import React from "react";

function FormatDate({date, type}){
    let rawDate = new Date(date.date);
    let formattedDate = rawDate.toLocaleDateString();

    return (
		<div className="ds_contact-details__item">
			<dt>{type === "register" ? "Registered" : "Date of Birth"}</dt>
			<dd>
				{formattedDate} ({type === "birth" && "Age: "}
				{date.age}
				{type === "register" && " years"})
			</dd>
		</div>
	);
}

export default FormatDate;
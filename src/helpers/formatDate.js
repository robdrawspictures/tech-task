import React from "react";

function FormatDate({date, type}){

    let rawDate = new Date(date.date);
	/* Note: en-GB is specificed because in testing Jest was rendering US 
	date formatting for some reason. */
    let formattedDate = rawDate.toLocaleDateString("en-GB");

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
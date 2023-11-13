import React from "react";
import FormatName from "../helpers/formatName";
import FormatAddress from "../helpers/formatAddress";

function UserDetail({ user }){

    return (
		<div>
			<p>NINO: {user.id.value}</p>
			<FormatName name={user.name} displayTitle={true} />
			<p>{user.email}</p>
			<p>{user.phone}</p>
			<FormatAddress address={user.location} />
			<hr></hr>
		</div>
	);
}
import React from "react";
import FormatName from "../helpers/formatName";
import FormatAddress from "../helpers/formatAddress";

const User = ({ user }) => {
    // console.log('---USER---');
    // console.log(user);

	// const userURL = "/users/" + user.id;

	return (
		<>
			<div className="user-card">
				<img src={user.picture.medium} alt="User avatar" />
				<p>NINO: {user.id.value}</p>
				<FormatName name={user.name} displayTitle={false} />
				<p>{user.email}</p>
				<p>{user.phone}</p>
				<FormatAddress address={user.location} />
			</div>
			<hr></hr>
		</>
	);
};

export default User;

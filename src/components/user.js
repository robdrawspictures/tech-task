import React from "react";
import FormatName from "../helpers/formatName";
import FormatAddress from "../helpers/formatAddress";
import { Link } from "react-router-dom";

const User = ({ user, index }) => {
    // console.log('---USER---');
    // console.log(user);

	const userURL = user && "/users/" + index;

	return (
		<>
			<Link to={userURL} style={{ textDecoration: "none" }}>
				<div className="user-card">
					<img src={user.picture.medium} alt={user.name.first} />
					<p>NINO: {user.id.value}</p>
					<FormatName name={user.name} displayTitle={false} />
					<p>{user.email}</p>
					<p>{user.phone}</p>
					<FormatAddress address={user.location} />
				</div>
			</Link>
		</>
	);
};

export default User;

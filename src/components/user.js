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
			<div className="user-card">
				<div className="user-card-info">
					<div className="user-card-avatar-name">
						<h2>
							<FormatName name={user.name} displayTitle={false} />
						</h2>
						<img src={user.picture.medium} alt={user.name.first} />
					</div>
					<div className="user-card-details">
						<b>
							<p>NINO: {user.id.value}</p>
							<p>{user.email}</p>
							<p>{user.phone}</p>
							<FormatAddress user={user} isDetail={false} />
						</b>
					</div>
				</div>
				<Link to={userURL} className="button">
					VIEW USER
				</Link>
			</div>
		</>
	);
};

export default User;

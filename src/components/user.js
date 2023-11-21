import React from "react";
import FormatName from "../helpers/formatName";
import FormatAddress from "../helpers/formatAddress";
import { Link } from "react-router-dom";

const User = ({ user, index }) => {

	const userURL = user && "/users/" + index;

	return (
		<>
			<div className="user-card">
				<div className="user-card-info">
					<div className="user-card-avatar-name">
						<FormatName name={user.name} tag={"h2"} />
						<img src={user.picture.medium} alt={user.name.first} />
					</div>
					<div className="user-card-details">
						<b>
							<p>NINO: {user.id.value}</p>
							<p>{user.email}</p>
							<p>{user.phone}</p>
							<details className="ds_details">
								<summary className="ds_details__summary">
									View Address
								</summary>
								<FormatAddress user={user} isDetail={false} />
							</details>
						</b>
					</div>
				</div>
				<Link to={userURL} className="ds_button">
					View Details
				</Link>
			</div>
		</>
	);
};

export default User;

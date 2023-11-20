import React from "react";
import { Link, useParams } from "react-router-dom";
import FormatName from "../helpers/formatName";
import FormatAddress from "../helpers/formatAddress";
import FormatDate from "../helpers/formatDate";

function UserDetail({ users, updateHistory }){

    const params = useParams();

    updateHistory(params.id);

    let user = users[params.id]

    if (!user) {
        return <p>Loading...</p>;
    }

    return (
		<>
			<div className="user-detail-container">
				<div className="user-name-and-avatar">
					<FormatName
						name={user.name}
						displayTitle={true}
						tag={'h1'}
					/>
					<img
						src={user.picture.large}
						alt={`${user.name.first}-full-size`}
					/>
				</div>
				<div className="user-detail-info-container">
					<div>
						<h2>User Details</h2>
					</div>
					<div className="user-detail-info">
						<div className="user-detail-info-left">
							<h3>General Info</h3>
							<p>
								<b>Gender:</b> {user.gender}
							</p>
							<p>
								<b>NINO:</b> {user.id.value}
							</p>
							<p>
								<b>E-Mail:</b> {user.email}
							</p>
							<p>
								<b>tel:</b> {user.phone}
							</p>
							<p>
								<b>mobile:</b> {user.cell}
							</p>
							<FormatDate date={user.dob} type={"birth"} />
							<FormatDate
								date={user.registered}
								type={"register"}
							/>
						</div>
						<div className="user-detail-info-right">
							<h3>Location Info</h3>
							<FormatAddress
								user={user}
								isDetail={true}
							/>
							<p>
								{user.location.timezone.offset}, (
								{user.location.timezone.description})
							</p>
						</div>
					</div>
				</div>
				<Link to="/" className="button">
					Return to User Directory
				</Link>
			</div>
		</>
	);
}

export default UserDetail;
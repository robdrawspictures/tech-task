import React from "react";
import { Link, useParams } from "react-router-dom";
import FormatName from "../helpers/formatName";
import FormatAddress from "../helpers/formatAddress";
import FormatDate from "../helpers/formatDate";

function UserDetail({ users, updateHistory, setLastViewed }){

    const params = useParams();
	const currentUser = {
		'userId': params.id,
		'lastAccess': new Date().toLocaleString(),
	}

	// console.log(params.id)
	// console.log(typeof(params.id))

	setLastViewed(params.id);
    updateHistory(currentUser);

    let user = users[params.id]

    if (!user) {
        return <p>Loading...</p>;
    }

    return (
		<>
			<div className="user-name-and-avatar">
				<img
					src={user.picture.large}
					alt={`${user.name.first}-full-size`}
				/>
			</div>
			<div className="ds_contact-details">
					<FormatName name={user.name} displayTitle={true} userDetails={true}/>
				<address>
					<div className="ds_contact-details-grid">
						<div className="ds_contact-details__list">
							<dl>
								<FormatDate date={user.dob} type={"birth"} />
								<div className="ds_contact-details__item">
									<dt>Gender</dt>
									<dd>{user.gender}</dd>
								</div>
								<div className="ds_contact-details__item">
									<dt>Email</dt>
									<dd translate="no">
										<a href="mailto:email@gov.scot">
											{user.email}
										</a>
									</dd>
								</div>
								<div className="ds_contact-details__item">
									<dt>Landline</dt>
									<dd>{user.phone}</dd>
								</div>
								<div className="ds_contact-details__item">
									<dt>Mobile</dt>
									<dd>{user.cell}</dd>
								</div>
							</dl>
						</div>
						<div className="ds_contact-details__list">
							<dl>
								<div className="ds_contact-details__item">
									<dt>National Insurance Number</dt>
									<dd>{user.id.value}</dd>
								</div>
								<div className="ds_contact-details__item">
									<FormatAddress
										user={user}
										isDetail={true}
									/>
								</div>
								<FormatDate
									date={user.registered}
									type={"register"}
								/>
							</dl>
						</div>
					</div>
				</address>
				<Link to="/" className="ds_button">
					Return to User Directory
				</Link>
			</div>
		</>
	);
}

export default UserDetail;


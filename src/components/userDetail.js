import React from "react";
import { Link, useParams } from "react-router-dom";
import FormatName from "../helpers/formatName";
import FormatAddress from "../helpers/formatAddress";
import FormatDate from "../helpers/formatDate";

function UserDetail({ users, updateHistory }){

        console.log("---USER DETAIL---");
		console.log(users);

    const params = useParams();
    console.log(params);

    // const findUserByID = (id) => {
    //     return users.find((user) => {
    //         return user.id === parseInt(id);
    //     });
    // };

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
						isHeader={true}
					/>
					<img src={user.picture.large} alt={user.name.first} />
				</div>
				<div className="user-detail-info">
					<div className="user-detail-info-left">
						<p>NINO: {user.id.value}</p>
						<p>e-mail: {user.email}</p>
						<p>tel: {user.phone}</p>
						<p>mobile: {user.cell}</p>
						<FormatDate date={user.dob} type={'birth'}/>
						<FormatDate date={user.registered} type={'register'}/>
					</div>
					<div className="user-detail-info-left">
                        <h3>Address</h3>
						<FormatAddress address={user.location} />
                        <h3>ALAN PLEASE ADD DETAILS</h3>
					</div>
				</div>
			</div>
            <Link to="/">Back</Link>
		</>
	);
}

export default UserDetail;
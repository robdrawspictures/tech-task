import React from "react";

function FormatAddress({user, isDetail}){

    const address = user?.location

    return (
		<>
			<dt>Address</dt>
			<dd translate="no">
				{address.street.number} {address.street.name}
				<br />
				{address.city}, {address.state}
				<br />
				{address.country}, {user.nat}
				<br />
				{address.postcode}
				<br />
				{isDetail &&
					`(${address.coordinates.latitude},${" "}
						${address.coordinates.longitude})`
				}
				{isDetail && <br />}
				{isDetail &&
					`${address.timezone.offset},${" "}
						(${address.timezone.description})`
				}
			</dd>
		</>
	);
}

export default FormatAddress;
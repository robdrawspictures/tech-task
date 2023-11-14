import React from "react";

function FormatAddress({user, isDetail}){

    const address = user?.location

    // console.log('---ADDRESS---')
    // console.log(address);

    return (
		<div>
			<i>
				<p>
					{address.street.number} {address.street.name}
				</p>
				<p>
					{address.city}, {address.state}
				</p>
				<p>{address.country}, {user.nat}</p>
				<p>{address.postcode}</p>
				{isDetail && (
					<p>
						({address.coordinates.latitude},{" "}
						{address.coordinates.longitude})
					</p>
				)}
			</i>
		</div>
	);
}

export default FormatAddress;
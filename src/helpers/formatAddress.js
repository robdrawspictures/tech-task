import React from "react";

function FormatAddress({address}){

    // console.log('---ADDRESS---')
    // console.log(address);

    return (
		<div>
			<p>
				{address.street.number} {address.street.name}
			</p>
			<p>
				{address.city}, {address.state}
			</p>
			<p>{address.country}</p>
			<p>{address.postcode}</p>
		</div>
	);
}

export default FormatAddress;
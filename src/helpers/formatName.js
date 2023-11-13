import React from "react";

function FormatName({name, displayTitle}) {

	// console.log('===NAME===');
	// console.log(name.name);

	return (
		<p>
			{displayTitle && name.title} {name.first} {name.last}
		</p>
	);
}

export default FormatName;
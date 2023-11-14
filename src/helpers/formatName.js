import React from "react";

function FormatName({name, displayTitle, isHeader}) {

	// console.log('===NAME===');
	// console.log(name.name);

    const DynamicTag = isHeader ? 'h1' : 'p';

    return (
            <DynamicTag>
                {displayTitle && name.title} {name.first} {name.last}
            </DynamicTag>
    );
}

export default FormatName;
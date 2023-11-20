import React from "react";

function FormatName({name, displayTitle, tag}) {

    const DynamicTag = tag ? tag : 'p';

    return (
            <DynamicTag>
                {displayTitle && name.title} {name.first} {name.last}
            </DynamicTag>
    );
}

export default FormatName;
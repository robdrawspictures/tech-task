import React from "react";

function FormatDate({date, type}){
    let rawDate = new Date(date.date);
    let formattedDate = rawDate.toLocaleDateString();

    return(
        <p>
            {type === 'register' ? 'Registered: ' : 'Date of Birth: '} {formattedDate} ({type === 'birth' && 'Age: '}{date.age}{type === 'register' && ' years'})
        </p>
    )
}

export default FormatDate;
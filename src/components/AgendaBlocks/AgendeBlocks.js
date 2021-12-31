import React from "react";

function AgendaBlocks ({name, treatment, time}){

    return (
        <div className="agenda">
            <div className="agenda-content">
                <p><strong>naam klant: &nbsp;</strong>{name}</p>
                <p><strong> &nbsp; Behandeling:</strong> {treatment}</p>
            </div>
            <p><strong> Tijdstip: </strong>{time}</p>
        </div>

    )
}

export default AgendaBlocks
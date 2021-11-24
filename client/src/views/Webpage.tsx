import React from "react";


function Webpage() {
    return (
        <div>
            <iframe
                style={{ height: "calc(100vh - 4px)", width: "calc(100vw - 4px)" }}
                src="https://example.com"
                frameBorder="0"
                allowFullScreen>
            </iframe>
        </div>
    )
}

export default Webpage;
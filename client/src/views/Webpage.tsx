import React from "react";
import { useLocation } from 'react-router-dom';

const Webpage: React.FC = () => {
    const location = useLocation()

    return (
        <div>
            <iframe
                style={{ height: "calc(100vh - 4px)", width: "calc(100vw - 4px)" }}
                title={location.pathname}
                src={`https:/${location.pathname}`}
                frameBorder="0"
                allowFullScreen>
            </iframe>
        </div>
    )
}

export default Webpage;
import React, { Component } from "react";
import { useNavigate } from 'react-router-dom'

const ListPage: React.FC = () => {
    
    const webpages: string[] = ['https://google.com', 'https://facebook.com']
    const splitedWebpages: string[] = webpages.map((webpage => webpage.split('/')[2]))
    const listItems: JSX.Element[] =
        splitedWebpages.map((webpage) =>
            <li onClick={() => navigate(`/${webpage}`)} key={webpage}><button>{webpage}</button></li>
        );
    const navigate = useNavigate()

    return (
        <div>
            <button onClick={() => navigate("/search")}>Capture a new webpage</button>
            <br /><br />
            {listItems}
        </div>
    )
}

export default ListPage;
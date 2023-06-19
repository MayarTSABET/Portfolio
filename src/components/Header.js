import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Header.css";
import ReorderIcon from "@material-ui/icons/Reorder";
function Header() {
    const [expandHeader, setExpandHeader] =useState(false);
    const location = useLocation();

    useEffect(() => {
        setExpandHeader(false)
    }, [location])
    return (
        <div className="header" id={expandHeader ? "open" : "close"}>
            <div className="toggleButton">
                <button onClick={() => {setExpandHeader((prev) => !prev)}}>
                <ReorderIcon/>
                </button>
            </div>
            <div className="links">

                <link to="/">Home</link>
                

            </div>
        </div>
    );
}

export default Header;
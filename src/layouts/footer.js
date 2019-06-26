import React from "react";

export function Footer(props) {
    return <footer>
        <span>Copyrights &copy; </span>
        <span>{props.year}. </span>
        <span>All Rights Reserved. </span>
        <span>{props.org}.</span>
    </footer>
}
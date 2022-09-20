import React from "react";

function Footer(){
    const date = new Date();

    return(<footer><p>Copyright C {date.getFullYear()}</p></footer>)
}

export default Footer;
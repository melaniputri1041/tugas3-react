import React from "react";

const Header = () => {
    const name = "Melani Putri"

    return (
        <header style={{ backgroundColor: 'blue', width:"100%", height:"50px",fontSize : "30px",position : "fixed",
        top : 0,}}>
            {name}
        </header>
    )
}

export default Header
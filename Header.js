import React from "react";


const Header = ({ onAdd }) =>{
    return (
        <div>
              <header className="header">
                
        <h1>Todo</h1>

        <button color='green' text="darah" onClick={ onAdd } >Click</button>
        
            </header>

        </div>
      
    )
}

export default Header;
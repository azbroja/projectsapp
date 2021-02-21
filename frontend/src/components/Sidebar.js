import React from 'react'

export const Sidebar = ({user}) => {
    return (
        <div>
            <div className="w3-sidebar w3-light-grey w3-bar-block" style={{width: "15%"}}>
                <h3 className="w3-bar-item">Menu</h3>
                <a href="/add-project" className="w3-bar-item w3-button">Add Project</a>
                <a href="/all-projects" className="w3-bar-item w3-button">Show Project</a>
            </div>
        </div>
    )
}



export default Sidebar;

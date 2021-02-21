import React from 'react';

export const Dashboard = ({user}) => {

    return (
    <div className="Content">
        <div className="w3-container w3-teal">
            <h1>My Page</h1>
        </div>

        {/* <p>{user.is_admin ? <div> this is admin </div> : <div> this is not a admin </div>} </p> */}

        <div className="w3-container">
            <h2>Sidebar Navigation Example</h2>
            <p>The sidebar with is set with "style="width:25%".</p>
            <p>The left margin of the page content is set to the same value.</p>
        </div>
    </div>
    )
}


export default Dashboard;

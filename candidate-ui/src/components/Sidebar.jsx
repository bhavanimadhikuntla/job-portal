import {Link} from "react-router-dom";


function Sidebar(){

return(

<div className="sidebar">


<h5>
Menu
</h5>


<Link to="/dashboard">
Dashboard
</Link>


<Link to="/profile">
My Profile
</Link>


<Link to="/update-profile">
Update Profile
</Link>


<Link to="/apply-job">
Apply Job
</Link>


<Link to="/logout">
Logout
</Link>


</div>

)

}


export default Sidebar;
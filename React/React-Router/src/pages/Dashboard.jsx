import { Link } from "react-router-dom";


const Dashboard = () => {
return(
    <>
    <h2>Dashboard</h2>

    <div style={{display:'flex', flexDirection:'column'}}>
    <Link to='/'>Home</Link>
    <Link to='/about'>About</Link>
    <Link to='/contact'>Contact</Link>
    </div>


    </>
)
};

export default Dashboard;
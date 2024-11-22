import { NavLink , Outlet} from "react-router-dom";
import BreadCrumbs from "../components/BreadCrums";

const RootLayout = () => {
    return ( 
        <div className="lay-out">
        <header>
        <nav>
            <h2>Jobarouter</h2>
            <NavLink to="/"> Home</NavLink>
            <NavLink to="about"> About</NavLink>
            <NavLink to="help"> Help</NavLink>
            <NavLink to="careers"> Careers</NavLink>
        </nav>
        {/* breadcrumbs */}
        <BreadCrumbs/>
        </header>

{/* the OUTLET enable us to render the content of any page on the <main> section */}
        <main>
            <Outlet/>
        </main>
    </div>
     );
}
 
export default RootLayout;
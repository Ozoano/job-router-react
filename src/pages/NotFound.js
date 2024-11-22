import { Link} from "react-router-dom";

const NotFound = () => {
    
    return ( 
        <div>
            <h2>Page Not Found</h2>        
        <p>Sorry, an unexpected error has occurred</p>
        <p>Go back to the Home Page <Link to="/">Home Page</Link></p>
       
        </div>
     );
}
 
export default NotFound;
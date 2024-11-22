import { Link, useRouteError } from "react-router-dom";

const CareersError = () => {
const error = useRouteError();

    return ( 
    <div className="career-error">
        <h2>Error</h2>
        <p>{error.message}</p>
        <p>Go back to the<Link to="/">Home Page</Link></p>
    </div> 
    )
}
 
export default CareersError;
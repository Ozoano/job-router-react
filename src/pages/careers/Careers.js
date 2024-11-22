import { useLoaderData, Link } from "react-router-dom";


const Careers = () => {
    // React-Router resolves the fetch promise, grab the data for us
    // so with the useLoaderData HOOK,the data get passed to 'const careers'
    const careers = useLoaderData();

    return (  
        <div className="careers">

            {/* Map the data to access contents  */}
        {careers.map((career) =>(
            <Link to={career.id.toString()} key={career.id}>
                <p>{career.title}</p>
                <p>Based in {career.location}</p>
            </Link>
        ))}
        </div>
    );
}
 
export default Careers;

// Loader function
export const careersLoaders = async () =>{
    const res = await fetch("http://localhost:8000/careers");

    if (!res.ok) {
        throw new Error("Could not fetch data from the resource");
    }
    return res.json();
}
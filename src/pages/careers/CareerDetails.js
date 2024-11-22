import { useLoaderData, useParams } from "react-router-dom";

const CareerDetails = () => {
    const Career = useLoaderData();
    const {id}  = useParams();


    return ( 
        <div className="careers-details">
        <h2>Career : {Career.title}</h2>
        <p>Location : {Career.location}</p>
        <p>Career Salary : {Career.salary}</p>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, omnis? Ducimus minima iste, quas provident nam quidem unde, sapiente temporibus libero sunt ea rem, deleniti voluptatibus vero fuga repellat exercitationem. Impedit, quidem quis assumenda repellendus reiciendis, amet minus atque dolorem facilis dolor voluptatum vero optio, expedita tempore consequuntur dolorum aliquam?</p> 
            </div>
        </div>
     );
}
 
export default CareerDetails;

export const careerDetailLoader = async ({params}) => {
    const {id} = params;

    const res = await fetch("http://localhost:8000/careers/" + id);

    if (!res.ok) {
        throw Error("Career details does not exist");
    }
    return res.json();
}
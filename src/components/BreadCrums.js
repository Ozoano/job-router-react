/**
 * BreadCrumbs component - 
 * 
 * /careers/help is an eg of breadcrumb
 * to enable us remoe trailing spaces in the path like... / careers/ help
 * we use the filter method to remove spaces. 
 * Afterwards, we are left with array[] of words in the path
 * then use the map method to cycle thru the words and return a template for each path
 * 
 * for each path (crumbs), we need to do 2 things -- update the currentLink of the crumb && return a template which uses the link for that crumb 
 */

import { Link, useLocation } from "react-router-dom";

const BreadCrumbs = () => {
 const location = useLocation();

 let currentLink = '';

 const crumbs = location.pathname.split('/')
 .filter(crumb => crumb !== '')
 .map(crumb =>{
    currentLink += `/${crumb}`

    return (
        <div className="crumbs" key={crumb} >
          <Link to ={currentLink}> {crumb}</Link>
        </div>
    )
 })
 
    return ( 
        <div className="breadcrumbs">
           {crumbs}
        </div>
     );
}
 
export default BreadCrumbs;

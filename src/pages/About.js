import { useState } from "react"
import { Navigate } from "react-router-dom";

export default function About() {

  const [user, setUser] = useState('Ninja');

  // if not user, go back to the home page
  if (!user) {
    // The Navigate function enables us to go back to the ABOUT PG when we navigate to the Home pg
    // to prevent that, we use the replace prop 
    return <Navigate to='/' replace={true}/>    
  }

    return (
      <div className="about">
        <h2>About Us</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui provident consequuntur vel omnis quisquam rem harum, maxime expedita, ullam ut dolore! Distinctio eos minima voluptatum totam id hic! Sapiente debitis quia illum officia obcaecati provident nulla odio molestiae suscipit quasi.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui provident consequuntur vel omnis quisquam rem harum, maxime expedita, ullam ut dolore! Distinctio eos minima voluptatum totam id hic! Sapiente debitis quia illum officia obcaecati provident nulla odio molestiae suscipit quasi.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui provident consequuntur vel omnis quisquam rem harum, maxime expedita, ullam ut dolore! Distinctio eos minima voluptatum totam id hic! Sapiente debitis quia illum officia obcaecati provident nulla odio molestiae suscipit quasi.</p>
      
      <button onClick={() => setUser(null)}>Logout</button>
      </div>
    )
  }
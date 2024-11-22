import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";

// pages
import Home from "./pages/Home"
import About from "./pages/About";
import Contact, { contactAction } from "./pages/help/Contact";
import Faq from "./pages/help/Faq";
import NotFound from "./pages/NotFound";
import Careers, { careersLoaders } from "./pages/careers/Careers";
import CareerDetails, {careerDetailLoader} from "./pages/careers/CareerDetails";
import CareersError from "./pages/CareersError";

// Layout
import RootLayout from "./Layouts/RootLayout";
import HelpLayout from "./Layouts/HelpLayout";
import CareersLayout from "./Layouts/CareersLayout";


const router = createBrowserRouter(
  createRoutesFromElements
  (

<Route path="/" element= {<RootLayout/>}>
    <Route index element={<Home/>}/>
    <Route path="about" element={<About/>}/>

    {/* Nested Route */}
  
   <Route path="help" element={<HelpLayout/>}>
      <Route path="faq" element={<Faq/>} />
      <Route path="contact" element={<Contact/>} action={contactAction}/>
  </Route>

{/* Careers Layout Parent Route */}
    <Route path= "careers" element={<CareersLayout/>}  errorElement = {<CareersError/>}>
  
      <Route index element={<Careers/>}
        loader= {careersLoaders}
        // errorElement = {<CareersError/>}
      />
      <Route path=":id" element={<CareerDetails/>}
        loader= {careerDetailLoader}
        // errorElement = {<CareersError/>}
      />
    </Route>

{/* handles 404 page error  */}
   <Route  path="*" element={<NotFound/>}/> 
</Route>
  )
)

function App() {
  return (
<RouterProvider router={router}/>
  );
}

export default App

/**
 * Form & Actions Features - reduce the need for us to track individual form fields
 * using local state and diff handler functions
 * 
 * Unlike in the old React, there is a need us to attach each form field to an event handler to update some local state for that field
 * and then bundle all of those field values together when the form was submitted 
 * inside some other submit event handler
 * 
 * Now we dont have to do any of that
 * all we have to do is use FORM COMPONENT - which will authomatically track all of those values for us
 * and when we submit the form, they will bundle together all of those values into a req obj and pass it into an ACTION FUNCTION
 * THE ACTION FUNCTION is something we have to make ourselves - a bit like a LOADER FUNCTION
 * but this time it will get access to all of the FORMs data so that we can do something with it
 * 
 * ACTION FUNCTION - a specila function that get fired when the form is submitted
 * 
 * @returns 
 */

import { Form, redirect, useActionData } from "react-router-dom"

export default function Contact() {

  const data = useActionData();
    return (
      <div className="contact">

        <h3>Contact Us</h3>

        <Form method="post" action="/help/contact">
          <label>
            <span>Your email:</span>
            <input type="email" name="email" required />
            <p>{data?.email && <span>{data.email}</span>}</p>
          </label>
          <label>
            <span>Your message:</span>
            <textarea name="message" required></textarea>
          </label>

          <button>Submit</button>

{/* checks a condition -- do we have data && data.error? then output the data.error */}
{/* otherwise, redirect them to the homepage */}
          {data && data.error && <div>{data.error}</div>}
        </Form>
      </div>
    )
  }

  // the {request} property contains all of the forms data i.e the input value and textarea value
  export const contactAction = async ({request}) => {
    // formData() obj gets the form data for us
    const data = await request.formData()


    // submission obj to access the individual values -- based on the 'name assigned inside the form above
    const submission = {
      email: data.get('email'),
      message: data.get('message')
    }

    // console.log(submission)

    // NB:here you might send a POST REQUEST to kinda save the info.
    // But the server might return an erro


    // do a little check on the FE
if (submission.message.length < 10) {
  return {

    // to access this error msg (data), inside the COMPONENT ABOVE
    // we can use a hook called useActionData() inside the component
    error: 'Message must be over 10 characters long'
  }
}

    // Do 2 things
    // one - return a redirect - i.e redirect the user 
    return redirect('/');

    // two - 
  }
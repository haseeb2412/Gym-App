import React, { useState } from 'react'
import {ClipLoader} from "react-spinners"

const Contact = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
    loading: false,
  });
  
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  

  
  return (
    <section className='contact'>
      <form>
        <h1>Contact Us</h1>
        <div>
          <label htmlFor="">Name</label>
          <input name='name' type="text"  
             onChange={(e) => handleChange(e)}
             value={values.name}
          />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input name='email' type="text"     onChange={(e) => handleChange(e)}
          value={values.email} />
        </div>
        <div>
          <label htmlFor="">Message</label>
          <input name='message' type="text"      onChange={(e) => handleChange(e)}
          value={values.message}/>
        </div>
        <button type='submit' disabled={values.loading} style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'2rem'}}>
          {
            values.loading && <ClipLoader size={20} color='white'/>
          }
            Send Message
        </button>
      </form>
    </section>
  )
}

export default Contact
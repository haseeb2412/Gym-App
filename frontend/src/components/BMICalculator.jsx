import React, { useState } from 'react'
import { toast } from 'react-toastify';

const BMICaluculator = () => {

  const [formData, setFormData] = useState({
    height: "",
    weight: "",
    gender: "",
    bmi: "",
  });
  
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const CaluculateBMI = (e)=>{
    e.preventDefault();
    const { height ,weight,gender,bmi} =formData;

    if (!height || !weight || !gender ) {
      toast.error("Please Fill all the values")
    }

    const heightMeters = height / 100; // Convert height from cm to meters
    const bmiValue = (weight / (heightMeters * heightMeters)).toFixed(2);
    
    setFormData((prevData) => ({
      ...prevData,
      bmi: bmiValue,
    }));

    if(bmiValue < 18.5){
      toast.warning("Your are underweight")
    }else  if(bmiValue >= 18.5 && bmiValue < 24.9){
      toast.success("Your have normal weight.")
    }else  if(bmiValue >= 25 && bmiValue < 29.9){
      toast.warning("Your are Overweight.")
    }else{
      toast.error("Youre in the obese range")
    }
  }
  return (
    <section className='bmi'>
      <h1>BMI Calculator</h1>
      <div className="container">
        <div className="wrapper">
          <form onSubmit={CaluculateBMI}>
            <div>
              <label>Height (cm)</label>
              <input type="number" name='height' value={formData.height} onChange={handleChange} />
            </div>

            <div>
              <label>Weight (kg)</label>
              <input type="number" name='weight' value={formData.weight} onChange={handleChange} />
            </div>

            <div>
              <label>Gender</label>
              <select name="gender"  value={formData.gender} onChange={handleChange}>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <button type='submit'> CalCulate BMI</button>
          </form>
        </div>

        <div className="wrapper">
          <img src="/bmi.jpg" alt="bmi image" />
        </div>
      </div>
    </section>
  )
}

export default BMICaluculator
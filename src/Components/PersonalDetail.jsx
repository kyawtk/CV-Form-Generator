import React, { useEffect, useState } from 'react';
import '../styles/UserInput.scss'
const PersonalDetail = ({handleChange}) => {
  

  

 

  return (
    <form action="#" className='myForm'>
      <legend>Enter your Personal Details</legend>
      <input onChange={handleChange} type="text" placeholder="Your Name" required name="name" />
      <input onChange={handleChange} type="text" placeholder="Your title" required name="title" />
      <input onChange={handleChange} type="email" placeholder="Email" required name="email" />
      <input onChange={handleChange} type="text" placeholder="Address" required name="address" />
      <input onChange={handleChange} type="text" placeholder="Description" required name="description" />
      <input onChange={handleChange} type="number" name="phNumber" required maxLength={10} placeholder="Your Phone Number" />
      <input onChange={handleChange} type="file" name="file" accept="image/*" />
      
    </form>
  );
};

export default PersonalDetail;

import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css';


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!formData.message) errors.message = 'Message is required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      emailjs.sendForm('service_ywd2xof', 'template_pvvn79h', e.target, 'vff0Xu_N3kg4cJVGD')
        .then((result) => {
          console.log(result.text);
          setSubmitted(true);
          setFormData({
            name: '',
            email: '',
            message: '',
          });
        }, (error) => {
          console.log(error.text);
          setErrors({ form: 'There was a problem sending your message. Please try again later.' });
        });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    
    <div className='div' style={{padding:'5rem'}}>
      <h2 className='h2'>Contact Us</h2>
      {submitted && <p style={{textAlign:'center'}}>Thank you for reaching out! We will get back to you soon.</p>}
      {errors.form && <p className="error">{errors.form}</p>}
      <form className='form' onSubmit={handleSubmit}>
        <div className='div'>
          <label className='label' htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder='name'
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div className='div'>
          <label className='label' htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder='email'
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className='div'>
          <label className='label' htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
             placeholder='Type your message here....'
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <p className="error">{errors.message}</p>}
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
   
  );
};

export default ContactForm;

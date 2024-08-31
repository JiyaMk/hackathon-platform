import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Navibar from './Navibar';

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
    <>
      <div style={{ backgroundColor: 'rgb(2,6,23)', height: '100vh' }}>
        <Navibar />
        <h2  className="text-3xl font-bold text-center mb-4 text-white" style={{marginTop:'2rem'}}>Contact Us</h2>
        <div className="max-w-md mx-auto my-8 p-6 bg-white bg-opacity-10 text-gray-800 rounded-lg shadow-lg backdrop-filter backdrop-blur-md">
         
          {submitted && <p className="text-center text-green-500">Thank you for reaching out! We will get back to you soon.</p>}
          {errors.form && <p className="text-center text-red-500">{errors.form}</p>}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-white" htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder='Your Name'
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-white" htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder='Your Email'
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-white" htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                placeholder='Type your message here....'
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                rows="5"
              />
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            </div>
            <button
              type="submit"
              style={{backgroundColor:'#14c0dd'}}
              className="w-full px-4 py-2 text-black font-semibold rounded-lg shadow-md transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;

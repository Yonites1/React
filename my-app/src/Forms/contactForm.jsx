import React, { useState } from 'react';

function ContactForm() {
    const [formData, setFormData] = useState({ name: '', email: '', phoneNumber: '' });
    const [errors, setErrors] = useState({});

    function validateEmail(email) {
        return email.includes("@") && email.includes(".");
    }

    function validatePhoneNumber(phoneNumber) {
        // Validate phone number (should only contain numbers and optionally, 10 digits long)
        return /^\d{10}$/.test(phoneNumber);
    }
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });

        // Error handling for each field
        if (name === 'email') {
            if (!value) {
                setErrors(prevErrors => ({ ...prevErrors, email: 'Email is required' }));
            } else if (!validateEmail(value)) {
                setErrors(prevErrors => ({ ...prevErrors, email: 'Invalid email' }));
            } else {
                const { email, ...rest } = errors; // Clear email error if valid
                setErrors(rest);
            }
        } else if (name === 'name') {
            if (!value) {
                setErrors(prevErrors => ({ ...prevErrors, name: 'Name is required' }));
            } else {
                const { name, ...rest } = errors; // Clear name error if valid
                setErrors(rest);
            }
        } else if (name === 'phoneNumber') {
            if (!value) {
                setErrors(prevErrors => ({ ...prevErrors, phoneNumber: 'Phone number is required' }));
            } else {
                const { phoneNumber, ...rest } = errors; // Clear phone number error if valid
                setErrors(rest);
            }
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (formData.name && formData.email && validateEmail(formData.email) && formData.phoneNumber && Object.keys(errors).length === 0) {
            console.log("Form data:", formData);
           alert('Form submitted successfully!');
        } else {
            alert('Please correct the errors before submitting');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input style={{margin:'15px'}} type="text" name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} /><br />
           <span style={{ color: "red", margin:'15px'}}>{errors.name}</span><br />
            <input style={{margin:'15px'}} type="text" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} /><br />
            <span style={{ color: "red", margin:'15px' }}>{errors.email}</span><br />
            <input style={{margin:'15px'}} type="tel" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleInputChange} /><br />
            <span style={{ color: "red", margin:'15px' }}>{errors.phoneNumber}</span><br />
            <button style={{margin:'15px'}} type="submit" disabled={!formData.name || !formData.email || !formData.phoneNumber || Object.keys(errors).length > 0}>Submit</button>
            <div>
                <span style={{margin:'15px'}}>Name: {formData.name}</span><br />
                <span style={{margin:'15px'}}>Email: {formData.email}</span><br />
                <span style={{margin:'15px'}}>Phone number: {formData.phoneNumber}</span>
            </div>
        </form>
    );
}

export default ContactForm;

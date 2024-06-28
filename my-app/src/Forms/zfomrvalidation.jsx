function validateEmail(email) {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  }
  
  // In the handleInputChange function
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  
    // Validate email
    if (name === 'email') {
      const isValidEmail = validateEmail(value);
      // Set an error message or update state based on validation result
    }
  };
  
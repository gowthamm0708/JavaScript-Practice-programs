import React, { useState } from "react";
import "./App.css"; 

const App = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    address: "",
    gender: "",
    contactNumber: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Prevent digits in the firstName and lastName fields
    if ((name === "firstName" || name === "lastName") && /\d/.test(value)) {
      return;
    }

    // Clear the error message for the field being edited
    setErrors({ ...errors, [name]: "" });

    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.dob) newErrors.dob = "Date of birth is required";
    if (!formData.address.trim()) newErrors.address = "Address is required"; // Corrected here
    if (!formData.gender) newErrors.gender = "Gender is required";

    if (!formData.contactNumber.trim()) {
      newErrors.contactNumber = "Contact number is required";
    } else if (!/^\d{10}$/.test(formData.contactNumber)) {
      newErrors.contactNumber = "Invalid contact number (10 digits required)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Submitted", formData);
      alert("Registration Successful!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        dob: "",
        address: "",
        gender: "",
        contactNumber: "",
      });
      setErrors({});
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h3 className="login-title">Employee Registration Form</h3>

        <form onSubmit={handleSubmit}>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            placeholder="Enter your first name"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <p className="error">{errors.firstName}</p>}

          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            placeholder="Enter your last name"
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <p className="error">{errors.lastName}</p>}

          <label>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <label>Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />
          {errors.dob && <p className="error">{errors.dob}</p>}

          <label>Address</label>
          <textarea
            name="address"
            placeholder="Enter your address"
            value={formData.address}
            onChange={handleChange}
          />
          {errors.address && <p className="error">{errors.address}</p>}

          <label>Gender</label>
          <div className="radio-group">
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={handleChange}
            />
            Male
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === "Female"}
              onChange={handleChange}
            />
            Female
          </div>
          {errors.gender && <p className="error">{errors.gender}</p>}

          <label>Contact Number</label>
          <input
            type="text"
            name="contactNumber"
            placeholder="Enter your contact number"
            value={formData.contactNumber}
            onChange={handleChange}
          />
          {errors.contactNumber && <p className="error">{errors.contactNumber}</p>}

          <button type="submit" className="login-button">Register</button>
        </form>
      </div>
    </div>
  );
};

export default App;

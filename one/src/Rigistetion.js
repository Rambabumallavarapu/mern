import React, { useState } from 'react';

function Rigistetion() {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
    conformPassword: '',
    avathar: null
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData([...data, formData]);
    // Reset the form
    setFormData({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      password: '',
      conformPassword: '',
      avathar: null
    });
  };

  return (
    <div className='App'>
      <form className='oneinp' onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Phone</label>
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            name="conformPassword"
            value={formData.conformPassword}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Avathar</label>
          <input
            type="file"
            name="avathar"
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <div>
        <h3>Submitted Data</h3>
        {data.map((item, index) => (
          <div key={index}>
            <p>First Name: {item.firstName}</p>
            <p>Last Name: {item.lastName}</p>
            <p>Phone: {item.phone}</p>
            <p>Email: {item.email}</p>
            <p>Password: {item.password}</p>
            <p>Confirm Password: {item.conformPassword}</p>
            {item.avathar && <img src={URL.createObjectURL(item.avathar)} alt="Avatar" width="100" />}
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rigistetion;

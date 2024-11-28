import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createAdmin, clearAdminMessage } from '../redux/slices/adminSlice';
import "../styling/RegisterAdmin.css"

const RegisterAdmin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, message, loading } = useSelector((state) => state.admin);
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    password: '',
    role: ''
  });

  useEffect(() => {
    if (message) {
      alert(message); // Show success message
      dispatch(clearAdminMessage()); // Clear message from the state after displaying
      navigate('/dashboard/admins'); // Redirect to the admins page
      
    }
  }, [message, navigate, dispatch]);

  useEffect(() => {
    if (error) {
      alert(error); // Show error message
      dispatch(clearAdminMessage()); // Clear error message from the state
    }
  }, [error, dispatch]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createAdmin(formData));
  };

  return (
    <div className='register-admin-container'>
      <h2 className='register-admin-title'>Register New Admin</h2>
      {loading && <p className='loading'>Loading...</p>}
      <form onSubmit={handleSubmit}>
        <div className='reg-name-div'>
          <label htmlFor="name" className='label-reg-name'>Name : </label>
        <input 
        className='input-reg-name'
          name="name" 
          placeholder="Name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />
        </div>
        <div className='reg-number-div'>
          <label htmlFor="number" className='label-reg-number'>Number : </label>
          <input 
          className='input-reg-number'
          type='number'
            name="number" 
            placeholder="Number" 
            value={formData.number} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className='reg-password-div'>
          <label htmlFor="password" className='label-reg-password'>Password : </label>
          <input 
          className='input-reg-password'
            name="password" 
            placeholder="Password" 
            type="password" 
            value={formData.password} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className='reg-role-div'>
          <label htmlFor="role" className='label-reg-role'>Role : </label>
            <select 
            className='input-reg-role'
              name="role" 
              value={formData.role} 
              onChange={handleChange} 
              required
            >
              <option value="">Select Role</option>
              <option value="admin">Admin</option>
              <option value="subAdmin">SubAdmin</option>
            </select>
        </div>
        <div className='add-admin-btn-reg-div'>
          <button className='add-admin-btn-reg' type="submit">Add Admin</button>
        </div>
      </form>
    </div>
  );
};

export default RegisterAdmin;

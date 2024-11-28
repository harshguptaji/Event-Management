import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateAdminInfo, clearAdminMessage } from '../redux/slices/adminSlice';
import "../styling/updateAdminForm.css"

const UpdateAdminForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams(); // Get the admin ID from the URL parameters
  const { admin, loading, error, message } = useSelector((state) => state.admin);

  // Initialize state for form fields
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  // Prepopulate the form with current admin details if available
  useEffect(() => {
    if (admin && admin._id === id) {
      setName(admin.name);
      setNumber(admin.number);
      setRole(admin.role);
    }
  }, [admin, id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedAdminData = {
      adminId: id,
      name,
      number,
      password,
      role
    };

    // Dispatch the action to update the admin info
    dispatch(updateAdminInfo(updatedAdminData));
    navigate(-1);
  };

  // Clear the message and error on successful update
  useEffect(() => {
    if (message || error) {
      setTimeout(() => {
        dispatch(clearAdminMessage());
      }, 5000); // Clear message after 5 seconds
    }
  }, [message, error, dispatch]);

  // Redirect after success message
  useEffect(() => {
    if (message) {
        dispatch(clearAdminMessage()); // Clear the message
        navigate(-1); // Redirect to the admin list page
    }
  }, [message, dispatch, navigate]);

  return (
    <div className='update-admin-container'>
      <h2 className='update-admin-title'>Update Admin Informations</h2>
      {loading && <p className='loading'>Loading...</p>}
      {message && <p style={{ color: 'green' }}>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <div className='reg-name-div'>
          <label htmlFor="name" className='label-reg-name'>Name:</label>
          <input
          className='input-reg-name'
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='reg-number-div'>
          <label htmlFor="number" className='label-reg-number'>Number:</label>
          <input
          className='input-reg-number'
            type="text"
            id="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <div className='reg-password-div'>
          <label htmlFor="password" className='label-reg-password'>Password:</label>
          <input
          className='input-reg-password'
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='reg-role-div'>
          <label htmlFor="role" className='label-reg-role'>Role:</label>
          <select
          className='input-reg-role'
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="admin">Admin</option>
            <option value="subAdmin">Sub Admin</option>
          </select>
        </div>

        <div className='add-admin-btn-reg-div'>
          <button type="submit" className='add-admin-btn-reg1' disabled={loading}>
            Update Admin
          </button>
        </div>
        
      </form>
    </div>
  );
};

export default UpdateAdminForm;

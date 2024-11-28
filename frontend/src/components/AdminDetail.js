// src/components/AdminDetail.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link, useParams } from 'react-router-dom';
import { fetchAdminById } from '../redux/slices/adminSlice';
import AddTagToAdmin from './AddTagToAdmin';
import RemoveTagFromAdmin from './RemoveTagFromAdmin';
import "../styling/AdminDetail.css"

const AdminDetail = () => {
  const { id } = useParams(); // Get the admin ID from the URL
  const dispatch = useDispatch();
  const { admin, loading, error } = useSelector((state) => state.admin);

  useEffect(() => {
    dispatch(fetchAdminById(id)); // Fetch the admin details by ID
 
  }, [dispatch, id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;

  return (
    <div className='adminsInfo-container'>
      {admin ? (
        <div>
          <h2 className='adminsInfo-title'>Admin Details</h2>
          <Link to={`/admin/${admin._id}/edit`}>
            <button className='edit-admin-btn'>Edit Admin</button>
          </Link>
          <p className='adminsInfo-1'><span className='adminsInfo-11'>Name :</span> <span className='adminsInfo-111'>{admin.name}</span></p>
          <p className='adminsInfo-2'><span className='adminsInfo-22'>Number:</span> <span className='adminsInfo-222'>{admin.number}</span></p>
          <p className='adminsInfo-3'><span className='adminsInfo-33'>Role:</span> <span className='adminsInfo-333'>{admin.role}</span></p>
          <p className='adminsInfo-4'><span className='adminsInfo-44'>Created At:</span> <span className='adminsInfo-444'>{new Date(admin.createdAt).toLocaleString()}</span></p>
          <p className='adminsInfo-5'><span className='adminsInfo-55'>Updated At:</span> <span className='adminsInfo-555'>{new Date(admin.updatedAt).toLocaleString()}</span></p>
          <div className='adminsInfo-6'>
            <strong className='adminsInfo-66'>Tags :- </strong>
            {admin.tags && admin.tags.length > 0 ? (
              <ul className='adminsInfo-666'>
                {admin.tags.map((tag, index) => (
                  <li key={index}>{tag}, </li>
                ))}
              </ul>
            ) : (
              <p className='adminsInfo-6666'>No tags assigned</p>
            )}

          </div>
          <div className='adminsInfo-7'>
            <AddTagToAdmin adminId={admin._id} />
            <RemoveTagFromAdmin adminId={admin._id} />
          </div>
          

        </div>
      ) : (
        <p>No admin found.</p>
      )}

        {/* <Link to={`/admin/${admin._id}/edit`}>
            <button>Edit Admin</button>
          </Link> */}
    </div>
  );
};

export default AdminDetail;

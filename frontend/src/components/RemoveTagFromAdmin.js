import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTagFromAdmin } from '../redux/slices/adminSlice';

const RemoveTagFromAdmin = ({ adminId}) => {
  const [tagName, setTagName] = useState('');  // Input field state
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.admin);

  const handleRemoveTag = (e) => {
    e.preventDefault();
    dispatch(removeTagFromAdmin({ adminId, tagName}));
      setTagName('');
  };

  return (
    <div className='add-tag-container'>
      <h3 className='add-tag-title'>Remove Tag from Admin</h3>
      <form onSubmit={handleRemoveTag}>
        <label>
          <input
          className='select-tag'
            type="text"
            value={tagName}
            onChange={(e) => setTagName(e.target.value)}
            placeholder="Enter tag name"
            required
          />
        </label>
        <button type="submit" className='add-tag-btn1' disabled={loading}>
          {loading ? 'Removing...' : 'Remove Tag'}
        </button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
     
    </div>
  );
};

export default RemoveTagFromAdmin;

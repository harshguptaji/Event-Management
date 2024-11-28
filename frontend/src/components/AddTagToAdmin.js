import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTagToAdmin} from '../redux/slices/adminSlice';
import { fetchAllTags } from '../redux/slices/tagSlice';
import "../styling/AdminDetail.css"


const AddTagToAdmin = ({ adminId }) => {
    const [selectedTag, setSelectedTag] = useState('');
    // const [tagName, setTagName] = useState('');
    const dispatch = useDispatch();
    const { error, loading } = useSelector((state) => state.admin);
    const { tags } = useSelector((state) => state.tag);

    useEffect(() => {
        dispatch(fetchAllTags());
      }, [dispatch]);

      const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedTag) {
          dispatch(addTagToAdmin({ adminId, tagName: selectedTag })); // Use selectedTag here
          setSelectedTag(''); // Clear the selection after submission
        }
      };

    return (
        <div className='add-tag-container'>
          <h3 className='add-tag-title'>Add Tag to Admin</h3>
          <form onSubmit={handleSubmit}>
           
             <label>
          <select
          className='select-tag'
            value={selectedTag}
            onChange={(e) => setSelectedTag(e.target.value)}
            required
          >
            <option value="">Select a tag</option>
            {tags.map((tag) => (
              <option key={tag._id} value={tag.name}>
                {tag.name}
              </option>
            ))}
          </select>
        </label>
            <button className='add-tag-btn1' type="submit" disabled={loading}>Add Tag</button>
          </form>

          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
      );
    };

export default AddTagToAdmin;


import React, { useState } from 'react';
import commentService from '../services/commentService';

const CommentFormComponent = ({ courseId, token }) => {
  const [content, setContent] = useState('');
  const [rating, setRating] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await commentService.createComment(courseId, content, rating, token);
      // Refresh comments after successful submission
      // Add logic here to refresh comments if needed
    } catch (error) {
      setErrorMessage('Failed to create comment. Please try again.');
    }
  };

  return (
    <div>
      <h2>Create Comment</h2>
      {errorMessage && <div>{errorMessage}</div>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="content">Content:</label>
        <textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} />
        <label htmlFor="rating">Rating:</label>
        <input type="number" id="rating" value={rating} onChange={(e) => setRating(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CommentFormComponent;

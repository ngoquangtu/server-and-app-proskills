// CommentListComponent.jsx

import React, { useState, useEffect } from 'react';
import adminService from '../services/adminService';

const CommentListComponent = ({ courseId }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const commentsData = await adminService.getAllComments();
        // Ensure commentsData is an array
        if (Array.isArray(commentsData)) {
          setComments(commentsData);
        } else {
          setComments([]);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching comments:', error);
        setError('Error fetching comments. Please try again later.');
        setLoading(false);
      }
    };

    fetchComments();
  }, [courseId]); // Re-fetch comments when courseId changes

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>All Comments</h2>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>
            <p>Comment ID: {comment.id}</p>
            <p>Video ID: {comment.video_id}</p>
            <p>Course ID: {comment.course_id}</p>
            <p>Comment Text: {comment.comment_text}</p>
            <p>Rating: {comment.rating}</p>
            <p>Created At: {new Date(comment.create_at).toLocaleString()}</p>
            <hr />
          </li>        ))}
      </ul>
    </div>
  );
};

export default CommentListComponent;

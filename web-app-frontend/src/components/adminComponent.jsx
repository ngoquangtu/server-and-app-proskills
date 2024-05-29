// AdminComponent.jsx

import React from 'react';
import { useParams } from 'react-router-dom';
import CommentFormComponent from './CommentFormComponent ';
import CommentListComponent from './CommentListComponent';


const AdminComponent = ({ token }) => {
  const { courseId } = useParams();
token={token}
  return (
    <div>
      <h1>Admin Component</h1>
      <h2>Admin Role</h2>
      <h3> Test ci/cd</h3>
      <h3>1234</h3>
      <CommentFormComponent courseId={courseId}  />
      <CommentListComponent  />
    </div>
  );
};

export default AdminComponent;

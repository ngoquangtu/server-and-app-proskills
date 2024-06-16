const db=require('../public/db');

const Comment=
{
    delete:async(id,userId,courseId) =>
    {
        try
        {
            const query='DELETE FROM comments_course WHERE id=? AND userId=? AND course_id=?';
            const rows=await db.query(query,[id,userId,courseId]);
            return rows;
        }
        catch(err)
        {
            throw err;
        }
    },
    create:async(course_id,id,comment)=>
    {
        try
        {
            const query='INSERT INTO comments_course  (course_id, userId, comment_text) VALUES (?, ?, ?)';
            const rows=await db.query(query,[course_id,id,comment]);
            return rows;
        }
        catch(err)
        {
            throw err;

        }
    },
};
module.exports=Comment;
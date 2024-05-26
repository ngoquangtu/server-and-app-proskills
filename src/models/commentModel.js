const db=require('../public/db');

const Comment=
{
    delete:async(id) =>
    {
        try
        {
            const query='DELETE * from comments where id=?';
            const rows=await db.query(query,[id]);
            return rows;
        }
        catch(err)
        {
            throw err;
        }
    },
    create:async(course_id,id,comment,rating)=>
    {
        try
        {
            const query='INSERT INTO comments (course_id, user_id, comment, rating) VALUES (?, ?, ?, ?)';
            const rows=await db.query(query,[course_id,id,comment,rating]);
            return rows;
        }
        catch(err)
        {
            throw err;

        }
    },
    getAllComment:async(course_id)=>
    {
        try
        {
            const query='SELECT comments.*, users.username, users.email FROM comments JOIN users ON comments.user_id = users.id WHERE course_id = ?';
            const rows=await db.query(query,[course_id]);
            return rows[0];
        }
        catch(err)
        {
            throw err;
        }
    }
};
module.exports=Comment;
const db=require('../public/db');

const Comment=
{
    delete:async(id) =>
    {
        try
        {
            const query='DELETE  from comments where id=?';
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
    getAllComment:async(id)=>
    {
        const query='SELECT comments.*, video.title AS video_title FROM comments JOIN video ON comments.video_id = video.id JOIN courses ON video.course_id = courses.id WHERE comments.course_id = ?';
        try
        {   
            const rows=await db.query(query,[id]);
            // console.log(rows);
            return rows;
        }
        catch(err)
        {
            throw err;
        }
    },
    getAllCommentbyAdmin:async()=>
    {
        const query='SELECT * FROM comments';
        try
        {
            const rows=await db.query(query);
            return rows;
        }
        catch(err)
        {
            throw err;
        }
    }
};
module.exports=Comment;
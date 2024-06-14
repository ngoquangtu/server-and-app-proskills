const db=require('../public/db');

const Comment=
{
    delete:async(id) =>
    {
        try
        {
            const query='DELETE  from comments_video where id=?';
            const rows=await db.query(query,[id]);
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
            const query='INSERT INTO comments_video (course_id, userId, comment) VALUES (?, ?, ?)';
            const rows=await db.query(query,[course_id,id,comment]);
            return rows;
        }
        catch(err)
        {
            throw err;

        }
    },
    getAllComment:async(id)=>
    {
        const query='SELECT comments_video.*, video.title AS video_title FROM comments_video LEFT JOIN video ON comments_video.video_id = video.id JOIN courses ON video.course_id = courses.id WHERE comments_video.course_id = ?';
        try
        {   
            const rows=await db.query(query,[id]);
            return rows;
        }
        catch(err)
        {
            throw err;
        }
    },
    getAllCommentbyAdmin:async()=>
    {
        const query='SELECT * FROM comments_video';
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
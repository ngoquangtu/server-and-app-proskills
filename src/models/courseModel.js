const db=require('../public/db.js');

const Course=
{
    create: async (course) => {
        const { title, description, content } = course;
        const query = 'INSERT INTO courses (title, description, content) VALUES (?, ?, ?)';
        const values = [title, description, content];
        try {
            const result = await db.query(query, values);
            return result;
        } catch (err) {
            throw err;
        }
    },
    getAll: async () => {
        const query = 'SELECT * FROM courses';

        try {
            const results = await db.query(query);
            return results;
        } catch (err) {
            throw err;
        }
    },
    getById: async (id) => {
        const query = 'SELECT * FROM courses WHERE id = ?';

        try {
            const results = await db.query(query, [id]);
            return results[0];
        } catch (err) {
            throw err;
        }
    },
    update: async (id, course) => {
        const { title, description, content } = course;
        const query = 'UPDATE courses SET title = ?, description = ?, content = ? WHERE id = ?';
        const values = [title, description, content, id];

        try {
            const result = await db.query(query, values);
            return result[0];
        } catch (err) {
            throw err;
        }
    },
    delete: async (id) => {

   
        const query2= 'DELETE FROM Comments_video WHERE course_id = ?';
        const query3='DELETE FROM Video WHERE course_id = ?';
        const query4='DELETE FROM Enrollments WHERE course_id = ?';
        const query5='DELETTE FROM Comments_course WHERE course_id=?'
        const query = 'DELETE FROM courses WHERE id = ?';
        try {
            await db.query(query2,[id]);
            await db.query(query3,[id]);
            await db.query(query4,[id]);
            await db.query(query5,[id]);
            const result = await db.query(query, [id]);
            return result[0];
        } catch (err) {
            throw err;
        }
    },
    calculateRateofCourse: async(id)=>
    {
        const query='SELECT AVG(rating) FROM rating_of_course WHERE course_id = ?';
        const query1='INSERT INTO courses (rating) VALUES (?, ?, ?, ?) where course_id=?';
        try
        {
            const result=await db.query(query,[id]);
            const result1=await db.query(query1,[result[0],id]);
            return result1[0];
        }
        catch(err)
        {
            throw err;
        }
    },
    getAllCommentofCourse:async(id)=>
    {
        const query='SELECT comments_course.*, users.username AS username FROM comments_course JOIN users ON comments_course.user_id = users.id WHERE comments_course.course_id = ?';
        try
        {
            const rows=await db.query(query,[id]);
            return rows;
        }
        catch(err)
        {
            throw err;
        }
    }
}
module.exports=Course;
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
    calculateRateofCourse: async (id) => {
        const query = 'SELECT AVG(rating) AS average_rating FROM rating_of_course WHERE course_id = ?';
        const query1 = 'UPDATE courses SET rating = ? WHERE id = ?';
        
        try {
            const result = await db.query(query, [id]);
            const averageRating = result.length > 0 ? result[0].average_rating: 0;
            
            if (averageRating !== null) {
                await db.query(query1, [averageRating, id]);
            }
        } catch (error) {
            throw error;
        }
    },
    getAllCommentofCourse:async(id)=>
    {
        const query='SELECT comments_course.*, users.username AS username FROM comments_course LEFT JOIN users ON comments_course.user_id = users.id WHERE comments_course.course_id = ?';
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
    getFiveTopCoursesbyRating :async()=>
    {
        const query='SELECT Courses.*,COUNT(Enrollments.user_id) as subcribeNum FROM Courses  LEFT JOIN Enrollments ON Courses.id = Enrollments.course_id GROUP BY Courses.id  ORDER BY rating DESC LIMIT 5';
        try
        {
            const rows=await db.query(query);
            return rows;
        }
        catch(err)
        {
            throw err;
        }
    },
    getFiveTopCoursesbyEnrollments:async()=>
    {
        const query='SELECT course_id,COUNT(user_id) as enrollment_count FROM Enrollments GROUP BY course_id  ORDER BY enrollment_count DESC LIMIT 5';
        const query1='SELECT  courses.*,COUNT(enrollments.user_id) as subcribeNum FROM courses LEFT JOIN enrollments ON courses.id=enrollments.course_id  WHERE courses.id = ?' ;
        try
        {
            const rows=await db.query(query);
            const topCourses=[];
            for(const row of rows)
            {
                const courseDetails = await db.query(query1, [row.course_id]);
                topCourses.push(courseDetails[0]);
            }
            return  topCourses;
        }
        catch(err)
        {
            throw err;
        }
    },
    getFiveTopCoursesByComments:async()=>
    {
        const query='SELECT course_id,COUNT(userId) as comment_count FROM comments_course GROUP BY course_id ORDER BY comment_count DESC LIMIT 5';
        const query1='SELECT courses.*,COUNT(enrollments.user_id) as subcribeNum  FROM courses  LEFT JOIN enrollments ON courses.id=enrollments.course_id WHERE courses.id = ?'
        try
        {       
            const rows=await db.query(query);
            const topCourses=[];
            for(const row of rows)
                {
                    const courseDetails = await db.query(query1, [row.course_id]);
                    topCourses.push(courseDetails[0]);
                }
            return topCourses;
        }
        catch(err)
        {
            throw err;
        }
    },
    getAllCourseByEnrollments:async(id)=>
    {
        const query='SELECT courses.* FROM courses JOIN enrollments ON courses.id=enrollments.course_id WHERE enrollments.user_id = ?'
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
    

}
module.exports=Course;
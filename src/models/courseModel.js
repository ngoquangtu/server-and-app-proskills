const db=require('../public/db.js');

const Course=
{
    create: async (course) => {
        const { title, description, content, createdBy } = course;
        const query = 'INSERT INTO courses (title, description, content, created_by) VALUES (?, ?, ?, ?)';
        const values = [title, description, content, createdBy];

        try {
            const result = await db.query(query, values);
            return result[0];
        } catch (err) {
            throw err;
        }
    },
}
module.exports=Course;
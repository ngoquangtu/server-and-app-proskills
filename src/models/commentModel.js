const db=require('../public/db');

const Comment=
{
    delete:async(id) =>
    {
        try
        {
            const query='DELETE * from comments where id=?';
            const rows=await db.query(query,[id]);
            return rows[0];
        }
        catch(err)
        {
            throw err;
        }
    },
    create:async(id)=>
    {
        try
        {
            const query='INSERT INTO ';
            const rows=await db.query(query,[id]);
            return rows[0];
        }
        catch(err)
        {
            throw err;

        }
    }
    

};
module.exports=Comment;
    
const Course = require('../models/courseModel');


exports.getAllCourses = async (req, res) => {
    try {
        const courses = await Course.getAll();
        
        res.status(200).json(courses);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching courses', error: err.message });
    }
};

exports.getCourseById = async (req, res) => {
    try {
        const { id } = req.params;
        await Course.calculateRateofCourse(id);
        const numberofUserRating=await Course.getNumberUserofRatingCourses(id);
        const numberofVideo=await Course.getNumberVideoOfCourse(id);
        const course = await Course.getById(id);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }
        res.status(200).json({course,numberofRating:numberofUserRating,numberofVideo:numberofVideo});
    } catch (err) {
        res.status(500).json({ message: 'Error fetching course', error: err.message });
    }
};  
exports.getAllComments = async (req, res) => {
    try {
        const { id } = req.params;
        const comments = await Course.getAllCommentofCourse(id);
        const commentsWithOwnership = comments.map(comment => {
            return {
                ...comment,
                owned: comment.userId === req.user?.userId
            };
        });
    
        res.status(200).json(commentsWithOwnership);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching comments', error: err.message });
    }
};
exports.getAllCourseByRating= async(req,res)=>
{
    try
    {
        const courses=await Course.getFiveTopCoursesbyRating();
        res.status(200).json(courses);
    }
    catch(err)
    {
        res.status(500).json({message:'Error get course by rating',error:err.message});
    }
}
exports.gellAllCourseByComment= async(req,res)=>
{
    try
    {
        const courses=await Course.getFiveTopCoursesByComments();
        res.status(200).json(courses);
    }
    catch(err)
    {
        res.status(500).json({message:'Error get course by comment',error:err.message});
    }
}
exports.gellAllCourseByEnrollments= async(req,res)=>
{
    try
    {
        const courses=await Course.getFiveTopCoursesbyEnrollments();
        res.status(200).json(courses);
    }
    catch(err)
    {
        res.status(500).json({message:'Error get course by enrollments',error:err.message});
    }
}
exports.getAllCourseEnrollmentsOfUsers = async (req, res) => {
    try {
        // const { id } = req.params;
        const id=req.user?.userId;
        
        const enrollments = await Course.getAllCourseByEnrollments(id);
        res.status(200).json(enrollments);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching enrollments', error: err.message });
    }
}
exports.getAllVideoByCourse= async(req,res)=>
{
    try
    {
        const {id}=req.params;
        const videos=await Course.getAllVideoByCourse(id);
        res.status(200).json(videos);
    }
    catch(err)
    {
        res.status(500).json({message:'Error get video by course',error:err.message});
    }
}
exports.enrollCourse= async(req,res)=>
{
    try
    {
        const id=req.user?.userId;
        const {courseId}=req.body;
        const checkenroll= await Course.checkEnrollCourseById(courseId,id);
        if(checkenroll)
        {
            const result=await Course.enrollCourseById(courseId,id);
            res.status(200).json(result);
        }
        else
        {
            res.status(403).json({message:'khoa hoc da them roi '});
        }
        
    }
    catch(err)
    {
        res.status(500).json({message:'Error enroll course',error:err.message});
    }
}
exports.createRating=async(req,res)=>
    {
        try
        {
            const {rating}=req.body;
            const courseId=req.params.courseId;
            const userId=req.user?.userId;
            const checkRating= await Course.checkRatingUsed(courseId,userId);
            if(checkRating)
            {
                const result=await Course.createRating(courseId,rating,userId);
                res.status(200).json(result);
            }
            else
            {
                res.status(403).json({message:'khoa hoc da them rating  roi '});
            }


        }
        catch(err)
        {
            res.status(500).json({message:'Error create rating',error:err.message});
        }
    }
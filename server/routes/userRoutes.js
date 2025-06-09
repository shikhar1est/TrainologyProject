import express from "express";
import { getUserData, userEnrolledCourses,purchaseCourse,
     getUserCourseProgress, updateUserCourseProgress, AddUserRating } from "../controllers/userController.js";

const userRouter=express.Router()

userRouter.get('/data',getUserData)
userRouter.get('/enrolled-courses',userEnrolledCourses)
userRouter.post('/purchase',purchaseCourse)
userRouter.post('/update-course-progress',updateUserCourseProgress)
userRouter.post('/get-course-progress',getUserCourseProgress)
userRouter.post('/add-rating',AddUserRating)

export default userRouter;
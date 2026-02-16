import { Router } from "express";
import { loginUser, logoutUser, refreshAccessToken, registerUser } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer-midleware.js";
import { verifyjWT } from "../middlewares/auth.middleware.js";

const router = Router() 
 

router.route("/register").post(
    upload.fields([
     {
        name : "avatar",
        maxCount : 1
     }, 
     {
        name: "coverImage",
        maxCount: 1
     }
    ]),
    registerUser
)


router.route("/login").post(loginUser)

//secured routes
router.route("/logout").post(verifyjWT, logoutUser)
router.route("/refresh-token").post(refreshAccessToken)


export default router



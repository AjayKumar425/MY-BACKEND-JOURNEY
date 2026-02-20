import { Router } from "express";
import { 
   changeCurrentPassword, getCurrentUser, getUserChannerlProfile, getWatchHistory, loginUser, logoutUser, refreshAccessToken, registerUser, updateAccountDetails, updateUserAvatar, updateUserCoverImage } from "../controllers/user.controller.js";
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
router.route("/change-password").post(verifyjWT , changeCurrentPassword)
router.route("/current-user").get(verifyjWT , getCurrentUser)
router.route("/update-account").patch(verifyjWT , updateAccountDetails)
router.route("/avatar").patch(verifyjWT , upload.single ("avatar") , updateUserAvatar )
router.route("/cover-image").patch(verifyjWT , upload.single("coverImage") , updateUserCoverImage)
router.route("/c/:username").get(verifyjWT , getUserChannerlProfile)
router.route("/history").get(verifyjWT , getWatchHistory)

export default router



import mongoose ,{Schema} from "mongoose";
import mogooseAggregatePaginate from "mongoose-aggregate-paginate-v2"
import { User } from "./user.model";

const videoSchema  = new Schema(
    {
        videoFile : {
            type : String,//cloudinary url
            required : true
        },
        thumbnail : {
            type : String , //cld
            required : ture 
        },
        title :{
            type: String,
            required : true
        },
        description : {

            type : String,
            required : true
        },
        duration : {
            type : Number , //cld url
            required : true 
        },

        views : {
            type : Number , 
            default : 0
        },
        isPublished : {
            type : Boolean,
            default : true
        },
        owner : {
            type : Schema.Types.ObjectId,
            ref : User
        }
    }
    

)


videoSchema

export const Video = mongoose.model("Video" , videoSchema)
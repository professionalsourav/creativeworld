
import { createError } from "../middlewares/error.js";
import User from "../models/userModel.js";
import Video from "../models/Video.js";



export const update = async (req, res, next) => {
   if (req.params.id === req.user.id) {
     try {
       const updatedUser = await User.findByIdAndUpdate(
         req.params.id,
         {
           $set: req.body,
         },
         { new: true }
       );
       res.status(200).json(updatedUser);
     } catch (err) {
       next(err);
     }
   } else {
     return next(createError(403, "You can update only your account!"));
   }
 };

 export const deleteUser = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("User has been deleted.");
    } catch (err) {
      next(err);
    }
  } else {
    return next(createError(403, "You can delete only your account!"));
  }
};

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

export const subscribe = async (req, res, next) => {
  try {
    await User.findByIdAndUpdate(req.user.id, {
      $push: { subscribedUsers: req.params.id },
    });
    await User.findByIdAndUpdate(req.params.id, {
      $inc: { subscribers: 1 },
    });
    res.status(200).json("Subscription successfull.")
  } catch (err) {
    next(err);
  }
};

export const unsubscribe = async (req, res, next) => {
  try {
    try {
      await User.findByIdAndUpdate(req.user.id, {
        $pull: { subscribedUsers: req.params.id },
      });
      await User.findByIdAndUpdate(req.params.id, {
        $inc: { subscribers: -1 },
      });
      res.status(200).json("Unsubscription successfull.")
    } catch (err) {
      next(err);
    }
  } catch (err) {
    next(err);
  }
};

export const like = async (req, res, next) => {
  const id = req.user.id;
  const videoId = req.params.videoId;
  try {
    await Video.findByIdAndUpdate(videoId,{
      $addToSet:{likes:id},
      $pull:{dislikes:id}
    })
    res.status(200).json("The video has been liked.")
  } catch (err) {
    next(err);
  }
};

export const dislike = async (req, res, next) => {
    const id = req.user.id;
    const videoId = req.params.videoId;
    try {
      await Video.findByIdAndUpdate(videoId,{
        $addToSet:{dislikes:id},
        $pull:{likes:id}
      })
      res.status(200).json("The video has been disliked.")
  } catch (err) {
    next(err);
  }
};

export const allUser = async (req,res) =>{
try {

  const users = await User.find({});
  return res.status(200).json({
    count: users.length,
    data: users
  })
  
} catch (error) {
  console.log(error.message);
  res.status(500).send({message: error.message})
  
}
};

export const oneUser = async(req, res) => {
  try {
    const {id} = req.params;

    const user = await User.findById(id);
    return res.status(200).json(user);
  } catch (error) {
    console.log(error.message)
    res.status(500).json({message: error.message})
  }
}
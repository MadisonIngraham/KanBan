import mongoose from "mongoose";
import Comment from "./Comment";
let Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;
let _commentRepo = mongoose.model("Comment", Comment);

const Task = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    authorId: { type: ObjectId, ref: "User", required: true },
    boardId: { type: ObjectId, ref: "Board", required: true },
    listId: { type: ObjectId, ref: "List", required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

//CASCADE ON DELETE
Task.pre("findOneAndRemove", function(next) {
  //lets find all the lists and remove them
  Promise.all([_commentRepo.deleteMany({ taskId: this._conditions._id })])
    .then(() => next())
    .catch(err => next(err));
});

export default Task;

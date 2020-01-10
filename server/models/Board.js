import mongoose from "mongoose";
import List from "./List";
import Comment from "./Comment";
import Task from "./Task";
import _listsService from "../services/ListsService";
let Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;
let _listRepo = mongoose.model("List", List);
let _commentRepo = mongoose.model("Comment", Comment);
let _taskRepo = mongoose.model("Task", Task);

const Board = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    authorId: { type: ObjectId, ref: "User", required: true }
  },
  { timestamps: true }
);

//CASCADE ON DELETE
Board.pre("findOneAndRemove", function(next) {
  //lets find all the lists and remove them
  Promise.all([
    _listRepo.deleteMany({ boardId: this._conditions._id }),
    _taskRepo.deleteMany({ boardId: this._conditions._id }),
    _commentRepo.deleteMany({ boardId: this._conditions._id })
  ])
    .then(() => next())
    .catch(err => next(err));
});

export default Board;

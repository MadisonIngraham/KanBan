import mongoose from "mongoose";
import Comment from "../models/Comment";
import ApiError from "../utils/ApiError";

const _repository = mongoose.model("Comment", Comment);

class CommentsService {
  async getCommentsByTask(id) {
    return await _repository.find({ taskId: id });
  }

  async getById(id) {
    let data = await _repository.findOne({ _id: id });
    if (!data) {
      throw new ApiError("Invalid ID or you do not own this board", 400);
    }
    return data;
  }

  async create(rawData) {
    let data = await _repository.create(rawData);
    return data;
  }

  async edit(id, boardId, update) {
    let data = await _repository.findOneAndUpdate(
      { _id: id, boardId: boardId },
      update,
      { new: true }
    );
    if (!data) {
      throw new ApiError("Invalid ID or you do not own this board", 400);
    }
    return data;
  }

  async delete(id, userId) {
    let data = await _repository.findOneAndRemove({
      _id: id,
      authorId: userId
    });
    if (!data) {
      throw new ApiError("Invalid ID or you do not own this board", 400);
    }
  }
}

const _commentsService = new CommentsService();
export default _commentsService;

import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema(
  {
    // this 'userId' indicates who created this post.
    userId: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      max: 500,
    },
    img: {
      type: String,
    },
    postLikersIdArray: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true },
);

const postModel = mongoose.model('Post', PostSchema);
export default postModel;

import {Router} from 'express'
const router = Router();

import {getPosts, createdPost, getPost, deletePost, updatePost} from '../controllers/post.controller'

router.route('/')
    .get(getPosts)
    .post(createdPost);


router.route('/:postId')
    .get(getPost)
    .delete(deletePost)
    .put(updatePost);

export default router;
import { Router } from 'express';

import {signup, signIn, profile} from '../controllers/authcontroller'
import {TokenValidation} from '../libs/validateToken'
const router: Router = Router();


router.post('/signup', signup)

router.post('/signin', signIn)

router.get('/profile', TokenValidation, profile)

export default router;



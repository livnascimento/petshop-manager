import express from 'express';
import {validateRequestBody} from '../../shared/middlewares/validate';
import { userSchema } from '../../schemas/user.schema';

const userRoutes = express();

userRoutes.post('/user', validateRequestBody(userSchema));

export default userRoutes;
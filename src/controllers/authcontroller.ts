import { Request, Response } from 'express';
import {User , IUser} from '../models/User';

import jwt from 'jsonwebtoken'
import { connect } from '../database';

export const signup = async (req: Request, res: Response) => {
    const conn = await connect();
    const user: IUser = new User(
        req.body.username,
        req.body.email,
        req.body.password
    )
    user.password = await user.encryptPassword(user.password)
    //saving
    await conn.query('INSERT INTO users SET ?',[user]);
    return res.json({
        message: 'User created sucess'
    })

}

 export const signIn = async (req: Request, res: Response) => {
    /* const user: IUser = new User ({
        
    }) */
}


export const profile = async (req: Request, res: Response) => {
    /* const user: IUser = new User ({
        
    }) */
}


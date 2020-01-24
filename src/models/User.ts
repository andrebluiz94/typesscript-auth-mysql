import bcrypt from "bcryptjs";

export interface IUser {
    username: string;
    email: string;
    password: string;
    encryptPassword(password: string): Promise<string>
    validatePassword(password: string): Promise<boolean>
}

export class User implements IUser{
    username: string;
    email: string;
    password: string;
    
    constructor( username: string,  email: string, password: string){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    
    async encryptPassword(password: string): Promise<string> {
        const salt = await bcrypt.genSalt(10)
        return bcrypt.hash(password, salt)
    };

    async validatePassword(password: string): Promise<boolean>{
        return await bcrypt.compare(password, this.password)
    }
}
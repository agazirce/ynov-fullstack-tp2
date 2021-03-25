import {IUser} from "../user/user.model";
import {sign, verify} from "jsonwebtoken";

const secretKey = 'abcdef';

export interface ITokenPayload extends IUser{

}

export const generateToken = (tokenPayload: ITokenPayload): Promise<string> => {
    return new Promise((resolve, reject) => {
        sign(tokenPayload, secretKey, (error, token) => {
            if (error) {
                reject(error);
            } else {
                resolve(token);
            }
        });
    });
}

export const checkToken = (token: string): Promise<ITokenPayload> => {
    return new Promise((resolve, reject) => {
        verify(token, secretKey, (error, payload) => {
            if (error) {
                reject(error);
            } else {
                resolve(payload as ITokenPayload);
            }
        });
    });
}

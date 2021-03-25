import {userRepository} from "../user/user.repository";
import {ErrorType} from "../common/error/error.model";
import {IAuthCredentials, IAuthToken} from "./auth.model";
import {generateToken} from "../token/token.service";

class AuthService {
    login(credentials: IAuthCredentials): Promise<IAuthToken> {
        return userRepository.findByEmailAndPassword(credentials.email, credentials.password)
            .then(user => generateToken({
                id: user.id,
                email: user.email,
                password: user.password
            }))
            .then(token => ({ token }))
            .catch(error => {
                console.log(error);
                return Promise.reject({ type: ErrorType.invalidCredentials });
            });
    }
}

export const authService = new AuthService();

import {AbstractRepository} from "../common/abstract.repository";
import {User, IUser} from "./user.model";

class UserRepository extends AbstractRepository<IUser>{
    protected modelClass = User;

    findByEmailAndPassword(email: string, password: string) {
        return this.modelClass.findOne({
            where: {
                email: email,
                password: password
            }
        }).then(item => item)
    }
}

export const userRepository = new UserRepository();

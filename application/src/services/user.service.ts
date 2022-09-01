import { User } from '../models/user.model';
import http from '../core/http.core'

export class UserService {

    private readonly path: string = '/users'

    async get(): Promise<User> {
        const { data } = await http.get<User>(`${this.path}`);
        return data
    }

}

import { Authentication, SignUp } from '../models/authentication.model';
import http from '../core/http.core'

export class AuthenticationService {

    private readonly path: string = '/auth'

    async signIn(props: { email: string, password: string }): Promise<Authentication> {
        const { data } = await http.post<Authentication>(`${this.path}/sign-in`, props)
        return data
    }

    async signUp(props: SignUp): Promise<void> {
        await http.post(`${this.path}/sign-up`, props)
    }

}
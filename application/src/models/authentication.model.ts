
export type Authentication = {
    access: string
    refresh: string
}

export type SignIn = {
    email: string
    password: string
}

export type SignUp = {
    email: string
    password: string
    confirmPassword?: string
    firstName: string
    lastName: string
}

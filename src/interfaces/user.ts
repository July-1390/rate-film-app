export interface User {
    username: string
    email: string
    is_enabled: boolean
}

export interface ErrorDetail {
    loc: string[]
    msg: string
    type: string
}

export interface UserCreateErrorResponse {
    detail: ErrorDetail[]
}

export interface AccessToken {
    access_token: string,
    token_type: string
}
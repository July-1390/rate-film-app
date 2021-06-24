export interface User {
    username: string
    email: string
    is_enabled: boolean
}

export interface ErrorDetail {
    error_code: number
    error_text: string
}

export interface UserCreateErrorResponse {
    detail: ErrorDetail
}
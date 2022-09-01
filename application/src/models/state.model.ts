export enum StateData {
    Loading = 'loading',
    Success = 'success',
    Failed = 'failed'
}

export enum HttpStatus {
    SUCCESS = 'Success',
    BAD_REQUEST = 'Bad_Request',
    FORBBIDEN = 'Forbbiden',
    NOT_FOUND_API = 'Not_Found_Api',
    NOT_FOUND_RESOURCE = 'Not_Founed_Resource',
    RESOURCE_CONFLICT = 'Resource_Conflict',
    INTERNAL_ERROR = 'Internal_Error',
    NON_AUTH = 'Non_Authenticatoin'
}

export type ResponseError = {
    code?: number
    status?: HttpStatus
    error?: string
    message?: string
}

export type GenericStateData<T> = {
    state: StateData,
    data?: T,
    error?: ResponseError
}
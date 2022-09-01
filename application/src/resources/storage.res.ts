import { Authentication } from '../models/authentication.model'

const accessKey = 'access_key'
const refreshKey = 'refresh_key'

export const saveToken = (auth: Authentication): void => {
    sessionStorage.setItem(accessKey, auth.access)
    sessionStorage.setItem(refreshKey, auth.refresh)
}
export const getAccessToken = (): string => sessionStorage.getItem(accessKey) || ''
export const getRefreshToken = (): string => sessionStorage.getItem(refreshKey) || ''
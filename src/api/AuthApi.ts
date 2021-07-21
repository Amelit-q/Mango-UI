import axios, {AxiosInstance} from "axios"
import {ApiRoute, AuthRoutes} from "../consts/Routes"

export class AuthApi {

    // @ts-ignore
    protected headers: {
        "Content-type": "application/json"
    }

    protected apiConnector: AxiosInstance

    public constructor() {
        this.apiConnector = axios.create({headers: {}, baseURL: ApiRoute.apiDomain})
    }

    public async register(data: any) {
        try {
            const res: {data: any} = await this.apiConnector.post(
                AuthRoutes.postRegister, data, {headers: this.headers},
            )
            return Promise.resolve(res.data)

        } catch (error) {
            return Promise.reject(error)
        }
    }

    public async login(email: string, password: string) {

        try {
            const res: {data: string} = await this.apiConnector.post(AuthRoutes.postLogin, {
                "email": email,
                "password": password,
            }, {headers: this.headers})
            return Promise.resolve(res.data)
        } catch (error) {
            return Promise.reject(error)
        }

    }

    public async verifyEmail(data: any) {
    }

    public async verifyPhone(data: any) {
    }

    public async refreshToken(refreshToken: string) {
        try {
            const res: {data: string} = await this.apiConnector.post(AuthRoutes.postRefreshToken, {"refreshTokenId": refreshToken}, {headers: this.headers})
            return Promise.resolve()
        } catch (error) {
            return Promise.reject(error)

        }
    }

    public async logout(data: any) {
    }

    public async logoutAll(data: any) {
    }

}

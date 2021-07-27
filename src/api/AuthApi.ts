import axios, {AxiosInstance} from "axios"
import {ApiRoute, AuthRoutes} from "../consts/Routes"
import {RegisterCommand} from "../types/Auth/Requests/RegisterCommand"
import {LoginCommand} from "../types/Auth/Requests/LoginCommand"
import {RefreshTokenCommand} from "../types/Auth/Requests/RefreshTokenCommand"
import {VerifyEmailCommand} from "../types/Auth/Requests/VerifyEmailCommand"

export class AuthApi {
    protected headers: {
        "Content-Type": "application/json"
    } = {
        "Content-Type": "application/json",
    }

    protected apiConnector: AxiosInstance

    public constructor() {
        this.apiConnector = axios.create({headers: this.headers, baseURL: ApiRoute.apiDomain})
    }

    public async register(data: RegisterCommand) {
        try {
            // @ts-ignore
            const res: {data: string} = await this.apiConnector.post(
                AuthRoutes.postRegister,
                {
                    phoneNumber: data.phoneNumber,
                    email: data.email,
                    displayName: data.displayName,
                    password: data.password,
                    verificationMethod: data.verificationMethod,
                    termsAccepted: data.termsAccepted,
                },
                {headers: this.headers},
            )

            return Promise.resolve(res.data)
        } catch (error) {
            if (error && error.response) {
                let errorText = ""
                switch (error.response.status) {
                    case 401:
                        errorText = "Wrong login or password"
                        break
                    case 403:
                        errorText = "Access denied"
                        break
                    default:
                        errorText = error.response.status
                        break
                }
                console.log("One of the Error messages from Register Request: ", errorText)
            }

            return Promise.reject(error)
        }
    }

    public async login(data: LoginCommand) {
        try {
            const res: {data: string} = await this.apiConnector.post(
                AuthRoutes.postLogin,
                {
                    email: data.email,
                    password: data.password,
                },
                {headers: this.headers},
            )
            return Promise.resolve(res.data)
        } catch (error) {
            if (error && error.response) {
                let errorText = ""
                switch (error.response.status) {
                    case 401:
                        errorText = "Wrong login or password"
                        break
                    case 403:
                        errorText = "Access denied"
                        break
                    default:
                        errorText = error.response.status
                        break
                }
                console.log("One of the Error messages from Register Request: ", errorText)
            }
            return Promise.reject(error)
        }
    }

    public async verifyEmail(data: VerifyEmailCommand) {

        try {
            const res: {data: string} = await this.apiConnector.post(AuthRoutes.verifyEmail, {email: data.email, userId: data.userId}, {headers: this.headers})
            return Promise.resolve(res.data)
        } catch (error) {

            if (error && error.response) {
                let errorText = ""
                switch (error.response.status) {
                    case 401:
                        errorText = "Wrong login or password"
                        break
                    case 403:
                        errorText = "Access denied"
                        break
                    default:
                        errorText = error.response.status
                        break
                }
                console.log("One of the Error messages from Register Request: ", errorText)
            }

            return Promise.reject(error)
        }


    }

    public async verifyPhone(data: any) {
    }

    public async refreshToken(data: RefreshTokenCommand) {
        try {
            // eslint-disable-next-line
            const res: {data: string} = await this.apiConnector.post(AuthRoutes.postRefreshToken, {refreshTokenId: data.refreshTokenId}, {headers: this.headers})

            return Promise.resolve()
        } catch (error) {
            if (error && error.response) {
                let errorText = ""
                switch (error.response.status) {
                    case 401:
                        errorText = "Wrong login or password"
                        break
                    case 403:
                        errorText = "Access denied"
                        break
                    default:
                        errorText = error.response.status
                        break
                }
                console.log("One of the Error messages from Register Request: ", errorText)
            }
            return Promise.reject(error)
        }
    }

    public async logout(data: any) {
    }

    public async logoutAll(data: any) {
    }
}

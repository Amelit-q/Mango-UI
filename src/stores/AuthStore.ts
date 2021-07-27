import {action, makeAutoObservable, observable} from "mobx"
import {AuthApi} from "../api/AuthApi"
import {RegisterCommand} from "../types/Auth/Requests/RegisterCommand"

export class AuthStore {
    private registrationApi = new AuthApi()

    @observable
    private _message: String | null = null

    @observable
    private _success: Boolean = false

    @observable
    private _userId: String | null = null

    @observable
    private _login: String | null = null

    @observable
    private _isLogged: boolean = false

    @action
    public setMessage = (message: string) => {
        this._message = message
    }

    @action
    public setSuccess = (success: boolean) => {
        this._success = success
    }

    @action
    public setUserId = (userId: string) => {
        this._userId = userId
    }

    public async registration(data: RegisterCommand) {
        try {

            // @ts-ignore
            const {message, success, userId} = await this.registrationApi.register(data)
            this.setMessage(message)
            this.setSuccess(success)
            this.setUserId(userId)
            return Promise.resolve()
        } catch (error) {
            return Promise.reject(error)
        }
    }

    public async verifyEmail() {
        try {

            return Promise.resolve()

        } catch (error) {
            return Promise.reject(error)
        }
    }

    public constructor() {
        makeAutoObservable(this)
    }
}

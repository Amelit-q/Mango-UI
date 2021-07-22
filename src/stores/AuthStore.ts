import {makeAutoObservable, observable} from "mobx"
import {AuthApi} from "../api/AuthApi"
import {RegisterCommand} from "../types/Auth/Requests/RegisterCommand"

export class AuthStore {

    private registrationApi = new AuthApi()


    @observable
    private _login: String | null = null

    @observable
    private _isLogged: boolean = false


    public async registration(data: RegisterCommand) {
        try {
            const res = await this.registrationApi.register(data)
        } catch (error) {
            return Promise.reject(error)
        }
    }

    public constructor() {
        makeAutoObservable(this)

    }


}

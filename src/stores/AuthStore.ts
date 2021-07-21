import {observable} from "mobx"
import {AuthApi} from "../api/AuthApi"

export class AuthStore {

    private registrationApi = new AuthApi()


    @observable
    private _login: String | null = null

    @observable
    private _isLogged: boolean = false


    // public async registration(data: RegisterCommand) {
    //     try {
    // const res = await this.registrationApi.register()
    // catch (error) {
    //    return Promise.reject(error)
    // }
    // }


}

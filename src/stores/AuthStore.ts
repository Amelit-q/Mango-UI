import {observable} from "mobx"
import {AuthApi} from "../api/AuthApi"

export class AuthStore {

    private registrationApi = new AuthApi()


    // @observable
    // private _login: String | null = null

    // @observable
    // private _isLogged: boolean = false


    // public async registration(phoneNumber: string, email: string, displayName: string, password: string, verificationMethod: number, termsAccepted: boolean) {
    //     try {
    //        
    //
    //         // const res: any = await this.registrationApi.registration()
    //     }
    // }


}
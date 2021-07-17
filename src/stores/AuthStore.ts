import {observable} from "mobx";
import {RegistrationApi} from "../api/AuthApi";

export class AuthStore {

    private registrationApi = new RegistrationApi()


    @observable
    private _login: String | null = null;

    @observable
    private _isLogged: boolean = false;


    public async registration(phoneNumber: string, email: string, displayName: string, password: string, verificationMethod: number, termsAccepted: boolean) {
        try {
            const data
            {
                phoneNumber, email, displayName, password, verificationMethod, termsAccepted
            }
            // const res: any = await this.registrationApi.registration()
        }
    }


}
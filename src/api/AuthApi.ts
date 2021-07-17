import axios, {AxiosInstance} from "axios";

export class RegistrationApi {
    private _endpoint = "/api/auth/register"
    private _baseUrl = "https://mango-messenger-app.herokuapp.com"
    protected headers: {
        "Content-type": "application/json"
    }

    protected apiConnector: AxiosInstance

    public constructor() {
        this.apiConnector = axios.create({headers: {}, baseURL: this._baseUrl})
    }

    public async registration(data: any) {
        try {
            const res: { data: any } = await this.apiConnector.post(
                this._endpoint, data, {headers: this.headers}
            )
            return Promise.resolve(res.data)

        } catch (error) {
            return Promise.reject(error)
        }
    }
}

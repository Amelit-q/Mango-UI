import axios, {AxiosInstance} from "axios"
import {ApiRoute} from "../consts/Routes"

export class UsersApi {

    protected headers: {
        "Content-Type": "application/json"
    } = {
        "Content-Type": "application/json",
    }

    protected apiConnector: AxiosInstance

    public constructor() {
        this.apiConnector = axios.create({headers: this.headers, baseURL: ApiRoute.apiDomain})
    }





    public async getUser(data: any) {
    }
}

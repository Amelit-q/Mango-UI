import {IGetUsersResponse} from "../types/Users/Responses/IGetUserResponse"
import {makeAutoObservable} from "mobx"
import {UsersApi} from "../api/UsersApi"

export class UsersStore {
    private usersApi = new UsersApi()




    public async getUsers(token: string) {
        try {
            const res: {data: IGetUsersResponse} = await this.usersApi.getUsers()
            return Promise.resolve()

        } catch (error) {

            return Promise.reject(error)
        }
    }

    public constructor() {
        makeAutoObservable(this)
    }


}

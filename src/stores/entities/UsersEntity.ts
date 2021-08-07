import {action, observable} from "mobx"
import {UsersApi} from "../../api/UsersApi"

export class UsersEntity {
    private usersApi = new UsersApi()

    @observable
    private _username: String | null = null

    @observable
    private _displayName: String | null = null

    @observable
    private _bio: String | null = null

    @observable
    private _image: String | null = null

    @observable
    private _message: String | null = null

    @observable
    private _success: boolean = false

    @action
    public setUsername = (username: string) => {
        this._username = username
    }

    @action
    public setDisplayName = (displayName: string) => {
        this._displayName = displayName
    }

    @action
    public setBio = (bio: string) => {
        this._bio = bio
    }

    @action
    public setImage = (image: string) => {
        this._image = image
    }

    @action
    public setMessage = (message: string) => {
        this._message = message
    }

    @action
    public setSuccess = (success: boolean) => {
        this._success = success
    }


}

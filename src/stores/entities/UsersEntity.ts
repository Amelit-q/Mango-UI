import {action, computed, observable} from "mobx"
import {IGetUsersResponse} from "../../types/Users/Responses/IGetUserResponse"

export class UsersEntity {
    @observable
    protected _username: String | null = null

    @observable
    protected _displayName: String | null = null

    @observable
    protected _bio: String | null = null

    @observable
    protected _image: String | null = null

    @observable
    protected _message: String | null = null

    @observable
    protected _success: boolean = false

    //TODO: separate user request from base message response, I mean separate user entity from that


    public constructor(users: IGetUsersResponse) {
        this.setUsername(users.user.username)
        this.setDisplayName(users.user.displayName)
        this.setBio(users.user.bio)
        this.setImage(users.user.image)
        this.setMessage(users.message)
    }

    @action
    private setUsername = (username: string) => {
        this._username = username
    }


    @action
    private setDisplayName = (displayName: string) => {
        this._displayName = displayName
    }

    @action
    private setBio = (bio: string) => {
        this._bio = bio
    }

    @action
    private setImage = (image: string) => {
        this._image = image
    }

    @action
    private setMessage = (message: string) => {
        this._message = message
    }

    @action
    private setSuccess = (success: boolean) => {
        this._success = success
    }

    @computed
    public get username() {
        return this._username
    }

    @computed
    public get displayName() {
        return this._displayName
    }

    @computed
    public get bio() {
        return this._bio
    }

    @computed
    public get image() {
        return this._image
    }

    @computed
    public get message() {
        return this._message
    }

    @computed
    public get success() {
        return this._success
    }


}

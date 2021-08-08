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


    public constructor(users: IGetUsersResponse) {
        this.setUsername(users.user.username)
        this.setDisplayName(users.user.displayName)
        this.setBio(users.user.bio)
        this.setImage(users.user.image)
    }

    @action
    private setUsername = (value: string) => {
        this._username = value
    }


    @action
    private setDisplayName = (value: string) => {
        this._displayName = value
    }

    @action
    private setBio = (value: string) => {
        this._bio = value
    }

    @action
    private setImage = (value: string) => {
        this._image = value
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


}

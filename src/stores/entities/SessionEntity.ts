import {action, computed, observable} from "mobx"

export interface IDefaultSession {
    userId: string | null
    refreshTokenId: string | null
    accessToken: string | null
}

export class DefaultSessionEntity {
    @observable
    protected _userId: string | null = null

    @observable
    protected _refreshTokenId: string | null = null

    @observable
    protected _accessToken: string | null = null


    @action
    private setAccessToken = (value: string | null) => {
        this._accessToken = value
    }

    @action
    private setRefreshToken = (value: string | null) => {
        this._refreshTokenId = value
    }

    @action
    private setUserId = (value: string | null) => {
        this._userId = value
    }


    public constructor(session: IDefaultSession) {
        this.setAccessToken(session.accessToken)
        this.setRefreshToken(session.refreshTokenId)
        this.setUserId(session.userId)
    }

    @computed
    public get accessToken() {
        return this._accessToken
    }

    @computed
    public get refreshToken() {
        return this._refreshTokenId
    }

    @computed
    public get userId() {
        return this._userId
    }


}

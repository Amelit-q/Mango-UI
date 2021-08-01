import {observable} from "mobx"

export interface DefaultSession {
    userId: string | null
    refreshToken: string | null
    accessToken: string | null
}

export class DefaultSessionEntity {
    @observable
    protected _userId: string | null = null

    @observable
    protected _refreshToken: string | null = null

    @observable
    protected _accessToken: string | null = null


}

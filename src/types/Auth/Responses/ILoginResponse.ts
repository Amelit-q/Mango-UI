import {IBaseResponse} from "../../IBaseResponse"

export interface ILoginResponse extends IBaseResponse {
    "message": "string",
    "success": true,
    "accessToken": "string",
    "refreshTokenId": "string",
    "userId": "string"
}

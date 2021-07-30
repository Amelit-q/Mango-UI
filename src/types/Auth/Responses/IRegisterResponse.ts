import {VerificationMethod} from "../Enums/VerificationMethod"

export interface IRegisterResponse {
    "phoneNumber": "string",
    "email": "string",
    "displayName": "string",
    "password": "string",
    "verificationMethod": VerificationMethod,
    "termsAccepted": boolean
}

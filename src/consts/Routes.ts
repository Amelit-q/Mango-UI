export class ApiRoute {
    static apiDomain = process.env.REACT_APP_API_BASEURL
}

export class AuthRoutes {
    static postRegister = "/api/auth/register"
    static postLogin = "/api/sessions"
    static postRefreshToken = "/api/auth/refresh-token"
    static getVerifyPhone = "/api/auth/verify-phone"
    static verifyEmail = "/api/auth/verify-email"
}

export class ChatsRoutes {
    static getChats = "/api/chats"
    static postGroup = "/api/chats/group"
    static postDirectChat = "/api/chats/direct-chat"
    static postJoinGroup = "/api/chats/group/join/{chatId}"
    static getChatsByName = "/api/chats/searches"
}

export class MessagesRoutes {
    static getChatMessages = "/api/messages/{chatId}"
    static postMessage = "/api/messages"
    static putMessage = "/api/messages"
    static deleteMessage = "/api/messages/{messageId}"
}

export class UserRoutes {
    static getUserById = "/api/users/{userId}"
    static getUsers = "/api/users"
}

export class ContactsRoutes {
    static addNewContact = "/api/contacts"
    static getContactList = "api/contacts"
}

export class PicnicAuthClient {
    baseEndpoint: string;
    apiKey: string;
    authorizationHeader: Header;

    constructor(baseEndpoint: string, apiKey: string) {
        this.baseEndpoint = baseEndpoint;
        this.apiKey = apiKey;

        this.authorizationHeader = new Header("Authorization", `Bearer ${apiKey}`);
    }

    createRequestUrl(endpointUrl: string): string {
        return this.baseEndpoint + endpointUrl;
    }
}

export class Header {
    key: string;
    value: string;

    constructor(key: string, value: string) {
        this.key = key;
        this.value = value;
    }
}

export class AddAuthUserArgument {
    externaId: string;
    userName: string;
    email: string;
}

export class AddCompanyArgument {
    email: string;
    userName: string;
    password: string;
    confirmPassword: string;
}

export class AuthUser {
    externalId: string;
    userName: string;
    email: string;
    id: string;
}

export class AuthUsersInCompany {
    authUsers: Array<AuthUser>;
}

export class CreatedAuthUser {
    externalId: string;
    userName: string;
    email: string;

    hotpQrCodeUri: string;
    totpQrCodeUri: string;

    secretInBase32: string;

    id: string;
}

export class IdentityResutl {
    succeeded: boolean;
    errors: Array<string>;
}

export class LoggedCompany {
    id: string;
    userName: string;
    email: string;
}

export class OneTimePassword {
    otpValue: string;
}

export class OtpValidationResult {
    isOtpValid: boolean;
}

export class TokenResponse {
    access_token: string;
    token_type: string;
    expires_in: number;
    userName: string;
    issued: string;
    expires: string;
}
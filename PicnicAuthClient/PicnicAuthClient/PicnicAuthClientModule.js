"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PicnicAuthClient = (function () {
    function PicnicAuthClient(baseEndpoint, apiKey) {
        this.baseEndpoint = baseEndpoint;
        this.apiKey = apiKey;
        this.authorizationHeader = new Header("Authorization", "Bearer " + apiKey);
    }
    PicnicAuthClient.prototype.createRequestUrl = function (endpointUrl) {
        return this.baseEndpoint + endpointUrl;
    };
    return PicnicAuthClient;
}());
exports.PicnicAuthClient = PicnicAuthClient;
var Header = (function () {
    function Header(key, value) {
        this.key = key;
        this.value = value;
    }
    return Header;
}());
exports.Header = Header;
var AddAuthUserArgument = (function () {
    function AddAuthUserArgument() {
    }
    return AddAuthUserArgument;
}());
exports.AddAuthUserArgument = AddAuthUserArgument;
var AddCompanyArgument = (function () {
    function AddCompanyArgument() {
    }
    return AddCompanyArgument;
}());
exports.AddCompanyArgument = AddCompanyArgument;
var AuthUser = (function () {
    function AuthUser() {
    }
    return AuthUser;
}());
exports.AuthUser = AuthUser;
var AuthUsersInCompany = (function () {
    function AuthUsersInCompany() {
    }
    return AuthUsersInCompany;
}());
exports.AuthUsersInCompany = AuthUsersInCompany;
var CreatedAuthUser = (function () {
    function CreatedAuthUser() {
    }
    return CreatedAuthUser;
}());
exports.CreatedAuthUser = CreatedAuthUser;
var IdentityResutl = (function () {
    function IdentityResutl() {
    }
    return IdentityResutl;
}());
exports.IdentityResutl = IdentityResutl;
var LoggedCompany = (function () {
    function LoggedCompany() {
    }
    return LoggedCompany;
}());
exports.LoggedCompany = LoggedCompany;
var OneTimePassword = (function () {
    function OneTimePassword() {
    }
    return OneTimePassword;
}());
exports.OneTimePassword = OneTimePassword;
var OtpValidationResult = (function () {
    function OtpValidationResult() {
    }
    return OtpValidationResult;
}());
exports.OtpValidationResult = OtpValidationResult;
var TokenResponse = (function () {
    function TokenResponse() {
    }
    return TokenResponse;
}());
exports.TokenResponse = TokenResponse;
//# sourceMappingURL=PicnicAuthClientModule.js.map
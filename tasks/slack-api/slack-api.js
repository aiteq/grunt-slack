"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
class SlackApi {
    constructor(webhookUrl) {
        this.webhookUrl = webhookUrl;
        this.client = axios_1.default.create({
            baseURL: webhookUrl,
            headers: { "Content-Type": "application/json" },
            responseType: "json",
            method: "post"
        });
    }
    sendRequest(message) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.client.request({});
                console.log("response data:", response.data);
                return response.data;
            }
            catch (error) {
                console.error(error.response.data);
                return Promise.reject(message);
            }
        });
    }
}
exports.SlackApi = SlackApi;

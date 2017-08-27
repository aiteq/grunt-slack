import { Message } from "./interfaces";
export declare class SlackApi {
    private webhookUrl;
    private client;
    constructor(webhookUrl: string);
    sendRequest(message: Message): Promise<any>;
}

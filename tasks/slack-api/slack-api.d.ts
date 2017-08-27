import { Message } from "./message";
export declare class SlackApi {
    private webhookUrl;
    private client;
    constructor(webhookUrl: string);
    protected sendRequest(message: Message): Promise<any>;
}

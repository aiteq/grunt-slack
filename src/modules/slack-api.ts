import { AxiosInstance, AxiosPromise, AxiosRequestConfig, AxiosResponse } from "axios";
import Axios from "axios";
import { Message } from "./interfaces";

/**
 * Provides access to Slack Webhook API.
 */
export class SlackApi {

    private client: AxiosInstance;

    /**
     * The constructor to be called by subclasses.
     *
     * @param {string} webhookUrl - a URL of Slack Channel Webhook
     */
    constructor(private webhookUrl: string) {

        // create instance of Axios with default configuration
        this.client = Axios.create({
            url: webhookUrl,
            headers: { "Content-Type": "application/json" },
            responseType: "json"
        });
    }

    /**
     * Sends request asynchronously.
     *
     * @param {Message} message - a message to be send
     * @returns {Promise<any>}
     */
    public async sendRequest(message: Message): Promise<any> {

        try {

            // perform the call
            const response: AxiosResponse = await this.client.request({ data: message, method: "post" });

            return response.data;

        } catch (error) {

            return Promise.reject(error);
        }
    }
}

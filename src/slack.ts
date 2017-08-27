import { SlackApi } from "./modules/slack-api";
import { Message, TaskOptions } from "./modules/interfaces";

const pluginFn: Function = (grunt: IGrunt) => {

    grunt.registerMultiTask("slack", async function () {

        const currentGruntTask: grunt.task.IMultiTask<Message> = this;
        // make async
        const done: grunt.task.AsyncResultCatcher = currentGruntTask.async();

        const options: TaskOptions = this.options({} as TaskOptions);

        options.webhook || done(new Error("'options.webhook' must be specified."));

        const api: SlackApi = new SlackApi(options.webhook);
        const message: Message = currentGruntTask.data;

        try {
            await api.sendRequest(message);
            done("The message has been sent to Slack channel.");
        } catch (error) {
            grunt.log.error("Slack: " + error);
            done(new Error("The message has not been sent to Slack channel."));
        }
    });
};

export = pluginFn;

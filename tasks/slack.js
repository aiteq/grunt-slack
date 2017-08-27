"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const slack_api_1 = require("./modules/slack-api");
const pluginFn = (grunt) => {
    grunt.registerMultiTask("slack", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const currentGruntTask = this;
            const done = currentGruntTask.async();
            const options = this.options({});
            options.webhook || done(new Error("'webhook' must be specified"));
            const api = new slack_api_1.SlackApi(options.webhook);
            const message = currentGruntTask.data;
            try {
                yield api.sendRequest(message);
                done("The message has been sent to Slack channel");
            }
            catch (error) {
                grunt.log.error("Slack: " + error);
                done(new Error("The message has not been sent to Slack channel"));
            }
        });
    });
};
module.exports = pluginFn;

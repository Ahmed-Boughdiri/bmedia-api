"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
var Podcast_1 = __importDefault(require("./Podcast"));
var News_1 = __importDefault(require("./News"));
exports.default = graphql_1.buildSchema("\n    type Query {\n        podcast: [Podcast!]!\n        news(category: String): [News!]!\n    }\n    " + Podcast_1.default + "\n    " + News_1.default + "\n");

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var getPodcasts_1 = __importDefault(require("./getPodcasts"));
var getNews_1 = __importDefault(require("./getNews"));
exports.default = {
    podcast: getPodcasts_1.default,
    news: getNews_1.default
};

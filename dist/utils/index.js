"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNews = exports.fetchNews = exports.fetchPodcasts = exports.getPodcasts = void 0;
var getPodcasts_1 = __importDefault(require("./getPodcasts"));
exports.getPodcasts = getPodcasts_1.default;
var fetchPodcasts_1 = __importDefault(require("./fetchPodcasts"));
exports.fetchPodcasts = fetchPodcasts_1.default;
var fetchNews_1 = __importDefault(require("./fetchNews"));
exports.fetchNews = fetchNews_1.default;
var getNews_1 = __importDefault(require("./getNews"));
exports.getNews = getNews_1.default;

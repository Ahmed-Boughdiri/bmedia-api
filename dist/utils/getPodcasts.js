"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(podcasts) {
    return podcasts.map(function (podcast) { return ({
        title: podcast.snippet.title,
        description: podcast.snippet.description,
        thumbnail: podcast.snippet.thumbnails.medium.url,
        releaseTime: podcast.snippet.publishTime,
        link: "https://www.youtube.com/embed/" + podcast.id.videoId
    }); });
}
exports.default = default_1;

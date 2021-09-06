"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(news) {
    var newsArray = news.filter(function (newsArticle) {
        return newsArticle.urlToImage !== null &&
            newsArticle.author !== null &&
            newsArticle.title !== null;
    });
    return newsArray.map(function (newsArticle) { return ({
        source: newsArticle.source.name,
        author: newsArticle.author,
        title: newsArticle.author,
        description: newsArticle.description,
        url: newsArticle.url,
        thumbnail: newsArticle.urlToImage,
        releaseDate: newsArticle.publishedAt
    }); });
}
exports.default = default_1;

import { FetchedNews } from "../@types/FetchedNews";
import { News } from "../@types/News";

export default function(news: FetchedNews[]):News[] {
    const newsArray = news.filter(newsArticle => 
        newsArticle.urlToImage !== null && 
        newsArticle.author !== null && 
        newsArticle.title !== null
    );
    return newsArray.map(newsArticle =>({
        source: newsArticle.source.name,
        author: newsArticle.author,
        title: newsArticle.author,
        description: newsArticle.description,
        url: newsArticle.url,
        thumbnail: newsArticle.urlToImage,
        releaseDate: newsArticle.publishedAt
    }));
}

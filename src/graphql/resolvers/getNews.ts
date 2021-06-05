import { fetchNews, getNews } from "../../utils";

export default async function(args: any) {
    const category = args.category ? args.category : "business";
    const news = await fetchNews(category);
    const result = getNews(news);
    return result;
}

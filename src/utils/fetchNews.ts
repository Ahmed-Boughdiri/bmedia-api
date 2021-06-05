import axios from "axios";
import { FetchedNews } from "../@types/FetchedNews";

const API_KEY = "eb5a620d53f84525bbff9268669c68a3";

export default async function(category: String):Promise<FetchedNews[]> {
    try {
        const req = await axios.get(
            `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${API_KEY}`
        );
        const res = await req.data;
        return res.articles;
    } catch(err) {
        throw err;
    }
}
